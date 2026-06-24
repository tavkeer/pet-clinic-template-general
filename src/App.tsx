import { Navbar } from "@/components/sections/navbar";
import { AtmosphereCanvas } from "@/components/sections/atmosphere-canvas";
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
import { ScrollProgressRail } from "@/components/magic/scroll-progress-rail";

export default function App() {
  return (
    <div className="relative isolate min-h-screen bg-background text-foreground">
      {/* Fixed transforming backdrop shared by every section */}
      <AtmosphereCanvas />

      <Navbar />
      <ScrollProgressRail />

      {/* Content layer — sits above the fixed AtmosphereCanvas */}
      <div className="relative z-10">
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
      </div>

      <ScrollToTop />
    </div>
  );
}
