import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

export function ContactCta() {
  return (
    <div className="mx-auto max-w-3xl py-8 text-center sm:py-12">
      <p className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
        <span aria-hidden className="h-px w-6 bg-primary/60" />
        Contact
        <span aria-hidden className="h-px w-6 bg-primary/60" />
      </p>
      <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
        Let&apos;s build something{" "}
        <em className="italic text-primary">together</em>.
      </h2>
      <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
        I am open to select freelance, product, and full-time opportunities. If
        you&apos;re shipping a product and want a thoughtful engineering
        partner, I&apos;d love to hear about it.
      </p>
      <a
        href={`mailto:${siteConfig.email}`}
        className="mt-8 inline-block font-display text-xl italic underline decoration-primary/40 decoration-2 underline-offset-8 transition-colors hover:text-primary hover:decoration-primary sm:text-2xl"
      >
        {siteConfig.email}
      </a>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <Button asChild size="lg">
          <a href={`mailto:${siteConfig.email}`}>Email me</a>
        </Button>
        <Button asChild variant="secondary" size="lg">
          <a href="#experience">View experience</a>
        </Button>
      </div>
    </div>
  );
}
