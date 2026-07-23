export interface DocItem {
  name: string;
  category: string;
  oneLiner: string;
  isNew?: boolean;
  subgroup?: string;
  example?: string;
}

export const DOC_DATA: DocItem[] = [
  { name: 'Project Charter', category: 'Planning & Strategy', oneLiner: 'Authorizes the project and names the sponsor/PM.' },
  { name: 'Business Case', category: 'Planning & Strategy', oneLiner: 'Justifies investment with cost/benefit.' },
  { name: 'Vision Document', category: 'Planning & Strategy', oneLiner: 'The product’s long-term direction.' },
  { name: 'Roadmap', category: 'Planning & Strategy', oneLiner: 'Timeline of themes and releases.' },
  { name: 'Scope Statement', category: 'Planning & Strategy', oneLiner: 'Defines project boundaries and exclusions.', isNew: true },
  { name: 'Work Breakdown Structure', category: 'Planning & Strategy', oneLiner: 'Hierarchical breakdown of deliverables into tasks.', isNew: true },
  { name: 'BRD', category: 'Requirements', oneLiner: 'Business requirements at goal level.' },
  { name: 'FRD', category: 'Requirements', oneLiner: 'Functional requirements in detail.' },
  { name: 'PRD', category: 'Requirements', oneLiner: 'Product requirements for build.' },
  { name: 'MRD', category: 'Requirements', oneLiner: 'Market requirements driving the product.' },
  { name: 'SRS', category: 'Requirements', oneLiner: 'Formal software requirements specification.' },
  { name: 'FSD', category: 'Requirements', oneLiner: 'Functional spec of system behavior.' },
  { name: 'Technical Specification', category: 'Requirements', oneLiner: 'Engineering implementation detail.' },
  { name: 'Requirements Traceability Matrix', category: 'Requirements', oneLiner: 'Maps requirements to delivery and test.' },
  { name: 'Non-Functional Requirements', category: 'Requirements', oneLiner: 'Performance, security, and scalability constraints.', isNew: true },
  { name: 'Scrum Master', category: 'Agile Artifacts', subgroup: 'roles', oneLiner: 'Servant-leader who facilitates Scrum events and removes impediments for the team.', example: 'Coaches a team stuck on a blocked dependency to resolve it without dictating the technical solution.' },
  { name: 'Product Owner', category: 'Agile Artifacts', subgroup: 'roles', oneLiner: 'Owns the Product Backlog and maximizes the value delivered by the team.', example: 'Reorders the backlog after a customer interview reveals a higher-value feature.' },
  { name: 'Developers', category: 'Agile Artifacts', subgroup: 'roles', oneLiner: 'Cross-functional team members who build the Increment each sprint.', example: 'Pair up to unblock a complex integration mid-sprint.' },
  { name: 'Stakeholders', category: 'Agile Artifacts', subgroup: 'roles', oneLiner: 'People outside the Scrum Team with an interest in the product’s outcome.', example: 'Attend Sprint Review to give feedback on the newly demoed Increment.' },
  { name: 'Sprint', category: 'Agile Artifacts', subgroup: 'events', oneLiner: 'A fixed timebox, usually 1 to 4 weeks, in which a done Increment is created.', example: 'A two-week Sprint ending with a working, demoable release candidate.' },
  { name: 'Sprint Planning', category: 'Agile Artifacts', subgroup: 'events', oneLiner: 'Kickoff event where the team selects backlog items and defines the Sprint Goal.', example: 'Team pulls 32 points of backlog items and commits to a clear Sprint Goal.' },
  { name: 'Daily Scrum', category: 'Agile Artifacts', subgroup: 'events', oneLiner: 'A 15-minute daily sync where developers inspect progress toward the Sprint Goal.', example: 'Team flags a blocked API integration so it gets addressed same day.' },
  { name: 'Sprint Review', category: 'Agile Artifacts', subgroup: 'events', oneLiner: 'End-of-sprint event where the Increment is demonstrated and feedback is gathered.', example: 'Stakeholders see the working feature live and request a small refinement.' },
  { name: 'Sprint Retrospective', category: 'Agile Artifacts', subgroup: 'events', oneLiner: 'Team reflects on process and people to identify improvements for the next Sprint.', example: 'Team agrees to shrink story size after spotting mid-sprint scope creep.' },
  { name: 'Backlog Refinement', category: 'Agile Artifacts', subgroup: 'events', oneLiner: 'Ongoing activity where backlog items are clarified, sized, and made ready.', example: 'Team breaks a vague Epic into three ready, estimated User Stories.' },
  { name: 'Product Backlog', category: 'Agile Artifacts', subgroup: 'artifacts', oneLiner: 'Single, ordered source of everything that might be needed in the product.', example: 'Contains 120 items ranked by business value and dependency.' },
  { name: 'Sprint Backlog', category: 'Agile Artifacts', subgroup: 'artifacts', oneLiner: 'The Sprint Goal plus the backlog items and plan selected for the Sprint.', example: 'Lists the 8 stories the team committed to this Sprint.' },
  { name: 'Product Increment', category: 'Agile Artifacts', subgroup: 'artifacts', oneLiner: 'The sum of all completed backlog items, integrated and potentially shippable.', example: 'A release-candidate build that passes all Definition of Done checks.' },
  { name: 'User Story', category: 'Agile Artifacts', subgroup: 'artifacts', oneLiner: 'A short, user-centered description of a requirement, written as a value statement.', example: 'As a shopper, I want to save items for later so I can buy them next visit.' },
  { name: 'Epic', category: 'Agile Artifacts', subgroup: 'artifacts', oneLiner: 'A large body of work that spans multiple sprints and splits into smaller stories.', example: '"Redesign checkout flow" spanning six sprints and a dozen stories.' },
  { name: 'Feature', category: 'Agile Artifacts', subgroup: 'artifacts', oneLiner: 'A deliverable capability, larger than a story, smaller than an epic.', example: '"Guest checkout" as a feature inside the larger checkout epic.' },
  { name: 'Task', category: 'Agile Artifacts', subgroup: 'artifacts', oneLiner: 'A technical unit of work, usually estimated in hours, that contributes to a story.', example: '"Wire up payment API" as one of four tasks under a checkout story.' },
  { name: 'Acceptance Criteria', category: 'Agile Artifacts', subgroup: 'artifacts', oneLiner: 'Specific, testable conditions a story must meet to be considered done.', example: 'Guest can complete checkout without creating an account.' },
  { name: 'Definition of Ready (DoR)', category: 'Agile Artifacts', subgroup: 'artifacts', oneLiner: 'Shared checklist confirming a backlog item has enough clarity to be planned.', example: 'A story is only pulled into Sprint Planning once acceptance criteria are agreed.' },
  { name: 'Definition of Done (DoD)', category: 'Agile Artifacts', subgroup: 'artifacts', oneLiner: 'Shared checklist confirming work meets the team’s quality bar to call it complete.', example: 'Code reviewed, tested, and deployed to staging before a story is marked done.' },
  { name: 'Sprint Goal', category: 'Agile Artifacts', subgroup: 'artifacts', oneLiner: 'A single, coherent objective that gives the Sprint’s work a shared purpose.', example: '"Enable guest checkout end to end" as this Sprint’s unifying goal.' },
  { name: 'Release Goal', category: 'Agile Artifacts', subgroup: 'artifacts', oneLiner: 'The objective a release is working toward across multiple sprints.', example: '"Ship a fully self-serve onboarding flow by end of quarter."' },
  { name: 'Velocity', category: 'Agile Artifacts', subgroup: 'metrics', oneLiner: 'Average story points a team completes per sprint, used for forecasting.', example: 'A team averaging 32 points per sprint over the last 5 sprints.' },
  { name: 'Burndown Chart', category: 'Agile Artifacts', subgroup: 'metrics', oneLiner: 'Tracks remaining work against time left in the Sprint.', example: 'Shows scope is on pace to finish by day 9 of 10.' },
  { name: 'Burnup Chart', category: 'Agile Artifacts', subgroup: 'metrics', oneLiner: 'Tracks completed work and total scope over time, showing scope changes.', example: 'Reveals scope grew mid-sprint, explaining a missed Sprint Goal.' },
  { name: 'Cycle Time', category: 'Agile Artifacts', subgroup: 'metrics', oneLiner: 'Time from when work starts to when it is delivered.', example: 'A story moving from In Progress to Done in 2.5 days.' },
  { name: 'Lead Time', category: 'Agile Artifacts', subgroup: 'metrics', oneLiner: 'Time from when work is requested to when it is delivered.', example: 'A feature requested in backlog refinement and shipped 3 weeks later.' },
  { name: 'Throughput', category: 'Agile Artifacts', subgroup: 'metrics', oneLiner: 'Number of items a team completes per unit of time.', example: 'Team closing 14 stories per two-week Sprint.' },
  { name: 'Sprint Predictability', category: 'Agile Artifacts', subgroup: 'metrics', oneLiner: 'How consistently a team delivers what it forecasts each sprint.', example: 'Team hitting its Sprint Goal in 9 of the last 10 sprints.' },
  { name: 'Team Capacity', category: 'Agile Artifacts', subgroup: 'metrics', oneLiner: 'Available working hours or story points a team can commit to in a period.', example: 'Capacity reduced by 20% during a sprint with two members on leave.' },
  { name: 'Story Points', category: 'Agile Artifacts', subgroup: 'planning', oneLiner: 'A relative unit of effort, complexity, and risk used to size backlog items.', example: 'A simple bug fix estimated at 1 point, a complex integration at 8.' },
  { name: 'Planning Poker', category: 'Agile Artifacts', subgroup: 'planning', oneLiner: 'A consensus-based estimation game where the team sizes stories together.', example: 'Team reveals cards simultaneously and discusses outliers before converging on 5 points.' },
  { name: 'Relative Estimation', category: 'Agile Artifacts', subgroup: 'planning', oneLiner: 'Sizing work by comparing it to other known items rather than absolute time.', example: 'This story is about twice the size of that 3-point story.' },
  { name: 'Capacity Planning', category: 'Agile Artifacts', subgroup: 'planning', oneLiner: 'Matching planned work to the team’s actual available capacity for the period.', example: 'Reducing sprint commitment to account for a public holiday.' },
  { name: 'Release Planning', category: 'Agile Artifacts', subgroup: 'planning', oneLiner: 'Mapping backlog items to sprints across a release to hit a target date.', example: 'Sequencing 6 sprints of work to hit a Q3 launch date.' },
  { name: 'Roadmap Planning', category: 'Agile Artifacts', subgroup: 'planning', oneLiner: 'Sequencing themes and initiatives over a longer horizon to communicate direction.', example: 'A quarterly roadmap showing three major themes and their target releases.' },
  { name: 'Sprint Forecasting', category: 'Agile Artifacts', subgroup: 'planning', oneLiner: 'Using velocity and capacity to predict how much backlog a sprint can absorb.', example: 'Forecasting 30 points of capacity based on the last three sprints’ average.' },
  { name: 'Continuous Improvement', category: 'Agile Artifacts', subgroup: 'practices', oneLiner: 'Ongoing, incremental effort to improve process, quality, and team effectiveness.', example: 'Adopting one small process change every retrospective rather than a big overhaul.' },
  { name: 'Inspect & Adapt', category: 'Agile Artifacts', subgroup: 'practices', oneLiner: 'The core Scrum feedback loop of regularly checking progress and adjusting course.', example: 'Changing the Sprint plan mid-way after the Daily Scrum reveals new information.' },
  { name: 'Incremental Delivery', category: 'Agile Artifacts', subgroup: 'practices', oneLiner: 'Delivering a product in small, usable slices rather than all at once.', example: 'Shipping guest checkout before adding saved payment methods.' },
  { name: 'Iterative Development', category: 'Agile Artifacts', subgroup: 'practices', oneLiner: 'Repeating cycles of build, review, and refine to progressively improve the product.', example: 'Three iterations of a checkout flow before it meets usability goals.' },
  { name: 'Pair Programming', category: 'Agile Artifacts', subgroup: 'practices', oneLiner: 'Two developers working together at one workstation to build and review code in real time.', example: 'A senior and junior developer pairing to unblock a tricky bug together.' },
  { name: 'Swarming', category: 'Agile Artifacts', subgroup: 'practices', oneLiner: 'The whole team temporarily focusing on one item to unblock or finish it fast.', example: 'Three developers swarm a blocked story to get it done before Sprint end.' },
  { name: 'Cross-functional Teams', category: 'Agile Artifacts', subgroup: 'practices', oneLiner: 'Teams with all the skills needed to deliver an Increment without external handoffs.', example: 'A team with design, frontend, backend, and QA all embedded together.' },
  { name: 'Self-organizing Teams', category: 'Agile Artifacts', subgroup: 'practices', oneLiner: 'Teams that decide how to do their work rather than being directed externally.', example: 'The team, not a manager, decides who picks up which story.' },
  { name: 'Product Vision', category: 'Agile Artifacts', subgroup: 'documentation', oneLiner: 'A concise statement of the product’s long-term purpose and direction.', example: '"Become the fastest way for small teams to launch an online store."' },
  { name: 'Product Roadmap', category: 'Agile Artifacts', subgroup: 'documentation', oneLiner: 'A visual plan of themes and releases over time supporting the vision.', example: 'A roadmap showing checkout, onboarding, and analytics themes across three quarters.' },
  { name: 'Release Plan', category: 'Agile Artifacts', subgroup: 'documentation', oneLiner: 'A plan mapping backlog scope to sprints for an upcoming release.', example: 'A release plan sequencing six sprints toward a Q3 launch.' },
  { name: 'Sprint Plan', category: 'Agile Artifacts', subgroup: 'documentation', oneLiner: 'The output of Sprint Planning capturing the Sprint Goal and selected work.', example: 'A one-page summary shared with stakeholders after Sprint Planning.' },
  { name: 'Kanban Board', category: 'Agile Artifacts', subgroup: 'board', oneLiner: 'A visual board showing work as it flows through stages of a process.', example: 'Columns for Backlog, In Progress, Review, and Done.' },
  { name: 'Scrum Board', category: 'Agile Artifacts', subgroup: 'board', oneLiner: 'A Kanban-style board scoped to a single Sprint’s backlog.', example: 'Shows only this Sprint’s 8 stories moving across To Do, Doing, Done.' },
  { name: 'WIP Limits', category: 'Agile Artifacts', subgroup: 'board', oneLiner: 'Caps on how many items can be in a given stage at once.', example: 'Limiting "In Progress" to 3 items so the team finishes before starting more.' },
  { name: 'Swimlanes', category: 'Agile Artifacts', subgroup: 'board', oneLiner: 'Horizontal groupings on a board that separate work by type or priority.', example: 'A dedicated swimlane for expedited production bugs.' },
  { name: 'Definition of Workflow', category: 'Agile Artifacts', subgroup: 'board', oneLiner: 'The agreed set of stages work passes through from start to done.', example: 'Backlog, then Doing, then Review, then Done, agreed and posted on the board.' },
  { name: 'Risk Register', category: 'Governance & Risk', oneLiner: 'Identified risks and mitigation.' },
  { name: 'RAID Log', category: 'Governance & Risk', oneLiner: 'Risks, Assumptions, Issues, Dependencies.' },
  { name: 'Issue Log', category: 'Governance & Risk', oneLiner: 'Active issues, owners, and resolution status.', isNew: true },
  { name: 'Stakeholder Register', category: 'Governance & Risk', oneLiner: 'Stakeholders, interest, and influence.' },
  { name: 'Communication Plan', category: 'Governance & Risk', oneLiner: 'Who gets what, when, and how.' },
  { name: 'Status Report', category: 'Status & Reporting', oneLiner: 'Delivery health for stakeholders.' },
  { name: 'Meeting Minutes', category: 'Status & Reporting', oneLiner: 'Decisions and actions from a meeting.' },
  { name: 'Steering Committee Deck', category: 'Status & Reporting', oneLiner: 'Executive-level progress summary.', isNew: true },
  { name: 'Release Notes', category: 'Release & Deployment', oneLiner: 'What shipped, and why.' },
  { name: 'Deployment Plan', category: 'Release & Deployment', oneLiner: 'Steps and sequencing for a release.' },
  { name: 'Rollback Plan', category: 'Release & Deployment', oneLiner: 'Fallback steps if a release fails.', isNew: true },
  { name: 'Go-Live Checklist', category: 'Release & Deployment', oneLiner: 'Final readiness gate before launch.', isNew: true },
  { name: 'QA Test Plan', category: 'QA & Testing', oneLiner: 'Test strategy and scope.' },
  { name: 'Test Cases', category: 'QA & Testing', oneLiner: 'Step-by-step verification scripts.' },
  { name: 'UAT Sign-off', category: 'QA & Testing', oneLiner: 'Business validation before release.' },
  { name: 'Defect Report', category: 'QA & Testing', oneLiner: 'Logged bugs with severity and repro steps.', isNew: true },
  { name: 'Wireframes', category: 'Diagrams & Modeling', oneLiner: 'Low-fidelity UI layout.' },
  { name: 'Use Case Diagram', category: 'Diagrams & Modeling', oneLiner: 'Actor-system interactions.' },
  { name: 'ER Diagram', category: 'Diagrams & Modeling', oneLiner: 'Data entities and relationships.' },
  { name: 'Activity Diagram', category: 'Diagrams & Modeling', oneLiner: 'Process flow steps.' },
  { name: 'Sequence Diagram', category: 'Diagrams & Modeling', oneLiner: 'Interaction over time.' },
  { name: 'Architecture Diagram', category: 'Diagrams & Modeling', oneLiner: 'System components and flow.' },
  { name: 'Data Flow Diagram', category: 'Diagrams & Modeling', oneLiner: 'How data moves between system components.', isNew: true },
  { name: 'Project Closure Report', category: 'Closure & Retrospective', oneLiner: 'Formal project sign-off.' },
  { name: 'Retrospective', category: 'Closure & Retrospective', oneLiner: 'Sprint/team reflection and actions.' },
  { name: 'Lessons Learned', category: 'Closure & Retrospective', oneLiner: 'Knowledge captured for future projects.' },
];

