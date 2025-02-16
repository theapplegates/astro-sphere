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
  <source media="(min-width: 1200px)" type="image/jxl" srcset="
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_860/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 860w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_860/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 1720w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_856/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 856w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_856/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 1712w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_837/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 837w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_837/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 1674w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_806/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 806w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_806/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 1612w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_791/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 791w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_791/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 1582w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_704/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 704w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_704/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 1408w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_690/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 690w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_690/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 1380w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_620/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 620w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_620/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 1240w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_576/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 576w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_576/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 1152w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_538/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 538w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_538/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 1076w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_470/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 470w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_470/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 940w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_428/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 428w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_428/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 856w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_371/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 371w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_371/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 742w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_332/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 332w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_332/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 664w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_258/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 258w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_258/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 516w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_189/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 189w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_189/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 378w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_100/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 100w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_100/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 200w
  " sizes="(min-width: 1200px) 40vw, 100vw"/>
  <source media="(min-width: 1200px)" type="image/avif" srcset="
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_860/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 860w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_860/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 1720w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_856/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 856w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_856/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 1712w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_837/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 837w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_837/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 1674w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_806/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 806w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_806/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 1612w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_791/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 791w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_791/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 1582w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_704/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 704w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_704/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 1408w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_690/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 690w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_690/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 1380w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_620/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 620w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_620/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 1240w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_576/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 576w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_576/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 1152w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_538/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 538w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_538/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 1076w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_470/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 470w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_470/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 940w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_428/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 428w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_428/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 856w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_371/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 371w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_371/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 742w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_332/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 332w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_332/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 664w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_258/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 258w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_258/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 516w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_189/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 189w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_189/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 378w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_100/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 100w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_100/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 200w
  " sizes="(min-width: 1200px) 40vw, 100vw"/>
  <source media="(min-width: 1200px)" type="image/jpeg" srcset="
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_860/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 860w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_860/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 1720w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_856/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 856w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_856/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 1712w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_837/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 837w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_837/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 1674w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_806/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 806w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_806/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 1612w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_791/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 791w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_791/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 1582w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_704/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 704w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_704/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 1408w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_690/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 690w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_690/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 1380w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_620/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 620w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_620/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 1240w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_576/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 576w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_576/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 1152w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_538/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 538w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_538/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 1076w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_470/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 470w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_470/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 940w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_428/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 428w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_428/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 856w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_371/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 371w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_371/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 742w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_332/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 332w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_332/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 664w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_258/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 258w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_258/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 516w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_189/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 189w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_189/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 378w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_100/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 100w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_scale,w_100/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 200w
  " sizes="(min-width: 1200px) 40vw, 100vw"/>
  <source media="(min-width: 992px) and (max-width: 1199px)" type="image/jxl" srcset="
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_1290/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 1290w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_1290/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 2580w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_1285/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 1285w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_1285/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 2570w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_1255/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 1255w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_1255/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 2510w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_1209/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 1209w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_1209/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 2418w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_1186/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 1186w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_1186/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 2372w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_1056/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 1056w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_1056/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 2112w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_1036/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 1036w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_1036/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 2072w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_930/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 930w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_930/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 1860w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_864/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 864w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_864/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 1728w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_807/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 807w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_807/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 1614w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_705/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 705w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_705/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 1410w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_642/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 642w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_642/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 1284w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_556/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 556w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_556/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 1112w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_499/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 499w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_499/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 998w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_388/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 388w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_388/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 776w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_283/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 283w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_283/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 566w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_150/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 150w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_150/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 300w
  " sizes="(min-width: 1200px) 60vw, 100vw"/>
  <source media="(min-width: 992px) and (max-width: 1199px)" type="image/avif" srcset="
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_1290/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 1290w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_1290/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 2580w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_1285/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 1285w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_1285/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 2570w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_1255/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 1255w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_1255/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 2510w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_1209/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 1209w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_1209/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 2418w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_1186/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 1186w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_1186/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 2372w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_1056/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 1056w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_1056/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 2112w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_1036/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 1036w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_1036/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 2072w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_930/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 930w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_930/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 1860w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_864/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 864w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_864/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 1728w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_807/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 807w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_807/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 1614w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_705/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 705w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_705/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 1410w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_642/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 642w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_642/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 1284w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_556/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 556w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_556/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 1112w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_499/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 499w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_499/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 998w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_388/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 388w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_388/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 776w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_283/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 283w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_283/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 566w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_150/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 150w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_150/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 300w
  " sizes="(min-width: 1200px) 60vw, 100vw"/>
  <source media="(min-width: 992px) and (max-width: 1199px)" type="image/jpeg" srcset="
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_1290/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 1290w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_1290/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 2580w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_1285/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 1285w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_1285/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 2570w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_1255/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 1255w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_1255/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 2510w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_1209/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 1209w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_1209/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 2418w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_1186/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 1186w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_1186/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 2372w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_1056/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 1056w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_1056/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 2112w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_1036/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 1036w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_1036/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 2072w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_930/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 930w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_930/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 1860w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_864/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 864w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_864/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 1728w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_807/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 807w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_807/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 1614w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_705/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 705w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_705/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 1410w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_642/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 642w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_642/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 1284w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_556/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 556w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_556/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 1112w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_499/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 499w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_499/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 998w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_388/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 388w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_388/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 776w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_283/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 283w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_283/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 566w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_150/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 150w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_16:9/c_scale,w_150/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 300w
  " sizes="(min-width: 1200px) 60vw, 100vw"/>
  <source media="(min-width: 768px) and (max-width: 991px)" type="image/jxl" srcset="
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_1505/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 1505w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_1505/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 3010w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_1499/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 1499w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_1499/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 2998w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_1465/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 1465w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_1465/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 2930w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_1411/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 1411w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_1411/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 2822w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_1384/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 1384w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_1384/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 2768w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_1232/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 1232w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_1232/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 2464w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_1208/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 1208w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_1208/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 2416w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_1085/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 1085w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_1085/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 2170w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_1008/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 1008w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_1008/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 2016w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_942/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 942w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_942/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 1884w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_823/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 823w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_823/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 1646w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_749/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 749w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_749/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 1498w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_649/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 649w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_649/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 1298w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_582/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 582w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_582/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 1164w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_452/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 452w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_452/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 904w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_331/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 331w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_331/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 662w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_175/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 175w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_175/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 350w
  " sizes="(min-width: 1200px) 70vw, 100vw"/>
  <source media="(min-width: 768px) and (max-width: 991px)" type="image/avif" srcset="
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_1505/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 1505w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_1505/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 3010w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_1499/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 1499w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_1499/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 2998w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_1465/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 1465w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_1465/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 2930w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_1411/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 1411w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_1411/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 2822w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_1384/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 1384w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_1384/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 2768w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_1232/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 1232w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_1232/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 2464w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_1208/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 1208w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_1208/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 2416w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_1085/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 1085w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_1085/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 2170w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_1008/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 1008w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_1008/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 2016w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_942/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 942w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_942/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 1884w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_823/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 823w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_823/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 1646w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_749/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 749w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_749/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 1498w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_649/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 649w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_649/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 1298w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_582/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 582w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_582/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 1164w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_452/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 452w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_452/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 904w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_331/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 331w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_331/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 662w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_175/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 175w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_175/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 350w
  " sizes="(min-width: 1200px) 70vw, 100vw"/>
  <source media="(min-width: 768px) and (max-width: 991px)" type="image/jpeg" srcset="
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_1505/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 1505w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_1505/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 3010w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_1499/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 1499w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_1499/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 2998w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_1465/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 1465w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_1465/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 2930w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_1411/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 1411w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_1411/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 2822w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_1384/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 1384w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_1384/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 2768w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_1232/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 1232w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_1232/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 2464w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_1208/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 1208w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_1208/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 2416w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_1085/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 1085w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_1085/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 2170w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_1008/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 1008w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_1008/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 2016w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_942/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 942w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_942/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 1884w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_823/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 823w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_823/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 1646w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_749/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 749w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_749/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 1498w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_649/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 649w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_649/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 1298w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_582/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 582w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_582/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 1164w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_452/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 452w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_452/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 904w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_331/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 331w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_331/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 662w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_175/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 175w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_4:3/c_scale,w_175/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 350w
  " sizes="(min-width: 1200px) 70vw, 100vw"/>
  <source media="(max-width: 767px)" type="image/jxl" srcset="
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_2150/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 2150w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_2150/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 4300w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_2142/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 2142w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_2142/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 4284w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_2093/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 2093w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_2093/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 4186w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_2016/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 2016w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_2016/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 4032w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_1978/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 1978w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_1978/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 3956w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_1760/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 1760w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_1760/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 3520w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_1727/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 1727w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_1727/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 3454w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_1550/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 1550w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_1550/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 3100w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_1441/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 1441w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_1441/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 2882w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_1346/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 1346w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_1346/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 2692w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_1176/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 1176w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_1176/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 2352w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_1071/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 1071w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_1071/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 2142w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_928/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 928w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_928/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 1856w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_832/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 832w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_832/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 1664w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_647/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 647w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_647/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 1294w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_473/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 473w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_473/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 946w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_250/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 250w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_250/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl 500w
  " sizes="(min-width: 1200px) 100vw, 100vw"/>
  <source media="(max-width: 767px)" type="image/avif" srcset="
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_2150/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 2150w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_2150/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 4300w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_2142/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 2142w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_2142/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 4284w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_2093/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 2093w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_2093/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 4186w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_2016/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 2016w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_2016/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 4032w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_1978/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 1978w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_1978/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 3956w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_1760/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 1760w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_1760/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 3520w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_1727/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 1727w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_1727/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 3454w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_1550/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 1550w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_1550/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 3100w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_1441/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 1441w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_1441/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 2882w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_1346/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 1346w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_1346/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 2692w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_1176/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 1176w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_1176/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 2352w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_1071/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 1071w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_1071/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 2142w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_928/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 928w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_928/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 1856w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_832/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 832w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_832/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 1664w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_647/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 647w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_647/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 1294w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_473/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 473w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_473/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 946w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_250/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 250w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_250/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.avif 500w
  " sizes="(min-width: 1200px) 100vw, 100vw"/>
  <source media="(max-width: 767px)" type="image/jpeg" srcset="
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_2150/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 2150w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_2150/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 4300w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_2142/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 2142w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_2142/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 4284w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_2093/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 2093w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_2093/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 4186w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_2016/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 2016w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_2016/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 4032w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_1978/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 1978w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_1978/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 3956w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_1760/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 1760w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_1760/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 3520w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_1727/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 1727w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_1727/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 3454w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_1550/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 1550w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_1550/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 3100w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_1441/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 1441w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_1441/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 2882w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_1346/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 1346w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_1346/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 2692w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_1176/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 1176w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_1176/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 2352w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_1071/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 1071w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_1071/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 2142w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_928/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 928w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_928/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 1856w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_832/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 832w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_832/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 1664w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_647/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 647w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_647/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 1294w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_473/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 473w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_473/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 946w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_250/e_shadow:75,x_20,y_20/dpr_1.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 250w,
    https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_250/e_shadow:75,x_20,y_20/dpr_2.0/v1739746935/ygvsb9l5dx0pb6vs6zxh.jpeg 500w
  " sizes="(min-width: 1200px) 100vw, 100vw"/>
  <img src="https://res.cloudinary.com/paulapplegate-com/image/upload/c_fill,ar_1:1/c_scale,w_250/e_shadow:75,x_20,y_20/v1739746935/ygvsb9l5dx0pb6vs6zxh.jxl" alt="Responsive Image" loading="lazy"></img>
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