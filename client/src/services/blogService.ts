// Types for blog data
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  author: string;
  date: string;
  summary: string;
  content: string;
  image: string;
  categories: string[];
  tags: string[];
  featured: boolean;
}

export interface BlogCategory {
  name: string;
  slug: string;
  count: number;
}

export interface BlogTag {
  name: string;
  slug: string;
  count: number;
}

// Mock data for blog posts
const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Exploring Ocean Energy: The Future of Sustainable Power',
    slug: 'exploring_ocean_energy',
    author: 'RichverseEcoTech',
    date: 'May 24, 2024',
    summary: 'Ocean energy represents one of the most promising frontiers in renewable energy. With vast expanses of water covering more than 70% of our planet, oceans hold immense potential as a clean, consistent, and powerful energy source.',
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
      <p>As a renewable energy source, ocean energy offers several advantages:</p>
      <ul>
        <li>Predictability: Unlike solar and wind, tides and currents are predictable and consistent.</li>
        <li>High Energy Density: Water is about 800 times denser than air, providing more energy per unit volume.</li>
        <li>Low Visual Impact: Most ocean energy technologies operate below or at the ocean's surface.</li>
        <li>Minimal Land Use: Ocean energy devices don't compete for land with agriculture, housing, or other uses.</li>
      </ul>

      <h3>Current Challenges</h3>
      <p>Despite its potential, ocean energy faces several obstacles:</p>
      <ul>
        <li>Technology Development: Most ocean energy technologies are still in the early stages of development.</li>
        <li>Cost: The cost of ocean energy generation currently exceeds that of established renewables like solar and wind.</li>
        <li>Environmental Concerns: Potential impacts on marine ecosystems need careful assessment and mitigation.</li>
        <li>Grid Connection: Many ideal locations for ocean energy are remote, requiring significant infrastructure for grid connection.</li>
      </ul>

      <h3>Looking Forward</h3>
      <p>Despite these challenges, the future of ocean energy looks promising. As technology advances and costs decrease, ocean energy is expected to play an increasingly significant role in our global energy mix. With continued research, development, and investment, ocean energy could provide a substantial portion of our clean energy needs in the coming decades.</p>

      <p>At RichverseEcoTech, we're committed to supporting innovative renewable energy solutions, including ocean energy technologies. We believe that a diverse portfolio of renewable energy sources is essential to create a sustainable and resilient energy future.</p>
    `,
    image: '/assets/img/blog/blog-1.png',
    categories: ['Renewable Energy'],
    tags: ['Ocean Energy', 'Sustainability', 'Clean Energy', 'Innovation'],
    featured: true
  },
  {
    id: '2',
    title: 'The Power of Digital Marketing in Today\'s World',
    slug: 'digital-marketing-power-2024',
    author: 'RichverseEcoTech',
    date: 'May 25, 2024',
    summary: 'In today\'s digital landscape, businesses face unprecedented opportunities and challenges. The power of digital marketing lies in its ability to connect brands with their target audience in meaningful and measurable ways.',
    content: `
      <p>In today's digital landscape, businesses face unprecedented opportunities and challenges. The power of digital marketing lies in its ability to connect brands with their target audience in meaningful and measurable ways.</p>

      <h3>Why Digital Marketing Matters</h3>
      <p>Digital marketing has revolutionized how businesses reach and engage with their customers. Here's why it matters:</p>
      <ul>
        <li><strong>Global Reach:</strong> Digital marketing enables businesses of all sizes to reach a global audience cost-effectively.</li>
        <li><strong>Targeted Approach:</strong> Advanced targeting options allow for precise audience segmentation and personalized messaging.</li>
        <li><strong>Measurable Results:</strong> Comprehensive analytics provide clear insights into campaign performance and ROI.</li>
        <li><strong>Cost-Effective:</strong> Digital channels often offer more affordable options compared to traditional marketing methods.</li>
        <li><strong>Real-Time Engagement:</strong> Immediate interaction with customers builds relationships and fosters brand loyalty.</li>
      </ul>

      <h3>Key Digital Marketing Channels</h3>
      <p>A comprehensive digital marketing strategy typically includes multiple channels:</p>
      <ul>
        <li><strong>Search Engine Optimization (SEO):</strong> Improving website visibility in search engine results.</li>
        <li><strong>Pay-Per-Click Advertising (PPC):</strong> Running targeted ads on search engines and other platforms.</li>
        <li><strong>Social Media Marketing:</strong> Engaging with audiences on platforms like Facebook, Instagram, LinkedIn, and Twitter.</li>
        <li><strong>Content Marketing:</strong> Creating valuable content to attract and retain customers.</li>
        <li><strong>Email Marketing:</strong> Direct communication with prospects and customers through personalized emails.</li>
        <li><strong>Influencer Marketing:</strong> Collaborating with influential individuals to promote products or services.</li>
      </ul>

      <h3>Adapting to the Future</h3>
      <p>Digital marketing continues to evolve rapidly. Staying ahead requires adapting to emerging trends:</p>
      <ul>
        <li><strong>Artificial Intelligence:</strong> AI-powered tools are enhancing targeting, personalization, and automation.</li>
        <li><strong>Voice Search:</strong> Optimizing for voice search is becoming essential as more consumers use voice-activated devices.</li>
        <li><strong>Video Content:</strong> Video continues to dominate, with short-form video gaining significant traction.</li>
        <li><strong>Privacy-Focused Marketing:</strong> As privacy regulations tighten, strategies must adapt to respect user privacy.</li>
        <li><strong>Conversational Marketing:</strong> Chatbots and messaging apps are creating more interactive customer experiences.</li>
      </ul>

      <h3>Conclusion</h3>
      <p>Digital marketing is no longer optional for businesses seeking growth and relevance. By leveraging the right mix of digital channels and staying adaptable to changing trends, companies can effectively connect with their target audience, build brand awareness, and drive conversions.</p>

      <p>At RichverseEcoTech, we help businesses navigate the complex digital landscape with tailored strategies that deliver measurable results. Whether you're just starting your digital journey or looking to enhance your existing efforts, we have the expertise to help you succeed in the digital realm.</p>
    `,
    image: '/assets/img/blog/blog-2.png',
    categories: ['Digital Marketing'],
    tags: ['Digital Marketing', 'SEO', 'Social Media', 'Business Growth'],
    featured: true
  },
  {
    id: '3',
    title: 'Understanding Social Media Analytics for Marketing Success',
    slug: 'social-media-analytics-marketing-success-2024',
    author: 'RichverseEcoTech',
    date: 'May 24, 2024',
    summary: 'In today\'s digital age, social media has become a crucial tool for businesses aiming to connect with their target audience. However, achieving marketing success through social media requires more than just posting content.',
    content: `
      <p>In today's digital age, social media has become a crucial tool for businesses aiming to connect with their target audience. However, achieving marketing success through social media requires more than just posting content. It necessitates an understanding of social media analytics to evaluate the effectiveness of your efforts. This blog post will delve into the significance of social media analytics and how it can help businesses refine their strategies for optimal results.</p>

      <h3>Measure ROI and Impact</h3>
      <p>Social media analytics enable businesses to track the effectiveness of their campaigns and demonstrate their value. By analyzing data, businesses can showcase how social media contributes to website traffic, lead generation, and ultimately, sales.</p>

      <h3>Know Your Audience</h3>
      <p>Social media analytics provide insights into the demographics, interests, and online behavior of your target audience. This information allows businesses to customize their content and messaging to resonate better with their audience.</p>

      <h3>Optimize Your Strategy</h3>
      <p>By analyzing metrics such as engagement, reach, and click-through rate, businesses can identify which content types are most effective. Understanding peak posting times and preferred platforms helps refine strategies for maximum impact.</p>

      <h3>Stay Ahead of the Competition</h3>
      <p>Benchmarking against competitors through social media analytics provides valuable insights into content creation, platform usage, and audience engagement. This knowledge aids businesses in setting themselves apart and remaining competitive.</p>

      <h3>Build Stronger Relationships</h3>
      <p>Social listening through analytics allows businesses to monitor brand mentions and sentiment. By responding to customer feedback and concerns, businesses can cultivate stronger relationships with their audience.</p>

      <h3>Getting Started with Social Media Analytics</h3>
      <p>Most social media platforms offer basic analytics tools, while advanced tools provide more detailed insights. Key metrics to focus on include reach, engagement, click-through rate (CTR), conversions, and brand sentiment.</p>

      <h3>Conclusion</h3>
      <p>Social media analytics play a pivotal role in achieving marketing success in the digital landscape. By leveraging data-driven insights, businesses can enhance their strategies, engage with their audience effectively, and meet their marketing goals. Remember, social media analytics is an ongoing process that requires continuous monitoring, experimentation, and adaptation. With the right approach, businesses can harness the power of social media to propel their success.</p>
    `,
    image: '/assets/img/blog/blog-3.png',
    categories: ['Digital Marketing'],
    tags: ['Social Media Analytics', 'Marketing Strategies', 'Digital Success'],
    featured: false
  },
  {
    id: '4',
    title: 'Recognizing and Preventing Phishing Attacks: A Guide for Businesses',
    slug: 'phishing_attacks',
    author: 'RichverseEcoTech',
    date: 'May 20, 2024',
    summary: 'As businesses continue to digitize their operations, cybersecurity threats have become increasingly sophisticated. Among these threats, phishing attacks remain one of the most prevalent and dangerous.',
    content: `
      <p>As businesses continue to digitize their operations, cybersecurity threats have become increasingly sophisticated. Among these threats, phishing attacks remain one of the most prevalent and dangerous. This comprehensive guide aims to help businesses recognize and prevent phishing attacks to safeguard their sensitive data and maintain operational integrity.</p>

      <h3>Understanding Phishing Attacks</h3>
      <p>Phishing is a type of social engineering attack where cybercriminals attempt to steal sensitive information such as usernames, passwords, credit card details, or other personal information by disguising themselves as trustworthy entities. These attacks often come through emails, text messages, or fraudulent websites that mimic legitimate ones.</p>

      <h3>Common Types of Phishing Attacks</h3>
      <ul>
        <li><strong>Email Phishing:</strong> The most common form, where attackers send emails purporting to be from legitimate companies or individuals.</li>
        <li><strong>Spear Phishing:</strong> Targeted attacks aimed at specific individuals or organizations, often using personalized information to increase credibility.</li>
        <li><strong>Whaling:</strong> Attacks targeting high-profile executives or senior employees with access to sensitive information.</li>
        <li><strong>Smishing:</strong> Phishing conducted via SMS or text messages.</li>
        <li><strong>Vishing:</strong> Voice phishing, where attackers use phone calls to deceive victims.</li>
        <li><strong>Clone Phishing:</strong> Creating a nearly identical copy of a legitimate email or website with malicious links or attachments.</li>
      </ul>

      <h3>Recognizing Phishing Attempts</h3>
      <p>Being able to identify phishing attempts is crucial for prevention. Here are key warning signs:</p>
      <ul>
        <li><strong>Suspicious Sender Addresses:</strong> Carefully check email addresses for slight misspellings or domains that don't match the purported sender.</li>
        <li><strong>Urgent or Threatening Language:</strong> Beware of communications creating a sense of urgency or threatening negative consequences if immediate action isn't taken.</li>
        <li><strong>Grammatical Errors:</strong> Professional organizations typically have editorial processes that catch linguistic errors.</li>
        <li><strong>Unexpected Attachments or Links:</strong> Be wary of unsolicited emails with attachments or links, especially if they ask you to "verify" account information.</li>
        <li><strong>Requests for Sensitive Information:</strong> Legitimate organizations rarely request sensitive information via email or text.</li>
        <li><strong>Too Good to Be True Offers:</strong> Exceptional deals, prizes, or opportunities that seem implausible are often phishing attempts.</li>
      </ul>

      <h3>Preventing Phishing Attacks</h3>
      <p>Implementing a multi-layered defense strategy is essential for protecting your business:</p>
      <ul>
        <li><strong>Employee Education:</strong> Regular training sessions to help staff recognize and respond appropriately to phishing attempts.</li>
        <li><strong>Email Filtering Solutions:</strong> Implement robust email security tools that can detect and filter out suspicious messages.</li>
        <li><strong>Multi-Factor Authentication (MFA):</strong> Require additional verification steps beyond passwords for accessing sensitive systems.</li>
        <li><strong>Regular Software Updates:</strong> Keep all systems and software updated with the latest security patches.</li>
        <li><strong>Security Policies:</strong> Establish clear procedures for reporting suspicious communications and handling sensitive information.</li>
        <li><strong>Phishing Simulations:</strong> Conduct mock phishing exercises to test employee awareness and identify areas for improvement.</li>
        <li><strong>Domain Monitoring:</strong> Monitor for look-alike domains that could be used in phishing campaigns against your organization.</li>
      </ul>

      <h3>Responding to Phishing Incidents</h3>
      <p>If a phishing attempt is successful, quick action is crucial:</p>
      <ul>
        <li><strong>Isolate Affected Systems:</strong> Disconnect compromised devices from the network to prevent further damage.</li>
        <li><strong>Change Credentials:</strong> Immediately change passwords for any potentially compromised accounts.</li>
        <li><strong>Report the Incident:</strong> Notify your IT security team and, if appropriate, law enforcement.</li>
        <li><strong>Document Everything:</strong> Keep detailed records of the incident for analysis and potential legal proceedings.</li>
        <li><strong>Notify Affected Parties:</strong> If customer or partner data may have been compromised, inform them promptly.</li>
        <li><strong>Review and Strengthen:</strong> Use the incident as an opportunity to identify and address security weaknesses.</li>
      </ul>

      <h3>Conclusion</h3>
      <p>As phishing techniques continue to evolve, businesses must remain vigilant and proactive in their cybersecurity approaches. By understanding the nature of phishing attacks, implementing robust prevention measures, and preparing response protocols, organizations can significantly reduce their vulnerability to these common yet dangerous threats.</p>

      <p>Remember, effective phishing defense is not just about technological solutions but also about creating a security-conscious culture where every employee understands their role in protecting the organization's digital assets.</p>
    `,
    image: '/assets/img/blog/blog-4.png',
    categories: ['Cybersecurity'],
    tags: ['Cybersecurity', 'Phishing', 'Data Protection', 'Security Awareness'],
    featured: false
  }
];

// Get all blog posts
export const getAllBlogPosts = (): BlogPost[] => {
  return blogPosts;
};

// Get featured blog posts
export const getFeaturedBlogPosts = (): BlogPost[] => {
  return blogPosts.filter(post => post.featured);
};

// Get blog post by slug
export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

// Get all categories with counts
export const getAllCategories = (): BlogCategory[] => {
  const categories: { [key: string]: number } = {};
  
  blogPosts.forEach(post => {
    post.categories.forEach(category => {
      categories[category] = (categories[category] || 0) + 1;
    });
  });

  return Object.keys(categories).map(name => ({
    name,
    slug: name.toLowerCase().replace(/\s+/g, '-'),
    count: categories[name]
  }));
};

// Get all tags with counts
export const getAllTags = (): BlogTag[] => {
  const tags: { [key: string]: number } = {};
  
  blogPosts.forEach(post => {
    post.tags.forEach(tag => {
      tags[tag] = (tags[tag] || 0) + 1;
    });
  });

  return Object.keys(tags).map(name => ({
    name,
    slug: name.toLowerCase().replace(/\s+/g, '-'),
    count: tags[name]
  }));
};

// Get recent blog posts (limit by count)
export const getRecentBlogPosts = (count: number = 5): BlogPost[] => {
  // Sort by date (newest first) and limit to the requested count
  return [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
};

// Search blog posts
export const searchBlogPosts = (query: string): BlogPost[] => {
  const searchTerms = query.toLowerCase().split(' ');
  
  return blogPosts.filter(post => {
    const searchableText = `${post.title} ${post.summary} ${post.content} ${post.author} ${post.categories.join(' ')} ${post.tags.join(' ')}`.toLowerCase();
    
    return searchTerms.every(term => searchableText.includes(term));
  });
};

// Get blog posts by category
export const getBlogPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => 
    post.categories.some(cat => 
      cat.toLowerCase() === category.toLowerCase()
    )
  );
};

// Get blog posts by tag
export const getBlogPostsByTag = (tag: string): BlogPost[] => {
  return blogPosts.filter(post => 
    post.tags.some(t => 
      t.toLowerCase() === tag.toLowerCase()
    )
  );
};

// Default export for the entire service
export default {
  getAllBlogPosts,
  getFeaturedBlogPosts,
  getBlogPostBySlug,
  getAllCategories,
  getAllTags,
  getRecentBlogPosts,
  searchBlogPosts,
  getBlogPostsByCategory,
  getBlogPostsByTag
};