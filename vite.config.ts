import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// RichverseEcotech — "Organic Intelligence".
export default defineConfig({
  plugins: [react()],
  server: { port: 5273, open: true },
  // Bundle all deps into the SSR entry so the build-time prerender (Node ESM)
  // doesn't trip over CommonJS named exports (react-helmet-async, etc.).
  ssr: { noExternal: true },
});
