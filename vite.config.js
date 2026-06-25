import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "marc_pickelman_fullstack_portfolio",
  plugins: [react()],
});
