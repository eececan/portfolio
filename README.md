# Elif Ece Can

Personal portfolio and academic profile for [Elif Ece Can](https://eececan.com), featuring research and projects.

Built with Astro, the site is statically generated and deployed with GitHub Pages. Site metadata and introductory text live in `profile.json`; project pages use Markdown and MDX. The CV is the PDF at `src/content/cv/ElifEceCanCV.pdf`, compiled from `src/content/cv/main.tex`.

## Features

- Research and project pages with responsive layouts
- The CV as a single PDF, viewable in the browser or opened in a new tab
- Light and dark themes based on the visitor’s system preference
- Sitemap and search and social metadata

## Getting started

Requirement: Node.js 22.23.4 or later. A TeX distribution is only needed when regenerating the CV PDF; the site build does not require it.

```sh
npm ci
npm run dev
```

The development server runs at `http://localhost:4321` by default. To create and preview a production build:

```sh
npm run build
npm run preview
```

The build writes the static site to `dist/`.

## Project structure

| Path | Purpose |
| --- | --- |
| `profile.json` | Site metadata, contact links, and introductory text |
| `src/content/projects/` | Project pages and their metadata |
| `src/content/cv/main.tex` | LaTeX source for the CV |
| `src/content/cv/ElifEceCanCV.pdf` | The CV PDF served by the site |
| `src/pages/` | Site routes |
| `src/components/` and `src/layouts/` | Reusable components and page layouts |
| `src/styles/` | Site styles |
| `public/` | Static files such as the favicon and CNAME |

## CV

The CV page displays the PDF directly; there is no second copy in `public/`.
Rebuild the PDF after editing `main.tex` with Tectonic, or any TeX Live with
`fontawesome5`, `tgheros`, `FiraMono`, and `contour`:

```sh
tectonic -X compile src/content/cv/main.tex --outdir /tmp
cp /tmp/main.pdf src/content/cv/ElifEceCanCV.pdf
```

The CV is tuned to exactly two pages. `\cvsection` guards section headings from
being stranded at a page break, and `\entryskip` / `\roleskip` / the `enumitem`
settings in the preamble are the knobs for reclaiming a line if new content
overflows.

## Deployment

Pushes to `main` trigger the [GitHub Actions workflow](.github/workflows/deploy.yml), which builds the site and publishes it to GitHub Pages. The site URL in `profile.json` is used for canonical URLs and the sitemap.
