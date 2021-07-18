import { defineConfig } from 'vite'
import path from "path";
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "/",
  resolve: {
    extensions: ['.vue', '.js', '.json'],
    alias: {
      "@": path.resolve(__dirname, "src")
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/css/_variables.scss";'
      }
    }
  },
  server: {
    open: true
  },
})
