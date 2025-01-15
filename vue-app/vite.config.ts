import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { federation } from "@module-federation/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "host-app",
      remotes: {
        remote: {
          entry: "http://localhost:5172/remoteEntry.js",
          type: "module",
          name: "remote",
        },
      },
    }),
  ],
  build: {
    target: "esnext",
  },
});
