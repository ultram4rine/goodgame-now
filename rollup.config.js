import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import minifyHTML from "rollup-plugin-minify-html-literals";
import copy from "rollup-plugin-copy";
import {
  chromeExtension,
  simpleReloader,
} from "rollup-plugin-chrome-extension";

const copyConfig = {
  targets: [
    { src: "node_modules/@webcomponents", dest: "dist/node_modules" },
    { src: "images", dest: "dist" },
    { src: "data", dest: "dist" },
    { src: "index.html", dest: "dist" },
  ],
};

const config = {
  input: "src/manifest.json",
  output: {
    dir: "dist",
    format: "es",
  },
  plugins: [
    chromeExtension(),
    simpleReloader(),
    minifyHTML(),
    copy(copyConfig),
    resolve(),
  ],
};

if (process.env.NODE_ENV !== "development") {
  config.plugins.push(terser());
}

export default config;
