import { VelocityScroll } from "@/components/magic/velocity-scroll";

const items = [
  { label: "Fear-Free Certified" },
  { label: "15+ Years of Care" },
  { label: "24 / 7 Emergency" },
  { label: "Advanced Diagnostics" },
  { label: "All Species Welcome" },
  { label: "Same-Day Appointments" },
  { label: "Board-Certified Vets" },
  { label: "Gentle Handling" },
];

export function VelocityBanner() {
  return (
    <div className="relative overflow-hidden border-y border-border/60 bg-secondary/30 py-7 backdrop-blur-sm">
      {/* Subtle left/right fade so the scroll vanishes at edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background/80 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background/80 to-transparent" />

      <VelocityScroll items={items} />
    </div>
  );
}
