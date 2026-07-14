import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Standalone "Organic Intelligence" redesign.
// Runs on its own port so it never clashes with the parent app (5173).
export default defineConfig({
  plugins: [react()],
  server: { port: 5273, open: true },
});
