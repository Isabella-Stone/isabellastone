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
  return `<ul class="${"svelte-1evk3fl"}"><li><a href="${"https://github.com/Isabella-Stone"}" class="${"svelte-1evk3fl"}"><img src="${"/src/images/github.png"}" alt="${"GitHub"}" class="${"svelte-1evk3fl"}"></a></li> 
    <li><a href="${"https://www.linkedin.com/in/isabellastone123/"}" class="${"svelte-1evk3fl"}"><img src="${"/src/images/linkedin.png"}" alt="${"LinkedIn"}" class="${"svelte-1evk3fl"}"></a></li>
    <li><a href="${"mailto:istone@stevens.edu"}" class="${"svelte-1evk3fl"}"><img src="${"/src/images/email.png"}" alt="${"Email"}" class="${"svelte-1evk3fl"}"></a></li></ul>`;
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
  code: 'ul.svelte-1dptgs0.svelte-1dptgs0{display:flex;flex-direction:row;justify-content:center;align-items:center;list-style:none\n    }nav.svelte-1dptgs0 a.svelte-1dptgs0{float:none;color:#000000;text-align:center;padding:14px 16px;text-decoration:none;font-size:17px;border-bottom:2px solid currentColor}nav.svelte-1dptgs0 a.svelte-1dptgs0:hover{background-color:rgb(237, 232, 232);color:black}.active.svelte-1dptgs0.svelte-1dptgs0{color:black;background-color:rgb(206, 203, 203)}.container.svelte-1dptgs0.svelte-1dptgs0{display:grid;font-family:"Montserrat", sans-serif;place-items:center;text-align:center}.title.svelte-1dptgs0.svelte-1dptgs0{font-weight:800;font-size:1.5vw;text-transform:uppercase}html.svelte-1dptgs0.svelte-1dptgs0{height:100%;box-sizing:border-box}body.svelte-1dptgs0.svelte-1dptgs0{position:relative;margin:0;min-height:100%;padding-bottom:6.74rem;box-sizing:inherit}main.svelte-1dptgs0.svelte-1dptgs0{width:80%;margin:0 auto;padding-top:32px}footer.svelte-1dptgs0.svelte-1dptgs0{padding:35px;position:absolute;right:0;left:0;bottom:0}',
  map: null
};
const _layout = (0, import_index_78531ddc.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_78531ddc.a)(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${$$result.head += `${$$result.title = `<title>Isabella Stone</title>`, ""}`, ""}   




<html class="${"svelte-1dptgs0"}"><div class="${"container svelte-1dptgs0"}"><h1 class="${"title svelte-1dptgs0"}"><nav class="${"svelte-1dptgs0"}"><ul class="${"svelte-1dptgs0"}"><li><a sveltekit:prefetch href="${"/"}" class="${["svelte-1dptgs0", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}">Home</a></li>
                    <li><a sveltekit:prefetch href="${"/about"}" class="${["svelte-1dptgs0", $page.url.pathname === "/about" ? "active" : ""].join(" ").trim()}">About Me</a></li>
                    <li><a sveltekit:prefetch href="${"/resume"}" class="${["svelte-1dptgs0", $page.url.pathname === "/resume" ? "active" : ""].join(" ").trim()}">Resume</a></li></ul></nav></h1></div>
   
    <body class="${"svelte-1dptgs0"}"><main class="${"svelte-1dptgs0"}">${slots.default ? slots.default({}) : ``}</main></body>
    
    <footer class="${"svelte-1dptgs0"}">${(0, import_index_78531ddc.v)(Socials, "Socials").$$render($$result, {}, {}, {})}</footer></html>`;
});
