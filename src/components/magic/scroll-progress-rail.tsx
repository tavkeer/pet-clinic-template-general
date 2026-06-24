import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { navLinks } from "@/data/site";
import { cn } from "@/lib/utils";

const sections = navLinks.map((l) => ({ id: l.href.replace("#", ""), label: l.label }));

/**
 * Fixed vertical rail (desktop only) showing overall scroll progress as a fill
 * and the current section as an active dot. Dots are clickable; the active
 * section is tracked with an IntersectionObserver.
 */
export function ScrollProgressRail() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 26, mass: 0.4 });
  const [active, setActive] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-4 lg:flex">
      {/* Progress track */}
      <div className="relative h-28 w-px overflow-hidden rounded-full bg-border">
        <motion.div
          style={{ scaleY: progress }}
          className="absolute inset-x-0 top-0 h-full origin-top rounded-full bg-gradient-to-b from-primary to-chart-3"
        />
      </div>

      <ul className="flex flex-col items-center gap-3">
        {sections.map((s) => {
          const isActive = active === s.id;
          return (
            <li key={s.id} className="group relative flex items-center">
              <a
                href={`#${s.id}`}
                aria-label={`Go to ${s.label}`}
                aria-current={isActive ? "true" : undefined}
                className="grid place-items-center p-1"
              >
                <span
                  className={cn(
                    "block size-2 rounded-full transition-all duration-300",
                    isActive
                      ? "scale-150 bg-primary shadow-[0_0_0_4px_color-mix(in_oklch,var(--primary)_22%,transparent)]"
                      : "bg-muted-foreground/40 group-hover:bg-muted-foreground"
                  )}
                />
              </a>
              {/* Label on hover */}
              <span className="glass pointer-events-none absolute right-full mr-2 whitespace-nowrap rounded-full border border-border/70 px-2.5 py-1 text-xs font-medium text-foreground opacity-0 shadow-soft transition-opacity duration-200 group-hover:opacity-100">
                {s.label}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
