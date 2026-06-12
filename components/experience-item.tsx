type ExperienceItemProps = {
  company: string;
  role: string;
  period: string;
  description: string;
};

export function ExperienceItem({
  company,
  role,
  period,
  description,
}: ExperienceItemProps) {
  return (
    <article className="grid gap-2 border-t border-border py-8 md:grid-cols-[200px_1fr] md:gap-8">
      <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground md:pt-1.5">
        {period}
      </p>
      <div className="max-w-2xl">
        <h3 className="text-xl font-semibold tracking-tight">
          {role}{" "}
          <span className="font-display italic text-primary">@ {company}</span>
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {description}
        </p>
      </div>
    </article>
  );
}
