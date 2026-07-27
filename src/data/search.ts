import { DOC_DATA } from './docs';
import { METHOD_DATA } from './methodologies';
import { PROJECT_DATA } from './projects';
import { EDUCATION, ROLES } from './profile';
import { TOOL_GROUPS } from './tools';

export interface SearchItem {
  title: string;
  description: string;
  category: string;
  section: string;
  keywords: string;
}

const item = (title: string, description: string, category: string, section: string, keywords = ''): SearchItem => ({
  title, description, category, section, keywords,
});

export const SEARCH_ITEMS: SearchItem[] = [
  item('About Muhammad Numan', 'Project Manager, Scrum Master and Business Analyst based in Lahore.', 'Profile', 'about', 'availability languages location'),
  ...ROLES.map((role) => item(role.title, `${role.company} · ${role.dates}`, 'Experience', 'experience', role.bullets.join(' '))),
  ...PROJECT_DATA.map((project) => item(project.name, `${project.industry} · ${project.status}`, 'Projects', 'projects', [project.summary, ...project.roles, ...project.modules].join(' '))),
  ...METHOD_DATA.map((method) => item(method.name, method.tagline, 'Knowledge', 'practices', [method.intro, method.workflow, method.bestFor, ...method.roles, ...method.artifacts].join(' '))),
  ...DOC_DATA.map((doc) => item(doc.name, doc.oneLiner, 'Documentation', 'docs', `${doc.category} ${doc.subgroup ?? ''}`)),
  ...TOOL_GROUPS.flatMap((group) => group.items.map((tool) => item(tool.name, tool.tagline, 'Skills & tools', 'tools', `${group.category} ${group.desc}`))),
  ...EDUCATION.map((entry) => item(entry.title, entry.detail, 'Education', 'contact', 'certification course university')),
  item('Contact Muhammad', 'Connect by WhatsApp or email about opportunities and collaborations.', 'Contact', 'contact', 'hire message get in touch'),
];
