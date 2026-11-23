import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";

export default defineConfig({
  plugins: [
    react(),
    {
      // Static image imports become the { src, width, height } object
      // next/image expects, as they do under Next's own bundler.
      name: "static-image-imports",
      enforce: "pre",
      load(id) {
        if (/\.(png|jpe?g|webp)$/.test(id)) {
          return `export default ${JSON.stringify({ src: id, width: 960, height: 600 })};`;
        }
      },
    },
  ],
  resolve: {
    alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    include: ["src/**/*.test.{ts,tsx}"],
  },
});
