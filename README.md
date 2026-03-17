# Kim McCaskill Portfolio

Personal portfolio site for Kim McCaskill, built with Next.js, TypeScript, Tailwind CSS, and reusable UI components.

Live site: [https://kimmccaskill.com](https://kimmccaskill.com)

## Overview

This site is designed to be:

- Fast and SEO-friendly
- Easy to maintain and customize
- Responsive across mobile and desktop
- Accessible with dark mode and reduced-motion support

Core sections include:

- Home
- About
- Projects
- Experience
- Contact

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- `next-themes` for dark mode
- `class-variance-authority`, `clsx`, `tailwind-merge` for UI variants/class management
- `lucide-react` icons

## Project Structure

```txt
app/
  globals.css
  layout.tsx
  page.tsx
components/
  ui/
  contact-cta.tsx
  experience-item.tsx
  project-card.tsx
  reveal-on-scroll.tsx
  section-heading.tsx
  site-header.tsx
  theme-provider.tsx
  theme-toggle.tsx
data/
  site.ts
lib/
  utils.ts
public/
  Kim_McCaskill_Resume.pdf
```

## Local Development

Install dependencies:

```bash
npm install
```

Start dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Create production build
npm run start    # Run production server
npm run lint     # Run ESLint
```

## Content Customization

Most content is managed in `data/site.ts`:

- Personal info (name, role, email, intro, about)
- Social links
- Skills
- Project entries
- Experience entries

Page layout/section order is in `app/page.tsx`.

## Deployment

This site is deployed on Vercel and connected to a Squarespace-managed domain.

Typical flow:

1. Push updates to `main`
2. Vercel auto-deploys
3. Verify production at `kimmccaskill.com`

## Notes

- Resume download is served from `public/Kim_McCaskill_Resume.pdf`.
- Metadata and Open Graph settings are in `app/layout.tsx`.
