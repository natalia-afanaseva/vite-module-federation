import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";
import { dependencies } from "./package.json";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote-app",
      filename: "remoteEntry.js",
      exposes: {
        "./Navbar": "./src/components/renderNavbar.tsx",
        "./Card": "./src/components/renderCard.tsx",
      },
      shared: {
        react: { requiredVersion: dependencies.react, singleton: true },
        "react-dom": {
          requiredVersion: dependencies["react-dom"],
          singleton: true,
        },
        "react-router": {
          requiredVersion: dependencies["react-router"],
          singleton: true,
        },
      },
    }),
  ],
  build: {
    target: "esnext",
    rollupOptions: {
      output: {
        assetFileNames() {
          return "[name][extname]";
        },
      },
    },
  },
});
