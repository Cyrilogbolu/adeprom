import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";

export default defineConfig({
  vite: {
    plugins: [
      // Only injects the Vercel plugin if Vercel is building the project
      process.env.VERCEL ? nitro({ preset: "vercel" }) : null
    ].filter(Boolean),
  },
});
