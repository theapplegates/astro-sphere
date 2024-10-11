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
      https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2150/e_shadow:75,x_20,y_20/v1728579918/mb3sat26h8fjwho53e3w.jxl 2150w,
      https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2131/e_shadow:75,x_20,y_20/v1728579918/mb3sat26h8fjwho53e3w.jxl 2131w,
      https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2051/e_shadow:75,x_20,y_20/v1728579918/mb3sat26h8fjwho53e3w.jxl 2051w,
      https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1983/e_shadow:75,x_20,y_20/v1728579918/mb3sat26h8fjwho53e3w.jxl 1983w,
      https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1928/e_shadow:75,x_20,y_20/v1728579918/mb3sat26h8fjwho53e3w.jxl 1928w,
      https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1826/e_shadow:75,x_20,y_20/v1728579918/mb3sat26h8fjwho53e3w.jxl 1826w,
      https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1625/e_shadow:75,x_20,y_20/v1728579918/mb3sat26h8fjwho53e3w.jxl 1625w,
      https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1506/e_shadow:75,x_20,y_20/v1728579918/mb3sat26h8fjwho53e3w.jxl 1506w,
      https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1361/e_shadow:75,x_20,y_20/v1728579918/mb3sat26h8fjwho53e3w.jxl 1361w,
      https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1207/e_shadow:75,x_20,y_20/v1728579918/mb3sat26h8fjwho53e3w.jxl 1207w,
      https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1016/e_shadow:75,x_20,y_20/v1728579918/mb3sat26h8fjwho53e3w.jxl 1016w,
      https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_828/e_shadow:75,x_20,y_20/v1728579918/mb3sat26h8fjwho53e3w.jxl 828w,
      https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_596/e_shadow:75,x_20,y_20/v1728579918/mb3sat26h8fjwho53e3w.jxl 596w,
      https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_250/e_shadow:75,x_20,y_20/v1728579918/mb3sat26h8fjwho53e3w.jxl 250w
    "/>
    <source type="image/avif" srcset="
      https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2150/e_shadow:75,x_20,y_20/v1728579918/mb3sat26h8fjwho53e3w.avif 2150w,
      https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2131/e_shadow:75,x_20,y_20/v1728579918/mb3sat26h8fjwho53e3w.avif 2131w,
      https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2051/e_shadow:75,x_20,y_20/v1728579918/mb3sat26h8fjwho53e3w.avif 2051w,
      https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1983/e_shadow:75,x_20,y_20/v1728579918/mb3sat26h8fjwho53e3w.avif 1983w,
      https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1928/e_shadow:75,x_20,y_20/v1728579918/mb3sat26h8fjwho53e3w.avif 1928w,
      https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1826/e_shadow:75,x_20,y_20/v1728579918/mb3sat26h8fjwho53e3w.avif 1826w,
      https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1625/e_shadow:75,x_20,y_20/v1728579918/mb3sat26h8fjwho53e3w.avif 1625w,
      https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1506/e_shadow:75,x_20,y_20/v1728579918/mb3sat26h8fjwho53e3w.avif 1506w,
      https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1361/e_shadow:75,x_20,y_20/v1728579918/mb3sat26h8fjwho53e3w.avif 1361w,
      https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1207/e_shadow:75,x_20,y_20/v1728579918/mb3sat26h8fjwho53e3w.avif 1207w,
      https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1016/e_shadow:75,x_20,y_20/v1728579918/mb3sat26h8fjwho53e3w.avif 1016w,
      https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_828/e_shadow:75,x_20,y_20/v1728579918/mb3sat26h8fjwho53e3w.avif 828w,
      https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_596/e_shadow:75,x_20,y_20/v1728579918/mb3sat26h8fjwho53e3w.avif 596w,
      https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_250/e_shadow:75,x_20,y_20/v1728579918/mb3sat26h8fjwho53e3w.avif 250w
    "/>
    <source type="image/webp" srcset="
      https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2150/e_shadow:75,x_20,y_20/v1728579918/mb3sat26h8fjwho53e3w.webp 2150w,
      https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2131/e_shadow:75,x_20,y_20/v1728579918/mb3sat26h8fjwho53e3w.webp 2131w,
      https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2051/e_shadow:75,x_20,y_20/v1728579918/mb3sat26h8fjwho53e3w.webp 2051w,
      https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1983/e_shadow:75,x_20,y_20/v1728579918/mb3sat26h8fjwho53e3w.webp 1983w,
      https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1928/e_shadow:75,x_20,y_20/v1728579918/mb3sat26h8fjwho53e3w.webp 1928w,
      https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1826/e_shadow:75,x_20,y_20/v1728579918/mb3sat26h8fjwho53e3w.webp 1826w,
      https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1625/e_shadow:75,x_20,y_20/v1728579918/mb3sat26h8fjwho53e3w.webp 1625w,
      https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1506/e_shadow:75,x_20,y_20/v1728579918/mb3sat26h8fjwho53e3w.webp 1506w,
      https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1361/e_shadow:75,x_20,y_20/v1728579918/mb3sat26h8fjwho53e3w.webp 1361w,
      https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1207/e_shadow:75,x_20,y_20/v1728579918/mb3sat26h8fjwho53e3w.webp 1207w,
      https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1016/e_shadow:75,x_20,y_20/v1728579918/mb3sat26h8fjwho53e3w.webp 1016w,
      https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_828/e_shadow:75,x_20,y_20/v1728579918/mb3sat26h8fjwho53e3w.webp 828w,
      https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_596/e_shadow:75,x_20,y_20/v1728579918/mb3sat26h8fjwho53e3w.webp 596w,
      https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_250/e_shadow:75,x_20,y_20/v1728579918/mb3sat26h8fjwho53e3w.webp 250w
    "/>
    <source type="image/jpeg" srcset="
      https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2150/e_shadow:75,x_20,y_20/v1728579918/mb3sat26h8fjwho53e3w.jpeg 2150w,
      https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2131/e_shadow:75,x_20,y_20/v1728579918/mb3sat26h8fjwho53e3w.jpeg 2131w,
      https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2051/e_shadow:75,x_20,y_20/v1728579918/mb3sat26h8fjwho53e3w.jpeg 2051w,
      https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1983/e_shadow:75,x_20,y_20/v1728579918/mb3sat26h8fjwho53e3w.jpeg 1983w,
      https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1928/e_shadow:75,x_20,y_20/v1728579918/mb3sat26h8fjwho53e3w.jpeg 1928w,
      https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1826/e_shadow:75,x_20,y_20/v1728579918/mb3sat26h8fjwho53e3w.jpeg 1826w,
      https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1625/e_shadow:75,x_20,y_20/v1728579918/mb3sat26h8fjwho53e3w.jpeg 1625w,
      https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1506/e_shadow:75,x_20,y_20/v1728579918/mb3sat26h8fjwho53e3w.jpeg 1506w,
      https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1361/e_shadow:75,x_20,y_20/v1728579918/mb3sat26h8fjwho53e3w.jpeg 1361w,
      https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1207/e_shadow:75,x_20,y_20/v1728579918/mb3sat26h8fjwho53e3w.jpeg 1207w,
      https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1016/e_shadow:75,x_20,y_20/v1728579918/mb3sat26h8fjwho53e3w.jpeg 1016w,
      https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_828/e_shadow:75,x_20,y_20/v1728579918/mb3sat26h8fjwho53e3w.jpeg 828w,
      https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_596/e_shadow:75,x_20,y_20/v1728579918/mb3sat26h8fjwho53e3w.jpeg 596w,
      https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_250/e_shadow:75,x_20,y_20/v1728579918/mb3sat26h8fjwho53e3w.jpeg 250w
    "/>
    <img src="https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_250/e_shadow:75,x_20,y_20/v1728579918/mb3sat26h8fjwho53e3w.jxl" alt="Responsive Image">
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
  </p>


