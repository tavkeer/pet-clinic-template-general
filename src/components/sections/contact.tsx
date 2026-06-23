import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Clock, Mail, MapPin, Navigation, Phone, Send } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/magic/reveal";
import { Field, Input, Textarea } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { clinic, socials } from "@/data/site";

const contactMethods = [
  { icon: Phone, label: "Call us", value: clinic.phone, href: clinic.phoneHref },
  { icon: Mail, label: "Email us", value: clinic.email, href: clinic.emailHref },
  { icon: MapPin, label: "Visit us", value: clinic.address, href: "#contact" },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get in Touch"
          title="We'd love to"
          highlight="hear from you"
          description="Questions, feedback or just want to say hi? Reach out and our team will get back to you within one business day."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-5">
          {/* Info column */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            {contactMethods.map((m, i) => (
              <Reveal key={m.label} delay={i * 0.06}>
                <a
                  href={m.href}
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:border-primary/30"
                >
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <m.icon className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      {m.label}
                    </p>
                    <p className="truncate font-semibold text-foreground">{m.value}</p>
                  </div>
                </a>
              </Reveal>
            ))}

            <Reveal delay={0.18}>
              <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                <div className="flex items-center gap-2 text-foreground">
                  <Clock className="size-5 text-primary" />
                  <p className="font-semibold">Opening hours</p>
                </div>
                <ul className="mt-3 flex flex-col gap-2">
                  {clinic.hours.map((h) => (
                    <li
                      key={h.day}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-muted-foreground">{h.day}</span>
                      <span className="font-medium text-foreground">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="flex items-center gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="grid size-11 place-items-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    <s.icon className="size-5" />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Form column */}
          <Reveal direction="left" className="lg:col-span-3">
            <div className="relative h-full rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Full name" htmlFor="c-name" required>
                    <Input id="c-name" name="name" placeholder="Jane Doe" required />
                  </Field>
                  <Field label="Email" htmlFor="c-email" required>
                    <Input id="c-email" name="email" type="email" placeholder="jane@email.com" required />
                  </Field>
                </div>
                <Field label="Subject" htmlFor="c-subject">
                  <Input id="c-subject" name="subject" placeholder="How can we help?" />
                </Field>
                <Field label="Message" htmlFor="c-message" required>
                  <Textarea
                    id="c-message"
                    name="message"
                    className="min-h-36"
                    placeholder="Write your message…"
                    required
                  />
                </Field>
                <Button type="submit" size="lg" className="w-full sm:w-auto sm:self-start">
                  <Send className="size-4" />
                  Send Message
                </Button>
              </form>

              <AnimatePresence>
                {sent && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="mt-4 flex items-center gap-2 rounded-xl bg-primary/10 px-4 py-3 text-sm font-medium text-primary"
                  >
                    <CheckCircle2 className="size-5" />
                    Message sent! We'll be in touch soon.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>

        {/* Map */}
        <Reveal delay={0.1} className="mt-6">
          <div className="relative overflow-hidden rounded-3xl border border-border shadow-soft">
            <iframe
              title="PawHaven location map"
              className="h-[320px] w-full grayscale-[0.15] dark:opacity-90 dark:grayscale dark:invert-[0.9]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-117.42%2C33.94%2C-117.33%2C34.00&layer=mapnik&marker=33.9806%2C-117.3755"
            />
            <a
              href="https://www.openstreetmap.org/?mlat=33.9806&mlon=-117.3755#map=14/33.9806/-117.3755"
              target="_blank"
              rel="noreferrer"
              className="glass absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-border/60 px-4 py-2 text-sm font-semibold text-foreground shadow-soft transition-colors hover:text-primary"
            >
              <Navigation className="size-4 text-primary" />
              Get directions
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
