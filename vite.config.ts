import { defineConfig } from "vite";

import babel from "vite-plugin-babel";
import content from "./plugins/content";
import mdx from "@mdx-js/rollup";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import { reactRouter } from "@react-router/dev/vite";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    babel({
      include: /\.tsx?$/,
      babelConfig: {
        presets: ["@babel/preset-typescript"],
        plugins: ["babel-plugin-react-compiler"],
      },
    }),
    content({
      directory: "content",
      extensions: [".mdx"],
      prefix: "content:",
    }),
    mdx({
      exclude: /^content:/,
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
    }),
    reactRouter(),
    svgr(),
  ],
  resolve: {
    tsconfigPaths: true,
  },
});
