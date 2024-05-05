import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: "Culture sound",
        short_name: "CultureSound",
        description: "Le futur du blind test",
        start_url: "https://culture-sound.vercel.app/",
        theme_color: "#ffffff",
        icons: [
          {
            src: "src/assets/16x16.[hash].png",
            type: "image/png",
            sizes: "16x16",
            purpose: "maskable",
          },
          {
            src: "src/assets/128x128.[hash].png",
            type: "image/png",
            sizes: "128x128",
          },
          {
            src: "src/assets/256x256.[hash].png",
            type: "image/png",
            sizes: "256x256",
          },
          {
            src: "src/assets/512x512.[hash].png",
            type: "image/png",
            sizes: "512x512",
          },
        ],
      },
    }),
  ],

  optimizeDeps: {
    exclude: ["fsevents"],
  },
});
