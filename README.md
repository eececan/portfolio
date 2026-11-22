# Elif Ece Can

Personal portfolio and academic profile for [Elif Ece Can](https://eececan.com), featuring research, projects, and a downloadable CV.

Built with Astro, the site is statically generated and deployed with GitHub Pages. Profile information is maintained in one place and used to generate both the web CV and its PDF version. Project and writing pages use Markdown and MDX.

## Features

- Research and project pages with responsive layouts
- A web CV and a downloadable PDF generated from shared profile data
- Light and dark themes based on the visitor’s system preference
- RSS, sitemap, and search and social metadata

## Getting started

Requirements: Node.js 22.23.4 or later. A TeX distribution with XeLaTeX is also required for production builds and PDF generation.

```sh
npm ci
npm run dev
```

The development server runs at `http://localhost:4321` by default. To create and preview a production build:

```sh
npm run build
npm run preview
```

The build regenerates `public/cv.pdf` and its LaTeX source in `generated/cv.tex`, then writes the static site to `dist/`. The TeX installation must include Latin Modern fonts and the `geometry`, `tabularx`, `enumitem`, `needspace`, `xcolor`, and `hyperref` packages. The [deployment workflow](.github/workflows/deploy.yml) lists the packages used on Ubuntu.

## Project structure

| Path | Purpose |
| --- | --- |
| `profile.json` | Profile, contact links, introductory text, and CV entries |
| `src/content/projects/` | Project pages and their metadata |
| `src/content/writing/` | Optional writing entries |
| `src/pages/` | Site routes |
| `src/components/` and `src/layouts/` | Reusable components and page layouts |
| `src/styles/` | Site styles |
| `scripts/generate-cv.mjs` | CV source and PDF generator |
| `public/` | Static files, including the generated CV |

Edit `profile.json` to update the web and PDF CVs, then run `npm run build` and review the output. The earlier LaTeX CV at `src/content/cv/main.tex` is retained for reference; it is not the source used by the generator.

## Deployment

Pushes to `main` trigger the [GitHub Actions workflow](.github/workflows/deploy.yml), which builds the site and publishes it to GitHub Pages. The site URL in `profile.json` is used for canonical URLs, RSS, the sitemap, and `robots.txt`.
