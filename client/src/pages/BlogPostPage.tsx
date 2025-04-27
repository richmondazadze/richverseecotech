import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import Breadcrumbs from '../components/Breadcrumbs';
import { getBlogPostBySlug, getRecentBlogPosts, BlogPost } from '../services/blogService';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

const BlogPostPage = ({ params }: BlogPostPageProps) => {
  const [post, setPost] = useState<BlogPost | undefined>(undefined);
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize or refresh AOS
    if (window.AOS) {
      window.AOS.refresh();
    }

    // Get blog post data
    const blogPost = getBlogPostBySlug(params.slug);
    setPost(blogPost);
    
    // Get recent posts excluding the current one
    const recent = getRecentBlogPosts(4).filter(p => p.slug !== params.slug);
    setRecentPosts(recent);
    
    setIsLoading(false);
  }, [params.slug]);

  if (isLoading) {
    return (
      <main id="main">
        <div className="container py-5 text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </main>
    );
  }

  if (!post) {
    return (
      <main id="main">
        <Breadcrumbs
          items={[
            { name: 'Home', path: '/' },
            { name: 'Blog', path: '/blog' },
            { name: 'Post Not Found' }
          ]}
        />
        <section className="blog py-5">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h2>Blog Post Not Found</h2>
                <p>The blog post you're looking for does not exist or has been removed.</p>
                <Link href="/blog" className="btn btn-primary mt-3">
                  Return to Blog
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main id="main">
      <Breadcrumbs
        items={[
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
          { name: post.title }
        ]}
      />

      <section id="blog" className="blog">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-8 entries">
              <article className="entry entry-single">
                <div className="entry-img">
                  <img src={post.image} alt={post.title} className="img-fluid" />
                </div>
                <h1 className="entry-title">
                  {post.title}
                </h1>

                <div className="entry-meta">
                  <ul>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-person"></i>
                      <Link href={`/blog/${post.slug}`}>{post.author}</Link>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-clock"></i>
                      <Link href={`/blog/${post.slug}`}>
                        <time dateTime={post.date}>{post.date}</time>
                      </Link>
                    </li>
                    {post.categories.length > 0 && (
                      <li className="d-flex align-items-center">
                        <i className="bi bi-folder"></i>
                        <Link href={`/blog/category/${post.categories[0].toLowerCase().replace(/\s+/g, '-')}`}>
                          {post.categories[0]}
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>

                <div className="entry-content" dangerouslySetInnerHTML={{ __html: post.content }} />

                <div className="entry-footer">
                  {post.categories.length > 0 && (
                    <>
                      <i className="bi bi-folder"></i>
                      <ul className="cats">
                        {post.categories.map((category, index) => (
                          <li key={index}>
                            <Link href={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}>
                              {category}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  {post.tags.length > 0 && (
                    <>
                      <i className="bi bi-tags"></i>
                      <ul className="tags">
                        {post.tags.map((tag, index) => (
                          <li key={index}>
                            <Link href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}>
                              {tag}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </article>

              <div className="blog-author d-flex align-items-center">
                <Link href="/dmarketing" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                  <span>Learn More About Our Services</span>
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="sidebar">
                <h3 className="sidebar-title">Recent Posts</h3>
                <div className="sidebar-item recent-posts">
                  {recentPosts.map((recentPost) => (
                    <div className="post-item clearfix" key={recentPost.id}>
                      <img src={recentPost.image} alt={recentPost.title} />
                      <h4>
                        <Link href={`/blog/${recentPost.slug}`}>
                          {recentPost.title}
                        </Link>
                      </h4>
                      <time dateTime={recentPost.date}>{recentPost.date}</time>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogPostPage;
