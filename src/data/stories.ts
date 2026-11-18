// Publish only evidenced work. A story can identify an in-house commission explicitly.
export const stories = [{
  slug: 'richverse-studio-website', title: 'A shorter path from service to enquiry',
  owner: 'Richverse Ecotech', kind: 'In-house project', service: 'web-development', image: '/work/studio-enquiry.webp',
  alt: 'The Richverse enquiry form with Web Development already selected',
  brief: 'Choose a service on this site and the enquiry form remembers it. Here’s how we carry that choice from one page to the next.',
  constraint: 'A visitor can arrive from search on any service page. They should not have to return to the homepage, learn our terminology, or restate which service they were reading about.',
  contribution: 'We connected each practice to a short enquiry form, carried the selected service into the form, and put direct contact details beside it. Each service also has its own readable HTML page before JavaScript starts.',
  outcome: 'Open Web Development, choose “Discuss your project,” and the form already knows the topic. If sending fails, the draft stays on screen and the visitor can retry or email the studio.',
}];
export const storyPath = (slug: string) => '/work/' + slug;
