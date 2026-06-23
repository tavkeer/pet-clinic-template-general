import { ArrowRight, PawPrint, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/magic/reveal";
import { clinic } from "@/data/site";

export function CTA() {
  return (
    <section className="relative px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-gradient-to-br from-primary via-chart-3 to-primary px-6 py-14 text-center text-primary-foreground shadow-elevated sm:px-12 sm:py-20">
            {/* decorative blobs */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-10 -top-10 size-56 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -bottom-16 right-0 size-72 rounded-full bg-accent/30 blur-3xl" />
              <PawPrint className="absolute left-8 top-8 size-16 rotate-12 text-white/10" />
              <PawPrint className="absolute bottom-8 right-10 size-24 -rotate-12 text-white/10" />
            </div>

            <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
              <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                Ready to give your pet the care they deserve?
              </h2>
              <p className="max-w-xl text-base text-primary-foreground/85 sm:text-lg">
                Join thousands of happy pet parents at {clinic.name}. Book online in under a minute —
                first-visit wellness checks are on us.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row">
                <Button href="#appointment" variant="glass" size="lg" className="text-white">
                  Book an Appointment
                  <ArrowRight className="transition-transform group-hover/btn:translate-x-1" />
                </Button>
                <a
                  href={clinic.phoneHref}
                  className="flex items-center gap-2 text-sm font-semibold text-primary-foreground"
                >
                  <Phone className="size-4" />
                  {clinic.phone}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