export interface CategoryMeta {
  id: string;
  accent: string;
  desc: string;
}

export const CATEGORY_META: CategoryMeta[] = [
  { id: 'Planning & Strategy', accent: '#5b7cfa', desc: 'Charters, business cases, and roadmaps that define why and what.' },
  { id: 'Requirements', accent: '#9b6bfa', desc: 'Business and functional specifications guiding what gets built.' },
  { id: 'Agile Artifacts', accent: '#22d3ee', desc: 'Backlog items and Scrum artifacts teams work from daily.' },
  { id: 'Governance & Risk', accent: '#f45fb0', desc: 'Risk, issue, and stakeholder tracking that keeps delivery accountable.' },
  { id: 'Status & Reporting', accent: '#ffb020', desc: 'Cadence artifacts that keep stakeholders and sponsors informed.' },
  { id: 'Release & Deployment', accent: '#22c55e', desc: 'Plans that get a build safely into production and back out if needed.' },
  { id: 'QA & Testing', accent: '#f45fb0', desc: 'Test strategy, cases, and sign-off that validate quality before release.' },
  { id: 'Diagrams & Modeling', accent: '#22d3ee', desc: 'Visual models of flows, data, and system architecture.' },
  { id: 'Closure & Retrospective', accent: '#9b6bfa', desc: 'Formal sign-off and reflection captured at the end of delivery.' },
];

