import { Link, useParams } from 'react-router-dom';
import { getPostBySlug, getRelatedPosts } from '../data/blog';
import { cssVars } from '../data/site';
import Seo from '../components/Seo';
import NotFound from './NotFound';
import CTA from '../components/CTA';

const toSlug = (s: string) => s.toLowerCase().replace(/\s+/g, '-');

export default function BlogPost() {
  const { slug } = useParams();
  const post = slug ? getPostBySlug(slug) : undefined;
  if (!post) return <NotFound />;

  const related = getRelatedPosts(post.slug, post.category);

  return (
    <div className="page section-pad-top">
      <Seo
        title={`${post.title} — Richverseecotech`}
        description={post.summary}
        path={`/blog/${post.slug}`}
        image={post.image}
        type="article"
      />
      <article className="container article">
        <header className="article-head">
          <p className="eyebrow reveal">
            <Link to="/blog" className="crumb">Insights</Link> /{' '}
            <Link to={`/blog/category/${toSlug(post.category)}`} className="crumb">{post.category}</Link>
          </p>
          <h1 className="article-title reveal" style={cssVars({ '--d': '80ms' })}>{post.title}</h1>
          <div className="article-meta reveal" style={cssVars({ '--d': '140ms' })}>
            <span>{post.author}</span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        <div className="article-media reveal">
          <img src={post.image} alt={post.title} />
        </div>

        <div className="article-body reveal" dangerouslySetInnerHTML={{ __html: post.content }} />

        <div className="article-tags">
          {post.tags.map((t) => (
            <Link key={t} to={`/blog/tag/${toSlug(t)}`}>[ {t} ]</Link>
          ))}
        </div>
      </article>

      {related.length > 0 && (
        <section className="container section-pad">
          <div className="section-head">
            <p className="eyebrow reveal">[ Keep reading ]</p>
            <h2 className="section-title reveal" style={cssVars({ '--d': '80ms' })}>Related <em>insights</em>.</h2>
          </div>
          <div className="blog-grid">
            {related.map((p) => (
              <Link to={`/blog/${p.slug}`} className="blog-card reveal" key={p.slug}>
                <div className="blog-card-media">
                  <img src={p.image} alt={p.title} loading="lazy" />
                </div>
                <p className="blog-cat">[ {p.category} ]</p>
                <h3 className="blog-card-title">{p.title}</h3>
                <div className="blog-meta">
                  <span>{p.date}</span><span>·</span><span>{p.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <CTA title={<>Have a project in <em>mind</em>?</>} />
    </div>
  );
}
