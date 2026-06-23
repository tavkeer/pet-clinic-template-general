import { Instagram, Linkedin, Twitter } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/magic/reveal";
import { team } from "@/data/site";

export function Team() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Team"
          title="Meet the vets behind"
          highlight="every happy tail"
          description="Board-certified, endlessly caring, and genuinely excited to meet your companion."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={(i % 4) * 0.08}>
              <div className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/10 to-transparent opacity-70" />

                  {/* Social row */}
                  <div className="absolute inset-x-0 bottom-0 flex translate-y-4 items-center justify-center gap-2 pb-20 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {[Instagram, Twitter, Linkedin].map((Icon, idx) => (
                      <a
                        key={idx}
                        href="#"
                        aria-label="social link"
                        className="glass grid size-9 place-items-center rounded-full border border-white/20 text-white transition-colors hover:bg-primary hover:text-primary-foreground"
                      >
                        <Icon className="size-4" />
                      </a>
                    ))}
                  </div>

                  {/* Name plate */}
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <p className="text-xs font-medium uppercase tracking-wide text-white/80">
                      {member.specialty}
                    </p>
                    <h3 className="font-display text-lg font-bold">{member.name}</h3>
                    <p className="text-sm text-white/85">{member.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