<picture>
  <source type="image/jxl" srcset="
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2150/e_shadow:75,x_20,y_20/v1728579270/gkmklaf2hxxb6nguodvj.jxl 2150w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2146/e_shadow:75,x_20,y_20/v1728579270/gkmklaf2hxxb6nguodvj.jxl 2146w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2107/e_shadow:75,x_20,y_20/v1728579270/gkmklaf2hxxb6nguodvj.jxl 2107w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2017/e_shadow:75,x_20,y_20/v1728579270/gkmklaf2hxxb6nguodvj.jxl 2017w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1919/e_shadow:75,x_20,y_20/v1728579270/gkmklaf2hxxb6nguodvj.jxl 1919w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1583/e_shadow:75,x_20,y_20/v1728579270/gkmklaf2hxxb6nguodvj.jxl 1583w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1653/e_shadow:75,x_20,y_20/v1728579270/gkmklaf2hxxb6nguodvj.jxl 1653w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1530/e_shadow:75,x_20,y_20/v1728579270/gkmklaf2hxxb6nguodvj.jxl 1530w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1523/e_shadow:75,x_20,y_20/v1728579270/gkmklaf2hxxb6nguodvj.jxl 1523w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1484/e_shadow:75,x_20,y_20/v1728579270/gkmklaf2hxxb6nguodvj.jxl 1484w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1404/e_shadow:75,x_20,y_20/v1728579270/gkmklaf2hxxb6nguodvj.jxl 1404w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1324/e_shadow:75,x_20,y_20/v1728579270/gkmklaf2hxxb6nguodvj.jxl 1324w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_795/e_shadow:75,x_20,y_20/v1728579270/gkmklaf2hxxb6nguodvj.jxl 795w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_712/e_shadow:75,x_20,y_20/v1728579270/gkmklaf2hxxb6nguodvj.jxl 712w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_525/e_shadow:75,x_20,y_20/v1728579270/gkmklaf2hxxb6nguodvj.jxl 525w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_250/e_shadow:75,x_20,y_20/v1728579270/gkmklaf2hxxb6nguodvj.jxl 250w
  "/>
  <source type="image/avif" srcset="
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2150/e_shadow:75,x_20,y_20/v1728579270/gkmklaf2hxxb6nguodvj.avif 2150w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2146/e_shadow:75,x_20,y_20/v1728579270/gkmklaf2hxxb6nguodvj.avif 2146w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2107/e_shadow:75,x_20,y_20/v1728579270/gkmklaf2hxxb6nguodvj.avif 2107w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2017/e_shadow:75,x_20,y_20/v1728579270/gkmklaf2hxxb6nguodvj.avif 2017w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1919/e_shadow:75,x_20,y_20/v1728579270/gkmklaf2hxxb6nguodvj.avif 1919w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1583/e_shadow:75,x_20,y_20/v1728579270/gkmklaf2hxxb6nguodvj.avif 1583w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1653/e_shadow:75,x_20,y_20/v1728579270/gkmklaf2hxxb6nguodvj.avif 1653w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1530/e_shadow:75,x_20,y_20/v1728579270/gkmklaf2hxxb6nguodvj.avif 1530w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1523/e_shadow:75,x_20,y_20/v1728579270/gkmklaf2hxxb6nguodvj.avif 1523w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1484/e_shadow:75,x_20,y_20/v1728579270/gkmklaf2hxxb6nguodvj.avif 1484w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1404/e_shadow:75,x_20,y_20/v1728579270/gkmklaf2hxxb6nguodvj.avif 1404w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1324/e_shadow:75,x_20,y_20/v1728579270/gkmklaf2hxxb6nguodvj.avif 1324w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_795/e_shadow:75,x_20,y_20/v1728579270/gkmklaf2hxxb6nguodvj.avif 795w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_712/e_shadow:75,x_20,y_20/v1728579270/gkmklaf2hxxb6nguodvj.avif 712w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_525/e_shadow:75,x_20,y_20/v1728579270/gkmklaf2hxxb6nguodvj.avif 525w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_250/e_shadow:75,x_20,y_20/v1728579270/gkmklaf2hxxb6nguodvj.avif 250w
  "/>
  <source type="image/webp" srcset="
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2150/e_shadow:75,x_20,y_20/v1728579270/gkmklaf2hxxb6nguodvj.webp 2150w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2146/e_shadow:75,x_20,y_20/v1728579270/gkmklaf2hxxb6nguodvj.webp 2146w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2107/e_shadow:75,x_20,y_20/v1728579270/gkmklaf2hxxb6nguodvj.webp 2107w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2017/e_shadow:75,x_20,y_20/v1728579270/gkmklaf2hxxb6nguodvj.webp 2017w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1919/e_shadow:75,x_20,y_20/v1728579270/gkmklaf2hxxb6nguodvj.webp 1919w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1583/e_shadow:75,x_20,y_20/v1728579270/gkmklaf2hxxb6nguodvj.webp 1583w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1653/e_shadow:75,x_20,y_20/v1728579270/gkmklaf2hxxb6nguodvj.webp 1653w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1530/e_shadow:75,x_20,y_20/v1728579270/gkmklaf2hxxb6nguodvj.webp 1530w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1523/e_shadow:75,x_20,y_20/v1728579270/gkmklaf2hxxb6nguodvj.webp 1523w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1484/e_shadow:75,x_20,y_20/v1728579270/gkmklaf2hxxb6nguodvj.webp 1484w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1404/e_shadow:75,x_20,y_20/v1728579270/gkmklaf2hxxb6nguodvj.webp 1404w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1324/e_shadow:75,x_20,y_20/v1728579270/gkmklaf2hxxb6nguodvj.webp 1324w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_795/e_shadow:75,x_20,y_20/v1728579270/gkmklaf2hxxb6nguodvj.webp 795w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_712/e_shadow:75,x_20,y_20/v1728579270/gkmklaf2hxxb6nguodvj.webp 712w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_525/e_shadow:75,x_20,y_20/v1728579270/gkmklaf2hxxb6nguodvj.webp 525w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_250/e_shadow:75,x_20,y_20/v1728579270/gkmklaf2hxxb6nguodvj.webp 250w
  "/>
  <source type="image/jpeg" srcset="
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2150/e_shadow:75,x_20,y_20/v1728579270/gkmklaf2hxxb6nguodvj.jpeg 2150w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2146/e_shadow:75,x_20,y_20/v1728579270/gkmklaf2hxxb6nguodvj.jpeg 2146w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2107/e_shadow:75,x_20,y_20/v1728579270/gkmklaf2hxxb6nguodvj.jpeg 2107w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2017/e_shadow:75,x_20,y_20/v1728579270/gkmklaf2hxxb6nguodvj.jpeg 2017w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1919/e_shadow:75,x_20,y_20/v1728579270/gkmklaf2hxxb6nguodvj.jpeg 1919w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1583/e_shadow:75,x_20,y_20/v1728579270/gkmklaf2hxxb6nguodvj.jpeg 1583w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1653/e_shadow:75,x_20,y_20/v1728579270/gkmklaf2hxxb6nguodvj.jpeg 1653w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1530/e_shadow:75,x_20,y_20/v1728579270/gkmklaf2hxxb6nguodvj.jpeg 1530w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1523/e_shadow:75,x_20,y_20/v1728579270/gkmklaf2hxxb6nguodvj.jpeg 1523w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1484/e_shadow:75,x_20,y_20/v1728579270/gkmklaf2hxxb6nguodvj.jpeg 1484w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1404/e_shadow:75,x_20,y_20/v1728579270/gkmklaf2hxxb6nguodvj.jpeg 1404w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1324/e_shadow:75,x_20,y_20/v1728579270/gkmklaf2hxxb6nguodvj.jpeg 1324w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_795/e_shadow:75,x_20,y_20/v1728579270/gkmklaf2hxxb6nguodvj.jpeg 795w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_712/e_shadow:75,x_20,y_20/v1728579270/gkmklaf2hxxb6nguodvj.jpeg 712w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_525/e_shadow:75,x_20,y_20/v1728579270/gkmklaf2hxxb6nguodvj.jpeg 525w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_250/e_shadow:75,x_20,y_20/v1728579270/gkmklaf2hxxb6nguodvj.jpeg 250w
  "/>
  <img src="https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_250/e_shadow:75,x_20,y_20/v1728579270/gkmklaf2hxxb6nguodvj.jxl" alt="Responsive Image">
