import type { Theme } from '../data/theme';
import { ROLES } from '../data/profile';

export default function Experience({ theme }: { theme: Theme }) {
  return (
    <section id="experience" style={{ padding: '96px 40px', maxWidth: 1200, margin: '0 auto' }}>
      <div className="reveal sec-eyebrow" style={{ marginBottom: 14, color: '#f45fb0' }}>
        <span style={{ fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700 }}>Career Journey</span>
      </div>
      <h2 className="reveal sec-heading" style={{ color: theme.text }}>Track record across delivery, QA, and solution design.</h2>
      <div className="sec-underline head-purple-pink" style={{ marginBottom: 36 }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {ROLES.map((role) => (
          <div key={role.title + role.dates} className="card" style={{ background: theme.card, border: `1px solid ${theme.cardBorder}`, borderRadius: 16, padding: '24px 26px', display: 'grid', gridTemplateColumns: '160px 1fr', gap: 24 }}>
            <div style={{ fontSize: 13, color: theme.muted, fontWeight: 600 }}>{role.dates}</div>
            <div>
              <h3 style={{ fontWeight: 700, fontSize: 18, margin: '0 0 4px' }}>{role.title}</h3>
              <div style={{ fontSize: 13.5, color: '#5b7cfa', marginBottom: 12, fontWeight: 600 }}>{role.company}</div>
              <ul style={{ margin: 0, paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 6 }}>
                {role.bullets.map((b) => (
                  <li key={b} style={{ fontSize: 14, lineHeight: 1.55, color: theme.muted }}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
