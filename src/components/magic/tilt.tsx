import { useRef, type ReactNode, type PointerEvent } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

type TiltProps = {
  children: ReactNode;
  className?: string;
  /** Max rotation in degrees on each axis. */
  max?: number;
  /** Lift toward the viewer on hover. */
  scale?: number;
  /** Show a moving specular glare that tracks the pointer. */
  glare?: boolean;
};

const spring = { stiffness: 260, damping: 22, mass: 0.5 };

/**
 * 3D pointer-tracked tilt. Wrap any card / image to give it physical depth —
 * it leans toward the cursor with perspective, lifts slightly, and catches a
 * soft glare. Disabled under `prefers-reduced-motion`.
 */
export function Tilt({
  children,
  className,
  max = 12,
  scale = 1.025,
  glare = true,
}: TiltProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  // Pointer position within the element, normalised to [-0.5, 0.5].
  const px = useMotionValue(0);
  const py = useMotionValue(0);

  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [max, -max]), spring);
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-max, max]), spring);

  // Glare follows the pointer across the surface.
  const glareX = useTransform(px, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(py, [-0.5, 0.5], ["0%", "100%"]);
  const glareOpacity = useSpring(useMotionValue(0), { stiffness: 200, damping: 30 });
  const glareBg = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, color-mix(in oklch, var(--card-foreground) 22%, transparent), transparent 55%)`;

  if (reduce) return <div className={cn(className)}>{children}</div>;

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  };

  const onEnter = () => glareOpacity.set(glare ? 1 : 0);
  const onLeave = () => {
    px.set(0);
    py.set(0);
    glareOpacity.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      onPointerEnter={onEnter}
      onPointerLeave={onLeave}
      whileHover={{ scale }}
      transition={spring}
      style={{ rotateX, rotateY, transformPerspective: 900, transformStyle: "preserve-3d" }}
      className={cn("relative will-change-transform", className)}
    >
      {children}
      {glare && (
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] mix-blend-soft-light"
          style={{ background: glareBg, opacity: glareOpacity }}
        />
      )}
    </motion.div>
  );
}
