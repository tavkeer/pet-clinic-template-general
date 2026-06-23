import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

/**
 * ReactBits-style ShinyText — a soft light streak sweeps continuously across
 * the text. Theme-aware (muted base, foreground highlight).
 */
export function ShinyText({
  text,
  className,
  speed = 3.5,
  disabled = false,
}: {
  text: string;
  className?: string;
  speed?: number;
  disabled?: boolean;
}) {
  return (
    <span
      className={cn("text-shimmer", !disabled && "animate-shimmer", className)}
      style={{ animationDuration: `${speed}s` } as CSSProperties}
    >
      {text}
    </span>
  );
}