export const ROLE_MAP: Record<string, { creates: string; approves: string; when: string }> = {
  'Planning & Strategy': { creates: 'Project Manager / Business Analyst', approves: 'Sponsor / Steering Committee', when: 'Before delivery kicks off, to align scope, funding, and direction.' },
  'Requirements': { creates: 'Business Analyst', approves: 'Product Owner / Client', when: 'During discovery and elaboration, before design and build begin.' },
  'Agile Artifacts': { creates: 'Product Owner / Scrum Master', approves: 'Development Team', when: 'Throughout each sprint, as backlog items are refined and delivered.' },
  'Governance & Risk': { creates: 'Project Manager', approves: 'Steering Committee / Sponsor', when: 'Continuously, whenever a new risk, issue, or stakeholder is identified.' },
  'Status & Reporting': { creates: 'Project Manager', approves: 'Stakeholders', when: 'On a recurring cadence, weekly or per sprint, to report delivery health.' },
  'Release & Deployment': { creates: 'Release Manager / DevOps', approves: 'Technical Lead / Product Owner', when: 'Ahead of any production release, to sequence and de-risk the rollout.' },
  'QA & Testing': { creates: 'QA Lead', approves: 'Product Owner', when: 'During test planning and execution, before sign-off for release.' },
  'Diagrams & Modeling': { creates: 'Business/Systems Analyst or Architect', approves: 'Technical Lead', when: 'During design, to communicate flows and structure before build.' },
  'Closure & Retrospective': { creates: 'Project Manager', approves: 'Sponsor / Delivery Team', when: 'At the end of a project, sprint, or major milestone.' },
};

