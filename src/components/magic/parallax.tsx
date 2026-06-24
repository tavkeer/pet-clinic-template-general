import { useRef, type ReactNode } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

type ParallaxProps = {
  children: ReactNode;
  className?: string;
  /**
   * Depth strength. Positive = element drifts slower than scroll (recedes,
   * "further away"); negative = drifts faster (rushes toward the viewer).
   * ~0.15 is subtle, ~0.5 is pronounced.
   */
  speed?: number;
  axis?: "x" | "y";
  /** Fade in/out toward the scroll edges for an added sense of depth. */
  fade?: boolean;
  /** Gently scale up as the element passes through the viewport. */
  zoom?: boolean;
};

/**
 * Scroll-linked parallax wrapper. Translates (and optionally fades / zooms) its
 * children relative to scroll position while they're in view, building the
 * layered depth that makes the page feel three-dimensional.
 */
export function Parallax({
  children,
  className,
  speed = 0.25,
  axis = "y",
  fade = false,
  zoom = false,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const distance = 140 * speed;
  const rawShift = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  const shift = useSpring(rawShift, { stiffness: 90, damping: 26, mass: 0.35 });

  const rawOpacity = useTransform(
    scrollYProgress,
    [0, 0.18, 0.82, 1],
    [0, 1, 1, 0]
  );
  const opacity = useSpring(rawOpacity, { stiffness: 120, damping: 30 });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.96]);

  if (reduce) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={cn("will-change-transform", className)}
      style={{
        ...(axis === "y" ? { y: shift } : { x: shift }),
        ...(fade ? { opacity } : {}),
        ...(zoom ? { scale } : {}),
      }}
    >
      {children}
    </motion.div>
  );
}
