import { CSSProperties } from 'react';

/* CSS custom-property helper so `--d`, `--tint`, `--orb` typecheck in style props */
export const cssVars = (props: Record<string, string | number>): CSSProperties =>
  props as CSSProperties;

/* ---------------------------------------------------------------- Brand */
export const brand = {
  name: 'RichverseEcotech',
  tagline: 'We Build What Moves You Forward',
  subtagline: 'Tech. Security. Growth. Impact.',
  blurb:
    'We design and deliver digital solutions that elevate your brand, protect your assets, and fuel sustainable growth.',
  email: 'richverseecotech@gmail.com',
  hours: 'Mon–Fri · 8:00AM – 5:00PM (ET)',
  offices: [
    { city: 'Austin', country: 'United States', phone: '+1 512 650 9818' },
    { city: 'Accra', country: 'Ghana', phone: '+233 54 162 0190' },
  ],
  whatsapp: '+233 20 176 8623',
  socials: [
    { label: 'LinkedIn', url: 'https://linkedin.com/company/richverseecotech' },
    { label: 'X / Twitter', url: 'https://twitter.com/richve_ecotech' },
    { label: 'Instagram', url: 'https://www.instagram.com/richverse.ecotech/' },
    { label: 'Facebook', url: 'https://web.facebook.com/people/Richverseecotech/61559568145443/' },
  ],
};

export const nav = [
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];

/* ------------------------------------------------------------- Services */
export type Service = {
  slug: string;
  name: string;
  tagline: string;
  accent: string; // solid accent
  tint: string; // soft card background
  orb: string; // blurred orb
  short: string;
  intro: string;
  offerings: { title: string; body: string }[];
  why: { title: string; body: string }[];
  process: { n: string; title: string; body: string }[];
};

