import { renderers } from './renderers.mjs';
import { manifest } from './manifest_DUsXrAj2.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./chunks/generic_gRa2N5Ww.mjs');
const _page1 = () => import('./chunks/index_CC_db_Er.mjs');
const _page2 = () => import('./chunks/_.._CtmIQa9D.mjs');
const _page3 = () => import('./chunks/_.._D9rjuia1.mjs');
const _page4 = () => import('./chunks/index_CPtpTAoM.mjs');
const _page5 = () => import('./chunks/_.._Dd4nbYaI.mjs');
const _page6 = () => import('./chunks/robots_D6MBQKdL.mjs');
const _page7 = () => import('./chunks/rss_Od7bV6pk.mjs');
const _page8 = () => import('./chunks/index_Db7ZwrkY.mjs');
const _page9 = () => import('./chunks/index_RyEZrdyE.mjs');
const _page10 = () => import('./chunks/index_DfsRwuc3.mjs');

const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.5.5_typescript@5.4.2/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/blog/index.astro", _page1],
    ["src/pages/blog/[...slug].astro", _page2],
    ["src/pages/legal/[...slug].astro", _page3],
    ["src/pages/projects/index.astro", _page4],
    ["src/pages/projects/[...slug].astro", _page5],
    ["src/pages/robots.txt.ts", _page6],
    ["src/pages/rss.xml.ts", _page7],
    ["src/pages/search/index.astro", _page8],
    ["src/pages/work/index.astro", _page9],
    ["src/pages/index.astro", _page10]
]);
const middleware = (_, next) => next();
const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware
});
const _args = {
    "middlewareSecret": "0961c25f-e7b2-4685-bff5-9c1ff24ad2a1"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
