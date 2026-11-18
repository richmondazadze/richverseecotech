export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  author: string;
  date: string;
  published: string;
  revised?: string;
  readTime: string;
  category: string;
  summary: string;
  /** HTML body */
  content: string;
  image: string;
  imageAlt?: string;
  tags: string[];
  featured: boolean;
}

const articles: Omit<BlogPost, 'readTime' | 'date'>[] = [
  {
    id: '5', title: 'Repair, migrate, or rebuild your website?', slug: 'repair-migrate-or-rebuild',
    author: 'Richverse Ecotech', published: '2026-11-18', category: 'Web Development',
    summary: 'A broken enquiry journey does not always call for a new website. Trace one real task to decide which parts need to change and which are worth keeping.',
    image: '/blog/repair-migrate-or-rebuild.jpg', imageAlt: 'Three routes for a website: repair a task, migrate the platform, or rebuild the workflow.',
    tags: ['Web Development'], featured: true,
    content: `
      <p>Imagine a customer has chosen a service but leaves the enquiry form unfinished. Replacing the site could still leave that customer with the same problem. Before asking for a redesign estimate, take the journey yourself on a phone. Write down the first step where you cannot tell what to do, what information is needed, or whether the request went through.</p>
      <section>
        <h2>Repair a task that already has a home</h2>
      <p>If the page is easy to find, the platform is supported, and the team can edit it, isolate the failure. On our own website, for example, a visitor coming from a service page should not have to select that service again. Passing the choice into the form is a small change with a clear acceptance check: open the service, follow the link, and read the selected topic.</p>
      <p>Give a repair a boundary. Name the screens involved, the people affected, and the behavior that will show the change worked. Keep the rest of the journey stable while you test it.</p>
      </section>
      <section>
        <h2>Migrate when the publishing system is the constraint</h2>
      <p>A useful page may be hard to maintain because its editor is unsupported or its workflow requires a developer for every change. A migration can keep the content and addresses that visitors know while replacing the tools behind them.</p>
      <p>Inventory the URLs, downloads, and forms first. Identify who owns each one. Before switching, ask an editor to publish a change, check the redirects from old addresses, and send a test enquiry to a controlled inbox. An attractive new page does not tell you whether any of those things work.</p>
      </section>
      <section>
        <h2>Rebuild when the job itself has changed</h2>
      <p>A brochure page can explain a service. It cannot, by itself, manage approvals between customers and staff. If the work now involves different roles, permissions, or business records, sketch the smallest complete workflow. Name who starts it, who decides, and what each person needs to see when it ends.</p>
      </section>
      <section>
        <h2>What to put in the brief</h2>
      <p>Bring the current URL, one task that fails, a real constraint such as an existing booking system, and the name of the person who will maintain the result. Ask for the smallest change that solves the problem, the reason for choosing it, and a test you can repeat before accepting delivery.</p>
      </section>
    `,
  },
  {
    id: '1',
    title: 'Tides, waves, and the limits of ocean power',
    slug: 'exploring-ocean-energy',
    author: 'Richverse Ecotech',
    published: '2024-05-24',
    revised: '2026-11-18',
    category: 'Renewable Energy',
    summary: 'Tides follow a timetable. Waves depend on the weather. That difference matters when deciding whether an energy source can support a site when the grid is down.',
    image:
      '/blog/exploring-ocean-energy.jpg',
    imageAlt: 'Waves breaking on a sandy coast at sunset.',
    tags: ['Ocean Energy', 'Sustainability', 'Clean Energy', 'Innovation'],
    featured: true,
    content: `
      <p>A predictable source of energy is not necessarily a continuous one. At a coastal site, start with the hours the equipment needs power. Then compare that demand with the hours a proposed system could actually generate.</p>
      <section>
        <h2>A tide table tells only part of the story</h2>
      <p>Tidal currents change with the tides. Their timing can be forecast, but a turbine in a tidal stream will produce little power near slack water. A forecast helps an operator plan around that gap; it does not remove it.</p>
      </section>
      <section>
        <h2>Waves answer a different question</h2>
      <p>Wave devices capture energy from surface motion. Conditions vary with winds, storms and the season. A short survey during rough weather can make a site look more productive than it is across a year. Maintenance crews also need a way to reach the equipment when it needs attention.</p>
      </section>
      <section>
        <h2>Compare the connection as well as the resource</h2>
      <p>Distance to a grid connection, seabed conditions, marine habitats, permits and access for repairs can change whether a proposal is practical. Electricity generated offshore still has to reach the load.</p>
      </section>
      <section>
        <h2>For a building, start with the load</h2>
      <p>If a shop needs lights and a router during a four-hour outage, list their running watts and hours before discussing a source. The resulting watt-hours are a demand estimate. Equipment losses, startup requirements and the usable battery capacity still need a separate check.</p>
      </section>
    `
  },
  {
    id: '2',
    title: 'Choosing the first channel for a campaign',
    slug: 'digital-marketing-power',
    author: 'Richverse Ecotech',
    published: '2024-05-25',
    revised: '2026-11-18',
    category: 'Digital Marketing',
    summary: 'Start with one customer decision, one place to reach that person, and a way to tell whether the response was useful.',
    image:
      '/blog/digital-marketing-power.jpg',
    imageAlt: 'An overhead view of colleagues using laptops around a shared worktable.',
    tags: ['Digital Marketing', 'SEO', 'Social Media', 'Business Growth'],
    featured: true,
    content: `
      <p>Suppose a repair shop wants more weekday bookings. A visit to its homepage is useful only if someone can find the service, check the area covered and request a time. Walk that route on a phone before spending money to send people there.</p>
      <section>
        <h2>Choose a channel that fits the decision</h2>
      <p>Search can reach someone already looking for a repair. A before-and-after photo can explain a service to someone who did not know it existed. Email can reach a previous customer who has agreed to hear from the shop. Each needs a different message and a different reason to act.</p>
      </section>
      <section>
        <h2>Make the promise match the page</h2>
      <p>If an ad mentions weekday repairs in a particular area, link to the page that names the service and that area. Show how to book and what happens after the request. Sending every visitor to the homepage makes it harder to tell whether the offer or the route failed.</p>
      </section>
      <section>
        <h2>Agree on a useful result</h2>
      <p>Before launch, define what counts as a qualified request, who will review it, and how the source will be recorded with appropriate consent. A form submission from outside the service area is a response, but it does not fill an appointment.</p>
      </section>
      <section>
        <h2>Use the first review to make one decision</h2>
      <p>Compare enquiries with booked appointments. If people click but do not enquire, inspect the landing page. If the shop receives enquiries it cannot serve, inspect the audience and offer. Keep a record of what changed so the next review can test that decision.</p>
      </section>
    `
  },
  {
    id: '3',
    title: 'What social reach, visits, and enquiries actually tell you',
    slug: 'social-media-analytics',
    author: 'Richverse Ecotech',
    published: '2024-05-24',
    revised: '2026-11-18',
    category: 'Digital Marketing',
    summary: 'A post can reach more people while producing fewer useful enquiries. Read the three measures separately before changing the campaign.',
    image:
      '/editorial/channel-signals.jpg',
    imageAlt: 'Reach, visits, and enquiries shown as three distinct measures of a campaign.',
    tags: ['Social Media Analytics', 'Marketing Strategies', 'Digital Success'],
    featured: false,
    content: `
      <p>Write down the decision the report needs to support. For a team trying to book consultations, a count of people who saw a post answers a different question from a count of requests the team can take on.</p>
      <section>
        <h2>Read the measures in order</h2>
      <ul><li><strong>Reach:</strong> the platform’s estimate of how many distinct accounts saw the post. Keep that separate from impressions, which can count repeated views.</li>
      <li><strong>Visits:</strong> sessions recorded on the destination page. A platform click does not always become a recorded visit: the page might not load, or analytics consent may not be given.</li>
      <li><strong>Enquiries:</strong> actual requests received. Record whether the team can serve them, and keep unknown sources in their own group.</li></ul>
      </section>
      <section>
        <h2>Find the next thing to check</h2>
      <p>If reach increases but visits stay flat, check the link and the reason the post gives people to follow it. If visits rise but requests do not, try the form on a phone and read the offer as a first-time buyer. These patterns suggest checks; they do not establish the cause.</p>
      </section>
      <section>
        <h2>Keep the comparison fair</h2>
      <p>Compare the same reporting period and separate paid from unpaid activity. Note changes in spend, tracking or the offer. Choose one change to test and write down what evidence would make you keep it.</p>
      </section>
    `
  },
  {
    id: '4',
    title: 'How to check an unexpected payment or sign-in request',
    slug: 'preventing-phishing-attacks',
    author: 'Richverse Ecotech',
    published: '2024-05-20',
    revised: '2026-11-18',
    category: 'Cybersecurity',
    summary: 'A familiar sender name is not enough to trust a request. Give staff a known route to verify changes, report suspicious messages, and get help quickly.',
    image:
      '/editorial/verify-a-request.jpg',
    imageAlt: 'An unexpected message branches into two actions: verify through a known contact and report through the team channel.',
    tags: ['Cybersecurity', 'Phishing', 'Data Protection', 'Security Awareness'],
    featured: false,
    content: `
      <p>A supplier emails a new bank account just before an invoice is due. The name and signature look familiar. Before changing the payment record, call the supplier using the number already on file. A phone number in the new email is part of the same unverified request.</p>
      <section>
        <h2>Verify through a route you already trust</h2>
      <p>For a sign-in alert, open the service from a saved bookmark or its usual app. For a request from a colleague, start a fresh conversation through your staff directory. Check what was requested and who can approve it before sending money, credentials or documents.</p>
      </section>
      <section>
        <h2>Give people one place to report it</h2>
      <p>Use your organization’s report-message button or a security contact listed in its directory. Include the time, the sender and what the message asked you to do. Avoid forwarding it to colleagues who might open a link by mistake. If there is no reporting process yet, agree on a named owner and publish the route where staff can find it.</p>
      </section>
      <section>
        <h2>If someone has already responded</h2>
      <p>Report it promptly and explain whether a link was opened, credentials were entered or money was transferred. The response team can then decide whether to revoke sessions, reset a password through the normal service, or contact the bank using a verified number. Do not include passwords or verification codes in the report.</p>
      </section>
      <section>
        <h2>Make verification ordinary</h2>
      <p>Require a separate check for changes to payment details, even when the message looks routine. A clear approval rule gives staff permission to pause a request without having to prove it is malicious first.</p>
      </section>
    `
  },
];

const displayDate=new Intl.DateTimeFormat('en-US',{month:'long',day:'numeric',year:'numeric',timeZone:'UTC'});
export const formatArticleDate=(iso:string)=>displayDate.format(new Date(iso+'T12:00:00Z'));
export const blogPosts: BlogPost[] = articles.map(post=>{
  const words=(post.summary+' '+post.content.replace(/<[^>]+>/g,' ')).trim().split(/\s+/).length;
  return {...post,date:formatArticleDate(post.published),readTime:Math.max(1,Math.ceil(words/220))+' min read'};
}).sort((a,b)=>b.published.localeCompare(a.published));

export const getFeaturedPosts = () => blogPosts.filter((p) => p.featured);
export const getPostBySlug = (slug: string) => blogPosts.find((p) => p.slug === slug);
export const getRelatedPosts = (slug: string, category: string, limit = 2) =>
  blogPosts.filter((p) => p.slug !== slug && p.category === category).slice(0, limit);
export const blogCategories = Array.from(new Set(blogPosts.map((p) => p.category)));

export const archiveSlug = (label: string) => label.toLowerCase().replace(/\s+/g, '-');
export const blogTags = [...new Set(blogPosts.flatMap(post => post.tags))];
