# Elif Ece Can — portfolio

An Astro static site for the portfolio at [eececan.com](https://eececan.com). The site and downloadable CV use the profile in `profile.json`; project pages and writing are maintained separately as Markdown/MDX content.

## Update the profile

Edit `profile.json` for the name, contact information, links, introductory text, and CV entries. The website and generated CV read this file. The previous CV source, `src/content/cv/main.tex`, is kept as a reference; edit `profile.json` for future changes instead.

Project pages live in `src/content/projects/`; add writing to `src/content/writing/`. Site layout and styling live in `src/pages/`, `src/components/`, and `src/styles/`. The browser follows the visitor's light or dark system preference.

## Build locally

Install Node.js 22.23.4 or newer and a TeX distribution with XeLaTeX, Latin Modern fonts, and the LaTeX packages `geometry`, `tabularx`, `enumitem`, and `hyperref`. Then run:

```sh
npm ci
npm run dev       # local development server
npm run build     # production site in dist/
npm run preview   # preview the production build
```

The CV generator reads `profile.json` and produces a LaTeX source in `generated/cv.tex` and the downloadable `public/cv.pdf`. Review both the web CV and PDF after changing profile details.

## GitHub Pages and the custom domain

The workflow in `.github/workflows/deploy.yml` builds the site and deploys it on pushes to `main`. In the repository's **Settings → Pages**, select **GitHub Actions** as the source. Set `eececan.com` as the custom domain in those settings; the `CNAME` file alone does not configure a domain when deploying with Actions. The repository must be public for GitHub Pages on GitHub Free.

Before pointing DNS to GitHub, [verify the domain for the GitHub account](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages) and add it to the repository's Pages settings. Then configure DNS at the domain provider using [GitHub's current custom-domain instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site). Enable **Enforce HTTPS** in Pages settings when it becomes available. DNS and certificate provisioning can take time.

If the domain changes, update `profile.site.url`, `public/CNAME`, the Pages setting, and DNS together. Astro uses the profile URL for canonical links, RSS, sitemap and robots.txt.
