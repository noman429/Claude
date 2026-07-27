import { DOC_DATA } from './docs';
import { METHOD_DATA } from './methodologies';
import { PROJECT_DATA } from './projects';
import { EDUCATION, ROLES } from './profile';
import { TOOL_GROUPS } from './tools';

export const SEARCH_CATEGORIES = {
  documentation: { label: 'Documentation', badgeLabel: 'DOCUMENTATION', icon: 'document', badgeClass: 'documentation', searchPriority: 90, defaultPriority: 100 },
  agile: { label: 'Agile', badgeLabel: 'AGILE', icon: 'cycle', badgeClass: 'agile', searchPriority: 92, defaultPriority: 95 },
  scrum: { label: 'Scrum', badgeLabel: 'SCRUM', icon: 'sprint', badgeClass: 'scrum', searchPriority: 91, defaultPriority: 90 },
  projects: { label: 'Projects', badgeLabel: 'PROJECTS', icon: 'portfolio', badgeClass: 'projects', searchPriority: 88, defaultPriority: 85 },
  projectManagement: { label: 'Project Management', badgeLabel: 'PROJECT MANAGEMENT', icon: 'plan', badgeClass: 'project-management', searchPriority: 87, defaultPriority: 80 },
  businessAnalysis: { label: 'Business Analysis', badgeLabel: 'BUSINESS ANALYSIS', icon: 'analysis', badgeClass: 'business-analysis', searchPriority: 86, defaultPriority: 75 },
  qualityAssurance: { label: 'Quality Assurance', badgeLabel: 'QA', icon: 'quality', badgeClass: 'quality-assurance', searchPriority: 85, defaultPriority: 70 },
  tools: { label: 'Tools', badgeLabel: 'TOOLS', icon: 'tools', badgeClass: 'tools', searchPriority: 84, defaultPriority: 65 },
  profile: { label: 'Profile', badgeLabel: 'PROFILE', icon: 'person', badgeClass: 'personal', searchPriority: 25, defaultPriority: 0 },
  experience: { label: 'Experience', badgeLabel: 'EXPERIENCE', icon: 'briefcase', badgeClass: 'personal', searchPriority: 24, defaultPriority: 0 },
  contact: { label: 'Contact', badgeLabel: 'CONTACT', icon: 'contact', badgeClass: 'personal', searchPriority: 23, defaultPriority: 0 },
} as const;

export type SearchCategory = keyof typeof SEARCH_CATEGORIES;

export interface SearchItem {
  id: string;
  title: string;
  description: string;
  route: `#${string}`;
  category: SearchCategory;
  tags: string[];
  keywords: string[];
  tools?: string[];
  projectTypes?: string[];
  documentTypes?: string[];
  priority: number;
  featured?: boolean;
  defaultSuggestion?: boolean;
}

export const normalizeSearchText = (value: string) => value.toLocaleLowerCase().trim().replace(/\s+/g, ' ');
const values = (entries: string[]) => [...new Set(entries.map(normalizeSearchText).filter(Boolean))];
const slug = (value: string) => normalizeSearchText(value).replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const createItem = (entry: Omit<SearchItem, 'tags' | 'keywords'> & { tags?: string[]; keywords?: string[] }): SearchItem => ({
  ...entry,
  tags: values(entry.tags ?? []),
  keywords: values(entry.keywords ?? []),
  tools: entry.tools ? values(entry.tools) : undefined,
  projectTypes: entry.projectTypes ? values(entry.projectTypes) : undefined,
  documentTypes: entry.documentTypes ? values(entry.documentTypes) : undefined,
});

const scrumNames = new Set(['Scrum', 'Scrumban']);
const qaDocs = new Set(['QA Test Plan', 'Test Cases', 'UAT Sign-off', 'Defect Report', 'Go-Live Checklist']);
const baDocs = new Set(['BRD', 'FRD', 'PRD', 'MRD', 'SRS', 'FSD', 'Technical Specification', 'Requirements Traceability Matrix', 'Non-Functional Requirements', 'Use Case Diagram', 'Activity Diagram', 'Data Flow Diagram']);
const pmDocs = new Set(['Project Charter', 'Business Case', 'Roadmap', 'Scope Statement', 'Work Breakdown Structure', 'Risk Register', 'RAID Log', 'Issue Log', 'Stakeholder Register', 'Communication Plan', 'Status Report', 'Meeting Minutes', 'Release Plan', 'Deployment Plan', 'Project Closure Report']);

const docCategory = (name: string): SearchCategory => qaDocs.has(name) ? 'qualityAssurance' : baDocs.has(name) ? 'businessAnalysis' : pmDocs.has(name) ? 'projectManagement' : name === 'Sprint Retrospective' ? 'agile' : 'documentation';

