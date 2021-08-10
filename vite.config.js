/**
 * @type {import('vite').UserConfig}
 */
const path = require("path");

module.exports = {
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/main.tsx"),
      name: "ViteApp",
      formats: ["es", "cjs", "umd", "iife"],
      fileName: (format) => `vite-app.${format}.js`,
    },
  },
};
