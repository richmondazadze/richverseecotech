import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../../services/blogService';

interface BlogListProps {
  posts: BlogPost[];
  showPagination?: boolean;
}

const BlogList: React.FC<BlogListProps> = ({ posts, showPagination = true }) => {
  if (!posts.length) {
    return <div className="text-center py-12 text-gray-500">No blog posts found.</div>;
  }
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {posts.map((post) => (
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
  );
};

export default BlogList;