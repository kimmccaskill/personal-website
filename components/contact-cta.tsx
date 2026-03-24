import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

export function ContactCta() {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
        Have an idea to build?
      </h3>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
        I am open to select freelance, product, and full-time opportunities.
        Send a note and let's make something useful.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button asChild>
          <a href={`mailto:${siteConfig.email}`}>Email me</a>
        </Button>
        <Button asChild variant="secondary">
          <a href="#experience">View experience</a>
        </Button>
      </div>
    </div>
  );
}
