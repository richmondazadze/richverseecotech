import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '../../components/Breadcrumbs';
import BlogList from '../../components/blog/BlogList';
import { 
  getAllBlogPosts, 
  getAllCategories, 
  getAllTags, 
  getRecentBlogPosts, 
  searchBlogPosts, 
  BlogPost, 
  BlogCategory, 
  BlogTag 
} from '../../services/blogService';
import { motion } from 'framer-motion';

interface BlogPageProps {
  initialPosts?: BlogPost[];
  title?: string;
}

const BlogPage = ({ initialPosts, title = 'Blog' }: BlogPageProps) => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<BlogCategory[]>([]);
  const [tags, setTags] = useState<BlogTag[]>([]);
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    // Initialize or refresh AOS
    if ((window as any).AOS) {
      (window as any).AOS.refresh();
    }

    // Load blog data
    setBlogPosts(initialPosts || getAllBlogPosts());
    setCategories(getAllCategories());
    setTags(getAllTags());
    setRecentPosts(getRecentBlogPosts(4));
  }, [initialPosts]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setBlogPosts(searchBlogPosts(searchQuery));
    } else {
      setBlogPosts(initialPosts || getAllBlogPosts());
    }
  };

  return (
    <main className="min-h-screen bg-white font-sans pt-[80px]">
      <Helmet>
        <title>RichverseEcoTech</title>
        <meta name="description" content="Read the latest insights, news, and stories from RichverseEcoTech. Explore our blog for tech, sustainability, and innovation." />
        <link rel="canonical" href="/blog" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="RichverseEcoTech" />
        <meta property="og:description" content="Read the latest insights, news, and stories from RichverseEcoTech. Explore our blog for tech, sustainability, and innovation." />
        <meta property="og:image" content={blogPosts[0]?.image} />
        <meta property="og:url" content={`https://richverseecotech.com/blog`} />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="RichverseEcoTech" />
        <meta name="twitter:description" content="Read the latest insights, news, and stories from RichverseEcoTech. Explore our blog for tech, sustainability, and innovation." />
        <meta name="twitter:image" content={blogPosts[0]?.image} />
      </Helmet>
      {/* Breadcrumbs */}
      <div className="sm:static sticky top-0 z-30 bg-white/90 backdrop-blur shadow-sm">
        <Breadcrumbs
          items={[
            { name: 'Home', path: '/' },
            { name: title === 'Blog' ? title : { Blog: '/blog', [title]: '' }['Blog'] },
            ...(title !== 'Blog' ? [{ name: title }] : [])
          ]}
        />
      </div>
      {/* Remove Featured Post Hero */}
      <section className="py-12 px-2 md:px-0">
        <motion.div
          className="container mx-auto flex flex-col md:flex-row gap-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {/* Blog List */}
          <motion.div
            className="w-full md:w-2/3"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <motion.h3
              className="text-2xl font-bold text-blue-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Latest Posts
            </motion.h3>
            <motion.div
              className="grid gap-8 sm:grid-cols-1 md:grid-cols-2"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.12 } },
              }}
            >
              {blogPosts.map((post, i) => (
                <motion.div
                  key={post.id}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.7, delay: i * 0.08 }}
                  className="min-h-[420px] h-full flex flex-col"
                >
                  <Link
                    to={`/blog/${post.slug}`}
                    className="group block bg-blue-50 rounded-2xl shadow hover:shadow-lg transition-all duration-300 overflow-hidden h-full flex flex-col"
                    aria-label={post.title}
                  >
                    <motion.img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      whileHover={{ scale: 1.07 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                    />
                    <div className="p-6 flex-1 flex flex-col">
                      <h2 className="text-2xl font-bold text-blue-900 mb-2 group-hover:text-blue-700 transition-colors line-clamp-2">{post.title}</h2>
                      <div className="flex flex-wrap gap-2 items-center text-xs text-gray-500 mb-2">
                        <span>By <span className="font-semibold text-blue-700">{post.author}</span></span>
                        <span>•</span>
                        <span>{post.date}</span>
                      </div>
                      <p className="text-gray-700 text-base mb-3 line-clamp-3 flex-1">{post.summary}</p>
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
                </motion.div>
              ))}
            </motion.div>
            {blogPosts.length === 0 && (
              <motion.div className="text-center py-12 text-gray-500" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                No blog posts found.
              </motion.div>
            )}
          </motion.div>
          {/* Sidebar */}
          <motion.aside
            className="w-full md:w-1/3 md:sticky md:top-24 z-10 mb-8 md:mb-0"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          >
            <motion.div
              className="bg-blue-50 rounded-2xl shadow p-6 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-lg font-bold text-blue-900 mb-2">Categories</h3>
              <ul className="space-y-1">
                {categories.map((category) => (
                  <motion.li key={category.name} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.1 }}>
                    <Link to={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`} className="text-blue-700 hover:underline">
                      {category.name} <span className="text-xs text-gray-500">({category.count})</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              className="bg-blue-50 rounded-2xl shadow p-6 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-lg font-bold text-blue-900 mb-2">Recent Posts</h3>
              <ul className="space-y-4">
                {recentPosts.map((post) => (
                  <motion.li key={post.slug} className="flex gap-3 items-center" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.1 }}>
                    <img src={post.image} alt={post.title} className="w-14 h-14 object-cover rounded-lg" loading="lazy" />
                    <div>
                      <Link to={`/blog/${post.slug}`} className="font-semibold text-blue-800 hover:underline line-clamp-2">{post.title}</Link>
                      <div className="text-xs text-gray-500">{post.date}</div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              className="bg-blue-50 rounded-2xl shadow p-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="text-lg font-bold text-blue-900 mb-2">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <motion.div key={tag.name} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.1 }}>
                    <Link
                      to={`/blog/tag/${tag.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium hover:bg-blue-200"
                    >
                      {tag.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.aside>
        </motion.div>
      </section>
    </main>
  );
};

export default BlogPage;
