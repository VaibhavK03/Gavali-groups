import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Load environment variables from .env file
import dotenv from "dotenv";
dotenv.config();

export default defineConfig({
  plugins: [tailwindcss(), react()],
  server: {
    allowedHosts: ["gavaligroup.com"],
    proxy: {
      "/api": {
        target: process.env.VITE_API_TARGET || "http://localhost:5000", // Use .env value, fallback to localhost
        changeOrigin: true,
      },
    },
  },
});
