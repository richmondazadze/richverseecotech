import React from 'react';
import { Link } from 'wouter';
import { BlogPost } from '../../services/blogService';

interface BlogListProps {
  posts: BlogPost[];
  showPagination?: boolean;
}

const BlogList: React.FC<BlogListProps> = ({ posts, showPagination = true }) => {
  return (
    <div className="entries">
      {posts.length === 0 ? (
        <div className="text-center p-5">
          <h3>No blog posts found</h3>
          <p>Please check back later for new content!</p>
        </div>
      ) : (
        <>
          {posts.map((post) => (
            <article className="entry" key={post.id} data-aos="fade-up">
              <div className="entry-img">
                <img src={post.image} alt={post.title} className="img-fluid" />
              </div>

              <h2 className="entry-title">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>

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

              <div className="entry-content">
                <p>{post.summary}</p>
                <div className="read-more">
                  <Link href={`/blog/${post.slug}`}>Read More</Link>
                </div>
              </div>
            </article>
          ))}

          {showPagination && posts.length > 0 && (
            <div className="blog-pagination">
              <ul className="justify-content-center">
                <li className="active"><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default BlogList;