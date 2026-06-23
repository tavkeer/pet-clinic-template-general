import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/magic/spotlight-card";
import { Reveal } from "@/components/magic/reveal";
import { Badge } from "@/components/ui/badge";
import { services } from "@/data/site";

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title="Everything your pet needs,"
          highlight="under one roof"
          description="A full spectrum of veterinary care delivered by specialists who treat your companion like one of their own."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 4) * 0.08}>
              <SpotlightCard className="h-full">
                <div className="flex h-full flex-col gap-4 p-6">
                  <div className="flex items-start justify-between">
                    <span className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      <service.icon className="size-6" />
                    </span>
                    {service.badge && <Badge variant="accent">{service.badge}</Badge>}
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                  <a
                    href="#appointment"
                    className="mt-auto inline-flex items-center gap-1 pt-2 text-sm font-semibold text-primary opacity-0 transition-all duration-300 group-hover:opacity-100"
                  >
                    Learn more <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