export const AGILE_SUBGROUPS = [
  { id: 'roles', label: 'Scrum Roles' },
  { id: 'events', label: 'Scrum Events' },
  { id: 'artifacts', label: 'Scrum Artifacts' },
  { id: 'metrics', label: 'Agile Metrics' },
  { id: 'planning', label: 'Agile Planning & Estimation' },
  { id: 'practices', label: 'Agile Practices & Principles' },
  { id: 'documentation', label: 'Agile Documentation' },
  { id: 'board', label: 'Agile Boards' },
];

export const AGILE_SUBGROUP_META: Record<string, { owner: string; why: string; inputs: string; outputs: string; bestPractice: string; commonMistake: string; interview: string[] }> = {
  roles: { owner: 'Scrum Team', why: 'Clear roles remove ambiguity over who decides what, keeping the team accountable and self-organizing.', inputs: 'Team context, product goals, and organizational constraints.', outputs: 'Clear accountability for backlog, delivery, and process health.', bestPractice: 'Protect the boundaries of each role, decisions stay with the accountable role, not made for them.', commonMistake: 'Letting a Project Manager override the Product Owner’s prioritization or the Scrum Master’s facilitation.', interview: ['What is the difference between a Scrum Master and a Project Manager?', 'Can a Product Owner and Scrum Master be the same person?'] },
  events: { owner: 'Scrum Master (facilitator)', why: 'Regular, timeboxed events create a predictable rhythm for planning, inspecting, and adapting.', inputs: 'Product Backlog, prior Sprint outcomes, and team capacity.', outputs: 'A Sprint Backlog, a shippable Increment, and actionable improvements.', bestPractice: 'Keep every event timeboxed and outcome-driven, never a status meeting.', commonMistake: 'Turning the Daily Scrum into a status report to the Scrum Master instead of a peer-to-peer sync.', interview: ['Why is the Daily Scrum timeboxed to 15 minutes?', 'What happens if a Sprint Goal cannot be met?'] },
  artifacts: { owner: 'Product Owner (content) / Development Team (execution)', why: 'Artifacts make work, progress, and increments transparent so decisions are based on shared information.', inputs: 'Stakeholder needs, discovery work, and prior sprint outcomes.', outputs: 'A prioritized, estimated body of work ready for planning and delivery.', bestPractice: 'Keep artifacts small, current, and visible to the whole team, not buried in a tool only one person maintains.', commonMistake: 'Letting the Product Backlog grow unbounded without regular refinement or reprioritization.', interview: ['What is the difference between an Epic, a Feature, and a User Story?', 'What makes a User Story "ready" for a sprint?'] },
  metrics: { owner: 'Scrum Master / Delivery Lead', why: 'Metrics turn delivery into something measurable, so trends and risks surface before they become problems.', inputs: 'Historical sprint data: completed points, cycle times, and scope changes.', outputs: 'Forecasts, trend lines, and early warning signals for delivery risk.', bestPractice: 'Use metrics to spot trends over multiple sprints, never to compare or rank individuals.', commonMistake: 'Treating velocity as a productivity score instead of a capacity-planning input.', interview: ['What is the difference between cycle time and lead time?', 'Why shouldn’t velocity be compared across different teams?'] },
  planning: { owner: 'Product Owner / Development Team', why: 'Structured planning and estimation align scope with realistic capacity before commitments are made.', inputs: 'Backlog items, historical velocity, and team capacity for the period.', outputs: 'A forecast, release plan, or sprint commitment the team can stand behind.', bestPractice: 'Estimate relatively as a whole team, not in isolation, and revisit estimates as understanding improves.', commonMistake: 'Treating story points as hours, or letting one voice dominate Planning Poker.', interview: ['Why use story points instead of hours?', 'How does capacity planning differ from velocity-based forecasting?'] },
  practices: { owner: 'Whole Scrum Team', why: 'These principles are what make a team genuinely Agile, not just running ceremonies on a schedule.', inputs: 'Team retrospectives, feedback loops, and a culture that tolerates experimentation.', outputs: 'Continuously improving quality, flow, and team effectiveness.', bestPractice: 'Treat every practice as a habit to protect deliberately, not a one-off initiative.', commonMistake: 'Adopting the ceremonies of Agile without the underlying mindset of inspection and adaptation.', interview: ['How do you drive continuous improvement inside a Scrum team?', 'What does "self-organizing" mean in practice, and where are its limits?'] },
  documentation: { owner: 'Product Owner / Project Manager', why: 'Lightweight, living documentation keeps the whole organization aligned on direction without slowing teams down.', inputs: 'Strategic goals, stakeholder input, and delivery progress.', outputs: 'A shared, current reference stakeholders and teams can plan against.', bestPractice: 'Keep these documents living and versioned, not a one-time artifact frozen at kickoff.', commonMistake: 'Writing a roadmap or vision once and never revisiting it as the product evolves.', interview: ['How often should a product roadmap be revisited?', 'What belongs in a Sprint Plan versus a Release Plan?'] },
  board: { owner: 'Scrum Team', why: 'Visualizing work and limiting work in progress exposes bottlenecks and keeps flow honest.', inputs: 'Backlog items pulled into the current sprint or flow.', outputs: 'A shared, real-time view of what is in progress, done, and blocked.', bestPractice: 'Enforce WIP limits strictly, and swarm on blocked items instead of starting new work.', commonMistake: 'Letting WIP limits balloon "just this once," which quietly kills flow efficiency.', interview: ['Why do WIP limits improve throughput even though they restrict work?', 'How do swimlanes help manage a board with mixed work types?'] },
};

