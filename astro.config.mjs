// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  output: 'static', // SSG para forms estáticos
  // output: 'server',
  adapter: netlify({
    edgeMiddleware: true
  }),
  site: 'https://davidjared123.github.io',
  buildOptions: {
    inlineStyles: false, // Necesario para que Netlify detecte el form
  },
  integrations: [tailwind(), alpinejs()],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});


