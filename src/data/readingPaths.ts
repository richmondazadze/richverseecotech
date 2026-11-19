// The service brief answers "what can I hire you for?"; the journal answers
// "how do I make this decision?". Keep the two entry points distinct.
type ReadingPath = {
  serviceTitle: string;
  archiveTitle: string;
  archiveIntro: string;
  guide: string;
};
export const readingPaths: Record<string, ReadingPath> = {
  'web-development': {
    serviceTitle: 'Website & Web Application Development',
    archiveTitle: 'Website Repair, Migration & Rebuild Guides',
    archiveIntro: 'When a customer gets stuck, does the website need a repair or a rebuild? Start with the task that failed, then compare what each option lets you keep.',
    guide: 'repair-migrate-or-rebuild',
  },
  'digital-marketing': {
    serviceTitle: 'Digital Marketing & Campaign Measurement',
    archiveTitle: 'Campaign Planning & Measurement Guides',
    archiveIntro: 'Decide where to reach your next customer and how to tell whether the campaign worked. These guides separate visits, enquiries and sales decisions.',
    guide: 'social-media-analytics',
  },
  cybersecurity: {
    serviceTitle: 'Cybersecurity Risk & Access Reviews',
    archiveTitle: 'Business Cybersecurity Guides',
    archiveIntro: 'Who can approve a changed payment instruction or verify a sign-in request? Use these checks to give staff a trusted route for verification and reporting.',
    guide: 'preventing-phishing-attacks',
  },
  'renewable-energy': {
    serviceTitle: 'Solar & Backup Power Planning',
    archiveTitle: 'Renewable Energy & Backup Power Guides',
    archiveIntro: 'Work out how much energy essential equipment needs during an outage, then compare when different sources can supply it. Start with a four-hour office example.',
    guide: 'estimate-office-backup-energy',
  },
};
