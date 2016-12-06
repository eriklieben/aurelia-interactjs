System.config({
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "aurelia-polyfills": "npm:aurelia-polyfills@1.1.0",
    "interact": "npm:interact.js@1.2.6",
    "interact.js": "npm:interact.js@1.2.6",
    "npm:aurelia-polyfills@1.1.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0"
    }
  }
});
