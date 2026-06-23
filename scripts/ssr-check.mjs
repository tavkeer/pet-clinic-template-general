import { build } from "esbuild";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const entry = `
  import React from "react";
  import { renderToString } from "react-dom/server";
  import { ThemeProvider } from "@/components/theme-provider";
  import App from "@/App";

  const html = renderToString(
    React.createElement(ThemeProvider, null, React.createElement(App))
  );

  const checks = [
    ["PawHaven brand", html.includes("PawHaven")],
    ["Hero headline", html.includes("furry family")],
    ["Services", html.includes("Wellness Exams")],
    ["Shop product", html.includes("Premium Grain-Free Dog Food")],
    ["Appointment form", html.includes("Confirm Appointment")],
    ["Team vet", html.includes("Dr. Olivia Reyes")],
    ["Testimonials", html.includes("Happy Tails")],
    ["Contact map", html.includes("openstreetmap")],
    ["Footer copyright", html.includes("All rights reserved")],
  ];

  let ok = true;
  for (const [name, pass] of checks) {
    console.log(pass ? "  ✓ " + name : "  ✗ MISSING: " + name);
    if (!pass) ok = false;
  }
  console.log("\\nRendered HTML length:", html.length);
  if (!ok || html.length < 5000) {
    console.error("SSR CHECK FAILED");
    process.exit(1);
  }
  console.log("SSR CHECK PASSED");
`;

await build({
  stdin: { contents: entry, resolveDir: root, loader: "tsx", sourcefile: "ssr-entry.tsx" },
  bundle: true,
  platform: "node",
  format: "cjs",
  jsx: "automatic",
  alias: { "@": path.join(root, "src") },
  outfile: path.join(root, "scripts", ".ssr-out.cjs"),
  logLevel: "error",
});

await import("./.ssr-out.cjs");