export const services: Service[] = [
  {
    slug: 'web-development',
    name: 'Web Development',
    tagline: 'Custom web solutions that drive growth.',
    accent: '#2563eb',
    tint: '#dbeafe',
    orb: '#2563eb',
    short: 'Custom web solutions that drive growth and enhance user experience.',
    intro:
      'From business websites to custom dashboards and progressive web apps, we build fast, accessible, mobile-first products engineered to scale with your business.',
    offerings: [
      { title: 'Custom Web Apps', body: 'Bespoke applications and dashboards tailored to your workflows and data.' },
      { title: 'E-commerce Solutions', body: 'Conversion-focused storefronts with secure, seamless checkout.' },
      { title: 'Mobile Apps', body: 'Mobile-first and cross-platform apps that feel native everywhere.' },
      { title: 'UI/UX Design', body: 'Research-led interfaces that are elegant, usable, and on-brand.' },
      { title: 'Progressive Web Apps', body: 'Installable, offline-ready experiences with app-grade performance.' },
    ],
    why: [
      { title: 'Expert Team', body: 'Senior engineers and designers who have shipped at scale.' },
      { title: 'Agile Process', body: 'Iterative delivery with continuous feedback and no surprises.' },
      { title: 'Scalable Solutions', body: 'Architecture built to grow with your users and data.' },
      { title: 'Ongoing Support', body: 'We stay on after launch — instrumented, documented, ready to adapt.' },
    ],
    process: [
      { n: '01', title: 'Discovery', body: 'We map your goals, users, and constraints until the problem is unmistakable.' },
      { n: '02', title: 'Design', body: 'Interface and architecture take shape together, prototyped early.' },
      { n: '03', title: 'Build', body: 'We ship in living increments, delivering value continuously.' },
      { n: '04', title: 'Launch & Support', body: 'Deploy, monitor, and iterate long after go-live.' },
    ],
  },
  {
    slug: 'digital-marketing',
    name: 'Digital Marketing',
    tagline: 'Strategy that compounds your growth.',
    accent: '#d97706',
    tint: '#fef3c7',
    orb: '#f59e0b',
    short: 'Strategic marketing solutions to boost your online presence and reach.',
    intro:
      'Growth as a living system — data-driven campaigns, SEO, and brand narratives that compound over time and connect your brand with the right audience.',
    offerings: [
      { title: 'SEO & SEM', body: 'Earn visibility where your customers are already searching.' },
      { title: 'Social Media Marketing', body: 'Engage audiences on the platforms where they spend their time.' },
      { title: 'Email Campaigns', body: 'Personalized lifecycle messaging that nurtures and converts.' },
      { title: 'Content Creation', body: 'Valuable content that attracts, educates, and retains.' },
      { title: 'Marketing Automation', body: 'Workflows that scale personalized engagement effortlessly.' },
    ],
    why: [
      { title: 'Data-Driven', body: 'Every decision grounded in signal, measured against ROI.' },
      { title: 'Creative Campaigns', body: 'Narratives audiences actually feel — and remember.' },
      { title: 'Omnichannel Reach', body: 'One coherent story across search, social, and email.' },
    ],
    process: [
      { n: '01', title: 'Audit', body: 'We benchmark your presence, audience, and competitors.' },
      { n: '02', title: 'Strategy', body: 'A channel mix and messaging framework tied to outcomes.' },
      { n: '03', title: 'Execute', body: 'Campaigns launched, optimized, and continuously refined.' },
      { n: '04', title: 'Measure', body: 'Transparent reporting on what moved the needle.' },
    ],
  },
  {
    slug: 'cybersecurity',
    name: 'Cybersecurity',
    tagline: 'Adaptive defense that learns.',
    accent: '#7c3aed',
    tint: '#ede9fe',
    orb: '#7c3aed',
    short: 'Robust security solutions to protect your digital assets.',
    intro:
      'Threat modeling, penetration testing, and zero-trust architectures that harden as they grow — protecting your innovation while building sustainable digital trust.',
    offerings: [
      { title: 'Risk Assessment', body: 'Identify, prioritize, and quantify the risks that matter.' },
      { title: 'Penetration Testing', body: 'Find weaknesses before adversaries do.' },
      { title: 'Managed Security', body: 'Round-the-clock monitoring and response.' },
      { title: 'Compliance & Audits', body: 'Meet standards and prove it with confidence.' },
      { title: 'Employee Training', body: 'Build a security-conscious culture at every level.' },
    ],
    why: [
      { title: 'Proactive Defense', body: 'We anticipate threats instead of reacting to breaches.' },
      { title: 'Expert Team', body: 'Seasoned security professionals across the stack.' },
      { title: 'Continuous Monitoring', body: 'Always-on visibility into your security posture.' },
    ],
    process: [
      { n: '01', title: 'Assess', body: 'Map your attack surface and threat landscape.' },
      { n: '02', title: 'Harden', body: 'Close gaps with zero-trust controls and best practices.' },
      { n: '03', title: 'Monitor', body: 'Detect anomalies in real time, around the clock.' },
      { n: '04', title: 'Respond', body: 'Contain, remediate, and strengthen after every event.' },
    ],
  },
  {
    slug: 'renewable-energy',
    name: 'Renewable Energy',
    tagline: 'Intelligent energy for a greener future.',
    accent: '#16a34a',
    tint: '#dcfce7',
    orb: '#16a34a',
    short: 'Sustainable energy solutions for a greener future.',
    intro:
      'Solar orchestration, smart grids, and monitoring platforms for a regenerative future — intelligent energy systems that give back to people and planet.',
    offerings: [
      { title: 'Solar Energy Systems', body: 'Design, install, and orchestrate solar at any scale.' },
      { title: 'Wind Energy Solutions', body: 'Harness wind with efficient, reliable systems.' },
      { title: 'Hybrid Systems', body: 'Blend sources for resilient, always-on power.' },
      { title: 'Inverter Installation', body: 'Expert installation and optimization for peak output.' },
      { title: 'Sustainability Consulting', body: 'Roadmaps to lower carbon and lower cost.' },
    ],
    why: [
      { title: 'Eco-Driven', body: 'Carbon-aware by design, built for the long horizon.' },
      { title: 'Proven ROI', body: 'Systems that pay back — measurable savings over time.' },
      { title: 'Seamless Integration', body: 'Clean handoff into your existing infrastructure.' },
    ],
    process: [
      { n: '01', title: 'Survey', body: 'Assess your site, load, and energy goals.' },
      { n: '02', title: 'Design', body: 'Right-size a system for output and payback.' },
      { n: '03', title: 'Install', body: 'Deploy with precision and minimal disruption.' },
      { n: '04', title: 'Monitor', body: 'Track performance and optimize continuously.' },
    ],
  },
];

