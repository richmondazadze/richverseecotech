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
    guide: 'small-business-access-review',
  },
  'renewable-energy': {
    serviceTitle: 'Solar & Backup Power Planning',
    archiveTitle: 'Renewable Energy & Backup Power Guides',
    archiveIntro: 'Work out how much energy essential equipment needs during an outage, then compare when different sources can supply it. Start with a four-hour office example.',
    guide: 'estimate-office-backup-energy',
  },
};

// A category is an entry point for a decision, even when it has few articles.
// These links point to specific passages or demonstrations, not search variants.
export const decisions: Record<string, {question:string; answer:string; href:string; label:string}[]> = {
  'web-development': [
    {question:'Keep the site or replace it?', answer:'If the current platform can support the task, start by isolating the failure. A new approval or booking workflow may need a different approach.', href:'/blog/repair-migrate-or-rebuild#repair', label:'Compare the three options'},
    {question:'What should a developer actually demonstrate?', answer:'Pick one customer action that matters. Our own brief required a visitor’s service choice to survive the move to the contact form.', href:'/work/richverse-studio-website#acceptance-test', label:'Try the handoff test'},
  ],
  'digital-marketing': [
    {question:'Is the campaign bringing the right enquiries?', answer:'Define what sales can accept, then count only the qualified requests you can match to eligible visits. Report requests of unknown origin separately.', href:'/services/digital-marketing#worked-example', label:'Read the example campaign report'},
    {question:'Which channel should we test first?', answer:'A search page can help someone already looking for a service. If the job is to bring an existing customer back, a consented email list may be the better starting point.', href:'/blog/digital-marketing-power#choose-a-channel', label:'Choose a channel for the buying decision'},
  ],
  cybersecurity: [
    {question:'Who still has access to a business system?', answer:'Start with the approved roles for one system. Record what differs, who can authorize a change and what will prove that the change took effect.', href:'/blog/small-business-access-review#record-the-decision', label:'Use the access review register'},
    {question:'Who verifies a request to change payment details?', answer:'Use a trusted contact already on file. The person approving a payment change should not rely on the phone number in the same message that requests it.', href:'/blog/preventing-phishing-attacks#verify-the-request', label:'Check an unexpected request'},
  ],
  'renewable-energy': [
    {question:'How much energy must the backup supply?', answer:'List each essential load in watts and the hours it needs to run. Add those watt-hours before allowing for losses, usable capacity and reserve.', href:'/blog/estimate-office-backup-energy#worked-example', label:'Follow the four-hour calculation'},
    {question:'What can change an equipment recommendation?', answer:'Two sites with the same daily energy use can have different peak loads and outage durations. Compare the options with the same load schedule.', href:'/services/renewable-energy#worked-example', label:'Inspect the load schedule'},
  ],
};
