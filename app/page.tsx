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
              <p className="text-sm text-muted-foreground">{siteConfig.location}</p>
              <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
                {siteConfig.name} - {siteConfig.role}
              </h1>
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
          </RevealOnScroll>
        </section>

        <section id="about" className="section">
          <RevealOnScroll>
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
            title="Where I have shipped"
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
            title="Let us build something meaningful."
            description="If you are shipping a product and want a thoughtful engineering partner, I would love to hear about it."
          />
          <RevealOnScroll>
            <ContactCta />
          </RevealOnScroll>
        </section>
      </main>
    </div>
  );
}
