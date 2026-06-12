import Image from "next/image";
import { ContactCta } from "@/components/contact-cta";
import { ExperienceItem } from "@/components/experience-item";
import { ProjectCard } from "@/components/project-card";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { SectionHeading } from "@/components/section-heading";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { experiences, projects, siteConfig, skills } from "@/data/site";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <section id="home" className="section pt-16 sm:pt-24">
          <RevealOnScroll>
            <div className="grid items-center gap-12 md:grid-cols-[1.2fr_0.8fr] md:gap-16">
              <div>
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  <span aria-hidden className="h-px w-6 bg-primary/60" />
                  {siteConfig.location}
                </p>
                <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-7xl">
                  {siteConfig.name}
                </h1>
                <p className="mt-3 font-display text-xl font-medium italic text-primary sm:text-2xl">
                  {siteConfig.role}
                </p>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {siteConfig.intro}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <Badge variant="outline">6 years in software</Badge>
                  <Badge variant="outline">Enterprise and government scale</Badge>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild size="lg">
                    <a href="#experience">See experience</a>
                  </Button>
                  <Button asChild variant="secondary" size="lg">
                    <a href={`mailto:${siteConfig.email}`}>Say hello</a>
                  </Button>
                </div>
                <div className="mt-8 flex flex-wrap gap-4 text-sm text-muted-foreground">
                  {siteConfig.socialLinks.map((social) => (
                    <a
                      key={social.label}
                      className="underline-offset-4 transition-colors hover:text-primary hover:underline"
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
              <div className="mx-auto w-full max-w-[340px]">
                <div className="rotate-2 border border-border/80 bg-card p-3 pb-4 shadow-md transition-transform duration-300 hover:rotate-0 motion-reduce:transform-none">
                  <Image
                    src={siteConfig.headshotSrc}
                    alt={siteConfig.headshotAlt}
                    width={640}
                    height={640}
                    priority
                    className="aspect-square w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </section>

        <section id="about" className="section">
          <RevealOnScroll>
            <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
              <div>
                <SectionHeading
                  eyebrow="About"
                  title="Thoughtful front-end craft with an educator's empathy."
                  description={siteConfig.about}
                />
                <div className="mb-6 flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <Button asChild variant="secondary">
                  <a href={siteConfig.resumeHref} download>
                    Download resume
                  </a>
                </Button>
              </div>
              <div className="mx-auto w-full max-w-md space-y-8 md:pt-10">
                <figure className="-rotate-2 border border-border/80 bg-card p-3 shadow-md transition-transform duration-300 hover:rotate-0 motion-reduce:transform-none">
                  <Image
                    src={siteConfig.teachingPhotoSrc}
                    alt={siteConfig.teachingPhotoAlt}
                    width={900}
                    height={600}
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <figcaption className="px-1 pb-1 pt-3 font-display text-sm italic text-muted-foreground">
                    My teaching background strengthened how I communicate and
                    support teammates.
                  </figcaption>
                </figure>
                <figure className="rotate-2 border border-border/80 bg-card p-3 shadow-md transition-transform duration-300 hover:rotate-0 motion-reduce:transform-none md:ml-10">
                  <Image
                    src={siteConfig.japanPhotoSrc}
                    alt={siteConfig.japanPhotoAlt}
                    width={900}
                    height={600}
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <figcaption className="px-1 pb-1 pt-3 font-display text-sm italic text-muted-foreground">
                    Travel keeps me curious and grounded in collaboration.
                  </figcaption>
                </figure>
              </div>
            </div>
          </RevealOnScroll>
        </section>

        <section id="projects" className="section">
          <SectionHeading
            eyebrow="Projects"
            title="Selected project contributions"
            description="A snapshot of projects I contributed to, with clear scope on what I built."
          />
          <div className="border-b border-border">
            {projects.map((project, index) => (
              <RevealOnScroll key={project.name} delayMs={index * 90}>
                <ProjectCard index={index} {...project} />
              </RevealOnScroll>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <SectionHeading
            eyebrow="Experience"
            title="Where I've worked"
            description="Hands-on delivery across product, platform, and frontend architecture."
          />
          <div className="border-b border-border">
            {experiences.map((experience, index) => (
              <RevealOnScroll key={experience.company} delayMs={index * 80}>
                <ExperienceItem {...experience} />
              </RevealOnScroll>
            ))}
          </div>
        </section>

        <section id="contact" className="section pb-20">
          <RevealOnScroll>
            <ContactCta />
          </RevealOnScroll>
        </section>
      </main>
      <footer className="border-t border-border">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-8 text-sm text-muted-foreground sm:px-6">
          <p className="font-display italic">
            {siteConfig.name} <span aria-hidden>—</span> {siteConfig.role}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            {siteConfig.socialLinks.map((social) => (
              <a
                key={social.label}
                className="underline-offset-4 transition-colors hover:text-primary hover:underline"
                href={social.href}
                target="_blank"
                rel="noreferrer"
              >
                {social.label}
              </a>
            ))}
            <a
              href="#home"
              className="underline-offset-4 transition-colors hover:text-primary hover:underline"
            >
              Back to top
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
