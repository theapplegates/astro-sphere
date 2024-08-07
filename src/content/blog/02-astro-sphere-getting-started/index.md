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
<picture>
  <source
    type="image/avif"
    srcset="https://res.cloudinary.com/paulapplegate-com/image/upload/c_limit,w_50/f_avif/elephant-charge_ihudf7.jpg 50w,
https://res.cloudinary.com/paulapplegate-com/image/upload/c_limit,w_343/f_avif/elephant-charge_ihudf7.jpg 343w,
https://res.cloudinary.com/paulapplegate-com/image/upload/c_limit,w_526/f_avif/elephant-charge_ihudf7.jpg 526w,
https://res.cloudinary.com/paulapplegate-com/image/upload/c_limit,w_633/f_avif/elephant-charge_ihudf7.jpg 633w,
https://res.cloudinary.com/paulapplegate-com/image/upload/c_limit,w_754/f_avif/elephant-charge_ihudf7.jpg 754w,
https://res.cloudinary.com/paulapplegate-com/image/upload/c_limit,w_860/f_avif/elephant-charge_ihudf7.jpg 860w,
https://res.cloudinary.com/paulapplegate-com/image/upload/c_limit,w_955/f_avif/elephant-charge_ihudf7.jpg 955w,
https://res.cloudinary.com/paulapplegate-com/image/upload/c_limit,w_970/f_avif/elephant-charge_ihudf7.jpg 970w,
https://res.cloudinary.com/paulapplegate-com/image/upload/c_limit,w_1000/f_avif/elephant-charge_ihudf7.jpg 1000w"
    sizes="(max-width: 50px) 50px,
(max-width: 343px) 343px,
(max-width: 526px) 526px,
(max-width: 633px) 633px,
(max-width: 754px) 754px,
(max-width: 860px) 860px,
(max-width: 955px) 955px,
(max-width: 970px) 970px,
(max-width: 1000px) 1000px, 100vw"
  >
  <source
    type="image/jpeg"
    srcset="https://res.cloudinary.com/paulapplegate-com/image/upload/c_limit,w_50/f_jpg/elephant-charge_ihudf7.jpg 50w,
https://res.cloudinary.com/paulapplegate-com/image/upload/c_limit,w_343/f_jpg/elephant-charge_ihudf7.jpg 343w,
https://res.cloudinary.com/paulapplegate-com/image/upload/c_limit,w_526/f_jpg/elephant-charge_ihudf7.jpg 526w,
https://res.cloudinary.com/paulapplegate-com/image/upload/c_limit,w_633/f_jpg/elephant-charge_ihudf7.jpg 633w,
https://res.cloudinary.com/paulapplegate-com/image/upload/c_limit,w_754/f_jpg/elephant-charge_ihudf7.jpg 754w,
https://res.cloudinary.com/paulapplegate-com/image/upload/c_limit,w_860/f_jpg/elephant-charge_ihudf7.jpg 860w,
https://res.cloudinary.com/paulapplegate-com/image/upload/c_limit,w_955/f_jpg/elephant-charge_ihudf7.jpg 955w,
https://res.cloudinary.com/paulapplegate-com/image/upload/c_limit,w_970/f_jpg/elephant-charge_ihudf7.jpg 970w,
https://res.cloudinary.com/paulapplegate-com/image/upload/c_limit,w_1000/f_jpg/elephant-charge_ihudf7.jpg 1000w"
    sizes="(max-width: 50px) 50px,
(max-width: 343px) 343px,
(max-width: 526px) 526px,
(max-width: 633px) 633px,
(max-width: 754px) 754px,
(max-width: 860px) 860px,
(max-width: 955px) 955px,
(max-width: 970px) 970px,
(max-width: 1000px) 1000px, 100vw"
  >
  <img
    src="https://res.cloudinary.com/paulapplegate-com/image/upload/c_limit,w_50/f_jpg/elephant-charge_ihudf7.jpg"
    alt="Image"
  />
</picture>

