export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  summary: string;
  /** HTML body */
  content: string;
  image: string;
  tags: string[];
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Exploring Ocean Energy: The Future of Sustainable Power',
    slug: 'exploring-ocean-energy',
    author: 'RichverseEcotech',
    date: 'May 24, 2024',
    readTime: '6 min read',
    category: 'Renewable Energy',
    summary:
      'Ocean energy represents one of the most promising frontiers in renewable energy. With water covering more than 70% of our planet, oceans hold immense potential as a clean, consistent, and powerful energy source.',
    image:
      '/blog/exploring-ocean-energy.jpg',
    tags: ['Ocean Energy', 'Sustainability', 'Clean Energy', 'Innovation'],
    featured: true,
    content: `
      <p>Ocean energy represents one of the most promising frontiers in renewable energy. With vast expanses of water covering more than 70% of our planet, oceans hold immense potential as a clean, consistent, and powerful energy source.</p>
      <h3>Types of Ocean Energy</h3>
      <p>There are several ways to harness energy from our oceans:</p>
      <ul>
        <li><strong>Tidal Energy:</strong> Utilizing the natural rise and fall of ocean tides to generate electricity.</li>
        <li><strong>Wave Energy:</strong> Capturing the power of ocean waves as they move across the surface.</li>
        <li><strong>Ocean Current Energy:</strong> Leveraging the continuous flow of ocean currents to drive turbines.</li>
        <li><strong>Ocean Thermal Energy Conversion (OTEC):</strong> Exploiting the temperature difference between warm surface water and cold deep water.</li>
        <li><strong>Salinity Gradient Energy:</strong> Harnessing the energy available from the difference in salt concentration between seawater and freshwater.</li>
      </ul>
      <h3>Advantages of Ocean Energy</h3>
      <ul>
        <li><strong>Predictability:</strong> Unlike solar and wind, tides and currents are predictable and consistent.</li>
        <li><strong>High Energy Density:</strong> Water is about 800 times denser than air, providing more energy per unit volume.</li>
        <li><strong>Low Visual Impact:</strong> Most ocean energy technologies operate below or at the ocean's surface.</li>
        <li><strong>Minimal Land Use:</strong> Ocean energy devices don't compete for land with agriculture or housing.</li>
      </ul>
      <h3>Current Challenges</h3>
      <ul>
        <li><strong>Technology Development:</strong> Most ocean energy technologies are still in the early stages.</li>
        <li><strong>Cost:</strong> Generation currently exceeds that of established renewables like solar and wind.</li>
        <li><strong>Environmental Concerns:</strong> Potential impacts on marine ecosystems need careful assessment.</li>
        <li><strong>Grid Connection:</strong> Many ideal locations are remote, requiring significant infrastructure.</li>
      </ul>
      <h3>Looking Forward</h3>
      <p>As technology advances and costs decrease, ocean energy is expected to play an increasingly significant role in our global energy mix. With continued research, development, and investment, ocean energy could provide a substantial portion of our clean energy needs in the coming decades.</p>
      <p>At RichverseEcotech, we're committed to supporting innovative renewable energy solutions, including ocean energy technologies. We believe a diverse portfolio of renewable sources is essential to a sustainable and resilient energy future.</p>
    `,
  },
  {
    id: '2',
    title: "The Power of Digital Marketing in Today's World",
    slug: 'digital-marketing-power',
    author: 'RichverseEcotech',
    date: 'May 25, 2024',
    readTime: '7 min read',
    category: 'Digital Marketing',
    summary:
      "In today's digital landscape, businesses face unprecedented opportunities and challenges. The power of digital marketing lies in its ability to connect brands with their target audience in meaningful and measurable ways.",
    image:
      '/blog/digital-marketing-power.jpg',
    tags: ['Digital Marketing', 'SEO', 'Social Media', 'Business Growth'],
    featured: true,
    content: `
      <p>In today's digital landscape, businesses face unprecedented opportunities and challenges. The power of digital marketing lies in its ability to connect brands with their target audience in meaningful and measurable ways.</p>
      <h3>Why Digital Marketing Matters</h3>
      <ul>
        <li><strong>Global Reach:</strong> Reach a global audience cost-effectively, regardless of business size.</li>
        <li><strong>Targeted Approach:</strong> Advanced targeting enables precise segmentation and personalized messaging.</li>
        <li><strong>Measurable Results:</strong> Comprehensive analytics provide clear insight into performance and ROI.</li>
        <li><strong>Cost-Effective:</strong> Digital channels often outperform traditional methods on cost.</li>
        <li><strong>Real-Time Engagement:</strong> Immediate interaction builds relationships and brand loyalty.</li>
      </ul>
      <h3>Key Digital Marketing Channels</h3>
      <ul>
        <li><strong>Search Engine Optimization (SEO):</strong> Improving visibility in organic search results.</li>
        <li><strong>Pay-Per-Click (PPC):</strong> Running targeted ads across search and social platforms.</li>
        <li><strong>Social Media Marketing:</strong> Engaging audiences where they already spend their time.</li>
        <li><strong>Content Marketing:</strong> Creating valuable content to attract and retain customers.</li>
        <li><strong>Email Marketing:</strong> Direct, personalized communication with prospects and customers.</li>
      </ul>
      <h3>Adapting to the Future</h3>
      <ul>
        <li><strong>Artificial Intelligence:</strong> Enhancing targeting, personalization, and automation.</li>
        <li><strong>Voice Search:</strong> Optimizing for voice as adoption of smart devices grows.</li>
        <li><strong>Video Content:</strong> Short-form video continues to dominate engagement.</li>
        <li><strong>Privacy-Focused Marketing:</strong> Strategies that respect tightening privacy regulation.</li>
      </ul>
      <h3>Conclusion</h3>
      <p>Digital marketing is no longer optional for businesses seeking growth and relevance. At RichverseEcotech, we help businesses navigate the complex digital landscape with tailored strategies that deliver measurable results.</p>
    `,
  },
  {
    id: '3',
    title: 'Understanding Social Media Analytics for Marketing Success',
    slug: 'social-media-analytics',
    author: 'RichverseEcotech',
    date: 'May 24, 2024',
    readTime: '5 min read',
    category: 'Digital Marketing',
    summary:
      'Achieving marketing success through social media requires more than posting content — it demands an understanding of analytics to evaluate and refine the effectiveness of your efforts.',
    image:
      '/blog/social-media-analytics.jpg',
    tags: ['Social Media Analytics', 'Marketing Strategies', 'Digital Success'],
    featured: false,
    content: `
      <p>In today's digital age, social media has become a crucial tool for businesses aiming to connect with their target audience. However, achieving marketing success requires an understanding of social media analytics to evaluate the effectiveness of your efforts.</p>
      <h3>Measure ROI and Impact</h3>
      <p>Analytics enable businesses to track campaign effectiveness and demonstrate value — showing how social media contributes to traffic, lead generation, and sales.</p>
      <h3>Know Your Audience</h3>
      <p>Insights into demographics, interests, and behavior allow businesses to tailor content and messaging to resonate better with their audience.</p>
      <h3>Optimize Your Strategy</h3>
      <p>By analyzing engagement, reach, and click-through rate, businesses identify which content types perform best, and refine posting times and platform mix.</p>
      <h3>Stay Ahead of the Competition</h3>
      <p>Benchmarking against competitors provides valuable insight into content, platform usage, and audience engagement.</p>
      <h3>Conclusion</h3>
      <p>Social media analytics play a pivotal role in marketing success. By leveraging data-driven insights, businesses enhance strategy, engage effectively, and meet their goals. It's an ongoing process of monitoring, experimentation, and adaptation.</p>
    `,
  },
  {
    id: '4',
    title: 'Recognizing and Preventing Phishing Attacks: A Guide for Businesses',
    slug: 'preventing-phishing-attacks',
    author: 'RichverseEcotech',
    date: 'May 20, 2024',
    readTime: '8 min read',
    category: 'Cybersecurity',
    summary:
      'Among the many cybersecurity threats facing digitizing businesses, phishing attacks remain one of the most prevalent and dangerous. This guide helps you recognize and prevent them.',
    image:
      '/blog/preventing-phishing-attacks.jpg',
    tags: ['Cybersecurity', 'Phishing', 'Data Protection', 'Security Awareness'],
    featured: false,
    content: `
      <p>As businesses continue to digitize their operations, cybersecurity threats have become increasingly sophisticated. Among these, phishing attacks remain one of the most prevalent and dangerous. This guide helps businesses recognize and prevent phishing to safeguard sensitive data.</p>
      <h3>Common Types of Phishing Attacks</h3>
      <ul>
        <li><strong>Email Phishing:</strong> Emails purporting to be from legitimate companies or individuals.</li>
        <li><strong>Spear Phishing:</strong> Targeted attacks using personalized information to increase credibility.</li>
        <li><strong>Whaling:</strong> Attacks targeting high-profile executives with access to sensitive information.</li>
        <li><strong>Smishing &amp; Vishing:</strong> Phishing conducted via SMS or voice calls.</li>
        <li><strong>Clone Phishing:</strong> Near-identical copies of legitimate emails with malicious links.</li>
      </ul>
      <h3>Recognizing Phishing Attempts</h3>
      <ul>
        <li><strong>Suspicious Sender Addresses:</strong> Check for misspellings or domains that don't match.</li>
        <li><strong>Urgent or Threatening Language:</strong> Beware of manufactured urgency.</li>
        <li><strong>Unexpected Attachments or Links:</strong> Be wary of unsolicited requests to "verify" details.</li>
        <li><strong>Requests for Sensitive Information:</strong> Legitimate organizations rarely ask via email.</li>
      </ul>
      <h3>Preventing Phishing Attacks</h3>
      <ul>
        <li><strong>Employee Education:</strong> Regular training to recognize and respond to attempts.</li>
        <li><strong>Email Filtering:</strong> Robust security tools to detect and filter suspicious messages.</li>
        <li><strong>Multi-Factor Authentication:</strong> Additional verification beyond passwords.</li>
        <li><strong>Regular Updates:</strong> Keep all systems patched with the latest security fixes.</li>
        <li><strong>Phishing Simulations:</strong> Mock exercises to test and improve awareness.</li>
      </ul>
      <h3>Conclusion</h3>
      <p>As phishing techniques evolve, businesses must remain vigilant and proactive. Effective defense is not just technology — it's a security-conscious culture where every employee understands their role in protecting digital assets.</p>
    `,
  },
];

export const getFeaturedPosts = () => blogPosts.filter((p) => p.featured);
export const getPostBySlug = (slug: string) => blogPosts.find((p) => p.slug === slug);
export const getRelatedPosts = (slug: string, category: string, limit = 2) =>
  blogPosts.filter((p) => p.slug !== slug && p.category === category).slice(0, limit);
export const blogCategories = Array.from(new Set(blogPosts.map((p) => p.category)));
