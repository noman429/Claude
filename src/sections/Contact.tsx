import { useEffect, useRef, useState } from 'react';
import type { Theme } from '../data/theme';
import { ToolIcon, BrandLogo } from '../icons';

const WHATSAPP_URL = 'https://wa.me/923104274388';
const EMAIL_ADDRESS = 'numanriaz475@gmail.com';
const MAILTO_URL = `mailto:${EMAIL_ADDRESS}`;

// Scroll-triggered reveal (distinct from the mount-time `.reveal` fadeUp used
// elsewhere): this section sits far below the fold, so the animation should
// play when a visitor actually scrolls to it, not once at page load.
function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.01 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return { ref, inView };
}

export default function Contact({ theme }: { theme: Theme }) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="contact" style={{ padding: '96px 40px 40px', maxWidth: 1200, margin: '0 auto' }}>
      <div ref={ref} className="contact-grid">
        <div className={`reveal-inview${inView ? ' in-view' : ''}`}>
          <div className="sec-eyebrow" style={{ marginBottom: 14, color: '#25D366' }}>
            <span style={{ fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700 }}>Get In Touch</span>
          </div>
          <h2 className="sec-heading" style={{ color: theme.text }}>Let's Build Something Great Together</h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: theme.muted, maxWidth: 440, margin: '0 0 30px' }}>
            Whether you have a project idea, need an Agile Project Manager, Scrum Master, or simply want to connect, I'd love to hear from you.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp — opens in a new tab"
              className="card contact-option-card"
              style={{ background: theme.card, border: `1px solid ${theme.cardBorder}` }}
            >
              <span className="contact-option-icon" style={{ background: 'rgba(37,211,102,0.14)' }}>
                <BrandLogo brand="whatsapp" />
              </span>
              <span className="contact-option-text">
                <span className="contact-option-title" style={{ color: theme.text }}>Chat on WhatsApp</span>
                <span className="contact-option-sub" style={{ color: theme.muted }}>Fastest way to reach me for opportunities or quick discussions.</span>
              </span>
            </a>

            <a
              href={MAILTO_URL}
              aria-label="Send an email"
              className="card contact-option-card"
              style={{ background: theme.card, border: `1px solid ${theme.cardBorder}` }}
            >
              <span className="contact-option-icon" style={{ background: 'rgba(91,124,250,0.14)' }}>
                <ToolIcon icon="mail" color="#5b7cfa" />
              </span>
              <span className="contact-option-text">
                <span className="contact-option-title" style={{ color: theme.text }}>Send an Email</span>
                <span className="contact-option-sub" style={{ color: theme.muted }}>Perfect for job opportunities, collaborations, or detailed discussions.</span>
              </span>
            </a>
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center', fontSize: 13, color: theme.muted, marginTop: 56 }}>© {new Date().getFullYear()} Muhammad Numan</div>
    </section>
  );
}
