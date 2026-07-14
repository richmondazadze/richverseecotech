import { Link, useParams } from 'react-router-dom';
import { blogPosts, blogCategories } from '../data/blog';
import { cssVars } from '../data/site';
import Seo from '../components/Seo';
import PageHead from '../components/PageHead';
import JsonLd from '../components/JsonLd';
import BlogImage from '../components/BlogImage';
import { breadcrumbSchema } from '../data/structuredData';

const slug = (s: string) => s.toLowerCase().replace(/\s+/g, '-');

export default function Blog() {
  const { category, tag } = useParams();

  const filtered = blogPosts.filter((p) => {
    if (category) return slug(p.category) === category;
    if (tag) return p.tags.some((t) => slug(t) === tag);
    return true;
  });

  const activeLabel = category
    ? blogCategories.find((c) => slug(c) === category) ?? category
    : tag
    ? blogPosts.flatMap((p) => p.tags).find((t) => slug(t) === tag) ?? tag
    : null;

  const isFiltered = Boolean(category || tag);
  const featured = !isFiltered ? blogPosts.find((p) => p.featured) ?? blogPosts[0] : null;
  const list = featured ? filtered.filter((p) => p.slug !== featured.slug) : filtered;

  return (
    <div className="page section-pad-top">
      <Seo
        title={activeLabel ? `${activeLabel} — Insights · Richverseecotech` : 'Insights — Richverseecotech'}
        description="Perspectives on sustainable technology, security, growth, and the systems shaping tomorrow."
        path={category ? `/blog/category/${category}` : tag ? `/blog/tag/${tag}` : '/blog'}
      />
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Insights', path: '/blog' }])} />
      <div className="container">
        <PageHead
          eyebrow={tag ? '[ Tag ]' : category ? '[ Category ]' : '[ Insights ]'}
          title={activeLabel ? <><em>{activeLabel}</em>.</> : <>Notes on <em>what&rsquo;s next</em>.</>}
          intro={
            activeLabel
              ? `Articles filed under ${activeLabel}.`
              : 'Perspectives on sustainable technology, security, growth, and the systems shaping tomorrow.'
          }
        />

        {/* Featured (unfiltered only) */}
        {featured && (
          <Link to={`/blog/${featured.slug}`} className="blog-featured reveal">
            <div className="blog-featured-media">
              <BlogImage src={featured.image} alt={featured.title} />
            </div>
            <div className="blog-featured-body">
              <p className="blog-cat">[ {featured.category} ]</p>
              <h2 className="blog-featured-title">{featured.title}</h2>
              <p className="blog-featured-sum">{featured.summary}</p>
              <div className="blog-meta">
                <span>{featured.date}</span><span>·</span><span>{featured.readTime}</span>
              </div>
            </div>
          </Link>
        )}

        {/* Category filters (deep-linkable) */}
        <nav className="blog-filters reveal" aria-label="Blog categories">
          <Link to="/blog" className={'chip' + (!isFiltered ? ' is-active' : '')}>All</Link>
          {blogCategories.map((c) => (
            <Link
              key={c}
              to={`/blog/category/${slug(c)}`}
              className={'chip' + (category === slug(c) ? ' is-active' : '')}
            >
              {c}
            </Link>
          ))}
        </nav>

        {/* Grid */}
        {list.length === 0 ? (
          <p className="blog-empty">No articles here yet. <Link to="/blog" className="crumb">View all insights</Link>.</p>
        ) : (
          <div className="blog-grid">
            {list.map((p, i) => (
              <Link to={`/blog/${p.slug}`} className="blog-card reveal" key={p.slug} style={cssVars({ '--d': `${(i % 3) * 70}ms` })}>
                <div className="blog-card-media">
                  <BlogImage src={p.image} alt={p.title} />
                </div>
                <p className="blog-cat">[ {p.category} ]</p>
                <h3 className="blog-card-title">{p.title}</h3>
                <p className="blog-card-sum">{p.summary}</p>
                <div className="blog-meta">
                  <span>{p.date}</span><span>·</span><span>{p.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
