import type { BRAND_ICONS } from './brandIcons';

export const ICON_PATHS: Record<string, string> = {
  layers: 'M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
  infinity: 'M18.6 6.6a5.5 5.5 0 0 0-7.78 0L12 8.78l1.18-2.18a5.5 5.5 0 1 1 0 7.8L12 12.22l-1.18 2.18a5.5 5.5 0 1 1 0-7.8',
  checkCircle: 'M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4 12 14.01l-3-3',
  columns: 'M3 4h18v16H3z M9 4v16 M15 4v16',
  book: 'M4 19.5A2.5 2.5 0 0 1 6.5 17H20 M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z',
  fileText: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M8 13h8 M8 17h8 M8 9h2',
  grid: 'M3 3h8v8H3z M13 3h8v8h-8z M3 13h8v8H3z M13 13h8v8h-8z',
  message: 'M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z',
  users: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75',
  video: 'M23 7l-7 5 7 5V7z M14 5H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z',
  penTool: 'M12 19l7-7 3 3-7 7-3-3z M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z M2 2l7.586 7.586 M11 13a2 2 0 1 0 2.828-2.828 2 2 0 0 0-2.828 2.828z',
};

export interface ToolItem {
  name: string;
  tagline: string;
  icon: keyof typeof ICON_PATHS;
  color: string;
  /** When set, renders the real official brand mark (from data/brandIcons.ts)
   *  instead of the hand-drawn `icon`/`color` fallback above. */
  brand?: keyof typeof BRAND_ICONS;
}

export interface ToolGroup {
  category: string;
  desc: string;
  items: ToolItem[];
}

export const TOOL_GROUPS: ToolGroup[] = [
  { category: 'Project Management', desc: 'Tools used for Agile planning, backlog management, sprint execution and delivery.', items: [
    { name: 'Jira', tagline: 'Sprint Planning & Issue Tracking', icon: 'layers', color: '#0052CC', brand: 'jira' },
    { name: 'Azure DevOps', tagline: 'CI/CD & Work Item Tracking', icon: 'infinity', color: '#0078D7' },
    { name: 'ClickUp', tagline: 'Task & Workflow Management', icon: 'checkCircle', color: '#7B68EE', brand: 'clickup' },
    { name: 'Trello', tagline: 'Lightweight Kanban Boards', icon: 'columns', color: '#0052CC', brand: 'trello' },
  ] },
  { category: 'Documentation & Knowledge Management', desc: 'Tools used for requirements, documentation, collaboration and knowledge sharing.', items: [
    { name: 'Confluence', tagline: 'Requirements & Team Wikis', icon: 'book', color: '#172B4D', brand: 'confluence' },
    { name: 'Notion', tagline: 'Docs, Wikis & Planning', icon: 'fileText', color: '#6b6b6b', brand: 'notion' },
    { name: 'Microsoft 365', tagline: 'Docs, Sheets & Slides', icon: 'grid', color: '#EA3E23' },
    { name: 'Google Workspace', tagline: 'Docs, Sheets & Slides', icon: 'grid', color: '#4285F4', brand: 'google' },
  ] },
  { category: 'Communication & Collaboration', desc: 'Communication platforms for stakeholder management and distributed teams.', items: [
    { name: 'Slack', tagline: 'Team Messaging & Alignment', icon: 'message', color: '#4A154B' },
    { name: 'Microsoft Teams', tagline: 'Meetings & Enterprise Chat', icon: 'users', color: '#6264A7' },
    { name: 'Zoom', tagline: 'Stakeholder Video Calls', icon: 'video', color: '#2D8CFF', brand: 'zoom' },
  ] },
  { category: 'Planning, Workshops & Visual Collaboration', desc: 'Brainstorming, workshops, journey mapping and wireframing.', items: [
    { name: 'Miro', tagline: 'Workshops & Journey Mapping', icon: 'columns', color: '#FFC800', brand: 'miro' },
    { name: 'Figma', tagline: 'Wireframes & UX Review', icon: 'penTool', color: '#F24E1E', brand: 'figma' },
  ] },
];
