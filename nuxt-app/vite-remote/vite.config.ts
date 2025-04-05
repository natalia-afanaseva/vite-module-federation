import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { federation } from "@module-federation/vite";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "nuxt_remote",
      filename: "remoteEntry.js",
      exposes: {
        "./app": "./Component.vue",
      },
      shared: {
        vue: {
          singleton: true,
          requiredVersion: "^3.5.13",
        },
      },
    }),
  ],
  build: {
    target: "esnext",
    outDir: "dist",
    minify: false,
    rollupOptions: {
      output: {
        format: "es",
        entryFileNames: "remoteEntry.js",
        chunkFileNames: "chunks/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
  },
  base: "http://127.0.0.1:3000/",
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      vue: path.resolve(__dirname, "node_modules/vue"),
    },
  },
});
