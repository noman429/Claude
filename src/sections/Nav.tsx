import type { Theme } from '../data/theme';

const NAV_SECTIONS = ['about', 'experience', 'projects', 'practices', 'docs', 'tools', 'contact'] as const;
const NAV_LABELS: Record<string, string> = {
  about: 'About', experience: 'Experience', projects: 'Projects', practices: 'Knowledge',
  docs: 'Documentation', tools: 'Skills', contact: 'Contact',
};

export { NAV_SECTIONS };

export default function Nav({
  theme, navVisible, activeSection, themeName, onToggleTheme,
}: {
  theme: Theme;
  navVisible: boolean;
  activeSection: string;
  themeName: 'dark' | 'light';
  onToggleTheme: () => void;
}) {
  return (
    <nav style={{
      position: 'fixed', top: navVisible ? '18px' : '-70px', left: '50%', transform: 'translateX(-50%)',
      zIndex: 50, display: 'flex', alignItems: 'center', gap: 6, padding: '8px 10px',
      background: theme.navBg, border: `1px solid ${theme.cardBorder}`, borderRadius: 999,
      boxShadow: '0 12px 30px -10px rgba(0,0,0,0.35)', transition: 'top .35s ease', maxWidth: '94vw', overflowX: 'auto',
    }}>
      {NAV_SECTIONS.map((id) => {
        const active = activeSection === id;
        return (
          <a
            key={id}
            href={`#${id}`}
            className={`nav-link${active ? ' active' : ''}`}
            style={{
              fontSize: 13, fontWeight: 700, padding: '8px 14px', borderRadius: 999, whiteSpace: 'nowrap',
              color: active ? '#ffffff' : theme.muted,
              background: active ? 'linear-gradient(90deg,#5b7cfa,#9b6bfa)' : 'transparent',
            }}
          >
            {NAV_LABELS[id]}
          </a>
        );
      })}
      <button
        onClick={onToggleTheme}
        style={{
          width: 30, height: 30, flexShrink: 0, borderRadius: '50%', border: `1px solid ${theme.cardBorder}`,
          background: theme.card, color: theme.text, cursor: 'pointer', fontSize: 13,
        }}
      >
        {themeName === 'dark' ? '☀' : '☽'}
      </button>
    </nav>
  );
}
