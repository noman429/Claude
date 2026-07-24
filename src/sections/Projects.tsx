import { useEffect, useRef, useState } from 'react';
import type { Theme } from '../data/theme';
import { PROJECT_DATA, type Project } from '../data/projects';

const AUTOPLAY_MS = 3500;

export default function Projects({ theme }: { theme: Theme }) {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState<'recent' | 'az'>('recent');
  const [category, setCategory] = useState('All');
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [carouselProgress, setCarouselProgress] = useState(0);

  const trackRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | null>(null);
  const hoverRef = useRef(false);
  const touchResumeTimer = useRef<number | null>(null);
  const projObserverRef = useRef<IntersectionObserver | null>(null);

  const q = search.toLowerCase();
  let filtered: Project[] = PROJECT_DATA.filter(
    (p) => !q || p.name.toLowerCase().includes(q) || p.tags.join(' ').toLowerCase().includes(q) || p.industry.toLowerCase().includes(q),
  );
  if (category !== 'All') filtered = filtered.filter((p) => p.tags.includes(category));
  if (sort === 'az') filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));

  const categories = ['All', ...new Set(PROJECT_DATA.map((p) => p.industry.split(/[/&]| \(/)[0].trim()))];

  const cardStep = () => {
    const track = trackRef.current;
    if (!track || !track.firstElementChild) return 320;
    const style = getComputedStyle(track);
    const gap = parseFloat(style.columnGap || style.gap || '20') || 20;
    return (track.firstElementChild as HTMLElement).getBoundingClientRect().width + gap;
  };

  const stepCarousel = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
    if (dir > 0 && atEnd) { track.scrollTo({ left: 0, behavior: 'smooth' }); return; }
    if (dir < 0 && track.scrollLeft <= 4) { track.scrollTo({ left: track.scrollWidth, behavior: 'smooth' }); return; }
    track.scrollBy({ left: dir * cardStep(), behavior: 'smooth' });
  };

  const stopAutoplay = () => {
    if (intervalRef.current) { window.clearInterval(intervalRef.current); intervalRef.current = null; }
  };
  const startAutoplay = () => {
    stopAutoplay();
    if (hoverRef.current || expandedProject) return;
    intervalRef.current = window.setInterval(() => stepCarousel(1), AUTOPLAY_MS);
  };

  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expandedProject]);

  useEffect(() => {
    if (projObserverRef.current) { projObserverRef.current.disconnect(); projObserverRef.current = null; }
    if (!expandedProject) return;
    const el = document.querySelector(`[data-project="${CSS.escape(expandedProject)}"]`);
    if (!el) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0] && entries[0].intersectionRatio < 0.15) setExpandedProject(null);
    }, { threshold: [0, 0.15] });
    observer.observe(el);
    projObserverRef.current = observer;
    return () => observer.disconnect();
  }, [expandedProject]);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!expandedProject) return;
      const target = e.target as HTMLElement;
      const card = target.closest && (target.closest('[data-project]') as HTMLElement | null);
      if (!card || card.getAttribute('data-project') !== expandedProject) setExpandedProject(null);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && expandedProject) setExpandedProject(null);
    };
    document.addEventListener('click', onDocClick, true);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('click', onDocClick, true);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [expandedProject]);

  const onCarouselEnter = () => { hoverRef.current = true; stopAutoplay(); };
  const onCarouselLeave = () => { hoverRef.current = false; startAutoplay(); };
  const onTouchStart = () => { stopAutoplay(); if (touchResumeTimer.current) window.clearTimeout(touchResumeTimer.current); };
  const onTouchEnd = () => {
    touchResumeTimer.current = window.setTimeout(() => { hoverRef.current = false; startAutoplay(); }, 3000);
  };
  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    setCarouselProgress(max > 0 ? track.scrollLeft / max : 0);
  };

  const dotCount = Math.max(1, Math.ceil(filtered.length / 3));
  const activeDot = Math.round(carouselProgress * (dotCount - 1));

  return (
    <section id="projects" style={{ padding: '96px 40px', maxWidth: 1200, margin: '0 auto' }}>
      <div className="reveal sec-eyebrow" style={{ marginBottom: 14, color: '#ffb020' }}>
        <span style={{ fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700 }}>Project Showcase</span>
      </div>
      <h2 className="reveal sec-heading" style={{ marginBottom: 8, color: theme.text }}>Project showcase.</h2>
      <div className="sec-underline head-orange-pink" />
      <p style={{ fontSize: 14.5, color: theme.muted, margin: '0 0 10px', maxWidth: 640 }}>
        Twenty delivered products across real estate, fleet, media, healthcare, manufacturing, industrial, procurement, engineering, social platforms, marketplaces, nonprofit, ERP, and sports management.
      </p>
      <p style={{ fontSize: 12.5, color: theme.muted, margin: '0 0 24px', maxWidth: 640, fontStyle: 'italic' }}>
        Client names and branding have been anonymized to respect confidentiality while showcasing the scope of work and project experience.
      </p>

      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 22 }}>
        <input
          value={search}
          onInput={(e) => setSearch((e.target as HTMLInputElement).value)}
          placeholder="Search projects..."
          style={{ flex: 1, minWidth: 220, padding: '11px 16px', borderRadius: 10, border: `1px solid ${theme.cardBorder}`, background: theme.card, color: theme.text, fontSize: 14, outline: 'none' }}
        />
        <select
          onChange={(e) => setSort(e.target.value as 'recent' | 'az')}
          style={{ padding: '11px 16px', borderRadius: 10, border: `1px solid ${theme.cardBorder}`, background: theme.card, color: theme.text, fontSize: 14 }}
        >
          <option value="recent">Sort: Most recent</option>
          <option value="az">Sort: A–Z</option>
        </select>
        <div className="category-pills">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              style={{
                padding: '10px 16px', borderRadius: 999, border: `1px solid ${theme.cardBorder}`,
                background: category === c ? 'linear-gradient(90deg,#5b7cfa,#9b6bfa)' : theme.card,
                color: theme.text, fontSize: 13, cursor: 'pointer',
              }}
            >
              {c}
            </button>
          ))}
        </div>
        <select
          className="category-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          aria-label="Filter projects by category"
          style={{ padding: '11px 16px', borderRadius: 10, border: `1px solid ${theme.cardBorder}`, background: theme.card, color: theme.text, fontSize: 14 }}
        >
          {categories.map((c) => (
            <option key={c} value={c}>{c === 'All' ? 'Category: All' : c}</option>
          ))}
        </select>
      </div>

      <div id="proj-carousel-wrap" ref={wrapRef} style={{ position: 'relative', marginTop: 28, padding: '6px 44px 0', overflow: 'visible' }}>
        <button onClick={() => stepCarousel(-1)} className="carousel-arrow carousel-arrow-left" aria-label="Previous projects" style={{ background: theme.dashBg, border: `1px solid ${theme.cardBorder}`, color: theme.text }}>‹</button>
        <button onClick={() => stepCarousel(1)} className="carousel-arrow carousel-arrow-right" aria-label="Next projects" style={{ background: theme.dashBg, border: `1px solid ${theme.cardBorder}`, color: theme.text }}>›</button>

        <div
          id="proj-track"
          ref={trackRef}
          className="proj-track"
          onMouseEnter={onCarouselEnter}
          onMouseLeave={onCarouselLeave}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          onScroll={onScroll}
        >
          {filtered.map((p) => {
            const open = expandedProject === p.name;
            return (
              <div key={p.name} className="card proj-card" data-project={p.name} style={{ background: theme.card, border: `1px solid ${theme.cardBorder}`, borderRadius: 18, overflow: 'hidden', display: 'flex', flexDirection: 'column', height: 'auto' }}>
                <div style={{ padding: 26, display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, flexWrap: 'wrap' }}>
                    <h3 style={{ fontWeight: 700, fontSize: 21, margin: 0 }}>{p.name}</h3>
                    <span style={{ fontSize: 12, fontWeight: 600, padding: '5px 12px', borderRadius: 999, background: `${p.statusColor}22`, color: p.statusColor }}>{p.status}</span>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, margin: '12px 0 14px' }}>
                    <span style={{ fontSize: 11.5, fontWeight: 700, padding: '5px 12px', borderRadius: 999, background: `${p.accent}22`, color: p.accent }}>{p.industry}</span>
                    {p.roles.map((r) => (
                      <span key={r} className="chip" style={{ fontSize: 11.5, padding: '5px 12px', borderRadius: 999, background: theme.bg2, border: `1px solid ${theme.cardBorder}`, color: theme.text }}>{r}</span>
                    ))}
                    <span className="chip" style={{ fontSize: 11.5, padding: '5px 12px', borderRadius: 999, background: theme.bg2, border: `1px solid ${theme.cardBorder}`, color: theme.muted }}>{p.methodology}</span>
                  </div>
                  <p className="proj-summary" style={{ fontSize: 14, lineHeight: 1.55, color: theme.muted, margin: '0 0 16px' }}>{p.summary}</p>
                  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginTop: 'auto' }}>
                    <button
                      onClick={() => setExpandedProject(open ? null : p.name)}
                      className="btn"
                      style={{ fontSize: 14, fontWeight: 700, padding: '11px 22px', borderRadius: 9, border: 'none', cursor: 'pointer', background: 'linear-gradient(90deg,#5b7cfa,#9b6bfa)', color: 'white' }}
                    >
                      {open ? 'Hide details' : 'View Details'}
                    </button>
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateRows: open ? '1fr' : '0fr', transition: 'grid-template-rows .3s ease, opacity .3s ease', opacity: open ? 1 : 0 }}>
                  <div style={{ overflow: 'hidden' }}>
                    <div style={{ padding: '0 26px 30px', borderTop: `1px solid ${theme.cardBorder}`, marginTop: 6, paddingTop: 20 }}>
                      <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: p.accent, marginBottom: 12 }}>Key Features &amp; Modules</div>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))', gap: 8 }}>
                        {p.modules.map((mod) => (
                          <div key={mod} style={{ fontSize: 13, color: theme.text, background: theme.bg2, borderRadius: 8, padding: '9px 12px' }}>{mod}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="carousel-dots" style={{ display: 'flex', justifyContent: 'center', gap: 7, marginTop: 20 }}>
          {Array.from({ length: dotCount }, (_, i) => (
            <span
              key={i}
              style={{ width: i === activeDot ? 22 : 6, height: 6, borderRadius: 99, background: i === activeDot ? '#5b7cfa' : theme.cardBorder, transition: 'all .25s ease' }}
            />
          ))}
        </div>
      </div>
      {filtered.length === 0 && (
        <div style={{ padding: 40, textAlign: 'center', color: theme.muted, fontSize: 14 }}>No projects match "{search}".</div>
      )}
    </section>
  );
}
