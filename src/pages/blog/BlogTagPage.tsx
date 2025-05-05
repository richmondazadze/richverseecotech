import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '../../components/Breadcrumbs';
import BlogList from '../../components/blog/BlogList';
import { 
  getAllCategories, 
  getAllTags, 
  getRecentBlogPosts, 
  searchBlogPosts, 
  getBlogPostsByTag,
  BlogPost, 
  BlogCategory, 
  BlogTag 
} from '../../services/blogService';

declare global {
  interface Window {
    AOS: {
      refresh: () => void;
    };
  }
}

const BlogTagPage = () => {
  const { tag } = useParams<{ tag: string }>();
  const tagName = tag?.replace(/-/g, ' ') || '';
  
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<BlogCategory[]>([]);
  const [tags, setTags] = useState<BlogTag[]>([]);
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    // Initialize or refresh AOS
    if (window.AOS) {
      window.AOS.refresh();
    }

    if (!tag) return;

    // Load blog data
    const posts = getBlogPostsByTag(tagName);
    setBlogPosts(posts);
    setCategories(getAllCategories());
    setTags(getAllTags());
    setRecentPosts(getRecentBlogPosts(4));
  }, [tag, tagName]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setBlogPosts(searchBlogPosts(searchQuery));
    } else {
      setBlogPosts(getBlogPostsByTag(tagName));
    }
  };

  return (
    <main className="min-h-screen bg-white font-sans">
      <Helmet>
        <title>Tag: {tagName} | RichverseEcoTech Blog</title>
        <meta name="description" content={`Read blog posts tagged '${tagName}' from RichverseEcoTech.`} />
        <link rel="canonical" href={`/blog/tag/${tag}`} />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`Tag: ${tagName} | RichverseEcoTech Blog`} />
        <meta property="og:description" content={`Read blog posts tagged '${tagName}' from RichverseEcoTech.`} />
        <meta property="og:image" content={blogPosts[0]?.image} />
        <meta property="og:url" content={`https://richverseecotech.com/blog/tag/${tag}`} />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Tag: ${tagName} | RichverseEcoTech Blog`} />
        <meta name="twitter:description" content={`Read blog posts tagged '${tagName}' from RichverseEcoTech.`} />
        <meta name="twitter:image" content={blogPosts[0]?.image} />
      </Helmet>
      <Breadcrumbs
        items={[
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
          { name: `Tag: ${tagName}` }
        ]}
      />
      {/* Featured Post Hero */}
      {blogPosts.length > 0 && (
        <section className="relative w-full h-80 md:h-[28rem] flex items-end mb-12 rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-blue-700 via-blue-400 to-cyan-300 animate-fade-in-up">
          <img
            src={blogPosts[0].image}
            alt={blogPosts[0].title}
            className="absolute inset-0 w-full h-full object-cover object-center z-0 scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/30 to-transparent z-10" />
          <div className="relative z-20 p-8 md:p-12 w-full">
            <span className="inline-block mb-4 px-4 py-1 bg-cyan-200 text-cyan-900 font-bold rounded-full shadow animate-fade-in-up">Featured</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-2 animate-fade-in-up">{blogPosts[0].title}</h2>
            <p className="text-lg text-cyan-50 max-w-2xl mb-4 animate-fade-in-up line-clamp-3">{blogPosts[0].summary}</p>
            <Link to={`/blog/${blogPosts[0].slug}`} className="inline-block px-6 py-3 rounded-full bg-cyan-600 text-white font-bold hover:bg-cyan-700 transition animate-fade-in-up">Read Full Story</Link>
          </div>
        </section>
      )}
      <section className="py-8 px-2 md:px-0">
        <div className="container mx-auto flex flex-col md:flex-row gap-8">
          {/* Blog List */}
          <div className="w-full md:w-2/3">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Posts tagged '{tagName}'</h3>
            <div className="grid gap-8 md:grid-cols-2">
              {blogPosts.slice(1).map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="group block bg-blue-50 rounded-2xl shadow hover:shadow-lg transition-all duration-300 overflow-hidden"
                  aria-label={post.title}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-blue-900 mb-2 group-hover:text-blue-700 transition-colors line-clamp-2">{post.title}</h2>
                    <div className="flex flex-wrap gap-2 items-center text-xs text-gray-500 mb-2">
                      <span>By <span className="font-semibold text-blue-700">{post.author}</span></span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>
                    <p className="text-gray-700 text-base mb-3 line-clamp-3">{post.summary}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {post.categories.map((cat) => (
                        <span key={cat} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">{cat}</span>
                      ))}
                      {post.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-blue-50 text-blue-500 rounded-full text-xs font-medium">#{tag}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            {blogPosts.length <= 1 && (
              <div className="text-center py-12 text-gray-500">No more blog posts found.</div>
            )}
          </div>
          {/* Sidebar */}
          <aside className="w-full md:w-1/3 md:sticky md:top-24 z-10">
            <button
              className="md:hidden mb-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-semibold"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-expanded={sidebarOpen}
              aria-controls="blog-sidebar"
            >
              {sidebarOpen ? 'Hide Sidebar' : 'Show Sidebar'}
            </button>
            <div id="blog-sidebar" className={`${sidebarOpen ? '' : 'hidden md:block'} transition-all duration-300`}>
              <div className="bg-blue-50 rounded-2xl shadow p-6 mb-8">
                <h3 className="text-lg font-bold text-blue-900 mb-2">Search</h3>
                <form onSubmit={handleSearch} className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Search blog posts..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 px-3 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    aria-label="Search blog posts"
                  />
                  <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">Search</button>
                </form>
              </div>
              <div className="bg-blue-50 rounded-2xl shadow p-6 mb-8">
                <h3 className="text-lg font-bold text-blue-900 mb-2">Categories</h3>
                <ul className="space-y-1">
                  {categories.map((cat) => (
                    <li key={cat.name}>
                      <Link to={`/blog/category/${cat.name.toLowerCase().replace(/\s+/g, '-')}`} className="text-blue-700 hover:underline">
                        {cat.name} <span className="text-xs text-gray-500">({cat.count})</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-blue-50 rounded-2xl shadow p-6 mb-8">
                <h3 className="text-lg font-bold text-blue-900 mb-2">Recent Posts</h3>
                <ul className="space-y-4">
                  {recentPosts.map((post) => (
                    <li key={post.slug} className="flex gap-3 items-center">
                      <img src={post.image} alt={post.title} className="w-14 h-14 object-cover rounded-lg" loading="lazy" />
                      <div>
                        <Link to={`/blog/${post.slug}`} className="font-semibold text-blue-800 hover:underline line-clamp-2">{post.title}</Link>
                        <div className="text-xs text-gray-500">{post.date}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-blue-50 rounded-2xl shadow p-6">
                <h3 className="text-lg font-bold text-blue-900 mb-2">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <Link
                      key={tag.name}
                      to={`/blog/tag/${tag.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium hover:bg-blue-200"
                    >
                      {tag.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default BlogTagPage;