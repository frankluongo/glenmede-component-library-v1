// vite.config.js
import { resolve } from "path";
import vituum from "vituum";
import handlebars from "@vituum/vite-plugin-handlebars";

export default {
  plugins: [
    vituum(),
    handlebars({
      root: resolve(__dirname, "src"),
    }),
  ],
};
