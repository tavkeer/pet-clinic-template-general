import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { Particles } from "@/components/magic/particles";
import SideRays from "@/components/magic/side-rays";
import { useTheme } from "@/components/theme-provider";

/**
 * Fixed, full-viewport presentation stage that lives behind every section and
 * transforms continuously with whole-page scroll progress. This is what gives
 * the site its cohesive, "living" 3D backdrop: soft aurora orbs drift, scale
 * and rotate at different depths (parallax), light rays sweep, and a particle
 * field floats on top — all driven by one shared scroll value.
 */
export function AtmosphereCanvas() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll();
  const p = useSpring(scrollYProgress, { stiffness: 60, damping: 24, mass: 0.4 });

  // Three orbs at different depths — each maps the single scroll value to its
  // own translate / scale / rotation curve so they separate as you scroll.
  const orbAY = useTransform(p, [0, 1], ["-12%", "55%"]);
  const orbAX = useTransform(p, [0, 1], ["-8%", "10%"]);
  const orbAScale = useTransform(p, [0, 0.5, 1], [1, 1.35, 1.1]);

  const orbBY = useTransform(p, [0, 1], ["30%", "-40%"]);
  const orbBX = useTransform(p, [0, 1], ["12%", "-14%"]);
  const orbBScale = useTransform(p, [0, 0.5, 1], [1.1, 0.8, 1.3]);

  const orbCY = useTransform(p, [0, 1], ["10%", "70%"]);
  const orbCRotate = useTransform(p, [0, 1], [0, 120]);

  // Subtle global drift + the rays gently fading as you descend.
  const raysOpacity = useTransform(p, [0, 0.35, 1], [isDark ? 1 : 0.78, 0.5, 0.18]);
  const gridY = useTransform(p, [0, 1], ["0%", "16%"]);

  if (reduce) {
    return (
      <div className="fixed inset-0 z-0 overflow-hidden" aria-hidden>
        <div className="absolute inset-0 bg-grid opacity-30 mask-fade-b" />
        <div className="absolute -left-24 top-0 size-[42rem] rounded-full bg-primary/15 blur-[120px]" />
        <div className="absolute -right-32 bottom-0 size-[40rem] rounded-full bg-chart-3/15 blur-[120px]" />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-0 overflow-hidden" aria-hidden>
      {/* Dotted grid that parallaxes slowly underneath everything */}
      <motion.div style={{ y: gridY }} className="absolute inset-0 bg-grid opacity-30 mask-fade-b" />

      {/* Aurora light rays sweeping from the top-left */}
      <motion.div style={{ opacity: raysOpacity }} className="absolute inset-0">
        <SideRays
          origin="top-left"
          rayColor1="#16c4ac"
          rayColor2="#ffc97a"
          speed={2.2}
          intensity={isDark ? 3.4 : 2.5}
          spread={2.2}
          tilt={0}
          saturation={1.4}
          blend={0.5}
          falloff={1.1}
          opacity={1}
        />
      </motion.div>

      {/* Depth orbs — soft, blurred, theme-tinted */}
      <motion.div
        style={{ y: orbAY, x: orbAX, scale: orbAScale }}
        className="absolute -left-32 top-0 size-[44rem] rounded-full bg-primary/20 blur-[130px]"
      />
      <motion.div
        style={{ y: orbBY, x: orbBX, scale: orbBScale }}
        className="absolute right-[-12rem] top-[20%] size-[40rem] rounded-full bg-chart-3/20 blur-[130px]"
      />
      <motion.div
        style={{ y: orbCY, rotate: orbCRotate }}
        className="absolute left-[35%] top-[40%] size-[34rem] rounded-full bg-chart-5/15 blur-[140px]"
      />

      {/* Floating particle field on top of the orbs */}
      <Particles className="opacity-60" quantity={isDark ? 80 : 60} />

      {/* Gentle vignette to keep foreground text legible */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,color-mix(in_oklch,var(--background)_70%,transparent))]" />
    </div>
  );
}
