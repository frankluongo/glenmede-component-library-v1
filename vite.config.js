// vite.config.js
import { resolve } from "path";
import handlebars from "vite-plugin-handlebars";

const dirs = ["components", "partials"];
const partialDirectory = dirs.map((dir) => resolve(__dirname, dir));

export default {
  plugins: [
    handlebars({
      partialDirectory,
    }),
  ],
};
