import { Quote, Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Marquee } from "@/components/magic/marquee";
import { testimonials, type Testimonial } from "@/data/site";

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="flex w-[340px] shrink-0 flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft sm:w-[380px]">
      <div className="flex items-center justify-between">
        <div className="flex gap-0.5">
          {Array.from({ length: t.rating }).map((_, i) => (
            <Star key={i} className="size-4 fill-accent-foreground text-accent-foreground" />
          ))}
        </div>
        <Quote className="size-7 text-primary/20" />
      </div>
      <blockquote className="text-sm leading-relaxed text-foreground">"{t.quote}"</blockquote>
      <figcaption className="mt-auto flex items-center gap-3 border-t border-border pt-4">
        <img src={t.avatar} alt={t.name} className="size-11 rounded-full object-cover" loading="lazy" />
        <div>
          <p className="text-sm font-semibold text-foreground">{t.name}</p>
          <p className="text-xs text-muted-foreground">{t.pet}</p>
        </div>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  const firstRow = testimonials.slice(0, 3);
  const secondRow = testimonials.slice(3);

  return (
    <section id="testimonials" className="relative overflow-hidden py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Happy Tails"
          title="Pet parents can't stop"
          highlight="raving about us"
          description="Real stories from the families who trust us with their best friends."
        />
      </div>

      <div className="mt-16 flex flex-col gap-5">
        <Marquee duration="44s">
          {firstRow.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </Marquee>
        <Marquee duration="52s" reverse>
          {secondRow.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
