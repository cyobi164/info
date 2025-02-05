import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/info/', // Keep this if needed for deployment
  build: {
    sourcemap: true, // Ensure source maps are generated
  },
});
