---
title: "Astro Sphere: Getting Started"
summary: "You've downloaded and installed the project. Let's hit the ground running."
date: "Mar 16 2024"
draft: false
tags:
- Tutorial
- Astro
- Astro Sphere
---

<div class="shadow-wrapper">
<picture class="responsive-picture">
  <source media="(min-width: 1200px)" type="image/jxl" sizes="40vw" srcset="
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto/c_scale,w_2150/dpr_1/c_scale,w_860/v1740184206/nttir2gllfggqpmwfgdd.jxl 860w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto/c_scale,w_2150/dpr_2/c_scale,w_860/v1740184206/nttir2gllfggqpmwfgdd.jxl 1720w
  ">
  <source media="(min-width: 1200px)" type="image/avif" sizes="40vw" srcset="
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto/c_scale,w_2150/dpr_1/c_scale,w_860/v1740184206/nttir2gllfggqpmwfgdd.avif 860w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto/c_scale,w_2150/dpr_2/c_scale,w_860/v1740184206/nttir2gllfggqpmwfgdd.avif 1720w
  ">
  <source media="(min-width: 1200px)" type="image/jpeg" sizes="40vw" srcset="
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto/c_scale,w_2150/dpr_1/c_scale,w_860/v1740184206/nttir2gllfggqpmwfgdd.jpeg 860w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto/c_scale,w_2150/dpr_2/c_scale,w_860/v1740184206/nttir2gllfggqpmwfgdd.jpeg 1720w
  ">
  <source media="(min-width: 992px) and (max-width: 1199px)" type="image/jxl" sizes="60vw" srcset="
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_16:9,c_fill/c_fill,g_auto/c_scale,w_2150/dpr_1/c_scale,w_1290/v1740184206/nttir2gllfggqpmwfgdd.jxl 1290w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_16:9,c_fill/c_fill,g_auto/c_scale,w_2150/dpr_2/c_scale,w_1290/v1740184206/nttir2gllfggqpmwfgdd.jxl 2580w
  ">
  <source media="(min-width: 992px) and (max-width: 1199px)" type="image/avif" sizes="60vw" srcset="
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_16:9,c_fill/c_fill,g_auto/c_scale,w_2150/dpr_1/c_scale,w_1290/v1740184206/nttir2gllfggqpmwfgdd.avif 1290w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_16:9,c_fill/c_fill,g_auto/c_scale,w_2150/dpr_2/c_scale,w_1290/v1740184206/nttir2gllfggqpmwfgdd.avif 2580w
  ">
  <source media="(min-width: 992px) and (max-width: 1199px)" type="image/jpeg" sizes="60vw" srcset="
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_16:9,c_fill/c_fill,g_auto/c_scale,w_2150/dpr_1/c_scale,w_1290/v1740184206/nttir2gllfggqpmwfgdd.jpeg 1290w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_16:9,c_fill/c_fill,g_auto/c_scale,w_2150/dpr_2/c_scale,w_1290/v1740184206/nttir2gllfggqpmwfgdd.jpeg 2580w
  ">
  <source media="(min-width: 768px) and (max-width: 991px)" type="image/jxl" sizes="70vw" srcset="
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_4:3,c_fill/c_fill,g_auto/c_scale,w_2150/dpr_1/c_scale,w_700/v1740184206/nttir2gllfggqpmwfgdd.jxl 700w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_4:3,c_fill/c_fill,g_auto/c_scale,w_2150/dpr_2/c_scale,w_700/v1740184206/nttir2gllfggqpmwfgdd.jxl 1400w
  ">
  <source media="(min-width: 768px) and (max-width: 991px)" type="image/avif" sizes="70vw" srcset="
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_4:3,c_fill/c_fill,g_auto/c_scale,w_2150/dpr_1/c_scale,w_700/v1740184206/nttir2gllfggqpmwfgdd.avif 700w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_4:3,c_fill/c_fill,g_auto/c_scale,w_2150/dpr_2/c_scale,w_700/v1740184206/nttir2gllfggqpmwfgdd.avif 1400w
  ">
  <source media="(min-width: 768px) and (max-width: 991px)" type="image/jpeg" sizes="70vw" srcset="
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_4:3,c_fill/c_fill,g_auto/c_scale,w_2150/dpr_1/c_scale,w_700/v1740184206/nttir2gllfggqpmwfgdd.jpeg 700w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_4:3,c_fill/c_fill,g_auto/c_scale,w_2150/dpr_2/c_scale,w_700/v1740184206/nttir2gllfggqpmwfgdd.jpeg 1400w
  ">
  <source media="(max-width: 767px)" type="image/jxl" sizes="100vw" srcset="
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_1:1,c_fill/c_fill,g_auto/c_scale,w_2150/dpr_1/c_scale,w_400/v1740184206/nttir2gllfggqpmwfgdd.jxl 400w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_1:1,c_fill/c_fill,g_auto/c_scale,w_2150/dpr_2/c_scale,w_400/v1740184206/nttir2gllfggqpmwfgdd.jxl 800w
  ">
  <source media="(max-width: 767px)" type="image/avif" sizes="100vw" srcset="
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_1:1,c_fill/c_fill,g_auto/c_scale,w_2150/dpr_1/c_scale,w_400/v1740184206/nttir2gllfggqpmwfgdd.avif 400w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_1:1,c_fill/c_fill,g_auto/c_scale,w_2150/dpr_2/c_scale,w_400/v1740184206/nttir2gllfggqpmwfgdd.avif 800w
  ">
  <source media="(max-width: 767px)" type="image/jpeg" sizes="100vw" srcset="
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_1:1,c_fill/c_fill,g_auto/c_scale,w_2150/dpr_1/c_scale,w_400/v1740184206/nttir2gllfggqpmwfgdd.jpeg 400w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/ar_1:1,c_fill/c_fill,g_auto/c_scale,w_2150/dpr_2/c_scale,w_400/v1740184206/nttir2gllfggqpmwfgdd.jpeg 800w
  ">
  <img src="https://res.cloudinary.com/paulapplegate-com/image/upload/ar_1:1,c_fill/c_fill,g_auto/c_scale,w_2150/dpr_1/c_scale,w_400/v1740184206/nttir2gllfggqpmwfgdd.jpeg" alt="Responsive Image" loading="lazy">
