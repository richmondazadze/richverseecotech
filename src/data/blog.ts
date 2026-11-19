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
  sections: { id: string; title: string }[];
  /** Trusted, studio-authored HTML body. */
  content: string;
  image: string;
  imageAlt?: string;
  tags: string[];
  featured: boolean;
}

const articles: Omit<BlogPost, 'readTime' | 'date' | 'sections'>[] = [
  {
    id: '7', title: 'How to write a website redesign brief', slug: 'website-redesign-brief',
    author: 'Richverse Ecotech', published: '2026-11-18', category: 'Web Development', featured: true,
    tags: ['Web Development'],
    summary: 'Give every developer the same task, constraints and acceptance test. A one-page brief makes it easier to compare what each quote includes.',
    image: '/editorial/website-project-brief.jpg', imageAlt: 'Website brief worksheet with three columns: customer task, constraint, and acceptance test.',
    content: `
      <p>“Redesign our website” could mean a visual refresh, a move to another publishing platform, or a new booking system. Two estimates can be far apart because they price different jobs. Start with one customer action and what happens to it today. <a href="/resources/website-project-brief.txt" download>Download the editable website brief (plain text)</a> or use the prompts below.</p>
      <section><h2 id="customer-task">1. Describe one task in the customer’s words</h2>
      <p>For the Richverse site, the task was “ask about the service I’m reading.” A visitor can arrive directly on a service page from search. Sending them to a blank form asks them to explain a choice they just made. The acceptance test is short: start on Web Development, choose “Discuss your project,” and check that Web Development is selected. You can <a href="/work/richverse-studio-website">inspect that in-house project</a> without submitting anything.</p></section>
      <section><h2 id="project-constraints">2. Put hard constraints next to the task</h2>
      <p>List the pages people already find, the system that receives the enquiry, and who edits the content. Separate what must stay from what could change. For example, keeping your existing booking provider is a constraint; making the booking page look different is a preference. If you do not yet know which platform is suitable, say so and ask each studio to explain its choice.</p></section>
      <section><h2 id="acceptance-test">3. Define how you will accept the work</h2>
      <p>Write an observable check instead of “make the form intuitive.” For example: a visitor on a phone can correct an invalid email address without losing the message. Add the failure case: the form must not confirm delivery if sending fails. Name the person who will run these checks and the accounts, documentation and training they need after launch.</p></section>
      <section><h2 id="compare-quotes">What should two quotes let you compare?</h2>
      <ul><li><strong>Scope:</strong> which journeys and integrations are included, and what is excluded?</li><li><strong>Migration:</strong> who inventories existing URLs, preserves useful content and checks redirects?</li><li><strong>Cost and timing:</strong> which costs recur, which assumptions affect the estimate, and which decisions could delay launch?</li><li><strong>Ownership:</strong> who holds the domain, hosting and publishing accounts after handover?</li></ul>
      <p>Use the <a href="#quote-comparison">two-quote cost worksheet below</a> to compare upfront and recurring fees over the same period. If the current platform already supports the task, a repair may be sufficient. Use the <a href="/blog/repair-migrate-or-rebuild">repair, migrate or rebuild guide</a> before asking for a full replacement. For a scoped enquiry, bring the existing URL, your most important task and one constraint to <a href="/contact?service=web-development">discuss your website with Richverse</a>.</p></section>
    `,
  },
  {
    id: '8', slug: 'website-or-web-application', title: 'Does your business need a website or a web application?',
    author: 'Richverse Ecotech', published: '2026-11-18', category: 'Web Development', featured: false, tags: ['Web Development'],
    summary: 'Choose a website when people need to find information and take a simple action. Consider a web application when different people must update, approve or track the same record.',
    image: '/editorial/website-or-app.jpg', imageAlt: 'Two routes for a booking: a website hands off a request; a web app keeps a record through approval.',
    content: `
      <p>A booking button does not automatically make a project a custom software build. Follow one request past the button. If an existing booking system already handles availability, changes and reminders, the website may only need to help the right person reach it.</p>
      <section><h2 id="follow-one-booking">Follow one booking past the button</h2><p>Imagine a training business that sells public classes. A customer chooses a class on its website and books an available seat through its scheduling provider. The provider holds the booking; staff know where to find it. Start by testing that handoff on a phone, including a full class and a cancelled booking.</p>
      <p>Now imagine the same business sells private training to employers. A coordinator proposes three dates, a manager approves a budget and an instructor confirms a room. If staff must track which version each person approved, the important feature is a shared record with permissions and a history. A new page layout cannot provide that on its own.</p></section>
      <section><h2 id="compare-three-options">Compare three ways to deliver the job</h2>
      <dl><dt>Website and enquiry form</dt><dd>Use this when the customer needs information and a person can handle the next step. Check that a real recipient gets the enquiry and the visitor can recover if sending fails.</dd>
      <dt>Website plus an existing service</dt><dd>Use a booking, shop or account provider if it already supports the hard part. Check accessibility, recurring fees, data export and what happens when a visitor returns from the provider.</dd>
      <dt>Custom web application</dt><dd>Consider this when off-the-shelf tools cannot support a necessary rule, approval or integration. Budget for the people who will maintain permissions, backups and support after launch.</dd></dl></section>
      <section><h2 id="test-before-building">What should you test before commissioning software?</h2><p>Draw four columns: person, action, record changed, next owner. Fill them in for one normal request and one exception, such as a manager declining a date after the customer has confirmed it. Ask someone who does the work to walk through both cases. If a current tool handles both, ask for an integration estimate before requesting a custom build.</p>
      <p>In <a href="/work/richverse-studio-website#acceptance-test">Richverse’s own enquiry redesign</a>, the useful change was to carry a choice between two pages. It did not require a customer account. That example demonstrates the handoff; the private-training scenario above is illustrative.</p></section>
      <section><h2 id="scope-a-quote">What belongs in the quote?</h2><p>Name the records the business must own, who can change them, which tools stay, and which recurring costs are excluded. Agree on a handover test: a member of staff can complete a normal request, correct a mistake and export the record without the developer.</p><p>Use the <a href="/blog/website-redesign-brief">editable website brief</a> to give suppliers the same starting point, or <a href="/contact?service=web-development">describe the workflow to our web development team</a>.</p></section>
    `,
  },
  {
    id: '9', slug: 'small-business-access-review', title: 'How to run a small-business access review',
    author: 'Richverse Ecotech', published: '2026-11-18', category: 'Cybersecurity', featured: false, tags: ['Cybersecurity', 'Data Protection'],
    summary: 'Choose one business system, compare its current accounts with an approved list, assign every difference to an owner, and check the result before closing the review.',
    image: '/editorial/access-review.jpg', imageAlt: 'Access review record with three checkpoints: approved roster, decision by owner, independent check.',
    content: `
      <p>Start where an access mistake would interrupt daily work: for example, the shared scheduling system that staff use to serve customers. Have the responsible manager confirm the scope and who can authorize changes. <a href="/resources/access-review-register.csv" download>Download the blank access review register (CSV)</a> to record decisions internally.</p>
      <section><h2 id="agree-the-roster">Who should be on the approved list?</h2><p>Ask the business owner which roles need the system today. Include contractors, temporary staff and shared service accounts. For an account used by software, record a human owner and what depends on it. Collect only what the review needs; passwords, recovery codes and private customer records do not belong in the register.</p></section>
      <section><h2 id="record-the-decision">What does one review decision look like?</h2><p>Illustrative example: an old contractor role is still listed as a scheduling editor after the assignment ended. The scheduling manager confirms the role is no longer needed; the application owner records the approved change. An account that runs reminders would need a different decision: check the dependency before changing it.</p><p>Use one row per decision. Record the system, account reference, expected role, observed role, action, owner and due date. Include a reason and review date for any time-limited exception.</p></section>
      <section><h2 id="verify-closure">When is a finding closed?</h2><p>After the authorized owner completes the change, have a second person compare the current membership and permissions with the approved decision. Record the check date and a reference to the evidence held in the business’s own system. An assigned ticket or a promise to remove access is still an open finding.</p><p>The <a href="/services/cybersecurity#worked-example">studio’s example closure record</a> shows this distinction. For the underlying account-management objective, see <a href="https://www.cisecurity.org/controls/account-management">CIS Control 5: Account Management</a>.</p></section>
      <section><h2 id="repeat-the-review">What triggers the next review?</h2><p>Agree a review date with the owner and a separate trigger for staff departures, role changes and vendor changes. Keep unresolved items with named owners between reviews. This worksheet supports a scoped defensive review; it is not a certification or a substitute for an assessor where one is required.</p></section>
    `,
  },
  {
    id: '5', title: 'Repair, migrate, or rebuild your website?', slug: 'repair-migrate-or-rebuild',
    author: 'Richverse Ecotech', published: '2026-11-18', category: 'Web Development',
    summary: 'Repair a failed task on a supported site. Migrate when the platform holds back your team. Rebuild when the customer workflow itself has changed.',
    image: '/blog/repair-migrate-or-rebuild.jpg', imageAlt: 'Three routes for a website: repair a task, migrate the platform, or rebuild the workflow.',
    tags: ['Web Development'], featured: true,
    content: `
      <p>Imagine a customer has chosen a service but leaves the enquiry form unfinished. Replacing the site could still leave that customer with the same problem. Before asking for a redesign estimate, take the journey yourself on a phone. Write down the first step where you cannot tell what to do, what information is needed, or whether the request went through.</p>
      <section>
        <h2 id="repair">Repair a task that already has a home</h2>
      <p>If the page is easy to find, the platform is supported, and the team can edit it, isolate the failure. On our own website, for example, a visitor coming from a service page should not have to select that service again. Passing the choice into the form is a small change with a clear acceptance check: open the service, follow the link, and read the selected topic.</p>
      <p>Give a repair a boundary. In <a href="/work/richverse-studio-website#acceptance-test">our in-house enquiry project</a>, the test is whether a visitor can choose a service and keep that choice through the form. For the error and success states, the <a href="https://www.w3.org/WAI/tutorials/forms/notifications/">W3C guide to form notifications</a> explains how to make the next step clear.</p>
      </section>
      <section>
        <h2 id="migrate">Migrate when the publishing system is the constraint</h2>
      <p>A useful page may be hard to maintain because its editor is unsupported or its workflow requires a developer for every change. A migration can keep the content and addresses that visitors know while replacing the tools behind them.</p>
      <p>Inventory the URLs, downloads, and forms first. Identify who owns each one. Before switching, ask an editor to publish a change, check the redirects from old addresses, and send a test enquiry to a controlled inbox. An attractive new page does not tell you whether any of those things work.</p>
      </section>
      <section>
        <h2 id="rebuild">Rebuild when the job itself has changed</h2>
      <p>A brochure page can explain a service. It cannot, by itself, manage approvals between customers and staff. If the work now involves different roles, permissions, or business records, sketch the smallest complete workflow. Name who starts it, who decides, and what each person needs to see when it ends. Compare a <a href="/blog/website-or-web-application#compare-three-options">website, an existing booking service and a custom application</a> before commissioning software.</p>
      </section>
      <section>
        <h2 id="project-brief">What to put in the brief</h2>
      <p>Bring the current URL, one task that fails, a real constraint such as an existing booking system, and the name of the person who will maintain the result. Ask for the smallest change that solves the problem, the reason for choosing it, and a test you can repeat before accepting delivery.</p>
      </section>
    `,
  },
  {
    id: '6', title: 'How much backup energy does a small office need?',
    slug: 'estimate-office-backup-energy', author: 'Richverse Ecotech', published: '2026-11-18',
    category: 'Renewable Energy', featured: false, tags: ['Clean Energy'],
    summary: 'Multiply the watts each essential device draws by the hours it must run, then add the watt-hours. That gives demand at the devices, before losses or reserve.',
    image: '/editorial/office-backup-energy.jpg',
    imageAlt: 'Four one-hour intervals, each made up of 25 Wh of lighting and 75 Wh of network equipment, total 400 Wh.',
    content: `
      <p>Imagine the power goes out just before the afternoon shift. Staff need the lights and network for four hours, but printing can wait. What should you ask a supplier to keep running? Write down the load before asking for a battery quote.</p>
      <section><h2 id="essential-loads">Start with what has to stay on</h2>
      <p>Make one row per device: quantity, running watts per unit, and hours needed during the outage. Use measured running power when available. Mark a nameplate rating as an estimate; equipment may draw less in normal use or more for a moment at startup.</p></section>
      <section><h2 id="worked-example">Worked example: 100 watts for four hours</h2>
      <p>In this illustrative office, lighting draws 25 W and the network draws 75 W. The lighting needs 25 W × 4 h = 100 Wh. The network needs 75 W × 4 h = 300 Wh. Together that is <strong>400 Wh, or 0.4 kWh, delivered to the devices</strong>. It is not a measured client result.</p>
      <p>Now change one assumption: if daylight means the lights only run for two hours, lighting drops to 50 Wh and the total drops to 350 Wh. During the hours both loads run, they still draw 100 W together. Reducing operating time changes the energy requirement without changing that simultaneous load.</p></section>
      <section><h2 id="battery-capacity">Why 400 Wh is not a battery specification</h2>
      <p>Watts describe power at a moment; watt-hours describe energy over time. The <a href="https://www.eia.gov/energyexplained/electricity/measuring-electricity.php">U.S. Energy Information Administration explains the distinction</a>. A battery’s nameplate energy is not the energy delivered to your devices. Usable capacity, conversion losses and the reserve you want to keep all affect runtime.</p>
      <p>A separate question is whether the inverter can supply the running and startup loads at the same time. A daily electricity bill cannot answer either question on its own.</p></section>
      <section><h2 id="site-assessment">What to bring to a site assessment</h2>
      <p>Bring the load list, typical outage duration, any measurements, and which equipment can wait. Ask the assessor to state the usable capacity, conversion assumptions and peak power behind the proposal. Compare alternatives against the same list. The <a href="/services/renewable-energy#worked-example">studio’s essential-load worksheet</a> shows the figures row by row.</p></section>
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
        <h2 id="tides">A tide table tells only part of the story</h2>
      <p>Tidal currents change with the tides. Their timing can be forecast, but a turbine in a tidal stream will produce little power near slack water. A forecast helps an operator plan around that gap; it does not remove it.</p>
      </section>
      <section>
        <h2 id="waves">Waves answer a different question</h2>
      <p>Wave devices capture energy from surface motion. Conditions vary with winds, storms and the season. A short survey during rough weather can make a site look more productive than it is across a year. Maintenance crews also need a way to reach the equipment when it needs attention.</p>
      </section>
      <section>
        <h2 id="grid-connection">Compare the connection as well as the resource</h2>
      <p>Distance to a grid connection, seabed conditions, marine habitats, permits and access for repairs can change whether a proposal is practical. Electricity generated offshore still has to reach the load.</p>
      </section>
      <section>
        <h2 id="building-load">For a building, start with the load</h2>
      <p>If a shop needs lights and a router during a four-hour outage, list their running watts and hours before discussing a source. Follow the <a href="/blog/estimate-office-backup-energy">worked office backup calculation</a> to see why watt-hours at the load are not the same as battery capacity.</p>
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
        <h2 id="choose-a-channel">Choose a channel that fits the decision</h2>
      <p>Search can reach someone already looking for a repair. A before-and-after photo can explain a service to someone who did not know it existed. Email can reach a previous customer who has agreed to hear from the shop. Each needs a different message and a different reason to act.</p>
      </section>
      <section>
        <h2 id="landing-page">Make the promise match the page</h2>
      <p>If an ad mentions weekday repairs in a particular area, link to the page that names the service and that area. Show how to book and what happens after the request. Sending every visitor to the homepage makes it harder to tell whether the offer or the route failed.</p>
      </section>
      <section>
        <h2 id="qualified-request">Agree on a useful result</h2>
      <p>Before launch, define what counts as a qualified request, who will review it, and how the source will be recorded with appropriate consent. A form submission from outside the service area is a response, but it does not fill an appointment. Our <a href="/services/digital-marketing#worked-example">illustrative campaign report</a> keeps unmatched enquiries separate so the rate uses a consistent denominator.</p>
      </section>
      <section>
        <h2 id="first-review">Use the first review to make one decision</h2>
      <p>Compare enquiries with booked appointments. If people click but do not enquire, inspect the landing page. If the shop receives enquiries it cannot serve, inspect the audience and offer. Keep a record of what changed so the next review can test that decision. The <a href="/blog/social-media-analytics#diagnose-the-gap">guide to reach, visits and enquiries</a> shows where to look when the numbers disagree.</p>
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
        <h2 id="reach-visits-enquiries">Read the measures in order</h2>
      <ul><li><strong>Reach:</strong> the platform’s estimate of how many distinct accounts saw the post. Keep that separate from impressions, which can count repeated views.</li>
      <li><strong>Visits:</strong> sessions recorded on the destination page. A platform click does not always become a recorded visit: the page might not load, or analytics consent may not be given.</li>
      <li><strong>Enquiries:</strong> actual requests received. Record whether the team can serve them, and keep unknown sources in their own group.</li></ul>
      </section>
      <section>
        <h2 id="diagnose-the-gap">Find the next thing to check</h2>
      <p>If reach increases but visits stay flat, check the link and the reason the post gives people to follow it. If visits rise but requests do not, try the form on a phone and read the offer as a first-time buyer. These patterns suggest checks; they do not establish the cause.</p>
      </section>
      <section>
        <h2 id="compare-periods">Keep the comparison fair</h2>
      <p>Compare the same reporting period and separate paid from unpaid activity. Note changes in spend, tracking or the offer. Choose one change to test and write down what evidence would make you keep it. For a concrete denominator, the <a href="/services/digital-marketing#worked-example">campaign worksheet</a> shows why eight matched enquiries from 200 eligible visits and two enquiries with unknown sources must be reported separately.</p>
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
        <h2 id="verify-the-request">Verify through a route you already trust</h2>
      <p>For a sign-in alert, open the service from a saved bookmark or its usual app. For a request from a colleague, start a fresh conversation through your staff directory. Check what was requested and who can approve it before sending money, credentials or documents.</p>
      </section>
      <section>
        <h2 id="report-the-message">Give people one place to report it</h2>
      <p>Use your organization’s report-message button or a security contact listed in its directory. Include the time, the sender and what the message asked you to do. Avoid forwarding it to colleagues who might open a link by mistake. If there is no reporting process yet, agree on a named owner and publish the route where staff can find it.</p>
      </section>
      <section>
        <h2 id="after-a-response">If someone has already responded</h2>
      <p>Report it promptly and explain whether a link was opened, credentials were entered or money was transferred. The response team can then decide whether to revoke sessions, reset a password through the normal service, or contact the bank using a verified number. Do not include passwords or verification codes in the report.</p>
      </section>
      <section>
        <h2 id="approval-rule">Make verification ordinary</h2>
      <p>Require a separate check for changes to payment details, even when the message looks routine. A clear approval rule gives staff permission to pause a request without having to prove it is malicious first. For a staff briefing, <a href="https://www.cisa.gov/secure-our-world/recognize-and-report-phishing">CISA’s phishing guidance</a> covers recognizing and reporting suspicious requests.</p>
      </section>
    `
  },
];

