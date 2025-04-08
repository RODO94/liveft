import { defineConfig } from "vitest/config";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  test: {
    globals: true,
    css: true,
    setupFiles: ["./setup-tests.js"],
    environment: "jsdom",
  },
  plugins: [
    TanStackRouterVite({ target: "react", autoCodeSplitting: true }),
    react(),
  ],
});
