import { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from "framer-motion";
import { cn } from "@/lib/utils";

function VelocityTrack({
  items,
  baseVelocity = 10,
  className,
}: {
  items: { label: string; separator?: string }[];
  baseVelocity?: number;
  className?: string;
}) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  // wrap over exactly one copy's share (we render 4 copies → 25% each)
  const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`);

  const dirFactor = useRef(1);

  useAnimationFrame((_t, delta) => {
    let move = dirFactor.current * baseVelocity * (delta / 1000);
    const vf = velocityFactor.get();
    if (vf < 0) dirFactor.current = -1;
    else if (vf > 0) dirFactor.current = 1;
    move += dirFactor.current * Math.abs(move) * Math.abs(vf);
    baseX.set(baseX.get() + move);
  });

  const content = (
    <>
      {items.map(({ label, separator = "🐾" }, i) => (
        <span key={i} className="flex shrink-0 items-center gap-5">
          <span className="font-display text-lg font-semibold tracking-wide text-foreground/80 sm:text-xl">
            {label}
          </span>
          <span className="text-primary opacity-60 select-none">
            {separator}
          </span>
        </span>
      ))}
    </>
  );

  return (
    <div className={cn("overflow-hidden whitespace-nowrap", className)}>
      <motion.div className="inline-flex gap-5" style={{ x }}>
        {/* Render 4 copies so the wrap is always seamless */}
        {content}
        {content}
        {content}
        {content}
      </motion.div>
    </div>
  );
}

export function VelocityScroll({
  items,
  className,
}: {
  items: { label: string; separator?: string }[];
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-4 py-1", className)}>
      <VelocityTrack items={items} baseVelocity={10} />
      <VelocityTrack items={items} baseVelocity={-10} />
    </div>
  );
}
