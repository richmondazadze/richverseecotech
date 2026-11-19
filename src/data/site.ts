import { CSSProperties } from 'react';

/* CSS custom-property helper so `--d`, `--tint`, `--orb` typecheck in style props */
export const cssVars = (props: Record<string, string | number>): CSSProperties =>
  props as CSSProperties;

/* ---------------------------------------------------------------- Brand */
export const brand = {
  name: 'Richverse Ecotech',
  tagline: 'We Build What Moves You Forward',
  subtagline: 'Tech. Security. Growth. Impact.',
  blurb:
    'Richverse Ecotech builds websites and web applications, plans digital campaigns, reviews business security controls, and helps teams plan solar and backup power.',
  email: 'richverseecotech@gmail.com',
  hours: 'Enquiry hours: Mon–Fri, 8 am–5 pm US Eastern Time',
  offices: [
    { city: 'Austin', country: 'United States', phone: '+1 512 650 9818' },
    { city: 'Accra', country: 'Ghana', phone: '+233 54 534 9965' },
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
  { to: '/blog', label: 'Insights' },
  { to: '/contact', label: 'Contact' },
];

/* ------------------------------------------------------------- Services */
export type Service = {
  slug: string;
  name: string;
  tagline: string;
  short: string;
  intro: string;
  offerings: { title: string; body: string }[];
};

export const services: Service[] = [
  {
    slug: "web-development",
    name: "Web Development",
    tagline: "Map the task before the build.",
    short: "Plan and build an accessible website, storefront, or business application with clear acceptance checks, reliable forms, and a practical handover.",
    intro: "Plan and build an accessible website, storefront, or business application with clear acceptance checks, reliable forms, and a practical handover.",
    offerings: [
      { title: "Journey map and prototype", body: "Map a key task across small screens, keyboards, errors, and confirmation before committing to a build." },
      { title: "Website or application", body: "Agree the content model, user roles, and integrations for a marketing site, storefront, or staff tool." },
      { title: "Mobile and offline use", body: "For field work, agree which tasks must work without a connection, how changes sync, and whether a mobile app or installable web app fits." },
      { title: "Release and ownership", body: "Receive the tested build, redirect or migration notes where needed, and an editing guide for the people who own the site." },
    ],
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    tagline: "Measure the enquiry behind the click.",
    short: "Plan search, content, email, or paid campaigns around a clear offer. Get a channel brief and reporting definitions that separate traffic from qualified enquiries.",
    intro: "Plan search, content, email, or paid campaigns around a clear offer. Get a channel brief and reporting definitions that separate traffic from qualified enquiries.",
    offerings: [
      { title: "Search and channel brief", body: "Match buying questions to search content, email, social, or a paid test. Set a budget boundary and a reason to stop." },
      { title: "Landing page and editorial plan", body: "Connect the message in a campaign to a relevant page, one next action, and a publishing calendar with named owners." },
      { title: "Email and automation", body: "Map the signup, consent, and follow-up sequence. Agree when people enter the sequence, leave it, or hear from a person." },
      { title: "Measurement and review", body: "Specify events, consent requirements, and lead qualification; report counts and rates against an agreed baseline." },
    ],
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity",
    tagline: "Give every finding an owner.",
    short: "Review business-critical systems, access controls, and recovery responsibilities. Get a prioritized risk register with owners, evidence, and clear closure criteria.",
    intro: "Review business-critical systems, access controls, and recovery responsibilities. Get a prioritized risk register with owners, evidence, and clear closure criteria.",
    offerings: [
      { title: "Risk and dependency map", body: "Connect important business activities to assets, service providers, and accountable people." },
      { title: "Control and access review", body: "Review account ownership, privileges, recovery arrangements, and existing evidence within a written scope." },
      { title: "Audit and team readiness", body: "Map evidence to an agreed requirement, clarify escalation responsibilities, and use a training session to rehearse a routine response." },
      { title: "Remediation and readiness", body: "Order fixes by impact and effort. Give each action a responsible owner, a due date, and a specific verification step." },
    ],
  },
  {
    slug: "renewable-energy",
    name: "Renewable Energy",
    tagline: "Plan around the loads that matter.",
    short: "Compare solar, storage, and backup options using the site’s essential loads, operating hours, and outage pattern. See a worked example of energy demand.",
    intro: "Compare solar, storage, and backup options using the site’s essential loads, operating hours, and outage pattern. See a worked example of energy demand.",
    offerings: [
      { title: "Load and site assessment", body: "Identify essential and flexible loads, available space, existing supply, and the measurements still needed." },
      { title: "Solar and hybrid options", body: "Compare generation, backup duration, and storage assumptions for the site. Flag seasonal limitations and equipment constraints." },
      { title: "Site-specific generation", body: "Where wind is being considered, assess local resource data and site constraints before comparing it with solar or a hybrid option." },
      { title: "Delivery and monitoring brief", body: "Document what requires local inspection, who confirms equipment selection, and how performance and maintenance will be tracked." },
    ],
  },
];

export function enquiryPath(serviceSlug?: string) {
  return serviceSlug ? '/contact?service=' + encodeURIComponent(serviceSlug) : '/contact';
}

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

/* --------------------------------------------------------------- Team */
export const team = [
  { id: 'richmond-azadze', name: 'Richmond Azadze', role: 'Chief Executive Officer & CTO', bio: "Sets the studio’s direction and makes the technical decisions behind its projects.", avatar: '/team/richmond.svg', linkedin: 'https://www.linkedin.com/in/richmond-azadze/', x: 'https://x.com/__richhimself' },
  { id: 'rapheal-asomani', name: 'Rapheal Asomani', role: 'Chief Operating Officer', bio: 'Coordinates project schedules, team responsibilities and handover.', avatar: '/team/rapheal.svg', linkedin: 'https://www.linkedin.com/in/younggem/' },
  { id: 'bernard-blay', name: 'Bernard Blay', role: 'Head of Cybersecurity', bio: 'Leads security reviews and helps teams turn technical findings into remediation priorities.', avatar: '/team/bernard.svg', linkedin: 'https://www.linkedin.com/in/bernard-blay-a65981317/' },
  { id: 'emmanuel-donkor', name: 'Emmanuel Donkor', role: 'Head of Business Development', bio: 'Leads new project and partnership conversations, helping define fit and the next step.', avatar: '/team/emmanuel.svg', linkedin: 'https://www.linkedin.com/in/emmanuel-donkor-4347bb287/' },
];

export const aboutFaqs = [
  { q: 'Do we need to commission all four services?', a: 'No. Start with the discipline closest to your brief. If another team needs to be involved, we will explain why before agreeing the scope.' },
  { q: 'Can we bring an existing project?', a: 'Yes. Describe what is already in place, what can change, and which decisions still need to be made.' },
];
export const contactFaqs = [
  { q: 'Do I need to choose a service first?', a: 'No. Leave the service field on “I’d like your advice” and describe the problem in your own words.' },
  { q: 'What information should I include in my message?', a: 'Include your name, a reply email and the task you want help with. If you are replacing a website, a public URL and the first thing that needs to work better are useful. Company name and budget are optional.' },
  { q: 'Can I schedule a call or meeting?', a: 'Yes. Mention that you would like a call and include your time zone. We will reply by email to agree a time.' },
  { q: 'Where are your offices located?', a: 'Austin, United States and Accra, Ghana.' },
];
