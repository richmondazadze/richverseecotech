import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

export default defineConfig(({ isPreview }) => ({
  appType: isPreview ? 'mpa' : 'spa',
  plugins: [react(), {
    name: 'preview-prerendered-not-found',
    configurePreviewServer(server) {
      // Vite has already served known files / rewritten valid clean URLs here.
      return () => server.middlewares.use((req,res,next) => {
        if (req.method !== 'GET' || !req.headers.accept?.includes('text/html') || req.url?.split('?')[0].endsWith('.html')) return next();
        res.statusCode = 404;
        res.setHeader('Content-Type','text/html; charset=utf-8');
        res.end(readFileSync(resolve(server.config.root,server.config.build.outDir,'404.html')));
      });
    },
  }],
  server: { port: 5273, open: false },
  ssr: { noExternal: true },
}));
