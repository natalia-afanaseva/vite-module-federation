// import { federation } from "@module-federation/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  vite: {
    // server: {
    //   port: 3000,
    //   cors: {
    //     origin: "*",
    //     methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    //     allowedHeaders: [
    //       "X-Requested-With",
    //       "content-type",
    //       "Authorization",
    //       "Access-Control-Allow-Origin",
    //     ],
    //     credentials: true,
    //   },
    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Headers": "*",
    //     "Access-Control-Allow-Methods":
    //       "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    //   },
    // },
  },

  // devServer: {
  //   port: 3000,
  //   cors: {
  //     origin: "*",
  //     methods: "*",
  //     allowHeaders: "*",
  //     credentials: true,
  //   },
  // },

  // hooks: {
  //   "vite:extendConfig"(config) {
  //     if (!config.server) config.server = {};
  //     config.server.cors = {
  //       origin: "*",
  //       methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  //       allowedHeaders: ["*"],
  //       credentials: true,
  //     };

  //     config.server.headers = {
  //       "Access-Control-Allow-Origin": "*",
  //       "Access-Control-Allow-Headers": "*",
  //       "Access-Control-Allow-Methods":
  //         "GET, POST, PUT, DELETE, PATCH, OPTIONS",
  //     };
  //   },
  // },
});
