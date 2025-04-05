import { defineEventHandler, setResponseHeaders } from "h3";

export default defineEventHandler((event) => {
  setResponseHeaders(event, {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "*",
  });
});