const items: SearchItem[] = [
  createItem({ id: 'profile-about', title: 'About Muhammad Numan', description: 'Project Manager, Scrum Master and Business Analyst based in Lahore.', category: 'profile', route: '#about', tags: ['profile'], keywords: ['about', 'muhammad numan', 'availability', 'languages', 'location'], priority: 20 }),
  ...ROLES.map((role, index) => createItem({ id: `experience-${index + 1}-${slug(role.company)}`, title: role.title, description: `${role.company} · ${role.dates}`, category: 'experience', route: '#experience', tags: ['employment', 'work history'], keywords: [role.company, role.dates, ...role.bullets], priority: 18 - index })),
  ...PROJECT_DATA.map((project, index) => createItem({ id: `project-${slug(project.name)}`, title: project.name, description: `${project.industry} · ${project.status}`, category: 'projects', route: '#projects', tags: [...project.roles, project.methodology, project.status, 'case studies', 'featured projects'], keywords: [project.summary, ...project.modules], projectTypes: [project.industry, ...project.modules], priority: 72 - Math.min(index, 20), featured: index === 0, defaultSuggestion: index === 0 })),
  ...METHOD_DATA.map((method) => createItem({ id: `method-${slug(method.name)}`, title: method.name, description: method.tagline, category: scrumNames.has(method.name) ? 'scrum' : method.name === 'Business Analysis' ? 'businessAnalysis' : 'agile', route: '#practices', tags: [...method.roles, ...method.artifacts], keywords: [method.intro, method.workflow, method.bestFor], priority: 75 })),
  ...DOC_DATA.map((doc) => createItem({ id: `document-${slug(doc.name)}`, title: doc.name, description: doc.oneLiner, category: docCategory(doc.name), route: '#docs', tags: [doc.category, doc.subgroup ?? ''], keywords: [doc.example ?? '', doc.oneLiner], documentTypes: [doc.name, doc.category], priority: 70, defaultSuggestion: ['User Story', 'Sprint Retrospective', 'BRD', 'Risk Register', 'QA Test Plan'].includes(doc.name) })),
  ...TOOL_GROUPS.flatMap((group) => group.items.map((tool) => createItem({ id: `tool-${slug(tool.name)}`, title: tool.name, description: tool.tagline, category: 'tools', route: '#tools', tags: [group.category], keywords: [group.desc, tool.tagline, 'workflow'], tools: [tool.name], priority: 68, defaultSuggestion: tool.name === 'Jira' }))),
  ...EDUCATION.map((entry, index) => createItem({ id: `profile-education-${index + 1}-${slug(entry.title)}`, title: entry.title, description: entry.detail, category: 'profile', route: '#contact', tags: ['education'], keywords: ['certification', 'course', 'university'], priority: 12 })),
  createItem({ id: 'contact-muhammad', title: 'Contact Muhammad', description: 'Connect by WhatsApp or email about opportunities and collaborations.', category: 'contact', route: '#contact', tags: ['contact'], keywords: ['hire', 'message', 'get in touch', 'email', 'whatsapp'], priority: 15 }),
];

// Defensive de-duplication keeps IDs/content stable if source datasets overlap later.
export const SEARCH_ITEMS = [...new Map(items.map((entry) => [`${entry.category}:${normalizeSearchText(entry.title)}:${entry.route}`, entry])).values()];

export const DEFAULT_SEARCH_ITEMS = SEARCH_ITEMS
  .filter((entry) => entry.defaultSuggestion)
  .sort((a, b) => SEARCH_CATEGORIES[b.category].defaultPriority - SEARCH_CATEGORIES[a.category].defaultPriority || b.priority - a.priority || a.id.localeCompare(b.id));

const searchableGroups = (item: SearchItem) => [
  SEARCH_CATEGORIES[item.category].label,
  ...item.tags,
  ...(item.tools ?? []),
  ...(item.projectTypes ?? []),
  ...(item.documentTypes ?? []),
].map(normalizeSearchText);

export interface RankedSearchResult { item: SearchItem; score: number; }

export function rankSearchItems(query: string, source = SEARCH_ITEMS): RankedSearchResult[] {
  const normalizedQuery = normalizeSearchText(query);
  if (!normalizedQuery) return [];
  const terms = normalizedQuery.split(' ');

  return source.map((item, stableIndex) => {
    const title = normalizeSearchText(item.title);
    const metadata = searchableGroups(item);
    const keywords = item.keywords.map(normalizeSearchText);
    const description = normalizeSearchText(item.description);
    const completeHaystack = [title, ...metadata, ...keywords, description].join(' ');
    const matchedTerms = terms.filter((term) => completeHaystack.includes(term)).length;
    if (!matchedTerms) return null;

    const tier = title === normalizedQuery ? 7
      : title.startsWith(normalizedQuery) ? 6
        : title.includes(normalizedQuery) ? 5
          : metadata.includes(normalizedQuery) ? 4
            : keywords.some((value) => value.includes(normalizedQuery)) ? 3
              : description.includes(normalizedQuery) ? 2 : 1;
    const allTerms = matchedTerms === terms.length ? 1 : 0;
    const categoryPriority = SEARCH_CATEGORIES[item.category].searchPriority;
    return { item, stableIndex, score: tier * 1_000_000 + allTerms * 100_000 + matchedTerms * 10_000 + categoryPriority * 100 + item.priority };
  }).filter((result): result is RankedSearchResult & { stableIndex: number } => result !== null)
    .sort((a, b) => b.score - a.score || a.stableIndex - b.stableIndex)
    .map(({ item, score }) => ({ item, score }));
}
