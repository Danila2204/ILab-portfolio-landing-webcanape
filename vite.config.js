export default {
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
};