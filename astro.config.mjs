import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import solidJs from "@astrojs/solid-js"

// https://astro.build/config
image: {
  // Used for all `<Image />` and `<Picture />` components unless overridden
  experimentalLayout: 'responsive',
   },
experimental: {
  responsiveImages: true,
},
export default defineConfig({
  site: "https://the-sphere.paulapplegate.com",
  integrations: [mdx(), sitemap(), solidJs(), tailwind({ applyBaseStyles: false })],
})