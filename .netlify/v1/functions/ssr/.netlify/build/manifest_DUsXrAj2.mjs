import './chunks/astro_DpjhNEO4.mjs';
import 'clsx';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at ".concat(i));
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at ".concat(j));
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at ".concat(j));
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at ".concat(i));
            if (!pattern)
                throw new TypeError("Missing pattern at ".concat(i));
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^".concat(escapeString(options.delimiter || "/#?"), "]+?");
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
    };
    var consumeText = function () {
        var result = "";
        var value;
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || "",
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || "",
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:".concat(token.pattern, ")$"), reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"".concat(token.name, "\" to not repeat, but got an array"));
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"".concat(token.name, "\" to not be empty"));
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"".concat(token.name, "\" to match \"").concat(token.pattern, "\", but got \"").concat(segment, "\""));
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"".concat(token.name, "\" to match \"").concat(token.pattern, "\", but got \"").concat(segment, "\""));
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"".concat(token.name, "\" to be ").concat(typeOfMessage));
        }
        return path;
    };
}
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@4.5.5_typescript@5.4.2/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BGfjo5mV.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.5YIpsmuY.css"}],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BGfjo5mV.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.5YIpsmuY.css"}],"routeData":{"route":"/projects","isIndex":true,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/index.astro","pathname":"/projects","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/robots.txt","isIndex":false,"type":"endpoint","pattern":"^\\/robots\\.txt\\/?$","segments":[[{"content":"robots.txt","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/robots.txt.ts","pathname":"/robots.txt","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.ts","pathname":"/rss.xml","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BGfjo5mV.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.5YIpsmuY.css"}],"routeData":{"route":"/search","isIndex":true,"type":"page","pattern":"^\\/search\\/?$","segments":[[{"content":"search","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/search/index.astro","pathname":"/search","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BGfjo5mV.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.5YIpsmuY.css"}],"routeData":{"route":"/work","isIndex":true,"type":"page","pattern":"^\\/work\\/?$","segments":[[{"content":"work","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/work/index.astro","pathname":"/work","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.fOzBosgT.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.5YIpsmuY.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://the-sphere.paulapplegate.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/thor3/Movies/test22/astro-sphere/src/layouts/ArticleBottomLayout.astro",{"propagation":"in-tree","containsHead":false}],["/Users/thor3/Movies/test22/astro-sphere/src/pages/blog/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/thor3/Movies/test22/astro-sphere/src/pages/projects/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/projects/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/thor3/Movies/test22/astro-sphere/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/thor3/Movies/test22/astro-sphere/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/thor3/Movies/test22/astro-sphere/src/pages/legal/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/legal/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/thor3/Movies/test22/astro-sphere/src/pages/projects/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/projects/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/thor3/Movies/test22/astro-sphere/src/pages/rss.xml.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@ts",{"propagation":"in-tree","containsHead":false}],["/Users/thor3/Movies/test22/astro-sphere/src/pages/search/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/search/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/thor3/Movies/test22/astro-sphere/src/pages/work/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/work/index@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","/src/pages/robots.txt.ts":"chunks/pages/robots_DlGuI1Rt.mjs","/src/pages/rss.xml.ts":"chunks/pages/rss_QP3e_J6s.mjs","\u0000@astrojs-manifest":"manifest_DUsXrAj2.mjs","\u0000@astro-page:node_modules/.pnpm/astro@4.5.5_typescript@5.4.2/node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_gRa2N5Ww.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"chunks/index_CC_db_Er.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"chunks/_.._CtmIQa9D.mjs","\u0000@astro-page:src/pages/legal/[...slug]@_@astro":"chunks/_.._D9rjuia1.mjs","\u0000@astro-page:src/pages/projects/index@_@astro":"chunks/index_CPtpTAoM.mjs","\u0000@astro-page:src/pages/projects/[...slug]@_@astro":"chunks/_.._Dd4nbYaI.mjs","\u0000@astro-page:src/pages/robots.txt@_@ts":"chunks/robots_D6MBQKdL.mjs","\u0000@astro-page:src/pages/rss.xml@_@ts":"chunks/rss_Od7bV6pk.mjs","\u0000@astro-page:src/pages/search/index@_@astro":"chunks/index_Db7ZwrkY.mjs","\u0000@astro-page:src/pages/work/index@_@astro":"chunks/index_RyEZrdyE.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_DfsRwuc3.mjs","/Users/thor3/Movies/test22/astro-sphere/src/content/blog/01-astro-sphere-file-structure/index.md?astroContentCollectionEntry=true":"chunks/index_BszEXySz.mjs","/Users/thor3/Movies/test22/astro-sphere/src/content/blog/02-astro-sphere-getting-started/index.md?astroContentCollectionEntry=true":"chunks/index_BYp8xPWR.mjs","/Users/thor3/Movies/test22/astro-sphere/src/content/blog/03-astro-sphere-add-new-post-or-projects/index.md?astroContentCollectionEntry=true":"chunks/index_CsQWrjt_.mjs","/Users/thor3/Movies/test22/astro-sphere/src/content/blog/04-astro-sphere-writing-markdown/index.md?astroContentCollectionEntry=true":"chunks/index_ij8minnj.mjs","/Users/thor3/Movies/test22/astro-sphere/src/content/blog/05-astro-sphere-writing-mdx/index.mdx?astroContentCollectionEntry=true":"chunks/index_BbRN2U0E.mjs","/Users/thor3/Movies/test22/astro-sphere/src/content/blog/06-astro-sphere-social-links/index.md?astroContentCollectionEntry=true":"chunks/index_Bi2_0DcX.mjs","/Users/thor3/Movies/test22/astro-sphere/src/content/legal/privacy.md?astroContentCollectionEntry=true":"chunks/privacy_Csj4zl4G.mjs","/Users/thor3/Movies/test22/astro-sphere/src/content/legal/terms.md?astroContentCollectionEntry=true":"chunks/terms_DN65vrkE.mjs","/Users/thor3/Movies/test22/astro-sphere/src/content/projects/project-1/index.md?astroContentCollectionEntry=true":"chunks/index_BuprsuYf.mjs","/Users/thor3/Movies/test22/astro-sphere/src/content/projects/project-2/index.md?astroContentCollectionEntry=true":"chunks/index_Q8FKBSfB.mjs","/Users/thor3/Movies/test22/astro-sphere/src/content/projects/project-3/index.md?astroContentCollectionEntry=true":"chunks/index_CLts60Sl.mjs","/Users/thor3/Movies/test22/astro-sphere/src/content/projects/project-4/index.md?astroContentCollectionEntry=true":"chunks/index_DkMEzd8L.mjs","/Users/thor3/Movies/test22/astro-sphere/src/content/work/apple.md?astroContentCollectionEntry=true":"chunks/apple_B4bfBmE9.mjs","/Users/thor3/Movies/test22/astro-sphere/src/content/work/facebook.md?astroContentCollectionEntry=true":"chunks/facebook_C6ftUHvj.mjs","/Users/thor3/Movies/test22/astro-sphere/src/content/work/google.md?astroContentCollectionEntry=true":"chunks/google_B5Uk54hd.mjs","/Users/thor3/Movies/test22/astro-sphere/src/content/work/mcdonalds.md?astroContentCollectionEntry=true":"chunks/mcdonalds_BS-izTcR.mjs","/Users/thor3/Movies/test22/astro-sphere/src/content/blog/01-astro-sphere-file-structure/index.md?astroPropagatedAssets":"chunks/index_Be42G9tY.mjs","/Users/thor3/Movies/test22/astro-sphere/src/content/blog/02-astro-sphere-getting-started/index.md?astroPropagatedAssets":"chunks/index_DuC-3EUj.mjs","/Users/thor3/Movies/test22/astro-sphere/src/content/blog/03-astro-sphere-add-new-post-or-projects/index.md?astroPropagatedAssets":"chunks/index_BGotsKvc.mjs","/Users/thor3/Movies/test22/astro-sphere/src/content/blog/04-astro-sphere-writing-markdown/index.md?astroPropagatedAssets":"chunks/index_D7RZV8eb.mjs","/Users/thor3/Movies/test22/astro-sphere/src/content/blog/05-astro-sphere-writing-mdx/index.mdx?astroPropagatedAssets":"chunks/index_kPXq7g2T.mjs","/Users/thor3/Movies/test22/astro-sphere/src/content/blog/06-astro-sphere-social-links/index.md?astroPropagatedAssets":"chunks/index_CEjnU9WK.mjs","/Users/thor3/Movies/test22/astro-sphere/src/content/legal/privacy.md?astroPropagatedAssets":"chunks/privacy_DKV3QMXt.mjs","/Users/thor3/Movies/test22/astro-sphere/src/content/legal/terms.md?astroPropagatedAssets":"chunks/terms_wsSmzLis.mjs","/Users/thor3/Movies/test22/astro-sphere/src/content/projects/project-1/index.md?astroPropagatedAssets":"chunks/index_CmvojJhd.mjs","/Users/thor3/Movies/test22/astro-sphere/src/content/projects/project-2/index.md?astroPropagatedAssets":"chunks/index_Qj_g_rHc.mjs","/Users/thor3/Movies/test22/astro-sphere/src/content/projects/project-3/index.md?astroPropagatedAssets":"chunks/index__TL8D0TJ.mjs","/Users/thor3/Movies/test22/astro-sphere/src/content/projects/project-4/index.md?astroPropagatedAssets":"chunks/index_CmXlBArs.mjs","/Users/thor3/Movies/test22/astro-sphere/src/content/work/apple.md?astroPropagatedAssets":"chunks/apple_KA8SwHbJ.mjs","/Users/thor3/Movies/test22/astro-sphere/src/content/work/facebook.md?astroPropagatedAssets":"chunks/facebook_HalFAw5F.mjs","/Users/thor3/Movies/test22/astro-sphere/src/content/work/google.md?astroPropagatedAssets":"chunks/google_Ivez1BrQ.mjs","/Users/thor3/Movies/test22/astro-sphere/src/content/work/mcdonalds.md?astroPropagatedAssets":"chunks/mcdonalds_CP88ZZus.mjs","/Users/thor3/Movies/test22/astro-sphere/src/content/blog/01-astro-sphere-file-structure/index.md":"chunks/index_DFxlfMK1.mjs","/Users/thor3/Movies/test22/astro-sphere/src/content/blog/02-astro-sphere-getting-started/index.md":"chunks/index_k8zHrI9w.mjs","/Users/thor3/Movies/test22/astro-sphere/src/content/blog/03-astro-sphere-add-new-post-or-projects/index.md":"chunks/index_uvL0VqAk.mjs","/Users/thor3/Movies/test22/astro-sphere/src/content/blog/04-astro-sphere-writing-markdown/index.md":"chunks/index_DnaG2_OX.mjs","/Users/thor3/Movies/test22/astro-sphere/src/content/blog/05-astro-sphere-writing-mdx/index.mdx":"chunks/index_CZX7IEd3.mjs","/Users/thor3/Movies/test22/astro-sphere/src/content/blog/06-astro-sphere-social-links/index.md":"chunks/index_CMao5tuE.mjs","/Users/thor3/Movies/test22/astro-sphere/src/content/legal/privacy.md":"chunks/privacy_DS0F5sdi.mjs","/Users/thor3/Movies/test22/astro-sphere/src/content/legal/terms.md":"chunks/terms_DdQI4q4P.mjs","/Users/thor3/Movies/test22/astro-sphere/src/content/projects/project-1/index.md":"chunks/index_BdJWBShX.mjs","/Users/thor3/Movies/test22/astro-sphere/src/content/projects/project-2/index.md":"chunks/index_UOaQJS2U.mjs","/Users/thor3/Movies/test22/astro-sphere/src/content/projects/project-3/index.md":"chunks/index_EjR8_mQM.mjs","/Users/thor3/Movies/test22/astro-sphere/src/content/projects/project-4/index.md":"chunks/index_DQNHQ1QI.mjs","/Users/thor3/Movies/test22/astro-sphere/src/content/work/apple.md":"chunks/apple_CBtJES2K.mjs","/Users/thor3/Movies/test22/astro-sphere/src/content/work/facebook.md":"chunks/facebook_CbhH4cGk.mjs","/Users/thor3/Movies/test22/astro-sphere/src/content/work/google.md":"chunks/google_C5ncu-qP.mjs","/Users/thor3/Movies/test22/astro-sphere/src/content/work/mcdonalds.md":"chunks/mcdonalds_BmKaGIXc.mjs","@components/Counter":"_astro/Counter.B9wBqa1-.js","@astrojs/solid-js/client.js":"_astro/client.B5R7NybJ.js","/astro/hoisted.js?q=0":"_astro/hoisted.fOzBosgT.js","@components/Projects":"_astro/Projects.DORZw3-m.js","@components/Blog":"_astro/Blog.BAyHWaKR.js","/astro/hoisted.js?q=1":"_astro/hoisted.BGfjo5mV.js","@components/Search":"_astro/Search.UqB7Csu7.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/spongebob.dGmXfKPV.png","/_astro/_slug_.5YIpsmuY.css","/brand.svg","/favicon.svg","/open-graph.jpg","/robots.txt","/social.svg","/stack.svg","/ui.svg","/_astro/ArrowCard.C8dGl-Tq.js","/_astro/Blog.BAyHWaKR.js","/_astro/Counter.B9wBqa1-.js","/_astro/Projects.DORZw3-m.js","/_astro/Search.UqB7Csu7.js","/_astro/client.B5R7NybJ.js","/_astro/hoisted.BGfjo5mV.js","/_astro/hoisted.fOzBosgT.js","/_astro/web.DPLfxFpd.js","/fonts/atkinson-bold.woff","/fonts/atkinson-regular.woff","/js/animate.js","/js/bg.js","/js/scroll.js","/js/theme.js"],"buildFormat":"directory"});

export { manifest };
