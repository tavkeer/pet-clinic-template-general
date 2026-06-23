import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Seamless horizontal marquee. Renders the children twice and translates each
 * full set by "-100% - gap" so the loop is perfectly continuous.
 */
export function Marquee({
  children,
  className,
  reverse = false,
  pauseOnHover = true,
  duration = "38s",
}: {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  duration?: string;
}) {
  return (
    <div
      className={cn("group flex w-full gap-5 overflow-hidden mask-fade-edges", className)}
      style={
        {
          "--marquee-duration": duration,
          "--marquee-gap": "1.25rem",
        } as CSSProperties
      }
    >
      {[0, 1].map((i) => (
        <div
          key={i}
          aria-hidden={i === 1}
          className={cn(
            "flex shrink-0 items-stretch gap-5",
            reverse ? "animate-marquee-reverse" : "animate-marquee",
            pauseOnHover && "group-hover:[animation-play-state:paused]"
          )}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
