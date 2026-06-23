import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
  variant = "soft",
}: {
  children: ReactNode;
  className?: string;
  variant?: "soft" | "outline" | "accent" | "glass";
}) {
  const variants = {
    soft: "bg-primary/10 text-primary",
    accent: "bg-accent text-accent-foreground",
    outline: "border border-border text-muted-foreground",
    glass: "glass border border-border/60 text-foreground",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
