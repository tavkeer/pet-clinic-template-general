import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { Services } from "@/components/sections/services";
import { About } from "@/components/sections/about";
import { VelocityBanner } from "@/components/sections/velocity-banner";
import { WhyChoose } from "@/components/sections/why-choose";
import { Shop } from "@/components/sections/shop";
import { Appointment } from "@/components/sections/appointment";
import { Team } from "@/components/sections/team";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { ScrollToTop } from "@/components/scroll-to-top";

export default function App() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <About />
        <VelocityBanner />
        <WhyChoose />
        <Shop />
        <Appointment />
        <Team />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
