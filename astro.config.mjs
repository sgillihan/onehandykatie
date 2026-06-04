// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: update site to your custom domain once configured in Netlify
export default defineConfig({
  site: "https://incredible-paprenjak-2d826f.netlify.app",
  integrations: [sitemap()],
});

