import { useEffect } from 'react';
import { Link } from 'wouter';
import Breadcrumbs from '../components/Breadcrumbs';

const BlogPage = () => {
  useEffect(() => {
    // Initialize or refresh AOS
    if (window.AOS) {
      window.AOS.refresh();
    }
  }, []);

  return (
    <main id="main">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { name: 'Home', path: '/' },
          { name: 'Blog' }
        ]}
      />

      <section id="blog" className="blog">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-8 entries">
              {/* Blog Post 1 */}
              <article className="entry">
                <div className="entry-img">
                  <img src="/assets/img/exploring-ocean-energy-cover.jpeg" alt="" className="img-fluid" />
                </div>

                <h2 className="entry-title">
                  <Link href="/blog/exploring_ocean_energy">Exploring Ocean Energy: The Future of Sustainable Power</Link>
                </h2>

                <div className="entry-meta">
                  <ul>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-person"></i>
                      <Link href="/blog/exploring_ocean_energy">RichverseEcoTech</Link>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-clock"></i>
                      <Link href="/blog/exploring_ocean_energy">
                        <time dateTime="2024-05-24">May 24, 2024</time>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="entry-content">
                  <p>
                    Ocean energy represents one of the most promising frontiers in renewable energy. 
                    With vast expanses of water covering more than 70% of our planet, oceans hold 
                    immense potential as a clean, consistent, and powerful energy source.
                  </p>
                  <div className="read-more">
                    <Link href="/blog/exploring_ocean_energy">Read More</Link>
                  </div>
                </div>
              </article>
              {/* End blog entry */}

              {/* Blog Post 2 */}
              <article className="entry">
                <div className="entry-img">
                  <img src="/assets/img/power of digital Marketing 2.jpeg" alt="" className="img-fluid" />
                </div>

                <h2 className="entry-title">
                  <Link href="/blog/digital-marketing-power-2024">The Power of Digital Marketing in Today's World</Link>
                </h2>

                <div className="entry-meta">
                  <ul>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-person"></i>
                      <Link href="/blog/digital-marketing-power-2024">RichverseEcoTech</Link>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-clock"></i>
                      <Link href="/blog/digital-marketing-power-2024">
                        <time dateTime="2024-05-25">May 25, 2024</time>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="entry-content">
                  <p>
                    In today's digital landscape, businesses face unprecedented opportunities and challenges. 
                    The power of digital marketing lies in its ability to connect brands with their target 
                    audience in meaningful and measurable ways.
                  </p>
                  <div className="read-more">
                    <Link href="/blog/digital-marketing-power-2024">Read More</Link>
                  </div>
                </div>
              </article>
              {/* End blog entry */}

              {/* Blog Post 3 */}
              <article className="entry">
                <div className="entry-img">
                  <img src="/assets/img/social media analytics.jpeg" alt="" className="img-fluid" />
                </div>

                <h2 className="entry-title">
                  <Link href="/blog/social-media-analytics-marketing-success-2024">Understanding Social Media Analytics for Marketing Success</Link>
                </h2>

                <div className="entry-meta">
                  <ul>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-person"></i>
                      <Link href="/blog/social-media-analytics-marketing-success-2024">RichverseEcoTech</Link>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-clock"></i>
                      <Link href="/blog/social-media-analytics-marketing-success-2024">
                        <time dateTime="2024-05-24">May 24, 2024</time>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="entry-content">
                  <p>
                    In today's digital age, social media has become a crucial tool for businesses aiming 
                    to connect with their target audience. However, achieving marketing success through 
                    social media requires more than just posting content.
                  </p>
                  <div className="read-more">
                    <Link href="/blog/social-media-analytics-marketing-success-2024">Read More</Link>
                  </div>
                </div>
              </article>
              {/* End blog entry */}

              {/* Blog Post 4 */}
              <article className="entry">
                <div className="entry-img">
                  <img src="/assets/img/phishing.jpeg" alt="" className="img-fluid" />
                </div>

                <h2 className="entry-title">
                  <Link href="/blog/phishing_attacks">Recognizing and Preventing Phishing Attacks: A Guide for Businesses</Link>
                </h2>

                <div className="entry-meta">
                  <ul>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-person"></i>
                      <Link href="/blog/phishing_attacks">RichverseEcoTech</Link>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-clock"></i>
                      <Link href="/blog/phishing_attacks">
                        <time dateTime="2024-05-20">May 20, 2024</time>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="entry-content">
                  <p>
                    As businesses continue to digitize their operations, cybersecurity threats have become 
                    increasingly sophisticated. Among these threats, phishing attacks remain one of the 
                    most prevalent and dangerous.
                  </p>
                  <div className="read-more">
                    <Link href="/blog/phishing_attacks">Read More</Link>
                  </div>
                </div>
              </article>
              {/* End blog entry */}

              <div className="blog-pagination">
                <ul className="justify-content-center">
                  <li className="active"><a href="#">1</a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                </ul>
              </div>
            </div>
            {/* End blog entries list */}

            <div className="col-lg-4">
              <div className="sidebar">
                <h3 className="sidebar-title">Search</h3>
                <div className="sidebar-item search-form">
                  <form action="">
                    <input type="text" placeholder="Search blog posts..." />
                    <button type="submit"><i className="bi bi-search"></i></button>
                  </form>
                </div>
                {/* End sidebar search form */}

                <h3 className="sidebar-title">Categories</h3>
                <div className="sidebar-item categories">
                  <ul>
                    <li><a href="#">Renewable Energy <span>(4)</span></a></li>
                    <li><a href="#">Digital Marketing <span>(6)</span></a></li>
                    <li><a href="#">Web Development <span>(8)</span></a></li>
                    <li><a href="#">Cybersecurity <span>(5)</span></a></li>
                    <li><a href="#">Technology Trends <span>(12)</span></a></li>
                    <li><a href="#">Business Growth <span>(7)</span></a></li>
                  </ul>
                </div>
                {/* End sidebar categories */}

                <h3 className="sidebar-title">Recent Posts</h3>
                <div className="sidebar-item recent-posts">
                  <div className="post-item clearfix">
                    <img src="/assets/img/exploring-ocean-energy-cover.jpeg" alt="" />
                    <h4>
                      <Link href="/blog/exploring_ocean_energy">Exploring Ocean Energy: The Future of Sustainable Power</Link>
                    </h4>
                    <time dateTime="2024-05-24">May 24, 2024</time>
                  </div>

                  <div className="post-item clearfix">
                    <img src="/assets/img/power of digital Marketing 2.jpeg" alt="" />
                    <h4>
                      <Link href="/blog/digital-marketing-power-2024">The Power of Digital Marketing in Today's World</Link>
                    </h4>
                    <time dateTime="2024-05-25">May 25, 2024</time>
                  </div>

                  <div className="post-item clearfix">
                    <img src="/assets/img/social media analytics.jpeg" alt="" />
                    <h4>
                      <Link href="/blog/social-media-analytics-marketing-success-2024">Understanding Social Media Analytics for Marketing Success</Link>
                    </h4>
                    <time dateTime="2024-05-24">May 24, 2024</time>
                  </div>

                  <div className="post-item clearfix">
                    <img src="/assets/img/phishing.jpeg" alt="" />
                    <h4>
                      <Link href="/blog/phishing_attacks">Recognizing and Preventing Phishing Attacks</Link>
                    </h4>
                    <time dateTime="2024-05-20">May 20, 2024</time>
                  </div>
                </div>
                {/* End sidebar recent posts */}

                <h3 className="sidebar-title">Tags</h3>
                <div className="sidebar-item tags">
                  <ul>
                    <li><a href="#">Renewable Energy</a></li>
                    <li><a href="#">Digital Marketing</a></li>
                    <li><a href="#">SEO</a></li>
                    <li><a href="#">Web Development</a></li>
                    <li><a href="#">Cybersecurity</a></li>
                    <li><a href="#">Mobile Apps</a></li>
                    <li><a href="#">Cloud Computing</a></li>
                    <li><a href="#">Sustainability</a></li>
                    <li><a href="#">Business Growth</a></li>
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

export default BlogPage;
