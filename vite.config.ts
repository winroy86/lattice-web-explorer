import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // WordPress theme structure
        assetFileNames: 'assets/[name].[ext]',
        chunkFileNames: 'assets/[name].[ext]',
        entryFileNames: 'assets/[name].js',
      }
    },
    // Generate static HTML files that can be converted to PHP templates
    outDir: 'dist',
    emptyOutDir: true,
  },
}));
