import type { Theme } from '../data/theme';
import { ABOUT_FACTS } from '../data/profile';

export default function About({ theme }: { theme: Theme }) {
  return (
    <section id="about" style={{ padding: '96px 40px', maxWidth: 1200, margin: '0 auto' }}>
      <div className="reveal sec-eyebrow" style={{ marginBottom: 14, color: '#9b6bfa' }}>
        <span style={{ fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700 }}>About Me</span>
      </div>
      <h2 className="reveal sec-heading" style={{ color: theme.text }}>The bridge between technical execution and business intent.</h2>
      <div className="sec-underline head-blue-purple" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', alignItems: 'stretch', gap: 18 }}>
        <div className="card" style={{ background: theme.card, border: `1px solid ${theme.cardBorder}`, borderRadius: 16, padding: 26 }}>
          <p style={{ fontSize: 15.5, lineHeight: 1.7, color: theme.muted, margin: 0 }}>
            I keep cross-functional teams (development, QA, design, and stakeholders) aligned on the same milestones, owners, and priorities.
            Hands-on with Jira and Confluence for sprint planning, backlog management, status reporting, and process documentation,
            translating business requirements into user stories and actionable workflows.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: 14, height: '100%' }}>
          {ABOUT_FACTS.map((f) => (
            <div key={f.label} className="card" style={{ background: theme.card, border: `1px solid ${theme.cardBorder}`, borderRadius: 14, padding: '14px 18px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', boxSizing: 'border-box' }}>
              <div style={{ fontSize: 11.5, color: theme.muted, textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 600 }}>{f.label}</div>
              <div style={{ fontSize: 14.5, fontWeight: 700, marginTop: 5 }}>{f.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
