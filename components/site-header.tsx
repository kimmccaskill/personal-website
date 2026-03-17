import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="#home"
          className="font-semibold tracking-tight transition-opacity hover:opacity-80"
        >
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {siteConfig.navLinks.map((link) => (
            <Button key={link.href} asChild variant="ghost" size="sm">
              <a href={link.href}>{link.label}</a>
            </Button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href="#contact">Contact</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
