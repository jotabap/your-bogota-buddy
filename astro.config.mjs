import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://blue-hill-0f6e9ff1e.5.azurestaticapps.net',
  integrations: [sitemap()],
});