import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  cacheOnDemandPages: true,
  site: "https://the-sphere.paulapplegate.com",
  integrations: [mdx(), sitemap(), solidJs(), tailwind({
    applyBaseStyles: false
  })],
  output: "server",
  adapter: netlify({
    image: {
      domains: ['res.cloudinary.com'],
    },
    imageCDN: true,
    edgeMiddleware: true,
  })
});