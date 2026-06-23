import { useEffect, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * ReactBits-style RotatingText — cycles through a list of words, animating each
 * character up and out with a staggered slide.
 */
const containerVariants: Variants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.03 } },
  exit: { transition: { staggerChildren: 0.02, staggerDirection: -1 } },
};

const charVariants: Variants = {
  initial: { y: "110%", opacity: 0 },
  animate: { y: "0%", opacity: 1, transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] } },
  exit: { y: "-110%", opacity: 0, transition: { duration: 0.24, ease: "easeIn" } },
};

export function RotatingText({
  words,
  interval = 2200,
  className,
}: {
  words: string[];
  interval?: number;
  className?: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (words.length <= 1) return;
    const id = setInterval(() => setIndex((p) => (p + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  const word = words[index];

  return (
    <span className={cn("relative inline-flex overflow-hidden py-1 align-bottom", className)}>
      <AnimatePresence mode="wait">
        <motion.span
          key={word}
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="inline-flex whitespace-nowrap"
        >
          {Array.from(word).map((char, ci) =>
            char === " " ? (
              <span key={ci} className="inline-block w-[0.32em]" aria-hidden />
            ) : (
              <motion.span key={ci} variants={charVariants} className="inline-block">
                {char}
              </motion.span>
            )
          )}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
