import { cloudflare } from "@cloudflare/vite-plugin";
import { defineConfig } from "vite";
import { sites } from "./build/sites-vite-plugin.js";

export default defineConfig({
  base: process.env.GITHUB_PAGES === "true" ? "/penny-game/" : "/",
  plugins: [sites(), cloudflare()],
});