/* --------------------------------------------------------------- Values */
export const values = [
  { title: 'Sustainable Innovation', body: "Solutions that solve today's challenges while protecting tomorrow's resources.", icon: '/values/sustainable-innovation.svg' },
  { title: 'Future-Ready Solutions', body: 'Technologies that adapt and scale with your growth, powered by AI and sustainable practice.', icon: '/values/future-ready.svg' },
  { title: 'Global Impact', body: 'Positive change worldwide through eco-friendly digital solutions and responsible innovation.', icon: '/values/global-impact.svg' },
  { title: 'Technological Ingenuity', body: 'We innovate with technology, breaking barriers and redefining what is possible.', icon: '/values/tech-ingenuity.svg' },
  { title: 'Digital Leadership', body: 'We guide businesses to success in an ever-evolving digital landscape.', icon: '/values/digital-leadership.svg' },
  { title: 'Client-Centric Innovation', body: 'We craft bespoke solutions that exceed expectations and drive real results.', icon: '/values/client-centric.svg' },
];

/* --------------------------------------------------- Tech ecosystem */
export const stack = [
  'TypeScript', 'React', 'Node', 'Python', 'AWS', 'Azure',
  'Google Cloud', 'PostgreSQL', 'Supabase', 'Vercel', 'OpenAI', 'Kubernetes',
];

/* --------------------------------------------------- Impact (qualitative) */
/* Deliberately non-numeric — qualitative statements rather than unverified figures. */
export const impact = [
  { label: 'Businesses Transformed', sub: 'Empowering organizations with digital innovation.' },
  { label: 'Global Reach', sub: 'Delivering sustainable solutions across borders.' },
  { label: 'Recognized Excellence', sub: 'Building a reputation for tech & sustainability.' },
  { label: 'Real-World Impact', sub: 'Driving lasting change for people and planet.' },
];

/* ------------------------------------------------------------ Partners */
export const partners = [
  { name: 'AWS', logo: '/partners/aws.svg', type: 'Cloud Infrastructure', description: 'Leading cloud computing platform.' },
  { name: 'Google Cloud', logo: '/partners/google-cloud.svg', type: 'AI & Cloud Solutions', description: 'AI-powered cloud infrastructure.' },
  { name: 'Microsoft Azure', logo: '/partners/azure.svg', type: 'Enterprise Cloud', description: 'Enterprise cloud solutions.' },
  { name: 'Stripe', logo: '/partners/stripe.svg', type: 'Payment Solutions', description: 'Global payment processing platform.' },
  { name: 'Paystack', logo: '/partners/paystack.svg', type: 'Payment Gateway', description: 'African payment solutions provider.' },
  { name: 'Supabase', logo: '/partners/supabase.svg', type: 'Database Solutions', description: 'Open-source database platform.' },
  { name: 'OpenAI', logo: '/partners/openai.svg', type: 'AI Technology', description: 'Advanced AI solution provider.' },
  { name: 'Vercel', logo: '/partners/vercel.svg', type: 'Deployment Platform', description: 'Modern deployment platform.' },
];

/* -------------------------------------------------------- Testimonials */
export const testimonials = [
  { name: 'Olivia Chen', role: 'Product Lead', text: "Richverseecotech's eco-driven approach gave us a competitive edge. Their solutions are truly next-level." },
  { name: 'Michel Smith', role: 'Operations Director', text: 'We saw measurable growth and improved efficiency after partnering with Richverseecotech.' },
  { name: 'Theophilus Mensah', role: 'Founder, Good God Charity Foundation', text: 'Richverseecotech built our website with real care — it captures our mission beautifully and makes it effortless for supporters to find us and give. A team that truly listens.' },
  { name: 'Aisha Bello', role: 'Marketing Lead', text: 'From strategy to execution, Richverseecotech delivered results beyond our expectations.' },
];

/* --------------------------------------------------------------- Team */
export const team = [
  { name: 'Richmond Azadze', role: 'Founder & Chief Executive Officer', bio: "Guiding RichverseEcotech's mission to accelerate sustainable growth through advanced digital innovation.", avatar: '/team/richmond.svg', linkedin: 'https://www.linkedin.com/in/richmond-azadze/', x: 'https://x.com/__richhimself' },
  { name: 'Rapheal Asomani', role: 'Chief Technology Officer', bio: 'Driving eco-driven platforms with scalable cloud, AI technologies, and sustainable tech architectures.', avatar: '/team/rapheal.svg', linkedin: 'https://www.linkedin.com/in/younggem/' },
  { name: 'Bernard Blay', role: 'Head of Cybersecurity', bio: 'Ensuring the security, privacy, and resilience of every digital ecosystem we build.', avatar: '/team/bernard.svg', linkedin: 'https://www.linkedin.com/in/bernard-blay-a65981317/' },
  { name: 'Emmanuel Donkor', role: 'Head of Business Development', bio: 'Building lasting partnerships and unlocking new growth opportunities for businesses globally.', avatar: '/team/emmanuel.svg', linkedin: 'https://www.linkedin.com/in/emmanuel-donkor-4347bb287/' },
];

