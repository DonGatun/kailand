import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  load: [async () => ({
    base: process.env.NODE_ENV === 'production' ? '/kailand/' : '/',
    site: {
      keywords: ['kailand', 'sitio', 'web', 'minecraft', 'kailand', 'server'],
      url: 'https://www.kailand.es'
    }
  })],
  integrations: [tailwind(), react()],
  vite: {
    build: {
      rollupOptions: {
        input: [
          "src/",
          "public/"
        ],
        external: [
          "archive/**"
        ]
      }
    }
  }
});