import type { Theme } from '../data/theme';
import { EDUCATION } from '../data/profile';

export default function EducationContact({ theme }: { theme: Theme }) {
  return (
    <>
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

      <section id="contact" style={{ padding: '96px 40px 90px', maxWidth: 1200, margin: '0 auto' }}>
        <div className="reveal sec-eyebrow" style={{ marginBottom: 14, color: '#9b6bfa' }}>
          <span style={{ fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700 }}>Get In Touch</span>
        </div>
        <div className="card" style={{ background: 'linear-gradient(135deg,rgba(91,124,250,0.18),rgba(155,107,250,0.18))', border: `1px solid ${theme.cardBorder}`, borderRadius: 20, padding: 48 }}>
          <h2 className="sec-heading" style={{ fontSize: 'clamp(30px,4vw,44px)', margin: 0, color: theme.text }}>Let's talk about your next delivery.</h2>
          <p style={{ fontSize: 15.5, color: theme.muted, margin: '14px 0 22px', maxWidth: 560 }}>
            Open to Project Manager, Scrum Master, Delivery Manager, and Business Analyst roles, remote or on-site in Lahore.
          </p>
          <div style={{ display: 'flex', gap: 26, flexWrap: 'wrap' }}>
            <a href="mailto:numanriaz475@gmail.com" style={{ fontSize: 15 }}>numanriaz475@gmail.com</a>
            <a href="tel:+923104274388" style={{ fontSize: 15, color: theme.text }}>+92 310 4274388</a>
            <span style={{ fontSize: 15, color: theme.muted }}>Johar Town, Lahore</span>
          </div>
        </div>
        <div style={{ textAlign: 'center', fontSize: 13, color: theme.muted, marginTop: 36 }}>© {new Date().getFullYear()} Muhammad Numan</div>
      </section>
    </>
  );
}