/* ------------------------------------------------------- Mission/Vision */
export const missionVision = {
  mission:
    'To empower organizations with innovative, sustainable, and secure digital solutions that drive growth and positive impact.',
  vision:
    'To be a global leader in technology, setting the standard for excellence in digital transformation and eco-friendly innovation.',
};

/* --------------------------------------------------------------- FAQs */
export const aboutFaqs = [
  { q: 'What makes RichverseEcotech unique?', a: 'Our blend of innovation and sustainability — eco-friendly digital solutions, cutting-edge technology, and a client-centric approach.' },
  { q: 'How can I partner with RichverseEcotech?', a: 'We welcome partnerships. Reach out via our contact page to discuss collaboration opportunities.' },
  { q: 'Where are you located?', a: 'We have offices in Austin, United States and Accra, Ghana, serving clients globally.' },
  { q: 'What industries do you serve?', a: 'A wide range — including tech, finance, healthcare, energy, and more.' },
];

export const contactFaqs = [
  { q: 'How quickly do you respond to inquiries?', a: 'We aim to respond to all messages within one business day.' },
  { q: 'What information should I include in my message?', a: 'Your name and company, contact details, and a brief description of your inquiry or project.' },
  { q: 'Can I schedule a call or meeting?', a: 'Absolutely — reach out and we will arrange a call at your convenience.' },
  { q: 'Where are your offices located?', a: 'Austin, United States and Accra, Ghana.' },
];

/* ----------------------------------------------------- Work / Case studies */
export type Project = {
  slug: string;
  title: string;
  cat: string;
  year: string;
  tint: string;
  orb: string;
  blurb: string;
};

export const projects: Project[] = [
  { slug: 'helios-grid-os', title: 'Helios Grid OS', cat: 'Renewable Energy', year: '2025', tint: '#dcfce7', orb: '#16a34a', blurb: 'An operating layer for distributed solar — orchestrating thousands of nodes into one adaptive, self-balancing grid.' },
  { slug: 'aegis-sentinel', title: 'Aegis Sentinel', cat: 'Cybersecurity', year: '2025', tint: '#ede9fe', orb: '#7c3aed', blurb: 'A zero-trust defense platform that learns your network and hardens itself the moment a threat surfaces.' },
  { slug: 'verdant-commerce', title: 'Verdant Commerce', cat: 'Web Development', year: '2024', tint: '#dbeafe', orb: '#2563eb', blurb: 'A carbon-aware commerce engine — every transaction routed for the lowest energy footprint, at the edge.' },
  { slug: 'signal-bloom', title: 'Signal Bloom', cat: 'Digital Marketing', year: '2024', tint: '#fef3c7', orb: '#f59e0b', blurb: 'Growth intelligence that compounds — turning first-party signals into narratives audiences feel.' },
  { slug: 'terra-atlas', title: 'Terra Atlas', cat: 'Web Development', year: '2024', tint: '#dbeafe', orb: '#2563eb', blurb: 'A planetary data platform mapping environmental telemetry into decisions teams act on in real time.' },
  { slug: 'aurora-outreach', title: 'Aurora Outreach', cat: 'Digital Marketing', year: '2023', tint: '#fef3c7', orb: '#d97706', blurb: 'An omnichannel campaign engine for a climate nonprofit — reach that grew 4× in two quarters.' },
];

export const process = [
  { n: '01', title: 'Sense', body: 'We map the terrain — users, systems, constraints — until the real problem is unmistakable.' },
  { n: '02', title: 'Shape', body: 'Architecture and interface take form together, prototyped early and pressure-tested often.' },
  { n: '03', title: 'Grow', body: 'We build in living increments, shipping value continuously rather than in a single reveal.' },
  { n: '04', title: 'Sustain', body: 'Systems are handed over instrumented, documented, and ready to adapt long after launch.' },
];
