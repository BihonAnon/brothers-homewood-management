import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://BihonAnon.github.io',
  base: '/brothers-homewood-management',
  integrations: [tailwind()]
});