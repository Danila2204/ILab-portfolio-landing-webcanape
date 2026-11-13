import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    tailwindcss()
  ],
  root: "./src",
  build: {
    outDir: '../docs',
    rollupOptions: {
      output: {
        entryFileNames: "assets/js/app.js",
        assetFileNames: "assets/css/[name][extname]"
      }
    },
    emptyOutDir: true,
  }
});