import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/",
  assetsInclude: ["**/*.jpeg"],
  plugins: [react()],
  server: {
    host: true,
  },
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

// export default defineConfig({
//   assetsInclude: ["**/*.jpeg"],
//   plugins: [react()],
//   resolve: {
//     alias: {
//       // eslint-disable-next-line no-undef
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// });
