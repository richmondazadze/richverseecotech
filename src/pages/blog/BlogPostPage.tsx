import React, { useEffect, useState, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '../../components/Breadcrumbs';
import { getBlogPostBySlug, getRecentBlogPosts, BlogPost } from '../../services/blogService';
import { motion } from 'framer-motion';

declare global {
  interface Window {
    AOS: {
      refresh: () => void;
    };
  }
}

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | undefined>(undefined);
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize or refresh AOS
    if (window.AOS) {
      window.AOS.refresh();
    }

    if (!slug) return;

    // Get blog post data
    const blogPost = getBlogPostBySlug(slug);
    setPost(blogPost);
    
    // Get recent posts excluding the current one
    const recent = getRecentBlogPosts(4).filter(p => p.slug !== slug);
    setRecentPosts(recent);
    
    setIsLoading(false);
  }, [slug]);

  // Reading progress bar logic
  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;
      const el = contentRef.current;
      const rect = el.getBoundingClientRect();
      const winHeight = window.innerHeight;
      const total = el.scrollHeight - winHeight;
      const scrolled = Math.min(Math.max(window.scrollY - el.offsetTop + winHeight, 0), total);
      const percent = total > 0 ? (scrolled / total) * 100 : 0;
      document.documentElement.style.setProperty('--blog-progress', `${percent}%`);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const toc = document.getElementById('toc-list');
      if (!toc) return;
      toc.innerHTML = '';
      document.querySelectorAll('.blog-rich-content h2, .blog-rich-content h3').forEach((el) => {
        const id = el.textContent?.replace(/\s+/g, '-').toLowerCase() || '';
        el.setAttribute('id', id);
        const li = document.createElement('li');
        li.innerHTML = `<a href="#${id}" class="hover:underline">${el.textContent}</a>`;
        toc.appendChild(li);
      });
    }, 100);
  }, [post?.content]);

  if (isLoading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
      </main>
    );
  }

  if (!post) {
    return (
      <main className="min-h-screen bg-white pt-[80px]">
        <Helmet>
          <title>Post Not Found | RichverseEcoTech Blog</title>
        </Helmet>
        <div className="sm:static sticky top-0 z-30 bg-white/90 backdrop-blur shadow-sm">
        <Breadcrumbs
          items={[
            { name: 'Home', path: '/' },
            { name: 'Blog', path: '/blog' },
            { name: 'Post Not Found' }
          ]}
        />
        </div>
        <section className="py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Blog Post Not Found</h2>
            <p className="mb-6 text-gray-500">The blog post you're looking for does not exist or has been removed.</p>
            <Link to="/blog" className="inline-block px-6 py-3 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 transition">Return to Blog</Link>
          </div>
        </section>
      </main>
    );
  }

  // JSON-LD for BlogPosting and Breadcrumbs
  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.image,
    "author": {
      "@type": "Organization",
      "name": "RichverseEcoTech"
    },
    "publisher": {
      "@type": "Organization",
      "name": "RichverseEcoTech",
      "logo": {
        "@type": "ImageObject",
        "url": "https://richverseecotech.com/assets/img/logo.png"
      }
    },
    "datePublished": post.date,
    "description": post.summary,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://richverseecotech.com/blog/${post.slug}`
    }
  };
  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://richverseecotech.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://richverseecotech.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://richverseecotech.com/blog/${post.slug}`
      }
    ]
  };

  return (
    <main className="min-h-screen bg-white font-sans pt-[80px]">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <motion.div
          className="bg-blue-600 h-1"
          style={{ width: 'var(--blog-progress, 0%)' }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        />
      </div>
      <Helmet>
        <title>{post.title} | RichverseEcoTech Blog</title>
        <meta name="description" content={post.summary} />
        <link rel="canonical" href={`/blog/${post.slug}`} />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title + ' | RichverseEcoTech Blog'} />
        <meta property="og:description" content={post.summary} />
        <meta property="og:image" content={post.image} />
        <meta property="og:url" content={`https://richverseecotech.com/blog/${post.slug}`} />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title + ' | RichverseEcoTech Blog'} />
        <meta name="twitter:description" content={post.summary} />
        <meta name="twitter:image" content={post.image} />
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">{JSON.stringify(blogPostingJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbsJsonLd)}</script>
      </Helmet>
      {/* Breadcrumbs */}
      <div className="sm:static sticky top-0 z-30 bg-white/90 backdrop-blur shadow-sm mt-0 sm:mt-4 mb-3 sm:mb-6">
      <Breadcrumbs
        items={[
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
          { name: post.title }
        ]}
      />
      </div>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className={`mt-2 sm:mt-0 ${post.slug === 'exploring_ocean_energy'
          ? 'relative w-full h-64 sm:h-80 md:h-[28rem] flex items-end mb-8 md:rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-blue-700 via-blue-400 to-cyan-300 animate-fade-in-up'
          : 'relative w-full h-56 sm:h-72 md:h-96 flex items-end mb-8 md:rounded-2xl overflow-hidden shadow-lg animate-fade-in-up'
        }`}
      >
        {post.slug === 'exploring_ocean_energy' ? (
          <>
            {/* Animated SVG Waves */}
            <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill="#2563eb" fillOpacity="0.5" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
              <path fill="#38bdf8" fillOpacity="0.3" d="M0,224L60,197.3C120,171,240,117,360,117.3C480,117,600,171,720,186.7C840,203,960,181,1080,154.7C1200,128,1320,96,1380,80L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>
            <div className="relative z-20 p-4 sm:p-6 md:p-12 w-full bg-black/30 sm:bg-black/20 backdrop-blur-sm rounded-xl md:rounded-2xl mx-2 sm:mx-4">
              <span className="inline-block mb-3 px-3 py-0.5 bg-cyan-200 text-cyan-900 font-semibold rounded-full shadow text-xs sm:text-sm animate-fade-in-up">Featured</span>
              <h1 className="text-xl sm:text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-2 animate-fade-in-up leading-tight">{post.title}</h1>
              <div className="flex flex-wrap gap-x-3 gap-y-1 items-center text-xs sm:text-sm text-cyan-50 mb-1 animate-fade-in-up">
                <span>By <span className="font-semibold text-white">{post.author}</span></span>
                <span>•</span>
                <span>{post.date}</span>
                {post.categories.length > 0 && (
                  <>
                    <span>•</span>
                    <span>
                      {post.categories.map((cat, i) => (
                        <Link key={cat} to={`/blog/category/${cat.toLowerCase().replace(/\s+/g, '-')}`} className="text-cyan-100 hover:underline transition-colors duration-200">
                          {cat}{i < post.categories.length - 1 ? ', ' : ''}
                        </Link>
                      ))}
                    </span>
                  </>
                )}
                {post.tags.length > 0 && (
                  <>
                    <span>•</span>
                    <span>
                      {post.tags.map((tag, i) => (
                        <Link key={tag} to={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`} className="text-cyan-200 hover:underline transition-colors duration-200">
                          #{tag}{i < post.tags.length - 1 ? ', ' : ''}
                        </Link>
                      ))}
                    </span>
                  </>
                )}
              </div>
            </div>
          </>
        ) : (
          <>
            <img
              src={post.image}
              alt={post.title}
              className="absolute inset-0 w-full h-full object-cover object-center z-0 scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/30 to-black/10 z-10" />
            <div className="relative z-20 p-4 sm:p-6 md:p-12 bg-black/30 sm:bg-black/20 backdrop-blur-sm rounded-xl md:rounded-2xl mx-2 sm:mx-4">
              <h1 className="text-xl sm:text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-2 animate-fade-in-up leading-tight">{post.title}</h1>
              <div className="flex flex-wrap gap-x-3 gap-y-1 items-center text-xs sm:text-sm text-blue-100 mb-1 animate-fade-in-up">
                <span>By <span className="font-semibold text-white">{post.author}</span></span>
              <span>•</span>
              <span>{post.date}</span>
              {post.categories.length > 0 && (
                <>
                  <span>•</span>
                  <span>
                    {post.categories.map((cat, i) => (
                        <Link key={cat} to={`/blog/category/${cat.toLowerCase().replace(/\s+/g, '-')}`} className="text-blue-200 hover:underline transition-colors duration-200">
                        {cat}{i < post.categories.length - 1 ? ', ' : ''}
                      </Link>
                    ))}
                  </span>
                </>
              )}
              {post.tags.length > 0 && (
                <>
                  <span>•</span>
                  <span>
                    {post.tags.map((tag, i) => (
                        <Link key={tag} to={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`} className="text-blue-300 hover:underline transition-colors duration-200">
                        #{tag}{i < post.tags.length - 1 ? ', ' : ''}
                      </Link>
                    ))}
                  </span>
                </>
              )}
            </div>
            </div>
          </>
        )}
      </motion.section>
      <section className="px-1 sm:px-2 md:px-0">
        <div className="container mx-auto flex flex-col md:flex-row gap-8">
          {/* Main Article */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="w-full md:w-2/3 bg-white rounded-lg md:rounded-2xl shadow p-3 sm:p-4 md:p-8 animate-fade-in-up relative"
          >
            {/* Enhanced Content Layout */}
            <div ref={contentRef} className="blog-rich-content px-0 sm:px-2 md:px-0 max-w-2xl mx-auto pb-8 text-sm sm:text-base md:text-xl leading-relaxed">
              <div
                dangerouslySetInnerHTML={{ __html: `
                  <style>
                    .blog-rich-content p:first-of-type::first-letter {
                      float: left;
                      font-size: 3.5rem;
                      line-height: 1;
                      font-weight: bold;
                      color: #2563eb;
                      margin-right: 0.15em;
                      margin-top: 0.1em;
                      font-family: 'Merriweather', serif;
                    }
                    .blog-rich-content h2, .blog-rich-content h3 {
                      font-size: 1.5rem;
                      color: #2563eb;
                      margin-top: 2.5rem;
                      margin-bottom: 1.2rem;
                      font-weight: 700;
                      letter-spacing: -0.01em;
                    }
                    .blog-rich-content blockquote {
                      border-left: 4px solid #38bdf8;
                      background: #f0f9ff;
                      color: #2563eb;
                      font-style: italic;
                      padding: 1rem 1.5rem;
                      margin: 2.5rem 0;
                      border-radius: 0.5rem;
                    }
                    .blog-rich-content ul, .blog-rich-content ol {
                      margin-left: 2rem;
                      margin-bottom: 1.5rem;
                    }
                    .blog-rich-content li {
                      margin-bottom: 0.5rem;
                      font-size: 1.1rem;
                    }
                    .blog-rich-content pre, .blog-rich-content code {
                      background: #f1f5f9;
                      color: #0f172a;
                      border-radius: 0.4em;
                      padding: 0.2em 0.5em;
                      font-size: 1em;
                      font-family: 'Fira Mono', 'Menlo', 'Monaco', 'Consolas', monospace;
                      margin: 1.5rem 0;
                    }
                    .blog-rich-content img {
                      display: block;
                      margin-left: auto;
                      margin-right: auto;
                      border-radius: 1rem;
                      margin-top: 2.5rem;
                      margin-bottom: 2.5rem;
                      max-width: 100%;
                      box-shadow: 0 4px 24px 0 rgba(37,99,235,0.08);
                    }
                    .blog-rich-content p {
                      margin-bottom: 1.5rem;
                      line-height: 1.8;
                      font-size: 1.13rem;
                    }
                  </style>
                  ${post.content}
                ` }}
              />
            </div>
            {/* Author Box */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mt-6 p-3 sm:p-4 bg-blue-50 rounded-lg shadow-inner animate-fade-in-up hover:shadow-lg transition-shadow duration-300"
            >
              <img src="https://ui-avatars.com/api/?name=RichverseEcoTech&background=2563eb&color=fff&size=64" alt="Author" className="w-12 h-12 rounded-full border-2 border-white shadow" />
              <div>
                <div className="font-semibold text-blue-900 text-base">{post.author}</div>
                <div className="text-xs text-blue-700">Tech & Sustainability Writer</div>
                <div className="text-xs text-gray-500 mt-1">Passionate about innovation, clean energy, and digital transformation. Sharing insights to empower a sustainable future.</div>
              </div>
            </motion.div>
            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-5 flex flex-col gap-3 items-stretch border-t pt-6"
            >
              <div className="text-gray-600 text-sm">Have questions or want to work with us?</div>
              <Link to="/contact" className="w-full px-0 py-3 rounded-full bg-blue-600 text-white font-bold text-base hover:bg-blue-700 transition-transform duration-200 hover:scale-105 shadow-md text-center">Contact RichverseEcoTech</Link>
            </motion.div>
          </motion.article>
          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full md:w-1/3 md:sticky md:top-24 z-10 animate-fade-in-up"
          >
            <div className="bg-blue-50 rounded-2xl shadow p-6 mb-8">
              <h3 className="text-lg font-bold text-blue-900 mb-2">Recent Posts</h3>
              <ul className="space-y-4">
                {recentPosts.map((recentPost, idx) => (
                  <motion.li
                    key={recentPost.slug}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * idx }}
                    viewport={{ once: true }}
                    className="flex gap-3 items-center hover:bg-blue-100 rounded-lg p-2 transition-colors duration-200"
                  >
                    <img
                      src={recentPost.image}
                      alt={recentPost.title}
                      className="w-14 h-14 object-cover rounded-lg"
                      loading="lazy"
                    />
                    <div>
                      <Link to={`/blog/${recentPost.slug}`} className="font-semibold text-blue-800 hover:underline line-clamp-2 transition-colors duration-200">{recentPost.title}</Link>
                      <div className="text-xs text-gray-500">{recentPost.date}</div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.aside>
        </div>
      </section>
    </main>
  );
};

export default BlogPostPage;
