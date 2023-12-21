import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import tailwindcss from "tailwindcss";

export default defineConfig({
  plugins: [react(), tailwindcss(), svgr({ svgrOptions: { icon: true } })],
  resolve: {
    dedupe: ["react", "react-dom"],
    alias: {
      web3: "web3/dist/web3.min.js"
      // buffer: "rollup-plugin-node-polyfills/polyfills/buffer-es6", // add buffer
    }
  },
  build: {
    target: "es2020",
    sourcemap: true,
    rollupOptions: {
      external: ["@lit-protocol/sdk-nodejs"]
    }
  },

  server: {
    port: 5222,
    host: "0.0.0.0"
  },
  define: {
    "process.env": {
      ENV: "Browser"
    }
  }
});
