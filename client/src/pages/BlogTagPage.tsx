import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import Breadcrumbs from '../components/Breadcrumbs';
import BlogList from '../components/blog/BlogList';
import { 
  getAllCategories, 
  getAllTags, 
  getRecentBlogPosts, 
  searchBlogPosts, 
  getBlogPostsByTag,
  BlogPost, 
  BlogCategory, 
  BlogTag 
} from '../services/blogService';

interface BlogTagPageProps {
  params: {
    tag: string;
  };
}

const BlogTagPage = ({ params }: BlogTagPageProps) => {
  const tagName = params.tag.replace(/-/g, ' ');
  
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<BlogCategory[]>([]);
  const [tags, setTags] = useState<BlogTag[]>([]);
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Initialize or refresh AOS
    if (window.AOS) {
      window.AOS.refresh();
    }

    // Load blog data
    const posts = getBlogPostsByTag(tagName);
    setBlogPosts(posts);
    setCategories(getAllCategories());
    setTags(getAllTags());
    setRecentPosts(getRecentBlogPosts(4));
  }, [tagName]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setBlogPosts(searchBlogPosts(searchQuery));
    } else {
      setBlogPosts(getBlogPostsByTag(tagName));
    }
  };

  return (
    <main id="main">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
          { name: `Tag: ${tagName}` }
        ]}
      />

      <section id="blog" className="blog">
        <div className="container" data-aos="fade-up">
          <div className="row mb-5">
            <div className="col-12">
              <h2 className="text-center">Tag: {tagName}</h2>
              {blogPosts.length === 0 && (
                <p className="text-center mt-3">No posts found for this tag.</p>
              )}
            </div>
          </div>
          
          <div className="row">
            <div className="col-lg-8">
              <BlogList posts={blogPosts} showPagination={blogPosts.length > 6} />
            </div>
            {/* End blog entries list */}

            <div className="col-lg-4">
              <div className="sidebar">
                <h3 className="sidebar-title">Search</h3>
                <div className="sidebar-item search-form">
                  <form onSubmit={handleSearch}>
                    <input 
                      type="text" 
                      placeholder="Search blog posts..." 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button type="submit"><i className="bi bi-search"></i></button>
                  </form>
                </div>
                {/* End sidebar search form */}

                <h3 className="sidebar-title">Categories</h3>
                <div className="sidebar-item categories">
                  <ul>
                    {categories.map((category) => (
                      <li key={category.slug}>
                        <Link href={`/blog/category/${category.slug}`}>
                          {category.name} <span>({category.count})</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* End sidebar categories */}

                <h3 className="sidebar-title">Recent Posts</h3>
                <div className="sidebar-item recent-posts">
                  {recentPosts.map((post) => (
                    <div className="post-item clearfix" key={post.id}>
                      <img src={post.image} alt={post.title} />
                      <h4>
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h4>
                      <time dateTime={post.date}>{post.date}</time>
                    </div>
                  ))}
                </div>
                {/* End sidebar recent posts */}

                <h3 className="sidebar-title">Tags</h3>
                <div className="sidebar-item tags">
                  <ul>
                    {tags.map((tag) => (
                      <li key={tag.slug} className={tag.name === tagName ? 'active' : ''}>
                        <Link href={`/blog/tag/${tag.slug}`}>{tag.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* End sidebar tags */}
              </div>
              {/* End sidebar */}
            </div>
            {/* End blog sidebar */}
          </div>
        </div>
      </section>
      {/* End Blog Section */}
    </main>
  );
};

export default BlogTagPage;