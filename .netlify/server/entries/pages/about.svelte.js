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
  default: () => About
});
module.exports = __toCommonJS(stdin_exports);
var import_index_78531ddc = require("../../_app/immutable/chunks/index-78531ddc.js");
const about_svelte_svelte_type_style_lang = "";
const css = {
  code: 'h1.svelte-rtok2p{font-size:25px;text-align:center;vertical-align:middle;font-family:"Montserrat", sans-serif}li.svelte-rtok2p{padding:20px 0 20px}.container.svelte-rtok2p{display:grid;font-family:"Montserrat", sans-serif;place-items:center;text-align:center}.facts.svelte-rtok2p{font-weight:800;font-size:1vw;text-transform:uppercase}ul.svelte-rtok2p{list-style-type:none}',
  map: null
};
const About = (0, import_index_78531ddc.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `
<div class="${"container svelte-rtok2p"}"><h1 class="${"facts svelte-rtok2p"}"><ul class="${"svelte-rtok2p"}"><li class="${"svelte-rtok2p"}">I am from <span style="${"color:#e7621a; font-size: 125%"}">Staten Island, NY</span></li>
            <li class="${"svelte-rtok2p"}">My favorite pastimes are listening to <span style="${"color:#125572; font-size: 125%"}">music</span> and <span style="${"color:#ec716d; font-size: 125%"}">baking</span></li>
            <li class="${"svelte-rtok2p"}">My favorite coding language is <span style="${"color:#b7800a; font-size: 125%"}">Java</span></li>
            <li class="${"svelte-rtok2p"}">My favorite class I have taken so far is <span style="${"color:#5f8d88; font-size: 125%"}">Data Structures</span></li></ul></h1></div>`;
});
