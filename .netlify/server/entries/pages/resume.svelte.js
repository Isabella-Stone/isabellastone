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
  default: () => Resume
});
module.exports = __toCommonJS(stdin_exports);
var import_index_78531ddc = require("../../_app/immutable/chunks/index-78531ddc.js");
const resume_svelte_svelte_type_style_lang = "";
const css = {
  code: "img.svelte-1mkaqom{display:block;margin-left:auto;margin-right:auto;width:50%}",
  map: null
};
const Resume = (0, import_index_78531ddc.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<img src="${"/src/images/resume.jpg"}" alt="${"Resume"}" class="${"svelte-1mkaqom"}">`;
});
