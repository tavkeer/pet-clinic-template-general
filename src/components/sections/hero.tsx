import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CalendarCheck, ChevronDown, PlayCircle, ShieldPlus, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SplitText } from "@/components/magic/split-text";
import { ShinyText } from "@/components/magic/shiny-text";
import { MorphingText } from "@/components/magic/morphing-text";
import { Tilt } from "@/components/magic/tilt";
import { clinic, testimonials, trustHighlights } from "@/data/site";
import { unsplash } from "@/lib/utils";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const floatCard =
  "glass absolute z-20 flex items-center gap-3 rounded-2xl border border-border/70 p-3 shadow-soft";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll-jack: drive the hero's "exit" as it scrolls out of frame.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Text column lifts up and fades faster than the visual (parallax depth).
  const textY = useTransform(scrollYProgress, [0, 0.7], [0, -120]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Visual scales up + drifts as it leaves, like a camera pushing past it.
  const visualY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const visualScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const visualOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.15]);
  const cueOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-32 sm:pt-36 lg:pt-40"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8">
        {/* Copy */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          style={{ y: textY, opacity: textOpacity }}
          className="flex flex-col items-start gap-6"
        >
          <motion.div variants={item}>
            <Badge variant="glass" className="py-2">
              <span className="flex -space-x-2">
                {testimonials.slice(0, 3).map((t) => (
                  <img
                    key={t.name}
                    src={t.avatar}
                    alt=""
                    className="size-6 rounded-full border-2 border-card object-cover"
                    loading="lazy"
                  />
                ))}
              </span>
              <ShinyText text="Loved by 12,000+ pet parents" className="font-semibold" speed={4} />
            </Badge>
          </motion.div>

          <SplitText
            as="h1"
            text="Compassionate care for your furry family"
            highlight={["furry", "family"]}
            highlightClassName="text-aurora"
            className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            delay={0.15}
            stagger={0.022}
          />

          <motion.p variants={item} className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            From routine check-ups to round-the-clock emergencies, {clinic.name} blends advanced
            medicine with a gentle, fear-free touch — so every visit feels like a walk in the park.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xl font-semibold text-foreground"
          >
            <span>Expert care for</span>
            <MorphingText
              words={["dogs 🐕", "cats 🐈", "rabbits 🐇", "birds 🦜", "every companion 🐾"]}
              className="text-primary"
            />
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap items-center gap-3">
            <Button href="#appointment" size="lg">
              Book an Appointment
              <ArrowRight className="transition-transform group-hover/btn:translate-x-1" />
            </Button>
            <Button href="#services" size="lg" variant="outline">
              <PlayCircle />
              Explore Services
            </Button>
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap gap-x-6 gap-y-3 pt-2">
            {trustHighlights.map((h) => (
              <div key={h.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                <h.icon className="size-4 text-primary" />
                {h.label}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          style={{ y: visualY, scale: visualScale, opacity: visualOpacity }}
          className="relative mx-auto w-full max-w-lg lg:max-w-none"
        >
          {/* glow */}
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-primary/20 via-accent/30 to-chart-3/20 blur-2xl" />

          <Tilt max={14} className="rounded-[2rem]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border shadow-elevated sm:aspect-square">
              <img
                src={unsplash("1583337130417-3346a1be7dee", 900, 900)}
                alt="Veterinarian gently examining a happy dog"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
            </div>
          </Tilt>

          {/* Secondary floating image */}
          <motion.img
            src={unsplash("1518717758536-85ae29035b6d", 240, 240)}
            alt="Content cat"
            className="absolute -bottom-6 -left-6 z-20 hidden size-28 animate-float-slow rounded-2xl border-4 border-card object-cover shadow-soft sm:block"
            loading="lazy"
          />

          {/* Rating card */}
          <div className={`${floatCard} -left-4 top-10 animate-float`}>
            <span className="grid size-10 place-items-center rounded-xl bg-accent text-accent-foreground">
              <Star className="size-5 fill-current" />
            </span>
            <div>
              <p className="text-sm font-bold text-foreground">4.9 / 5.0</p>
              <p className="text-xs text-muted-foreground">2,400+ reviews</p>
            </div>
          </div>

          {/* Appointment card */}
          <div className={`${floatCard} -right-4 bottom-16 animate-float-slow`}>
            <span className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary">
              <CalendarCheck className="size-5" />
            </span>
            <div>
              <p className="text-sm font-bold text-foreground">Next available</p>
              <p className="text-xs text-muted-foreground">Today · 2:30 PM</p>
            </div>
          </div>

          {/* Emergency badge */}
          <div className="glass absolute right-6 top-6 z-20 flex items-center gap-2 rounded-full border border-border/70 py-2 pl-2.5 pr-4 shadow-soft">
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-destructive" />
              <span className="relative inline-flex size-2.5 rounded-full bg-destructive" />
            </span>
            <span className="flex items-center gap-1 text-xs font-semibold text-foreground">
              <ShieldPlus className="size-3.5 text-destructive" /> 24/7 Emergency
            </span>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#services"
        aria-label="Scroll to explore"
        style={{ opacity: cueOpacity }}
        className="absolute inset-x-0 bottom-8 mx-auto flex w-fit flex-col items-center gap-1.5 text-xs font-medium uppercase tracking-widest text-muted-foreground"
      >
        Scroll
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="grid size-9 place-items-center rounded-full border border-border bg-card/60 text-foreground shadow-soft"
        >
          <ChevronDown className="size-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
