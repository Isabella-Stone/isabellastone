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
  default: () => Routes
});
module.exports = __toCommonJS(stdin_exports);
var import_index_78531ddc = require("../../_app/immutable/chunks/index-78531ddc.js");
const index_svelte_svelte_type_style_lang = "";
const css = {
  code: 'h1.svelte-1nd3edl{font-size:20.5px;color:whitesmoke;text-align:center;vertical-align:middle}.title-word.svelte-1nd3edl{animation:svelte-1nd3edl-color-animation 4s linear infinite}.title-word-1.svelte-1nd3edl{--color-1:#e7621a;--color-2:#125572;--color-3:#ec716d}.title-word-2.svelte-1nd3edl{--color-1:#e49f0a;--color-2:#5f8d88;--color-3:#17494D}@keyframes svelte-1nd3edl-color-animation{0%{color:var(--color-1)}32%{color:var(--color-1)}33%{color:var(--color-2)}65%{color:var(--color-2)}66%{color:var(--color-3)}99%{color:var(--color-3)}100%{color:var(--color-1)}}.container.svelte-1nd3edl{display:grid;font-family:"Montserrat", sans-serif;place-items:center;text-align:center}.title.svelte-1nd3edl{font-weight:800;font-size:6.5vw;text-transform:uppercase}',
  map: null
};
const Routes = (0, import_index_78531ddc.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"container svelte-1nd3edl"}"><h1 class="${"title svelte-1nd3edl"}"><span class="${"title-word title-word-1 svelte-1nd3edl"}">Isabella</span>
      <span class="${"title-word title-word-2 svelte-1nd3edl"}">Stone</span></h1></div>`;
});