<picture>
  <source
    type="image/avif"
    srcset="https://res.cloudinary.com/paulapplegate-com/image/upload/c_limit,w_50/f_avif/grigorii-shcheglov-door_ikjqgo.jpg 50w,
https://res.cloudinary.com/paulapplegate-com/image/upload/c_limit,w_341/f_avif/grigorii-shcheglov-door_ikjqgo.jpg 341w,
https://res.cloudinary.com/paulapplegate-com/image/upload/c_limit,w_491/f_avif/grigorii-shcheglov-door_ikjqgo.jpg 491w,
https://res.cloudinary.com/paulapplegate-com/image/upload/c_limit,w_607/f_avif/grigorii-shcheglov-door_ikjqgo.jpg 607w,
https://res.cloudinary.com/paulapplegate-com/image/upload/c_limit,w_752/f_avif/grigorii-shcheglov-door_ikjqgo.jpg 752w,
https://res.cloudinary.com/paulapplegate-com/image/upload/c_limit,w_894/f_avif/grigorii-shcheglov-door_ikjqgo.jpg 894w,
https://res.cloudinary.com/paulapplegate-com/image/upload/c_limit,w_981/f_avif/grigorii-shcheglov-door_ikjqgo.jpg 981w,
https://res.cloudinary.com/paulapplegate-com/image/upload/c_limit,w_987/f_avif/grigorii-shcheglov-door_ikjqgo.jpg 987w,
https://res.cloudinary.com/paulapplegate-com/image/upload/c_limit,w_1000/f_avif/grigorii-shcheglov-door_ikjqgo.jpg 1000w"
    sizes="(max-width: 50px) 50px,
(max-width: 341px) 341px,
(max-width: 491px) 491px,
(max-width: 607px) 607px,
(max-width: 752px) 752px,
(max-width: 894px) 894px,
(max-width: 981px) 981px,
(max-width: 987px) 987px,
(max-width: 1000px) 1000px, 100vw"
  >
  <source
    type="image/jpeg"
    srcset="https://res.cloudinary.com/paulapplegate-com/image/upload/c_limit,w_50/f_jpg/grigorii-shcheglov-door_ikjqgo.jpg 50w,
https://res.cloudinary.com/paulapplegate-com/image/upload/c_limit,w_341/f_jpg/grigorii-shcheglov-door_ikjqgo.jpg 341w,
https://res.cloudinary.com/paulapplegate-com/image/upload/c_limit,w_491/f_jpg/grigorii-shcheglov-door_ikjqgo.jpg 491w,
https://res.cloudinary.com/paulapplegate-com/image/upload/c_limit,w_607/f_jpg/grigorii-shcheglov-door_ikjqgo.jpg 607w,
https://res.cloudinary.com/paulapplegate-com/image/upload/c_limit,w_752/f_jpg/grigorii-shcheglov-door_ikjqgo.jpg 752w,
https://res.cloudinary.com/paulapplegate-com/image/upload/c_limit,w_894/f_jpg/grigorii-shcheglov-door_ikjqgo.jpg 894w,
https://res.cloudinary.com/paulapplegate-com/image/upload/c_limit,w_981/f_jpg/grigorii-shcheglov-door_ikjqgo.jpg 981w,
https://res.cloudinary.com/paulapplegate-com/image/upload/c_limit,w_987/f_jpg/grigorii-shcheglov-door_ikjqgo.jpg 987w,
https://res.cloudinary.com/paulapplegate-com/image/upload/c_limit,w_1000/f_jpg/grigorii-shcheglov-door_ikjqgo.jpg 1000w"
    sizes="(max-width: 50px) 50px,
(max-width: 341px) 341px,
(max-width: 491px) 491px,
(max-width: 607px) 607px,
(max-width: 752px) 752px,
(max-width: 894px) 894px,
(max-width: 981px) 981px,
(max-width: 987px) 987px,
(max-width: 1000px) 1000px, 100vw"
  >
  <img
    src="https://res.cloudinary.com/paulapplegate-com/image/upload/c_limit,w_50/f_jpg/grigorii-shcheglov-door_ikjqgo.jpg"
    alt="Image"
  />
</picture>

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