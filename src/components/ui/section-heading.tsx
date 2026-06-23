import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/magic/reveal";
import { SplitText } from "@/components/magic/split-text";
import { ShinyText } from "@/components/magic/shiny-text";

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex max-w-2xl flex-col gap-4",
        align === "center" ? "mx-auto items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <Badge variant="soft">
            <ShinyText text={eyebrow} className="font-semibold" />
          </Badge>
        </Reveal>
      )}
      <SplitText
        as="h2"
        text={`${title}${highlight ? ` ${highlight}` : ""}`}
        highlight={highlight ? highlight.split(" ") : []}
        highlightClassName="text-gradient"
        className="font-display text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-[2.7rem]"
        stagger={0.014}
        duration={0.5}
      />
      {description && (
        <Reveal delay={0.1}>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
