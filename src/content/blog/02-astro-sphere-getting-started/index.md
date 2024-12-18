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
<picture>
  <source type="image/jxl" srcset="
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2150/e_shadow:75,x_20,y_20/v1734496092/nzabyuxohldpykjvz6cf.jxl 2150w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2124/e_shadow:75,x_20,y_20/v1734496092/nzabyuxohldpykjvz6cf.jxl 2124w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2135/e_shadow:75,x_20,y_20/v1734496092/nzabyuxohldpykjvz6cf.jxl 2135w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2035/e_shadow:75,x_20,y_20/v1734496092/nzabyuxohldpykjvz6cf.jxl 2035w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2051/e_shadow:75,x_20,y_20/v1734496092/nzabyuxohldpykjvz6cf.jxl 2051w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1921/e_shadow:75,x_20,y_20/v1734496092/nzabyuxohldpykjvz6cf.jxl 1921w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1883/e_shadow:75,x_20,y_20/v1734496092/nzabyuxohldpykjvz6cf.jxl 1883w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1542/e_shadow:75,x_20,y_20/v1734496092/nzabyuxohldpykjvz6cf.jxl 1542w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1581/e_shadow:75,x_20,y_20/v1734496092/nzabyuxohldpykjvz6cf.jxl 1581w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1487/e_shadow:75,x_20,y_20/v1734496092/nzabyuxohldpykjvz6cf.jxl 1487w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1417/e_shadow:75,x_20,y_20/v1734496092/nzabyuxohldpykjvz6cf.jxl 1417w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1251/e_shadow:75,x_20,y_20/v1734496092/nzabyuxohldpykjvz6cf.jxl 1251w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1182/e_shadow:75,x_20,y_20/v1734496092/nzabyuxohldpykjvz6cf.jxl 1182w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_985/e_shadow:75,x_20,y_20/v1734496092/nzabyuxohldpykjvz6cf.jxl 985w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_893/e_shadow:75,x_20,y_20/v1734496092/nzabyuxohldpykjvz6cf.jxl 893w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_772/e_shadow:75,x_20,y_20/v1734496092/nzabyuxohldpykjvz6cf.jxl 772w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_607/e_shadow:75,x_20,y_20/v1734496092/nzabyuxohldpykjvz6cf.jxl 607w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_426/e_shadow:75,x_20,y_20/v1734496092/nzabyuxohldpykjvz6cf.jxl 426w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_250/e_shadow:75,x_20,y_20/v1734496092/nzabyuxohldpykjvz6cf.jxl 250w
  "/>
  <source type="image/avif" srcset="
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2150/e_shadow:75,x_20,y_20/v1734496092/nzabyuxohldpykjvz6cf.avif 2150w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2124/e_shadow:75,x_20,y_20/v1734496092/nzabyuxohldpykjvz6cf.avif 2124w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2135/e_shadow:75,x_20,y_20/v1734496092/nzabyuxohldpykjvz6cf.avif 2135w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2035/e_shadow:75,x_20,y_20/v1734496092/nzabyuxohldpykjvz6cf.avif 2035w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2051/e_shadow:75,x_20,y_20/v1734496092/nzabyuxohldpykjvz6cf.avif 2051w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1921/e_shadow:75,x_20,y_20/v1734496092/nzabyuxohldpykjvz6cf.avif 1921w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1883/e_shadow:75,x_20,y_20/v1734496092/nzabyuxohldpykjvz6cf.avif 1883w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1542/e_shadow:75,x_20,y_20/v1734496092/nzabyuxohldpykjvz6cf.avif 1542w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1581/e_shadow:75,x_20,y_20/v1734496092/nzabyuxohldpykjvz6cf.avif 1581w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1487/e_shadow:75,x_20,y_20/v1734496092/nzabyuxohldpykjvz6cf.avif 1487w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1417/e_shadow:75,x_20,y_20/v1734496092/nzabyuxohldpykjvz6cf.avif 1417w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1251/e_shadow:75,x_20,y_20/v1734496092/nzabyuxohldpykjvz6cf.avif 1251w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1182/e_shadow:75,x_20,y_20/v1734496092/nzabyuxohldpykjvz6cf.avif 1182w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_985/e_shadow:75,x_20,y_20/v1734496092/nzabyuxohldpykjvz6cf.avif 985w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_893/e_shadow:75,x_20,y_20/v1734496092/nzabyuxohldpykjvz6cf.avif 893w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_772/e_shadow:75,x_20,y_20/v1734496092/nzabyuxohldpykjvz6cf.avif 772w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_607/e_shadow:75,x_20,y_20/v1734496092/nzabyuxohldpykjvz6cf.avif 607w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_426/e_shadow:75,x_20,y_20/v1734496092/nzabyuxohldpykjvz6cf.avif 426w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_250/e_shadow:75,x_20,y_20/v1734496092/nzabyuxohldpykjvz6cf.avif 250w
  "/>
  <source type="image/jpeg" srcset="
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2150/e_shadow:75,x_20,y_20/v1734496092/nzabyuxohldpykjvz6cf.jpeg 2150w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2124/e_shadow:75,x_20,y_20/v1734496092/nzabyuxohldpykjvz6cf.jpeg 2124w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2135/e_shadow:75,x_20,y_20/v1734496092/nzabyuxohldpykjvz6cf.jpeg 2135w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2035/e_shadow:75,x_20,y_20/v1734496092/nzabyuxohldpykjvz6cf.jpeg 2035w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2051/e_shadow:75,x_20,y_20/v1734496092/nzabyuxohldpykjvz6cf.jpeg 2051w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1921/e_shadow:75,x_20,y_20/v1734496092/nzabyuxohldpykjvz6cf.jpeg 1921w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1883/e_shadow:75,x_20,y_20/v1734496092/nzabyuxohldpykjvz6cf.jpeg 1883w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1542/e_shadow:75,x_20,y_20/v1734496092/nzabyuxohldpykjvz6cf.jpeg 1542w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1581/e_shadow:75,x_20,y_20/v1734496092/nzabyuxohldpykjvz6cf.jpeg 1581w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1487/e_shadow:75,x_20,y_20/v1734496092/nzabyuxohldpykjvz6cf.jpeg 1487w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1417/e_shadow:75,x_20,y_20/v1734496092/nzabyuxohldpykjvz6cf.jpeg 1417w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1251/e_shadow:75,x_20,y_20/v1734496092/nzabyuxohldpykjvz6cf.jpeg 1251w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1182/e_shadow:75,x_20,y_20/v1734496092/nzabyuxohldpykjvz6cf.jpeg 1182w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_985/e_shadow:75,x_20,y_20/v1734496092/nzabyuxohldpykjvz6cf.jpeg 985w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_893/e_shadow:75,x_20,y_20/v1734496092/nzabyuxohldpykjvz6cf.jpeg 893w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_772/e_shadow:75,x_20,y_20/v1734496092/nzabyuxohldpykjvz6cf.jpeg 772w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_607/e_shadow:75,x_20,y_20/v1734496092/nzabyuxohldpykjvz6cf.jpeg 607w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_426/e_shadow:75,x_20,y_20/v1734496092/nzabyuxohldpykjvz6cf.jpeg 426w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_250/e_shadow:75,x_20,y_20/v1734496092/nzabyuxohldpykjvz6cf.jpeg 250w
  "/>
  <img src="https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_250/e_shadow:75,x_20,y_20/v1734496092/nzabyuxohldpykjvz6cf.jxl" alt="Responsive Image"> </img>
</picture>
</div>

<style>
  .credit-container {
    font-size: 12px;
    font-style: italic;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  .icon {
    width: 1em;
    height: 1em;
    margin-left: 0.25em;
  }
</style>
<p class="credit-container">
  <em>Photo by <a href="https://unsplash.com/@androwv?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Andrei R. Popescu</a> on</em>
  <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path d="M448,230.17V480H0V230.17H141.13V355.09H306.87V230.17ZM306.87,32H141.13V156.91H306.87Z"/>
  </svg>
</p>

Astro Sphere is designed to be configurable. This article will cover the basics on
configuring the site and make it personal.

### First let's change the url

```js
//astro.config.mjs

export default defineConfig({
  site: "https://the-sphere.paulapplegate.com", // your domain here
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
