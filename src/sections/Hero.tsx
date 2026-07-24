import { useEffect, useRef } from 'react';
import type { Theme } from '../data/theme';
import { HERO_BADGES, HERO_STATS } from '../data/profile';

export default function Hero({ theme }: { theme: Theme }) {
  const heroRightRef = useRef<HTMLDivElement>(null);
  const hexFrameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;
    const onMouseMove = (e: MouseEvent) => {
      const hexFrame = hexFrameRef.current;
      const heroRight = heroRightRef.current;
      if (!hexFrame || !heroRight) return;
      const r = heroRight.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      hexFrame.style.transform = `perspective(900px) rotateY(${(-3 - px * 6).toFixed(2)}deg) rotateX(${(2 + py * 6).toFixed(2)}deg)`;
    };
    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  const hexClip = 'polygon(25% 3%,75% 3%,100% 50%,75% 97%,25% 97%,0% 50%)';

  return (
    <section id="hero" style={{ minHeight: '100vh', padding: '130px 40px 60px', maxWidth: 1600, margin: '0 auto', gap: 'clamp(24px,5vw,60px)', boxSizing: 'border-box' }}>
      <div id="hero-left" className="reveal">
        <div style={{ fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#5b7cfa', marginBottom: 14, fontWeight: 600 }}>
          Project Manager · Scrum Master · Business Analyst
        </div>
        <h1 className="gradname" style={{ fontWeight: 800, fontSize: 'clamp(40px,5.4vw,66px)', lineHeight: 1.03, letterSpacing: '-0.03em', margin: 0 }}>
          Muhammad Numan
        </h1>
        <p style={{ fontSize: 17, lineHeight: 1.65, color: theme.muted, maxWidth: 460, margin: '18px 0 0' }}>
          6+ years turning cross-functional chaos into shipped, on-time software. Based in Lahore, open to remote roles worldwide.
        </p>
        <div style={{ display: 'flex', gap: 14, marginTop: 24, flexWrap: 'wrap' }}>
          <a
            href="/assets/Muhammad_Numan_CV.pdf"
            download
            className="btn"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 15, fontWeight: 700, padding: '13px 26px',
              borderRadius: 10, background: 'linear-gradient(90deg,#5b7cfa,#9b6bfa,#f45fb0)', backgroundSize: '200% 100%',
              animation: 'gradShift 5s ease infinite', color: 'white', boxShadow: '0 14px 30px -12px rgba(91,124,250,0.55)',
            }}
          >
            ⬇ Download Resume
          </a>
          <a
            href="#contact"
            className="btn"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 15, fontWeight: 600, padding: '13px 26px',
              borderRadius: 10, border: `1px solid ${theme.cardBorder}`, color: theme.text, background: theme.dashBg, backdropFilter: 'blur(10px)',
            }}
          >
            Contact Me →
          </a>
        </div>
        <div style={{ display: 'flex', gap: 10, marginTop: 20, flexWrap: 'wrap' }}>
          <a href="mailto:numanriaz475@gmail.com" className="chip" style={chipStyle(theme, theme.text)}>📧 Email</a>
          <a href="tel:+923104274388" className="chip" style={chipStyle(theme, theme.text)}>📱 Phone</a>
          <span className="chip" style={chipStyle(theme, theme.muted)}>📍 Lahore, Pakistan</span>
          <span className="chip" style={chipStyle(theme, theme.muted)}>🌍 Remote</span>
        </div>
        <div className="hero-stats-grid" style={{ display: 'grid', alignItems: 'stretch', gap: 10, marginTop: 26, maxWidth: 560 }}>
          {HERO_STATS.map((hs) => (
            <div
              key={hs.label}
              className="kpi-card card"
              style={{
                position: 'relative', background: theme.card, border: `1px solid ${theme.cardBorder}`, borderRadius: 14,
                padding: '12px 12px 10px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center',
                alignItems: 'center', textAlign: 'center', boxSizing: 'border-box',
                boxShadow: '0 1px 0 rgba(255,255,255,0.06) inset, 0 10px 22px -14px rgba(0,0,0,0.5)', overflow: 'hidden',
              }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: hs.accent }} />
              <div style={{ color: hs.accent, fontWeight: 800, fontSize: 15, maxWidth: '100%', overflowWrap: 'break-word' }}>{hs.value}</div>
              <div style={{ fontSize: 9.5, color: theme.muted, marginTop: 4, textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 700 }}>{hs.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div id="hero-right" ref={heroRightRef} className="reveal" style={{ position: 'relative', minHeight: 'clamp(420px,44vw,740px)', alignItems: 'center', transform: 'translateX(-12%)' }}>
        <div style={{ position: 'absolute', width: 120, height: 120, top: '2%', left: '6%', borderRadius: '50%', background: 'radial-gradient(circle,rgba(91,124,250,0.26),transparent 70%)', filter: 'blur(8px)', animation: 'floatPhone 7s ease-in-out infinite', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: 150, height: 150, bottom: '4%', right: '4%', borderRadius: '50%', background: 'radial-gradient(circle,rgba(244,95,176,0.2),transparent 70%)', filter: 'blur(10px)', animation: 'floatPhone 8s ease-in-out infinite reverse', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: 'clamp(300px,48vw,460px)', height: 'clamp(300px,48vw,460px)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', borderRadius: '50%', background: 'radial-gradient(circle,rgba(91,124,250,0.24),rgba(155,107,250,0.12) 45%,transparent 72%)', filter: 'blur(18px)', pointerEvents: 'none', zIndex: 0 }} />
        <div style={{ position: 'absolute', width: 'clamp(280px,46vw,460px)', height: 'clamp(280px,46vw,460px)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', border: '1px dashed rgba(91,124,250,0.28)', borderRadius: '50%', animation: 'ringSpin 40s linear infinite', pointerEvents: 'none' }} />

        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 'clamp(200px,22vw,460px)', height: 'clamp(200px,22vw,460px)', zIndex: 1 }}>
          {HERO_BADGES.map((hb) => (
            <div key={hb.label} style={{ position: 'absolute', ...parseInlineStyle(hb.pos), zIndex: 4 }}>
              <div
                className="hero-badge"
                style={{
                  background: theme.dashBg, border: `1px solid ${theme.dashBorder}`, backdropFilter: 'blur(10px)',
                  color: theme.text, boxShadow: '0 10px 24px -12px rgba(91,124,250,0.4)', animation: hb.anim,
                }}
              >
                {hb.label}
              </div>
            </div>
          ))}

          <div ref={hexFrameRef} className="hex-frame" style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
            <div className="hex-float" style={{ position: 'absolute', inset: 0 }}>
              <div style={{ position: 'absolute', inset: -8, clipPath: hexClip, overflow: 'hidden' }}>
                <div style={{
                  position: 'absolute', top: '50%', left: '50%', width: '220%', height: '220%', margin: '-110% 0 0 -110%',
                  background: 'conic-gradient(from 0deg,#5b7cfa,#9b6bfa,#f45fb0,#22d3ee,#5b7cfa)', animation: 'ringSpin 6s linear infinite',
                }} />
              </div>
              <div style={{ position: 'absolute', inset: -2, clipPath: hexClip, background: theme.dashBg, backdropFilter: 'blur(4px)' }} />
              <div style={{ position: 'absolute', inset: 6, clipPath: hexClip, background: theme.dashBg, backdropFilter: 'blur(6px)', overflow: 'hidden', boxShadow: '0 1px 0 rgba(255,255,255,0.25) inset' }}>
                <img src="/assets/hero-photo.webp" alt="Muhammad Numan" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(125deg,rgba(255,255,255,0.18) 0%,transparent 35%,transparent 65%,rgba(255,255,255,0.08) 100%)', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg,rgba(91,124,250,0.16),transparent 45%)', mixBlendMode: 'overlay', pointerEvents: 'none' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function chipStyle(theme: Theme, color: string): React.CSSProperties {
  return {
    fontSize: 12.5, padding: '8px 14px', borderRadius: 999, border: `1px solid ${theme.cardBorder}`,
    background: theme.dashBg, backdropFilter: 'blur(8px)', color,
  };
}

// The original prototype stored badge position as a raw CSS string (e.g. "top:16%;right:calc(...);").
// Parse it into a React style object so each declaration lands on the right property.
function parseInlineStyle(css: string): React.CSSProperties {
  const style: Record<string, string> = {};
  css.split(';').forEach((decl) => {
    const idx = decl.indexOf(':');
    if (idx === -1) return;
    const prop = decl.slice(0, idx).trim();
    const value = decl.slice(idx + 1).trim();
    if (!prop || !value) return;
    const camel = prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    style[camel] = value;
  });
  return style as React.CSSProperties;
}
