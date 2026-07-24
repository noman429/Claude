import type { Theme } from '../data/theme';
import { TOOL_GROUPS } from '../data/tools';
import { BRAND_ICONS } from '../data/brandIcons';
import { BrandLogo, ToolIcon } from '../icons';

export default function Tools({ theme }: { theme: Theme }) {
  return (
    <section id="tools" style={{ padding: '96px 40px', maxWidth: 1200, margin: '0 auto' }}>
      <div className="reveal sec-eyebrow" style={{ marginBottom: 14, color: '#ffb020' }}>
        <span style={{ fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700 }}>Skills &amp; Tools</span>
      </div>
      <h2 className="reveal sec-heading" style={{ color: theme.text }}>Daily toolkit.</h2>
      <div className="sec-underline head-orange-pink" style={{ marginBottom: 36 }} />
      {TOOL_GROUPS.map((tg) => (
        <div key={tg.category} className="tool-cat-card card" style={{ background: theme.dashBg, border: `1px solid ${theme.cardBorder}`, borderRadius: 20, padding: '30px 28px', backdropFilter: 'blur(14px)', marginBottom: 20 }}>
          <div style={{ fontSize: 19, fontWeight: 800, color: theme.text }}>{tg.category}</div>
          <div style={{ fontSize: 13.5, color: theme.muted, marginTop: 6, lineHeight: 1.55, maxWidth: 640 }}>{tg.desc}</div>
          <div style={{ height: 1, background: theme.cardBorder, margin: '20px 0 22px' }} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 24 }}>
            {tg.items.map((t) => (
              <div key={t.name} className="tool-card" style={{ display: 'flex', alignItems: 'center', gap: 14, cursor: 'pointer' }}>
                <div className="tool-icon-wrap" style={{ width: 44, height: 44, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {t.brand && BRAND_ICONS[t.brand] ? <BrandLogo brand={t.brand} /> : <ToolIcon icon={t.icon} color={t.color} />}
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontWeight: 700, fontSize: 14, color: theme.text }}>{t.name}</div>
                  <div style={{ fontSize: 11.5, color: theme.muted, marginTop: 2, lineHeight: 1.35 }}>{t.tagline}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
