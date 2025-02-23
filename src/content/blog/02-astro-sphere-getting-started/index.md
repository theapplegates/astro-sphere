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

:root {
  --shadow-color: 0deg 0% 45%;
  --shadow-elevation-low:
    1px 0.1px 1.2px hsl(var(--shadow-color) / 0.69),
    5px 0.7px 5.9px -2.2px hsl(var(--shadow-color) / 0.78);
  --shadow-elevation-medium:
    1px 0.1px 1.2px hsl(var(--shadow-color) / 0.64),
    6.5px 0.9px 7.7px -1.1px hsl(var(--shadow-color) / 0.7),
    25px 3.6px 29.6px -2.2px hsl(var(--shadow-color) / 0.76);
  --shadow-elevation-high:
    1px 0.1px 1.2px hsl(var(--shadow-color) / 0.89),
    20.4px 3px 24.1px -0.7px hsl(var(--shadow-color) / 0.95),
    59.1px 8.6px 69.9px -1.5px hsl(var(--shadow-color) / 1),
    150px 21.7px 177.3px -2.2px hsl(var(--shadow-color) / 1);
}

/* Image and shadow classes */
img {
  box-shadow: var(--shadow-elevation-medium);
  transition: box-shadow var(--transition-duration) var(--transition-timing);
}

.shadow-low {
  box-shadow: var(--shadow-elevation-low);
}

.shadow-medium {
  box-shadow: var(--shadow-elevation-medium);
}

.shadow-high {
  box-shadow: var(--shadow-elevation-high);
}

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
