import { cn } from "@/lib/utils";

/**
 * Soft animated "aurora" blobs used behind hero / CTA sections.
 * Purely decorative and driven entirely by theme tokens.
 */
export function AuroraBackground({
  className,
  withGrid = true,
}: {
  className?: string;
  withGrid?: boolean;
}) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className
      )}
      aria-hidden
    >
      {withGrid && <div className="absolute inset-0 bg-grid opacity-60 mask-fade-b" />}

      <div className="absolute -left-24 top-[-10%] h-[34rem] w-[34rem] animate-aurora rounded-full bg-primary/25 blur-[100px]" />
      <div
        className="absolute right-[-10%] top-[10%] h-[28rem] w-[28rem] animate-aurora rounded-full bg-chart-3/20 blur-[110px]"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-[-15%] left-[30%] h-[30rem] w-[30rem] animate-aurora rounded-full bg-accent/40 blur-[120px]"
        style={{ animationDelay: "4s" }}
      />
    </div>
  );
}
