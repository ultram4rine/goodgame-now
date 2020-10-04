import babel from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
  input: "src/main.js",
  output: {
    dir: "build",
    format: "esm",
  },
  plugins: [babel({ babelHelpers: "bundled" }), nodeResolve()],
};
