import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider, type HelmetServerState } from 'react-helmet-async';
import App from './App';
import { stories, storyPath } from './data/stories';
import { services } from './data/site';
import { blogPosts, blogCategories, blogTags, archiveSlug } from './data/blog';

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
  '/studio/components',
  ...stories.map(s => storyPath(s.slug)),
  ...services.map((s) => `/services/${s.slug}`),
  ...blogCategories.map(c => `/blog/category/${archiveSlug(c)}`),
  ...blogTags.map(t => `/blog/tag/${archiveSlug(t)}`),
  ...blogPosts.map((p) => `/blog/${p.slug}`),
];
