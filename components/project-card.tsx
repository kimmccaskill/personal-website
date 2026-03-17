import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ProjectCardProps = {
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
    <Card className="h-full">
      <CardHeader className="space-y-3">
        <div className="flex items-start justify-between gap-3">
          <CardTitle className="text-xl">{name}</CardTitle>
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label={`Open ${name}`}
          >
            <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <span>{role}</span>
          <span aria-hidden>•</span>
          <span>{period}</span>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">{summary}</p>
        {note ? (
          <p className="rounded-lg border border-border bg-muted/50 p-3 text-sm text-muted-foreground">
            {note}
          </p>
        ) : null}
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {stack.map((item) => (
            <Badge key={item} variant="outline">
              {item}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
