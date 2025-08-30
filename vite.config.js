import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/info/', // This must match your repo name!
  assetsInclude: ["**/*.glb"],
  server: {
    port: 3000
  },
  define: {
    'window.Stats': 'Stats', // This makes Stats.js available globally if needed.
  }
});
