import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import minifyHTML from "rollup-plugin-minify-html-literals";
import copy from "rollup-plugin-copy";
import {
  chromeExtension,
  simpleReloader,
} from "rollup-plugin-chrome-extension";

const copyConfig = {
  targets: [
    { src: "src/fonts", dest: "dist" },
    { src: "src/icons", dest: "dist" },
    { src: "src/index.html", dest: "dist" },
  ],
};

const config = {
  input: "src/manifest.json",
  output: {
    dir: "dist",
    format: "esm",
  },
  plugins: [
    chromeExtension(),
    simpleReloader(),
    minifyHTML(),
    babel({ babelHelpers: "inline" }),
    copy(copyConfig),
    resolve({ browser: true }),
    commonjs(),
    terser(),
  ],
};

export default config;
