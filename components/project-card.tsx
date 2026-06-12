import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type ProjectCardProps = {
  index: number;
  name: string;
  href: string;
  period: string;
  role: string;
  stack: readonly string[];
  summary: string;
  note?: string;
  highlights: readonly string[];
};

export function ProjectCard({
  index,
  name,
  href,
  period,
  role,
  stack,
  summary,
  note,
  highlights,
}: ProjectCardProps) {
  return (
    <article className="grid gap-4 border-t border-border py-10 md:grid-cols-[88px_1fr] md:gap-8 md:py-12">
      <span
        aria-hidden
        className="font-display text-4xl font-semibold italic text-primary/30 md:text-5xl"
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="max-w-2xl">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-baseline gap-1.5 transition-colors hover:text-primary"
            >
              {name}
              <ArrowUpRight
                size={20}
                className="self-center text-muted-foreground transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
              />
            </a>
          </h3>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          {role} <span aria-hidden>•</span> {period}
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {summary}
        </p>
        {note ? (
          <p className="mt-4 border-l-2 border-primary/40 pl-4 text-sm italic leading-relaxed text-muted-foreground">
            {note}
          </p>
        ) : null}
        <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
          {highlights.map((item) => (
            <li key={item} className="flex gap-3">
              <span aria-hidden className="mt-2.5 h-px w-4 shrink-0 bg-primary/60" />
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap gap-2">
          {stack.map((item) => (
            <Badge key={item} variant="outline">
              {item}
            </Badge>
          ))}
        </div>
      </div>
    </article>
  );
}
