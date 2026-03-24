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
            <div className="rounded-3xl border border-border/70 bg-card p-6 shadow-sm sm:p-10">
              <div className="grid items-center gap-8 md:grid-cols-[1.3fr_0.9fr]">
                <div>
                  <p className="text-sm text-muted-foreground">{siteConfig.location}</p>
                  <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
                    {siteConfig.name}
                  </h1>
                  <p className="mt-2 text-base font-medium text-muted-foreground sm:text-xl">
                    {siteConfig.role}
                  </p>
                  <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                    {siteConfig.intro}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <Badge variant="outline">6 years in software</Badge>
                    <Badge variant="outline">Enterprise and government scale</Badge>
                  </div>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <Button asChild>
                      <a href="#experience">See experience</a>
                    </Button>
                    <Button asChild variant="secondary">
                      <a href={`mailto:${siteConfig.email}`}>Say hello</a>
                    </Button>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
                    {siteConfig.socialLinks.map((social) => (
                      <a
                        key={social.label}
                        className="transition-colors hover:text-foreground"
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {social.label}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="mx-auto w-full max-w-[320px]">
                  <Image
                    src={siteConfig.headshotSrc}
                    alt={siteConfig.headshotAlt}
                    width={640}
                    height={640}
                    priority
                    className="aspect-square w-full rounded-2xl object-cover shadow-md ring-1 ring-border/80"
                  />
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </section>

        <section id="about" className="section">
          <RevealOnScroll>
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
              <div className="mt-8 grid w-full max-w-3xl grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <Image
                    src={siteConfig.teachingPhotoSrc}
                    alt={siteConfig.teachingPhotoAlt}
                    width={900}
                    height={600}
                    className="aspect-[4/3] w-full rounded-2xl object-cover shadow-md ring-1 ring-border/80"
                  />
                  <p className="mt-2 text-xs text-muted-foreground">
                    My teaching background strengthened how I communicate and
                    support teammates.
                  </p>
                </div>
                <div>
                  <Image
                    src={siteConfig.japanPhotoSrc}
                    alt={siteConfig.japanPhotoAlt}
                    width={900}
                    height={600}
                    className="aspect-[4/3] w-full rounded-2xl object-cover shadow-md ring-1 ring-border/80"
                  />
                  <p className="mt-2 text-xs text-muted-foreground">
                    Travel keeps me curious and grounded in collaboration.
                  </p>
                </div>
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
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project, index) => (
              <RevealOnScroll key={project.name} delayMs={index * 90}>
                <ProjectCard {...project} />
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
          <div className="space-y-4">
            {experiences.map((experience, index) => (
              <RevealOnScroll key={experience.company} delayMs={index * 80}>
                <ExperienceItem {...experience} />
              </RevealOnScroll>
            ))}
          </div>
        </section>

        <section id="contact" className="section pb-20">
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something together!"
            description="If you're shipping a product and want a thoughtful engineering partner, I'd love to hear about it."
          />
          <RevealOnScroll>
            <ContactCta />
          </RevealOnScroll>
        </section>
      </main>
    </div>
  );
}
