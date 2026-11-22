// @ts-check
import { defineConfig } from 'astro/config';
import { readFileSync } from 'node:fs';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

const profile = JSON.parse(readFileSync(new URL('./profile.json', import.meta.url), 'utf8'));

// https://astro.build/config
export default defineConfig({
  site: profile.site.url,

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [mdx(), sitemap()],

  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      wrap: false
    }
  }
});
