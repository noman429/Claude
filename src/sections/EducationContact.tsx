import type { Theme } from '../data/theme';
import { EDUCATION } from '../data/profile';

export default function EducationContact({ theme }: { theme: Theme }) {
  return (
    <section style={{ padding: '60px 40px', maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9b6bfa', marginBottom: 12, fontWeight: 600 }}>
        Education &amp; Certifications
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 16 }}>
        {EDUCATION.map((e) => (
          <div key={e.title} className="card" style={{ background: theme.card, border: `1px solid ${theme.cardBorder}`, borderRadius: 14, padding: 20 }}>
            <div style={{ fontSize: 15, fontWeight: 700 }}>{e.title}</div>
            <div style={{ fontSize: 13, color: theme.muted, marginTop: 4 }}>{e.detail}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
