import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { defineConfig, UserConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    TanStackRouterVite({ target: "react", autoCodeSplitting: true }),
  ],
}) satisfies UserConfig;
