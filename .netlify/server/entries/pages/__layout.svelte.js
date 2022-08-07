var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => _layout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_78531ddc = require("../../_app/immutable/chunks/index-78531ddc.js");
const socials_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "ul.svelte-1evk3fl.svelte-1evk3fl{display:flex;flex-direction:row;justify-content:center;align-items:center;list-style:none\r\n    }ul.svelte-1evk3fl a.svelte-1evk3fl{float:none;color:#000000;text-align:center;padding:14px 16px;text-decoration:none;font-size:17px}img.svelte-1evk3fl.svelte-1evk3fl{width:30px;height:30px;opacity:1;filter:grayscale(100%)}img.svelte-1evk3fl.svelte-1evk3fl:hover{opacity:.2}",
  map: null
};
const Socials = (0, import_index_78531ddc.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<ul class="${"svelte-1evk3fl"}"><li><a href="${"https://github.com/Isabella-Stone"}" class="${"svelte-1evk3fl"}"><img src="${"/github.jpg"}" alt="${"Github"}" class="${"svelte-1evk3fl"}"></a></li> 
    </ul>`;
});
const getStores = () => {
  const stores = (0, import_index_78531ddc.g)("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const app = "";
const __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: 'ul.svelte-34vb8q.svelte-34vb8q{display:flex;flex-direction:row;justify-content:center;align-items:center;list-style:none\n    }nav.svelte-34vb8q a.svelte-34vb8q{float:none;color:#000000;text-align:center;padding:14px 16px;text-decoration:none;font-size:17px;border-bottom:2px solid currentColor}nav.svelte-34vb8q a.svelte-34vb8q:hover{background-color:rgb(237, 232, 232);color:black}.active.svelte-34vb8q.svelte-34vb8q{color:black;background-color:rgb(196, 193, 193)}.container.svelte-34vb8q.svelte-34vb8q{display:grid;font-family:"Montserrat", sans-serif;place-items:center;text-align:center}.title.svelte-34vb8q.svelte-34vb8q{font-weight:800;font-size:1.5vw;text-transform:uppercase}html.svelte-34vb8q.svelte-34vb8q{height:100%;box-sizing:border-box}body.svelte-34vb8q.svelte-34vb8q{position:relative;margin:0;min-height:100%;padding-bottom:6.74rem;box-sizing:inherit}main.svelte-34vb8q.svelte-34vb8q{width:80%;margin:0 auto;padding-top:32px}footer.svelte-34vb8q.svelte-34vb8q{padding:35px;position:absolute;right:0;left:0;bottom:0}',
  map: null
};
const _layout = (0, import_index_78531ddc.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_78531ddc.a)(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${$$result.head += `${$$result.title = `<title>Isabella Stone</title>`, ""}`, ""}   




<html class="${"svelte-34vb8q"}"><div class="${"container svelte-34vb8q"}"><h1 class="${"title svelte-34vb8q"}"><nav class="${"svelte-34vb8q"}"><ul class="${"svelte-34vb8q"}"><li><a sveltekit:prefetch href="${"/"}" class="${["svelte-34vb8q", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}">Home</a></li>
                    <li><a sveltekit:prefetch href="${"/about"}" class="${["svelte-34vb8q", $page.url.pathname === "/about" ? "active" : ""].join(" ").trim()}">About Me</a></li>
                    <li><a sveltekit:prefetch href="${"/resume"}" class="${["svelte-34vb8q", $page.url.pathname === "/resume" ? "active" : ""].join(" ").trim()}">Resume</a></li></ul></nav></h1></div>
   
    <body class="${"svelte-34vb8q"}"><main class="${"svelte-34vb8q"}">${slots.default ? slots.default({}) : ``}</main></body>
    
    <footer class="${"svelte-34vb8q"}">${(0, import_index_78531ddc.v)(Socials, "Socials").$$render($$result, {}, {}, {})}</footer></html>`;
});
