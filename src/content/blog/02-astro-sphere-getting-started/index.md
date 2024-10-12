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
An image test and a photo credit text test.

<picture>
  <source type="image/jxl" srcset="
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2150/e_shadow:75,x_20,y_20/v1728739633/nrxmslc7qhahp2auafo6.jxl 2150w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2148/e_shadow:75,x_20,y_20/v1728739633/nrxmslc7qhahp2auafo6.jxl 2148w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2147/e_shadow:75,x_20,y_20/v1728739633/nrxmslc7qhahp2auafo6.jxl 2147w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2023/e_shadow:75,x_20,y_20/v1728739633/nrxmslc7qhahp2auafo6.jxl 2023w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2020/e_shadow:75,x_20,y_20/v1728739633/nrxmslc7qhahp2auafo6.jxl 2020w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1805/e_shadow:75,x_20,y_20/v1728739633/nrxmslc7qhahp2auafo6.jxl 1805w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1640/e_shadow:75,x_20,y_20/v1728739633/nrxmslc7qhahp2auafo6.jxl 1640w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1518/e_shadow:75,x_20,y_20/v1728739633/nrxmslc7qhahp2auafo6.jxl 1518w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1356/e_shadow:75,x_20,y_20/v1728739633/nrxmslc7qhahp2auafo6.jxl 1356w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1200/e_shadow:75,x_20,y_20/v1728739633/nrxmslc7qhahp2auafo6.jxl 1200w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_967/e_shadow:75,x_20,y_20/v1728739633/nrxmslc7qhahp2auafo6.jxl 967w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_671/e_shadow:75,x_20,y_20/v1728739633/nrxmslc7qhahp2auafo6.jxl 671w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_250/e_shadow:75,x_20,y_20/v1728739633/nrxmslc7qhahp2auafo6.jxl 250w
  "/>
  <source type="image/avif" srcset="
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2150/e_shadow:75,x_20,y_20/v1728739633/nrxmslc7qhahp2auafo6.avif 2150w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2148/e_shadow:75,x_20,y_20/v1728739633/nrxmslc7qhahp2auafo6.avif 2148w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2147/e_shadow:75,x_20,y_20/v1728739633/nrxmslc7qhahp2auafo6.avif 2147w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2023/e_shadow:75,x_20,y_20/v1728739633/nrxmslc7qhahp2auafo6.avif 2023w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2020/e_shadow:75,x_20,y_20/v1728739633/nrxmslc7qhahp2auafo6.avif 2020w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1805/e_shadow:75,x_20,y_20/v1728739633/nrxmslc7qhahp2auafo6.avif 1805w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1640/e_shadow:75,x_20,y_20/v1728739633/nrxmslc7qhahp2auafo6.avif 1640w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1518/e_shadow:75,x_20,y_20/v1728739633/nrxmslc7qhahp2auafo6.avif 1518w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1356/e_shadow:75,x_20,y_20/v1728739633/nrxmslc7qhahp2auafo6.avif 1356w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1200/e_shadow:75,x_20,y_20/v1728739633/nrxmslc7qhahp2auafo6.avif 1200w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_967/e_shadow:75,x_20,y_20/v1728739633/nrxmslc7qhahp2auafo6.avif 967w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_671/e_shadow:75,x_20,y_20/v1728739633/nrxmslc7qhahp2auafo6.avif 671w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_250/e_shadow:75,x_20,y_20/v1728739633/nrxmslc7qhahp2auafo6.avif 250w
  "/>
  <source type="image/webp" srcset="
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2150/e_shadow:75,x_20,y_20/v1728739633/nrxmslc7qhahp2auafo6.webp 2150w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2148/e_shadow:75,x_20,y_20/v1728739633/nrxmslc7qhahp2auafo6.webp 2148w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2147/e_shadow:75,x_20,y_20/v1728739633/nrxmslc7qhahp2auafo6.webp 2147w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2023/e_shadow:75,x_20,y_20/v1728739633/nrxmslc7qhahp2auafo6.webp 2023w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2020/e_shadow:75,x_20,y_20/v1728739633/nrxmslc7qhahp2auafo6.webp 2020w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1805/e_shadow:75,x_20,y_20/v1728739633/nrxmslc7qhahp2auafo6.webp 1805w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1640/e_shadow:75,x_20,y_20/v1728739633/nrxmslc7qhahp2auafo6.webp 1640w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1518/e_shadow:75,x_20,y_20/v1728739633/nrxmslc7qhahp2auafo6.webp 1518w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1356/e_shadow:75,x_20,y_20/v1728739633/nrxmslc7qhahp2auafo6.webp 1356w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1200/e_shadow:75,x_20,y_20/v1728739633/nrxmslc7qhahp2auafo6.webp 1200w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_967/e_shadow:75,x_20,y_20/v1728739633/nrxmslc7qhahp2auafo6.webp 967w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_671/e_shadow:75,x_20,y_20/v1728739633/nrxmslc7qhahp2auafo6.webp 671w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_250/e_shadow:75,x_20,y_20/v1728739633/nrxmslc7qhahp2auafo6.webp 250w
  "/>
  <source type="image/jpeg" srcset="
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2150/e_shadow:75,x_20,y_20/v1728739633/nrxmslc7qhahp2auafo6.jpeg 2150w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2148/e_shadow:75,x_20,y_20/v1728739633/nrxmslc7qhahp2auafo6.jpeg 2148w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2147/e_shadow:75,x_20,y_20/v1728739633/nrxmslc7qhahp2auafo6.jpeg 2147w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2023/e_shadow:75,x_20,y_20/v1728739633/nrxmslc7qhahp2auafo6.jpeg 2023w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2020/e_shadow:75,x_20,y_20/v1728739633/nrxmslc7qhahp2auafo6.jpeg 2020w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1805/e_shadow:75,x_20,y_20/v1728739633/nrxmslc7qhahp2auafo6.jpeg 1805w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1640/e_shadow:75,x_20,y_20/v1728739633/nrxmslc7qhahp2auafo6.jpeg 1640w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1518/e_shadow:75,x_20,y_20/v1728739633/nrxmslc7qhahp2auafo6.jpeg 1518w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1356/e_shadow:75,x_20,y_20/v1728739633/nrxmslc7qhahp2auafo6.jpeg 1356w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1200/e_shadow:75,x_20,y_20/v1728739633/nrxmslc7qhahp2auafo6.jpeg 1200w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_967/e_shadow:75,x_20,y_20/v1728739633/nrxmslc7qhahp2auafo6.jpeg 967w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_671/e_shadow:75,x_20,y_20/v1728739633/nrxmslc7qhahp2auafo6.jpeg 671w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_250/e_shadow:75,x_20,y_20/v1728739633/nrxmslc7qhahp2auafo6.jpeg 250w
  "/>
  <img src="https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_250/e_shadow:75,x_20,y_20/v1728739633/nrxmslc7qhahp2auafo6.jxl" alt="Responsive Image">
</picture>
  <style>
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: middle;
  }
  </style>
  <p style="font-size: 12px; font-style: italic;">
  <em>Photo by <a href="https://paulapplegate.com">Paul Applegate</a> on 
    <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path d="M448,230.17V480H0V230.17H141.13V355.09H306.87V230.17ZM306.87,32H141.13V156.91H306.87Z"/>
    </svg>
  </em>
  </p

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