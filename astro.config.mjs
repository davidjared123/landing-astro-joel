// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
   // SSG para forms estáticos
  output: 'server',
  adapter: netlify(),
  site: 'https://joel-page.netlify.app/',
  integrations: [tailwind(), alpinejs()],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});


