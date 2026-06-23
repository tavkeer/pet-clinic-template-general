import { useEffect, useRef } from "react";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

type P = { x: number; y: number; r: number; vx: number; vy: number; a: number };

/**
 * ReactBits-style Particles — a lightweight canvas field of slowly drifting dots
 * that gently react to the cursor. Colour is read from the `--primary` token, so
 * it stays on-theme in both light and dark mode. Respects reduced-motion.
 */
export function Particles({
  className,
  quantity = 80,
  maxRadius = 1.8,
}: {
  className?: string;
  quantity?: number;
  maxRadius?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const raw = getComputedStyle(document.documentElement).getPropertyValue("--primary").trim();
    const color = raw || "#14b8a6";

    let w = 0;
    let h = 0;
    let raf = 0;
    let particles: P[] = [];
    const mouse = { x: -9999, y: -9999 };

    const resize = () => {
      const parent = canvas.parentElement;
      w = parent ? parent.clientWidth : window.innerWidth;
      h = parent ? parent.clientHeight : window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const init = () => {
      particles = Array.from({ length: quantity }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * maxRadius + 0.5,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        a: Math.random() * 0.5 + 0.15,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        if (!reduce) {
          p.x += p.vx;
          p.y += p.vy;

          // soft cursor repulsion
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 90) {
            const f = (90 - dist) / 90;
            p.x += (dx / dist) * f * 1.4;
            p.y += (dy / dist) * f * 1.4;
          }

          if (p.x < 0) p.x = w;
          if (p.x > w) p.x = 0;
          if (p.y < 0) p.y = h;
          if (p.y > h) p.y = 0;
        }
        ctx.globalAlpha = p.a;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    resize();
    init();
    draw();

    const ro = new ResizeObserver(() => {
      resize();
      init();
    });
    if (canvas.parentElement) ro.observe(canvas.parentElement);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, [quantity, maxRadius, resolvedTheme]);

  return (
    <canvas ref={canvasRef} className={cn("pointer-events-none absolute inset-0 h-full w-full", className)} aria-hidden />
  );
}
