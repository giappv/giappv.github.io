// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://phanvugiap.com',
  output: 'static',
  trailingSlash: 'ignore',
  // /cv/ and /resume/ are Canva exports kept as-is from the old site; keep them out of the sitemap.
  integrations: [sitemap({ filter: (page) => !/\/(cv|resume)\/$/.test(page) })],
});
