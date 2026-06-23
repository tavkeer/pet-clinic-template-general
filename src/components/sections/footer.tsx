import { ArrowRight, Mail, MapPin, PawPrint, Phone } from "lucide-react";
import { clinic, navLinks, services, socials } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-10 border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand + newsletter */}
          <div className="flex flex-col gap-5">
            <a href="#home" className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary to-chart-3 text-primary-foreground shadow-lg shadow-primary/30">
                <PawPrint className="size-5" />
              </span>
              <span className="font-display text-lg font-bold tracking-tight text-foreground">
                {clinic.name}
              </span>
            </a>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              {clinic.tagline} Modern medicine, fear-free handling and a whole lot of love — all
              under one roof.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex max-w-sm items-center gap-2 rounded-full border border-border bg-card p-1.5 shadow-soft"
            >
              <input
                type="email"
                required
                placeholder="Get pet care tips in your inbox"
                className="h-9 flex-1 bg-transparent px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="grid size-9 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
              >
                <ArrowRight className="size-4" />
              </button>
            </form>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-foreground">
              Explore
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-foreground">
              Services
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {services.slice(0, 6).map((s) => (
                <li key={s.title}>
                  <a
                    href="#services"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-foreground">
              Contact
            </h4>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                {clinic.address}
              </li>
              <li>
                <a href={clinic.phoneHref} className="flex items-center gap-3 hover:text-primary">
                  <Phone className="size-4 shrink-0 text-primary" />
                  {clinic.phone}
                </a>
              </li>
              <li>
                <a href={clinic.emailHref} className="flex items-center gap-3 hover:text-primary">
                  <Mail className="size-4 shrink-0 text-primary" />
                  {clinic.email}
                </a>
              </li>
            </ul>
            <div className="mt-5 flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid size-9 place-items-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <s.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {year} {clinic.fullName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="transition-colors hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
