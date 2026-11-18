import { Link, useParams } from 'react-router-dom';
import NotFound from './NotFound';
import { archiveSlug as slug, blogPosts, blogCategories } from '../data/blog';
import Seo from '../components/Seo';
import PageHead from '../components/PageHead';
import JsonLd from '../components/JsonLd';
import Icon from '../components/Icon';
import BlogImage from '../components/BlogImage';
import { breadcrumbSchema } from '../data/structuredData';


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
  const featured = isFiltered ? (filtered.length === 1 ? filtered[0] : null) : blogPosts.find(p => p.featured) ?? blogPosts[0];
  const list = featured ? filtered.filter((p) => p.slug !== featured.slug) : filtered;

  if (isFiltered && !filtered.length) return <NotFound />;

  return (
    <div className="page section-pad-top">
      <Seo
        title={activeLabel ? `${activeLabel} ${tag ? "Topics" : "Articles"} | Richverse Ecotech` : 'Insights on Technology & Sustainability | Richverse Ecotech'}
        noindex={Boolean(tag)}
        description={activeLabel ? `Articles on ${activeLabel} from the Richverse Ecotech team.` : "Guides to web development, marketing measurement, security reviews, and energy planning from Richverse Ecotech."}
        path={category ? `/blog/category/${category}` : tag ? `/blog/tag/${tag}` : '/blog'}
      />
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Insights', path: '/blog' }, ...(activeLabel ? [{ name: activeLabel, path: category ? `/blog/category/${category}` : `/blog/tag/${tag}` }] : [])])} />
      <div className="container">
        <PageHead
          eyebrow={tag ? 'Topic archive' : category ? 'Discipline archive' : 'Studio journal'}
          title={activeLabel ? <><em>{activeLabel}</em>.</> : <>Notes from <em>the studio.</em></>}
          intro={
            activeLabel
              ? undefined
              : 'Practical guides to websites, campaigns, security, and the energy decisions behind a business.'
          }
        />

        {/* Category filters (deep-linkable) */}
        <nav className="blog-filters" aria-label="Blog categories">
          <Link to="/blog" aria-current={!isFiltered ? 'page' : undefined} className={'chip' + (!isFiltered ? ' is-active' : '')}>All</Link>
          {blogCategories.map((c) => (
            <Link
              key={c}
              to={`/blog/category/${slug(c)}`}
              aria-current={category === slug(c) ? 'page' : undefined}
              className={'chip' + (category === slug(c) ? ' is-active' : '')}
            >
              {c}
            </Link>
          ))}
        </nav>

        {/* A lone archive result also gets the full editorial spread. */}
        {featured && (
          <Link to={`/blog/${featured.slug}`} className="blog-featured" data-scroll-section="feature">
            <div className="blog-featured-media" data-depth-scene data-enter="plate">
              <BlogImage src={featured.image} alt="" loading="eager" />
            </div>
            <div className="blog-featured-body">
              <p className="blog-cat">{featured.category}</p>
              <h2 className="blog-featured-title">{featured.title}</h2>
              <p className="blog-featured-sum">{featured.summary}</p>
              <div className="blog-meta">
                <span>{featured.date}</span><span>·</span><span>{featured.readTime}</span>
              </div>
              <span className="feature-read">Read the guide<Icon name="arrow-right" size={16}/></span>
            </div>
          </Link>
        )}

        {/* Grid */}
        {list.length > 0 && (
          <div className="blog-grid">
            {list.map((p) => (
              <Link to={`/blog/${p.slug}`} className="blog-card" data-scroll-section="journal-card" key={p.slug}>
                <div className="blog-card-media" data-depth-scene data-enter="plate">
                  <BlogImage src={p.image} alt="" />
                </div>
                <div className="blog-card-body">
                  <p className="blog-cat">{p.category}</p>
                  <h2 className="blog-card-title">{p.title}</h2>
                  <p className="blog-card-sum">{p.summary}</p>
                  <div className="blog-meta">
                    <span>{p.date}</span><span>·</span><span>{p.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
