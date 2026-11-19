import { Link, useParams } from 'react-router-dom';
import { archiveSlug as toSlug, formatArticleDate, getPostBySlug } from '../data/blog';
import Seo from '../components/Seo';
import NotFound from './NotFound';
import JsonLd from '../components/JsonLd';
import QuoteComparison from '../components/QuoteComparison';
import BlogImage from '../components/BlogImage';
import { services } from '../data/site';
import Icon from '../components/Icon';
import { articleSchema, breadcrumbSchema } from '../data/structuredData';


export default function BlogPost() {
  const { slug } = useParams();
  const post = slug ? getPostBySlug(slug) : undefined;
  if (!post) return <NotFound />;

  const service = services.find(s => s.name === post.category);

  return (
    <div className="page section-pad-top">
      <Seo
        title={`${post.title} — Richverse Ecotech`}
        description={post.summary}
        path={`/blog/${post.slug}`}
        image={post.image} imageAlt={post.imageAlt}
        type="article" published={post.published} modified={post.revised ?? post.published} section={post.category}
      />
      <JsonLd data={[
        articleSchema(post),
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Insights', path: '/blog' },
          { name: post.category, path: `/blog/category/${toSlug(post.category)}` },
          { name: post.title, path: `/blog/${post.slug}` },
        ]),
      ]} />
      <article className="container article" data-reading>
        <header className="article-head" data-scroll-section="article-intro">
          <p className="eyebrow">
            <Link to="/blog" className="crumb">Insights</Link> /{' '}
            <Link to={`/blog/category/${toSlug(post.category)}`} className="crumb">{post.category}</Link>
          </p>
          <h1 className="article-title">{post.title}</h1>
          <div className="article-meta">
            <Link className="byline" to="/about">By {post.author}</Link>
            <span>·</span>
            <span>Published <time dateTime={post.published}>{post.date}</time></span>
            {post.revised && <><span aria-hidden="true">·</span><span>Updated <time dateTime={post.revised}>{formatArticleDate(post.revised)}</time></span></>}
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
          <p className="article-deck">{post.summary}</p>
        </header>
        <div className="article-media" data-scroll-section="article-art" data-depth-scene data-enter="plate">
          <BlogImage src={post.image} alt={post.imageAlt || post.title} loading="eager" />
        </div>

        <nav className="article-contents" aria-label="In this guide"><p className="eyebrow">In this guide</p><ul>{post.sections.map(s=><li key={s.id}><a href={'#'+s.id}>{s.title}</a></li>)}</ul></nav>
        <div className="article-body" data-scroll-section="reading" dangerouslySetInnerHTML={{ __html: post.content }} />

        {post.slug === 'website-redesign-brief' && <QuoteComparison/>}
        {service && <aside className="article-next" data-scroll-section="next-read"><p className="eyebrow">Put the ideas to work</p><h2>Thinking about {service.name.toLowerCase()}?</h2><p>{service.short}</p><Link to={`/services/${service.slug}`} className="studio-link">Explore our {service.name.toLowerCase()} services<Icon name="arrow-right" size={18} /></Link></aside>}

      </article>
    </div>
  );
}
