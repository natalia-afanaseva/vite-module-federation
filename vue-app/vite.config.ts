import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { federation } from "@module-federation/vite";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "host-app",
      remotes: {
        // remote: {
        //   entry: "http://localhost:5172/remoteEntry.js",
        //   type: "module",
        //   name: "remote",
        // },
        remoteNuxt: {
          entry: "http://127.0.0.1:3000/remoteEntry.js",
          type: "module",
          name: "remoteNuxt",
        },
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
  },
  server: {
    cors: {
      allowedHeaders: "*",
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  resolve: {
    alias: {
      vue: path.resolve(__dirname, "node_modules/vue"),
    },
  },
});
