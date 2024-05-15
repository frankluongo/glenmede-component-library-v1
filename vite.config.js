// vite.config.js
import { resolve } from "path";
import vituum from "vituum";
import handlebars from "@vituum/vite-plugin-handlebars";

const dirs = ["components", "partials"];
const partialDirectory = dirs.map((dir) => resolve(__dirname, dir));

export default {
  plugins: [
    vituum(),
    handlebars({
      root: resolve(__dirname, "src"),
      partialDirectory,
    }),
  ],
};
