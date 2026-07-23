export interface ProjectRaw {
  name: string;
  industry: string;
  roles: string[];
  methodology: string;
  status: string;
  accent: string;
  summary: string;
  modules: string[];
}

export interface Project extends ProjectRaw {
  tags: string[];
  statusColor: string;
}

const STATUS_COLORS: Record<string, string> = {
  Completed: '#22c55e',
  'In Progress': '#ffb020',
  'Product Design': '#9b6bfa',
  'Design Prototype': '#22d3ee',
};

const PROJECT_DATA_RAW: ProjectRaw[] = [
  { name: 'Real Estate Sales & CRM Platform', industry: 'Real Estate', roles: ['Project Manager', 'Scrum Master', 'Business Analyst'], methodology: 'Agile Scrum', status: 'Completed', accent: '#5b7cfa',
    summary: 'An end-to-end real estate sales and CRM platform that streamlines customer onboarding, property inventory, sales bookings, payment tracking, installment plans, commissions, and post-sale financial operations.',
    modules: ['Authentication', 'Company Setup', 'Customer Registration', 'Nominee Management', 'KYC Verification', 'Biometric Verification', 'Estate Management', 'Agent Management', 'Commission Management', 'Property & Unit Management', 'Area & Price Calculator', 'Inventory Management', 'Sales Booking', 'Installment Plans', 'Payment Management', 'Charges Generation'] },
  { name: 'Fleet Management System', industry: 'Fleet Management', roles: ['Project Manager', 'Business Analyst'], methodology: 'Agile Scrum', status: 'Completed', accent: '#22c55e',
    summary: 'A fleet management platform for managing company vehicles, ownership records, insurance, loans, purchases, sales, and driver assignments.',
    modules: ['Vehicle Registration', 'Vehicle Specifications', 'Ownership Management', 'Insurance', 'Loan Tracking', 'Purchase Records', 'Sale Records', 'Driver Management'] },
  { name: 'TV Advertising Booking Platform', industry: 'Media & Advertising', roles: ['Project Manager', 'Scrum Master'], methodology: 'Agile Scrum', status: 'Completed', accent: '#f45fb0',
    summary: 'A television advertising marketplace that allows businesses to search, compare, and book advertising slots across multiple TV channels.',
    modules: ['Authentication', 'TV Slot Marketplace', 'Search & Filters', 'Booking Flow', 'Slot Management', 'Payment Tracking', 'Approval Workflow'] },
  { name: 'Digital Healthcare & Online Pharmacy Platform', industry: 'Healthcare / Telemedicine', roles: ['Project Manager', 'Scrum Master'], methodology: 'Agile Scrum', status: 'Completed', accent: '#22d3ee',
    summary: 'A healthcare mobile application providing online pharmacy, doctor consultation, laboratory services, prescription uploads, and medicine delivery.',
    modules: ['Authentication', 'Pharmacy', 'Medicine Search', 'Prescription Upload', 'Shopping Cart', 'Checkout', 'Order Tracking', 'Doctor Consultation', 'Lab Tests', 'Home Services'] },
  { name: 'Footwear Manufacturing ERP', industry: 'Manufacturing ERP', roles: ['Project Manager', 'Business Analyst'], methodology: 'Agile Scrum', status: 'Completed', accent: '#ffb020',
    summary: 'A footwear manufacturing ERP that manages product definitions, costing, production planning, inventory, procurement, work-in-progress tracking, and dispatch operations.',
    modules: ['Product Catalog', 'Bill of Materials', 'Costing', 'Sales Orders', 'Procurement', 'Inventory', 'Production Planning', 'Department Tracking', 'Dispatch'] },
  { name: 'Industrial Weighbridge Management System', industry: 'Industrial Weighbridge Management', roles: ['Project Manager'], methodology: 'Agile Scrum', status: 'Completed', accent: '#9b6bfa',
    summary: 'A desktop and mobile weighbridge management solution for industrial sites, logistics operations, and vehicle weight tracking.',
    modules: ['Weight Entry', 'Multi-weight Transactions', 'Ticket Generation', 'Vehicle Management', 'Product Management', 'Mobile Application', 'Reports'] },
  { name: 'Procurement & Vendor Management Platform', industry: 'Procurement & Supply Chain', roles: ['Business Analyst'], methodology: 'Agile Scrum', status: 'Completed', accent: '#5b7cfa',
    summary: 'A procurement workflow platform that manages purchase orders, vendor evaluation, negotiations, sourcing, and procurement approvals.',
    modules: ['Purchase Orders', 'Vendor Evaluation', 'Vendor Selection', 'Price Negotiation', 'Local Procurement', 'International Procurement', 'Workflow Tracking'] },
  { name: 'Engineering Workflow Management System', industry: 'Engineering', roles: ['Business Analyst'], methodology: 'Agile Scrum', status: 'Completed', accent: '#22c55e',
    summary: 'An engineering workflow and business process management solution focused on process mapping and operational documentation.',
    modules: ['Process Mapping', 'Workflow Design', 'Business Documentation'] },
  { name: 'Matchmaking & Social Networking Platform', industry: 'Social Networking / Matchmaking', roles: ['Project Manager', 'Scrum Master', 'Business Analyst'], methodology: 'Agile Scrum', status: 'Completed', accent: '#f45fb0',
    summary: 'A faith and values-based matchmaking platform helping users build meaningful relationships through verified profiles, intelligent compatibility matching, and privacy-first communication.',
    modules: ['Verified User Profiles', 'Identity Verification', 'Privacy & End-to-End Encryption', 'Compatibility Matching', 'Community Groups', 'Discussion Forums', 'Activity Feed', 'Events & Meetups', 'Interest-based Matching', 'Voice & Video Calling', 'Vibe Matching', 'Interactive Games', 'Public & Private Chat Rooms', 'Premium Membership', 'Profile Boost', 'Compliments', 'Diamonds Wallet', 'Advanced Search Filters', 'Relationship Blogs'] },
  { name: 'Home Services Marketplace', industry: 'Home Services Marketplace', roles: ['Project Manager'], methodology: 'Agile Scrum', status: 'Completed', accent: '#5b7cfa',
    summary: 'A marketplace connecting customers with trusted professionals for home maintenance, repairs, installation, cleaning, and other on-demand services.',
    modules: ['Customer Portal', 'Professional Registration', 'Service Booking', 'Service Categories', 'Search & Filters', 'Promotional Deals', 'Mobile Application', 'Support Chat', 'Booking Management', 'Profile Management'] },
  { name: 'Charity & Donation Platform', industry: 'Charity / E-Commerce', roles: ['Project Manager', 'Scrum Master'], methodology: 'Agile Scrum', status: 'Completed', accent: '#22c55e',
    summary: 'A charity platform enabling users to remotely send meals and gifts to those in need, with verified proof of delivery.',
    modules: ['Product Catalog', 'Meal Distribution', 'Charity Gifts', 'Shopping Cart', 'Notifications', 'Proof of Delivery', 'Image & Video Verification', 'Board of Honors', 'Mobile Application', 'Secure Payments'] },
  { name: 'Nonprofit Fundraising & Donor Management Platform', industry: 'Fundraising SaaS', roles: ['Project Manager'], methodology: 'Agile Scrum', status: 'Completed', accent: '#ffb020',
    summary: 'A fundraising and donor management platform used by nonprofits for online donations, memberships, crowdfunding, event management, and donor engagement.',
    modules: ['Donation Forms', 'Donor CRM', 'AI Insights', 'Event Ticketing', 'Crowdfunding', 'Memberships', 'Peer-to-Peer Fundraising', 'Text-to-Give', 'Donor Portal', 'Security & Fraud Protection', 'Reporting Dashboard'] },
  { name: 'Enterprise Resource Planning (ERP) System', industry: 'Enterprise Resource Planning (ERP)', roles: ['Project Manager', 'Scrum Master'], methodology: 'Agile Scrum', status: 'Completed', accent: '#9b6bfa',
    summary: 'A cloud-based ERP solution supporting finance, HR, manufacturing, CRM, inventory, procurement, services, and business intelligence across multiple industries.',
    modules: ['Finance', 'Sales', 'Purchase', 'Inventory', 'POS', 'CRM', 'Manufacturing', 'HRM', 'Asset Management', 'Import Management', 'Business Intelligence', 'Dashboards', 'Reporting', 'Project Tracking'] },
  { name: 'E-commerce Analytics & Seller Intelligence Platform', industry: 'Amazon Seller Analytics', roles: ['Project Manager'], methodology: 'Agile Scrum', status: 'Completed', accent: '#22d3ee',
    summary: 'An e-commerce analytics platform providing real-time profitability insights, advertising analytics, inventory monitoring, and multi-marketplace integrations.',
    modules: ['Profit Tracking', 'Sales Analytics', 'PPC Management', 'Inventory Monitoring', 'Profit & Loss Reports', 'Marketplace Integrations', 'Accounting Integrations', 'Sales Trends', 'Dashboard Analytics'] },
  { name: 'Sports Academy Management Platform', industry: 'Sports Management', roles: ['Project Manager', 'Scrum Master'], methodology: 'Agile Scrum', status: 'Completed', accent: '#f45fb0',
    summary: 'A sports academy management platform that enables academies to manage students, coaching operations, and academy administration through a centralized digital system.',
    modules: ['Academy Management', 'Student Management', 'Academy Selection', 'Coaching Portal', 'Administration Dashboard', 'User Authentication', 'Mobile Responsive Platform'] },
  { name: 'Early Childhood Learning Platform', industry: 'EdTech / Mobile Learning', roles: ['Product Manager', 'Project Manager', 'Business Analyst'], methodology: 'Agile Scrum', status: 'In Progress', accent: '#22d3ee',
    summary: 'An interactive educational mobile application designed for toddlers aged 1–3 to learn animal names through engaging animations, authentic sounds, and gamified quizzes while maintaining a positive learning experience.',
    modules: ['Interactive Learning Modules', 'Gamified Quiz System', 'Progress Tracking', 'Reward System', 'Parent Gate', 'Settings Management', 'Multi-language Ready', 'Achievement Badges', 'Child-safe Experience', 'Offline Learning Support'] },
  { name: 'Creator Marketplace Platform', industry: 'Creator Economy / Social Marketplace', roles: ['Product Manager', 'Project Manager'], methodology: 'Agile Scrum', status: 'Product Design', accent: '#9b6bfa',
    summary: 'A two-sided marketplace connecting creators with fans through personalized video requests, secure payments, creator verification, and order management.',
    modules: ['Creator Profiles', 'Fan Profiles', 'Personalized Video Requests', 'Wallet Integration', 'Online Payments', 'Order Tracking', 'Ratings & Reviews', 'Live Chat', 'Notifications', 'Identity Verification', 'Refund & Dispute Management'] },
  { name: 'Social Multiplayer Gaming Platform', industry: 'Gaming', roles: ['Product Manager'], methodology: 'Agile Scrum', status: 'Product Design', accent: '#f45fb0',
    summary: 'A multiplayer board game platform combining traditional gameplay with social engagement, player progression, rewards, and community features.',
    modules: ['Multiplayer Gameplay', 'Friends System', 'Game Rooms', 'Leaderboards', 'Chat', 'Stickers & Emojis', 'Achievements', 'Reward Chests', 'Player Profiles', 'Account Management'] },
  { name: 'Fitness & Activity Tracking Platform', industry: 'Health & Fitness', roles: ['Product Manager'], methodology: 'Agile Scrum', status: 'Design Prototype', accent: '#22c55e',
    summary: 'A fitness application that transforms daily physical activity into meaningful health insights while encouraging engagement through achievements, leaderboards, and analytics.',
    modules: ['Step Tracking', 'Health Score', 'Apple Health Integration', 'Google Fit Integration', 'Activity History', 'Streak Tracking', 'Leaderboards', 'Achievement Badges', 'Analytics Dashboard', 'User Profiles'] },
  { name: 'Adaptive Learning & Test Preparation Platform', industry: 'EdTech', roles: ['Project Manager', 'Business Analyst'], methodology: 'Agile Scrum', status: 'Completed', accent: '#5b7cfa',
    summary: 'A personalized online learning platform offering adaptive practice, AI-assisted tutoring, student performance analytics, and standardized test preparation.',
    modules: ['Adaptive Learning', 'AI-assisted Tutoring', 'Personalized Curriculum', 'Video Lessons', 'Practice Engine', 'Comparative Analytics', 'Performance Dashboard', 'Student Leaderboards', 'Progress Tracking', 'Online Tutoring'] },
];

export const PROJECT_DATA: Project[] = PROJECT_DATA_RAW.map((p) => ({
  ...p,
  tags: [...new Set([p.industry.split(/[/&]| \(/)[0].trim(), ...p.roles])],
  statusColor: STATUS_COLORS[p.status] || '#5b7cfa',
}));