</picture>
  <style>
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: middle;
  }
</style>
<p style="font-size: 10px; font-style: italic;">
  <em>Photo by <a href="https://unsplash.com/photos/a-row-of-gondolas-sitting-next-to-a-wooden-pier-LQKN0a59JkM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Andrei R. Popescu</a> on 
    <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path d="M448,230.17V480H0V230.17H141.13V355.09H306.87V230.17ZM306.87,32H141.13V156.91H306.87Z"/>
    </svg>
  </em>
</p>

<picture>
  <source type="image/jxl" srcset="
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2150/e_shadow:75,x_20,y_20/v1728609985/cnqkojhoqfo7ehdclxrc.jxl 2150w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2073/e_shadow:75,x_20,y_20/v1728609985/cnqkojhoqfo7ehdclxrc.jxl 2073w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2052/e_shadow:75,x_20,y_20/v1728609985/cnqkojhoqfo7ehdclxrc.jxl 2052w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1936/e_shadow:75,x_20,y_20/v1728609985/cnqkojhoqfo7ehdclxrc.jxl 1936w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1886/e_shadow:75,x_20,y_20/v1728609985/cnqkojhoqfo7ehdclxrc.jxl 1886w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1735/e_shadow:75,x_20,y_20/v1728609985/cnqkojhoqfo7ehdclxrc.jxl 1735w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1503/e_shadow:75,x_20,y_20/v1728609985/cnqkojhoqfo7ehdclxrc.jxl 1503w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1423/e_shadow:75,x_20,y_20/v1728609985/cnqkojhoqfo7ehdclxrc.jxl 1423w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1272/e_shadow:75,x_20,y_20/v1728609985/cnqkojhoqfo7ehdclxrc.jxl 1272w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1293/e_shadow:75,x_20,y_20/v1728609985/cnqkojhoqfo7ehdclxrc.jxl 1293w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_813/e_shadow:75,x_20,y_20/v1728609985/cnqkojhoqfo7ehdclxrc.jxl 813w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_627/e_shadow:75,x_20,y_20/v1728609985/cnqkojhoqfo7ehdclxrc.jxl 627w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_463/e_shadow:75,x_20,y_20/v1728609985/cnqkojhoqfo7ehdclxrc.jxl 463w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_250/e_shadow:75,x_20,y_20/v1728609985/cnqkojhoqfo7ehdclxrc.jxl 250w
  "/>
  <source type="image/avif" srcset="
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2150/e_shadow:75,x_20,y_20/v1728609985/cnqkojhoqfo7ehdclxrc.avif 2150w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2073/e_shadow:75,x_20,y_20/v1728609985/cnqkojhoqfo7ehdclxrc.avif 2073w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2052/e_shadow:75,x_20,y_20/v1728609985/cnqkojhoqfo7ehdclxrc.avif 2052w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1936/e_shadow:75,x_20,y_20/v1728609985/cnqkojhoqfo7ehdclxrc.avif 1936w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1886/e_shadow:75,x_20,y_20/v1728609985/cnqkojhoqfo7ehdclxrc.avif 1886w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1735/e_shadow:75,x_20,y_20/v1728609985/cnqkojhoqfo7ehdclxrc.avif 1735w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1503/e_shadow:75,x_20,y_20/v1728609985/cnqkojhoqfo7ehdclxrc.avif 1503w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1423/e_shadow:75,x_20,y_20/v1728609985/cnqkojhoqfo7ehdclxrc.avif 1423w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1272/e_shadow:75,x_20,y_20/v1728609985/cnqkojhoqfo7ehdclxrc.avif 1272w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1293/e_shadow:75,x_20,y_20/v1728609985/cnqkojhoqfo7ehdclxrc.avif 1293w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_813/e_shadow:75,x_20,y_20/v1728609985/cnqkojhoqfo7ehdclxrc.avif 813w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_627/e_shadow:75,x_20,y_20/v1728609985/cnqkojhoqfo7ehdclxrc.avif 627w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_463/e_shadow:75,x_20,y_20/v1728609985/cnqkojhoqfo7ehdclxrc.avif 463w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_250/e_shadow:75,x_20,y_20/v1728609985/cnqkojhoqfo7ehdclxrc.avif 250w
  "/>
  <source type="image/webp" srcset="
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2150/e_shadow:75,x_20,y_20/v1728609985/cnqkojhoqfo7ehdclxrc.webp 2150w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2073/e_shadow:75,x_20,y_20/v1728609985/cnqkojhoqfo7ehdclxrc.webp 2073w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2052/e_shadow:75,x_20,y_20/v1728609985/cnqkojhoqfo7ehdclxrc.webp 2052w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1936/e_shadow:75,x_20,y_20/v1728609985/cnqkojhoqfo7ehdclxrc.webp 1936w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1886/e_shadow:75,x_20,y_20/v1728609985/cnqkojhoqfo7ehdclxrc.webp 1886w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1735/e_shadow:75,x_20,y_20/v1728609985/cnqkojhoqfo7ehdclxrc.webp 1735w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1503/e_shadow:75,x_20,y_20/v1728609985/cnqkojhoqfo7ehdclxrc.webp 1503w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1423/e_shadow:75,x_20,y_20/v1728609985/cnqkojhoqfo7ehdclxrc.webp 1423w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1272/e_shadow:75,x_20,y_20/v1728609985/cnqkojhoqfo7ehdclxrc.webp 1272w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1293/e_shadow:75,x_20,y_20/v1728609985/cnqkojhoqfo7ehdclxrc.webp 1293w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_813/e_shadow:75,x_20,y_20/v1728609985/cnqkojhoqfo7ehdclxrc.webp 813w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_627/e_shadow:75,x_20,y_20/v1728609985/cnqkojhoqfo7ehdclxrc.webp 627w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_463/e_shadow:75,x_20,y_20/v1728609985/cnqkojhoqfo7ehdclxrc.webp 463w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_250/e_shadow:75,x_20,y_20/v1728609985/cnqkojhoqfo7ehdclxrc.webp 250w
  "/>
  <source type="image/jpeg" srcset="
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2150/e_shadow:75,x_20,y_20/v1728609985/cnqkojhoqfo7ehdclxrc.jpeg 2150w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2073/e_shadow:75,x_20,y_20/v1728609985/cnqkojhoqfo7ehdclxrc.jpeg 2073w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_2052/e_shadow:75,x_20,y_20/v1728609985/cnqkojhoqfo7ehdclxrc.jpeg 2052w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1936/e_shadow:75,x_20,y_20/v1728609985/cnqkojhoqfo7ehdclxrc.jpeg 1936w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1886/e_shadow:75,x_20,y_20/v1728609985/cnqkojhoqfo7ehdclxrc.jpeg 1886w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1735/e_shadow:75,x_20,y_20/v1728609985/cnqkojhoqfo7ehdclxrc.jpeg 1735w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1503/e_shadow:75,x_20,y_20/v1728609985/cnqkojhoqfo7ehdclxrc.jpeg 1503w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1423/e_shadow:75,x_20,y_20/v1728609985/cnqkojhoqfo7ehdclxrc.jpeg 1423w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1272/e_shadow:75,x_20,y_20/v1728609985/cnqkojhoqfo7ehdclxrc.jpeg 1272w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_1293/e_shadow:75,x_20,y_20/v1728609985/cnqkojhoqfo7ehdclxrc.jpeg 1293w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_813/e_shadow:75,x_20,y_20/v1728609985/cnqkojhoqfo7ehdclxrc.jpeg 813w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_627/e_shadow:75,x_20,y_20/v1728609985/cnqkojhoqfo7ehdclxrc.jpeg 627w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_463/e_shadow:75,x_20,y_20/v1728609985/cnqkojhoqfo7ehdclxrc.jpeg 463w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_250/e_shadow:75,x_20,y_20/v1728609985/cnqkojhoqfo7ehdclxrc.jpeg 250w
  "/>
  <img src="https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,g_auto,x_20,y_20/c_scale,w_250/e_shadow:75,x_20,y_20/v1728609985/cnqkojhoqfo7ehdclxrc.jxl" alt="Responsive Image">
</picture>
  <style>
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: middle;
  }
</style>
<p style="font-size: 10px; font-style: italic;">
  <em>Photo by <a href="https://unsplash.com/@pixelperfectmom?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Karina Kungla</a> on 
    <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path d="M448,230.17V480H0V230.17H141.13V355.09H306.87V230.17ZM306.87,32H141.13V156.91H306.87Z"/>
    </svg>
  </em>
</p>


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