// Public examples are studio methods, not results or records from a client.
type Entries = [string, string][];
type Sample = { link: string; intro: string; name: string } & (
  | { kind: 'live'; checks: Entries }
  | { kind: 'measurement'; period: string; sessions: number; qualified: number; unmatched: number }
  | { kind: 'record'; finding: string; owner: string; check: string; status: string }
  | { kind: 'load'; hours: number; loads: { name: string; watts: number }[] }
);
export const demandWh = (sample: Extract<Sample, { kind: 'load' }>) =>
  sample.hours * sample.loads.reduce((sum, load) => sum + load.watts, 0);

export type Practice = {
  trigger: string; delivery: string;
  specialty: string; indexCopy: string; fit: string; outcome: string; question: string;
  plate: string; plateCaption: string;
  sample: Sample; processTitle: string;
  inputs: string; stages: [string,string][]; handoff: string; support: string;
  decisions: { q: string; a: string }[];
};
export const practice: Record<string, Practice> = {
  'web-development': {
    trigger:'Customers get stuck online or staff copy information between systems.', delivery:'A tested website or workflow and a guide for the people who maintain it.',
    specialty:'Interfaces & applications', indexCopy:'Turn a customer task or an internal workflow into a site your team can maintain.',
    fit:'A form customers can finish. A workflow staff can run without copying data between tools. We build around the task and test what happens when it goes wrong.',
    plate:'The enquiry path', plateCaption:'A failed check sends the visitor back to their draft. Confirmation belongs after the service accepts the enquiry.',
    outcome:'A working product your team can run.', question:'What must work on launch day?',
    processTitle:'Start with one difficult task.',
    sample:{kind:'live',link:'See the enquiry flow',name:'Launch checks',intro:'This is Richverse’s own enquiry flow. Choose a service and the form remembers it. Try it here without sending a message.',checks:[
      ['Choose a service','The form opens with that topic selected. You can still change it.'],
      ['Skip a required field','Focus moves to the first error. Other answers stay in place.'],
      ['Lose the connection','The draft stays on screen with a way to retry.']]},
    inputs:'Bring a URL, a sketch, or a task that currently involves a workaround. Tell us who uses it and who will update it after launch.',
    stages:[['Map the journey','Identify the user, entry point, information needed, and what counts as completion.'],['Test the difficult step','Use a prototype to check keyboard use, narrow screens, and error recovery before the full build.'],['Release and hand over','Review the acceptance checks together, then document access, content changes, and recovery.']],
    handoff:'A useful quote separates design and development from migration, integration work and ongoing support. Agree who supplies content, who owns the accounts, and which tests the site must pass before handover.',
    support:'We agree who owns hosting, updates, and monitoring, and who handles a failed integration.',
    decisions:[{q:'Do we need a custom application?',a:'If the main job is publishing information, a content-managed site may be enough. Custom software becomes useful when roles, approvals, or data must move between systems.'},{q:'Can we keep our existing site?',a:'Often. We check which pages attract visitors, who edits the content, and what breaks today. That can lead to a targeted repair, a phased migration, or a rebuild with redirects.'}],
  },
  'digital-marketing': {
    trigger:'You know what you spend, but not which campaigns bring useful enquiries.', delivery:'A channel plan and a measurement brief that sales and marketing can use together.',
    specialty:'Acquisition & measurement', indexCopy:'Connect a channel, a landing page, and a business decision you can measure.',
    fit:'Clicks tell you who visited. We connect the campaign to the landing page and the sales review, so you can see which enquiries are worth following up.',
    plate:'From visit to qualified enquiry', plateCaption:'Different channels bring visitors to the same page. Sales checks each enquiry against the agreed buying criteria.',
    outcome:'A campaign with a measurement plan.', question:'Which enquiries count?',
    processTitle:'Start with the offer.',
    sample:{kind:'measurement',link:'See the campaign numbers',name:'Qualified enquiry rate',intro:'For this example, sales counts a request when the buyer needs the advertised service and is in the service area.',period:'30 days',sessions:200,qualified:8,unmatched:2},
    inputs:'Bring your offer, the audience you most want to reach, and any existing reports. If you have no baseline, we can define the first measurement period.',
    stages:[['Define a useful enquiry','Agree the audience, offer, qualification rule, and the person who reviews incoming responses.'],['Launch a focused test','Start with a single channel and a dedicated landing page so that the result can inform a decision.'],['Review the evidence','Compare like periods and traffic sources. Check volume and lead quality before increasing spend.']],
    handoff:'A channel choice, an editorial plan, and reporting definitions that sales and marketing can both use.',
    support:'Agree the review cadence and who can change creative, audience, spend, or the offer when new evidence arrives.',
    decisions:[{q:'Search or paid media first?',a:'Search content suits recurring questions with lasting demand. Paid media can test an offer sooner, provided the landing page and lead review are ready. The right starting point depends on budget and the buying cycle.'},{q:'What if the numbers are small?',a:'Keep the raw counts in view and read the enquiries. A large percentage change from a handful of sessions is a reason to investigate, not a reliable forecast.'}],
  },
  cybersecurity: {
    trigger:'People or systems have changed and you need to check who still has access.', delivery:'A risk register with an owner, a next action and closure evidence for each finding.',
    specialty:'Risk & access', indexCopy:'Decide which risks need attention first, who owns each fix, and what proves it is closed.',
    fit:'People leave teams. Their access can remain. We review the systems your business relies on, assign each finding to an owner, and check the evidence before closing it.',
    plate:'Access review', plateCaption:'A finding stays open until a second person verifies the change.',
    outcome:'A risk register with named owners.', question:'What would show that a risk is closed?',
    processTitle:'Choose the systems in scope.',
    sample:{kind:'record',link:'Inspect the closure record',name:'Workspace access review',intro:'In this example, removing an account is only the first step. Someone other than the application owner must verify that access has ended.',
      finding:'A former team member still appears on the workspace membership list.',
      owner:'The application owner removes the account and records the change.',
      check:'A second reviewer compares the current membership list with the approved roster. The former account is absent.',
      status:'Closed'},
    inputs:'List the systems you rely on, who owns them, and the business activity each supports. Names of systems are enough for a first conversation; keep credentials out of the enquiry.',
    stages:[['Set boundaries','Agree which assets, data, and teams are in scope and who can authorize the review.'],['Review the controls','Compare the intended access and recovery procedures with current settings and evidence supplied by owners.'],['Verify the fixes','Prioritize by business impact, assign an owner, and record the evidence needed to close each item.']],
    handoff:'A scoped assessment, a prioritized record of findings, and a route from each issue to a verified action.',
    support:'We agree who retains evidence and when exceptions, outstanding issues, and control ownership should be reviewed again.',
    decisions:[{q:'Where do we start without an asset register?',a:'Start with one business activity that cannot stop. Identify its applications, owners, and recovery contacts. That bounded list gives the review a useful first scope.'},{q:'Does a review certify compliance?',a:'No. A control review can organize evidence and expose gaps against a requirement. A formal certification has its own scope, process, and authorized assessor.'}],
  },
  'renewable-energy': {
    trigger:'An outage stops work and you need to know which equipment to back up.', delivery:'A load worksheet and a comparison of power options against the same assumptions.',
    specialty:'Power & resilience', indexCopy:'Separate essential loads from flexible ones before comparing solar, storage, or backup options.',
    fit:'Which equipment has to stay on when the power goes out? We map how much it draws and for how long, then compare solar, storage and backup options for your site.',
    plate:'Four-hour load schedule', plateCaption:'Lighting and network equipment stay on. Printing can wait until power returns.',
    outcome:'A power plan with explicit assumptions.', question:'What really needs backup power?',
    processTitle:'Bring your outage pattern.',
    sample:{kind:'load',link:'See the load calculation',name:'Essential load worksheet',intro:'Lighting and network equipment draw 100 W together. Each extra hour they run adds another 100 Wh to the backup requirement.',hours:4,loads:[{name:'Lighting',watts:25},{name:'Network equipment',watts:75}]},
    inputs:'Bring recent bills, your outage pattern, operating hours, and a list of equipment that must keep running.',
    stages:[['Build the load profile','Separate essential from deferrable equipment and identify when each load actually runs.'],['Compare the options','Evaluate backup duration, available space, seasonal supply, maintenance, and budget under the same assumptions.'],['Plan site verification','Flag what must be measured or inspected locally before equipment selection or installation.']],
    handoff:'A load profile, a comparison of options, and a list of site checks that could change the recommendation.',
    support:'The proposal sets out who handles site assessment, local approvals, commissioning, and ongoing monitoring.',
    decisions:[{q:'Can we size a system from a bill alone?',a:'No. Billing totals hide when loads run and which ones overlap. Nameplate ratings are a starting point; operating measurements and peak demand help refine the design.'},{q:'Is minimizing cost the same as maximizing backup time?',a:'Not necessarily. A design for short outages may prioritize essential loads, while a design for bill savings depends on tariffs and when generation coincides with demand. Name the primary goal before comparing options.'}],
  },
};
