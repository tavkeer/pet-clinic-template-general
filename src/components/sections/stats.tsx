import { Reveal } from "@/components/magic/reveal";
import { CountUp } from "@/components/magic/count-up";
import { Parallax } from "@/components/magic/parallax";
import { stats } from "@/data/site";

export function Stats() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8">
      <Parallax speed={0.14} className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary to-chart-3 p-8 text-primary-foreground shadow-elevated sm:p-12">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
          <div className="relative grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.08} className="text-center sm:text-left">
                <div className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
                  <CountUp
                    to={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
                </div>
                <p className="mt-2 text-sm font-medium text-primary-foreground/80">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Parallax>
    </section>
  );
}
