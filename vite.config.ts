import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // Exclude APK from build
          if (assetInfo.name === 'ديسيت.apk') {
            return '';
          }
          return assetInfo.name;
        }
      }
    }
  },
  server: {
    historyApiFallback: true,
  },
});
