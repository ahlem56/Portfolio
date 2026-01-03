import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import compress from "astro-compress";

// Detect Vercel environment
const isVercel = process.env.VERCEL === "1";

export default defineConfig({
  integrations: [
    preact(),
    tailwind(),
    // Disable astro-compress on Vercel to avoid Linux build failure
    !isVercel && compress(),
  ].filter(Boolean),
});
