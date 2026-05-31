# Eba Sheba — Luxury Portfolio

Official portfolio website for Eba Sheba, award-winning Indonesian Make-Up Artist, film professional, and Executive Producer.

## Stack

- React Router v7 + Vite + SSR
- Tailwind CSS v4
- Framer Motion
- React Icons
- TypeScript

## Getting Started

```bash
bun install
bun run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Scripts

| Command | Description |
|---------|-------------|
| `bun run dev` | Start development server |
| `bun run build` | Production build |
| `bun run start` | Serve production build |
| `bun run typecheck` | TypeScript check |

## Content

Editable data modules live in `app/data/`:

- `posters.ts` — TMDB poster URLs for filmography entries
- `awards.ts` — Awards and nominations
- `filmography.ts` — Film, TV, and production credits
- `portfolio.ts` — Gallery items by category
- `media.ts` — Press and media features
- `testimonials.ts` — Industry testimonials
- `featured-project.ts` — Featured case study
- `stats.ts` — Hero statistics

Replace placeholder images in `public/images/placeholders/` with real photography when available.

## Deployment

```bash
bun run build
bun run start
```

Or use the included Dockerfile for container deployment.
