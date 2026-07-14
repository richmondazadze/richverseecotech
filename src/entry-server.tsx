import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider, type HelmetServerState } from 'react-helmet-async';
import App from './App';
import { services } from './data/site';
import { blogPosts } from './data/blog';

/** Renders one route to an HTML string + collected <head> (title/meta/link/script). */
export function render(location: string): { html: string; helmet: HelmetServerState } {
  const helmetContext: { helmet?: HelmetServerState } = {};
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={location}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  );
  return { html, helmet: helmetContext.helmet as HelmetServerState };
}

/** Every route to prerender to a static HTML file. */
export const routes: string[] = [
  '/',
  '/services',
  '/about',
  '/blog',
  '/contact',
  '/privacy',
  '/terms',
  ...services.map((s) => `/services/${s.slug}`),
  ...blogPosts.map((p) => `/blog/${p.slug}`),
];
