// astro.config.mjs
// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// Font sources are loaded under their own variable names (--font-*-src) and
// mapped to Tailwind's font-sans / font-heading / font-icon in global.css.
export default defineConfig({
  site: "https://willjackson.uk",
  output: "static",
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Barlow",
      cssVariable: "--font-body-src",
      weights: ["400", "600"],
      styles: ["normal"],
      subsets: ["latin"],
    },
    {
      provider: fontProviders.google(),
      name: "Fraunces",
      cssVariable: "--font-heading-src",
      weights: ["600"],
      styles: ["normal"],
      subsets: ["latin"],
    },
    {
      provider: fontProviders.googleicons(),
      name: "Material Symbols Outlined",
      cssVariable: "--font-icons-src",
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap()],
});