</picture>
</div>

Astro Sphere is designed to be configurable. This article will cover the basics on
configuring the site and make it personal.

### First let's change the url

```js
//astro.config.mjs

export default defineConfig({
  site: "https://astro-sphere.vercel.app", // your domain here
  integrations: [mdx(), sitemap(), solidJs(), tailwind({ applyBaseStyles: false })],
})
```

### Next, Let's configure the Site

```js
// src/consts.ts

export const SITE: Site = {
  TITLE: "Astro Sphere",
  DESCRIPTION: "Welcome to Astro Sphere, a portfolio and blog for designers and developers.",
  AUTHOR: "Mark Horn",
}
```

| Field       | Type   | Description                                                            |
| :---------- | :----- | :--------------------------------------------------------------------- |
| TITLE       | String | The title of the website. Displayed in header and footer. Used in SEO. |
| DESCRIPTION | String | The description of the index page of the website. Used in SEO.         |
| AUTHOR      | String | Your name.                                                             |

### Change the branding

The browser icon is located in `/public/favicon.svg`

The header and footer branding icon is located in `/public/brand.svg` as a sprite with id="brand"

### The rest of the consts file

Each page has a metadata entry that is useful for SEO.

```js
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}
```

The links that are displayed in the header and drawer

```js
export const LINKS: Links = [
  { HREF: "/", TEXT: "Home" },
  { HREF: "/work", TEXT: "Work" },
  { HREF: "/blog", TEXT: "Blog" },
  { HREF: "/projects", TEXT: "Projects" },
]
```

The social media links

```js
export const SOCIALS: Socials = [
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "markhorn-dev",
    HREF: "https://github.com/markhorn-dev/astro-sphere"
  },
]
```

| Field | Type | Required | Description |
| :---- | :--- | :------- | :---------- |
| NAME  | string | yes | Accessible name |
| ICON  | string | yes | Refers to the symbol id in `public/social.svg` |
| TEXT  | string | yes | Shorthand profile name |
| HREF  | string | yes | The link to the social media profile |