export const AGILE_RELATED_OVERRIDE: Record<string, string[]> = {
  'Sprint Planning': ['Sprint Backlog', 'Daily Scrum'],
  'Daily Scrum': ['Sprint Backlog', 'Sprint Review'],
  'Sprint Review': ['Product Increment', 'Sprint Retrospective'],
  'Sprint Retrospective': ['Sprint Planning'],
  'Sprint': ['Sprint Planning', 'Sprint Review'],
  'Backlog Refinement': ['Product Backlog', 'Sprint Planning'],
};

export interface DocDetail extends DocItem {
  isAgile?: boolean;
  notAgile?: boolean;
  definition?: string;
  purpose?: string;
  why?: string;
  owner?: string;
  inputs?: string;
  outputs?: string;
  bestPractice?: string;
  commonMistake?: string;
  related?: string[];
  interview?: string[];
  description?: string;
  when?: string;
  creates?: string;
  approves?: string;
  relationship?: string;
}

export function buildDocDetail(d: DocItem): DocDetail {
  if (d.category === 'Agile Artifacts') {
    const meta = (d.subgroup && AGILE_SUBGROUP_META[d.subgroup]) || ({} as (typeof AGILE_SUBGROUP_META)[string]);
    const related = AGILE_RELATED_OVERRIDE[d.name]
      || DOC_DATA.filter((x) => x.subgroup === d.subgroup && x.name !== d.name).slice(0, 3).map((x) => x.name);
    return {
      ...d,
      isAgile: true,
      definition: `${d.name}: ${d.oneLiner}`,
      purpose: d.oneLiner,
      why: meta.why,
      owner: meta.owner,
      inputs: meta.inputs,
      outputs: meta.outputs,
      example: d.example,
      bestPractice: meta.bestPractice,
      commonMistake: meta.commonMistake,
      related,
      interview: meta.interview || [],
    };
  }
  const role = ROLE_MAP[d.category] || ({} as (typeof ROLE_MAP)[string]);
  return {
    ...d,
    notAgile: true,
    purpose: d.oneLiner,
    description: `${d.name} is a ${d.category} artifact. ${d.oneLiner} It supports traceability across the delivery lifecycle.`,
    when: role.when || 'As needed, based on project context.',
    creates: role.creates || 'Project Manager',
    approves: role.approves || 'Product Owner',
    relationship: `Works alongside other ${d.category} artifacts to keep planning, delivery, and governance traceable end to end.`,
  };
}