const displayDate=new Intl.DateTimeFormat('en-US',{month:'long',day:'numeric',year:'numeric',timeZone:'UTC'});
export const formatArticleDate=(iso:string)=>displayDate.format(new Date(iso+'T12:00:00Z'));
export const blogPosts: BlogPost[] = articles.map(post=>{
  const words=(post.summary+' '+post.content.replace(/<[^>]+>/g,' ')).trim().split(/\s+/).length;
  const sections = Array.from(post.content.matchAll(/<h2 id="([^"]+)">([^<]+)<\/h2>/g), ([, id, title]) => ({id, title}));
  return {...post,sections,date:formatArticleDate(post.published),readTime:Math.max(1,Math.ceil(words/220))+' min read'};
}).sort((a,b)=>b.published.localeCompare(a.published));

export const getFeaturedPosts = () => blogPosts.filter((p) => p.featured);
export const getPostBySlug = (slug: string) => blogPosts.find((p) => p.slug === slug);
export const getRelatedPosts = (slug: string, category: string, limit = 2) =>
  blogPosts.filter((p) => p.slug !== slug && p.category === category).slice(0, limit);
export const blogCategories = Array.from(new Set(blogPosts.map((p) => p.category)));

export const archiveSlug = (label: string) => label.toLowerCase().replace(/\s+/g, '-');
export const blogTags = [...new Set(blogPosts.flatMap(post => post.tags))];
