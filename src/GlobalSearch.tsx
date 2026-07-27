import { useEffect, useMemo, useRef, useState } from 'react';
import type { Theme } from './data/theme';
import { SEARCH_ITEMS } from './data/search';

const normalize = (value: string) => value.toLocaleLowerCase().trim();

export default function GlobalSearch({ theme }: { theme: Theme }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => {
    const terms = normalize(query).split(/\s+/).filter(Boolean);
    if (!terms.length) return SEARCH_ITEMS.slice(0, 8);
    return SEARCH_ITEMS
      .map((entry) => {
        const title = normalize(entry.title);
        const haystack = normalize(`${entry.title} ${entry.description} ${entry.category} ${entry.keywords}`);
        if (!terms.every((term) => haystack.includes(term))) return null;
        const score = terms.reduce((total, term) => total + (title.startsWith(term) ? 4 : title.includes(term) ? 2 : 1), 0);
        return { entry, score };
      })
      .filter((match): match is { entry: (typeof SEARCH_ITEMS)[number]; score: number } => Boolean(match))
      .sort((a, b) => b.score - a.score || a.entry.title.localeCompare(b.entry.title))
      .slice(0, 12)
      .map((match) => match.entry);
  }, [query]);

  const close = () => { setOpen(false); setQuery(''); };

  useEffect(() => setActive(0), [query]);
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault(); setOpen(true);
      } else if (event.key === 'Escape' && open) close();
    };
    const onPointerDown = (event: PointerEvent) => {
      if (open && !rootRef.current?.contains(event.target as Node)) close();
    };
    window.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    window.setTimeout(() => inputRef.current?.focus(), 30);
    if (!window.matchMedia('(max-width: 850px)').matches) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previousOverflow; };
  }, [open]);

  const select = (index: number) => {
    const result = results[index];
    if (!result) return;
    close();
    window.setTimeout(() => {
      document.getElementById(result.section)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState(null, '', `#${result.section}`);
    }, 0);
  };

  return (
    <div ref={rootRef} className={`header-search${open ? ' open' : ''}`}>
      {open && <button className="header-search-backdrop" onClick={close} aria-label="Close search" />}
      {!open ? (
        <button className="header-search-trigger" onClick={() => setOpen(true)} aria-label="Search portfolio" aria-haspopup="dialog" title="Search (Ctrl+K)" style={{ background: theme.card, borderColor: theme.cardBorder, color: theme.text }}>
          <span aria-hidden="true">⌕</span>
        </button>
      ) : (
        <div className="header-search-popover" role="dialog" aria-label="Search portfolio">
          <div className="header-search-field" style={{ background: theme.navBg, borderColor: theme.cardBorder, color: theme.text }}>
            <span className="header-search-icon" aria-hidden="true">⌕</span>
            <input
              ref={inputRef}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'ArrowDown') { event.preventDefault(); setActive((value) => Math.min(value + 1, results.length - 1)); }
                if (event.key === 'ArrowUp') { event.preventDefault(); setActive((value) => Math.max(value - 1, 0)); }
                if (event.key === 'Enter') { event.preventDefault(); select(active); }
              }}
              placeholder="Search portfolio…"
              aria-label="Search all portfolio content"
              aria-controls="global-search-results"
              aria-activedescendant={results[active] ? `search-result-${active}` : undefined}
            />
            <kbd>⌘K</kbd>
            <button className="header-search-close" onClick={close} aria-label="Close search">×</button>
          </div>
          <div id="global-search-results" className="header-search-results" role="listbox" style={{ background: theme.navBg, borderColor: theme.cardBorder, color: theme.text }}>
            <div className="header-search-meta" style={{ color: theme.muted }}>{query ? `${results.length} result${results.length === 1 ? '' : 's'}` : 'Quick links'} <span>↑↓ navigate · ↵ open</span></div>
            {results.map((result, index) => (
              <button id={`search-result-${index}`} key={`${result.category}-${result.title}`} role="option" aria-selected={index === active} className={`global-search-result${index === active ? ' active' : ''}`} onMouseEnter={() => setActive(index)} onClick={() => select(index)} style={{ color: theme.text, borderColor: index === active ? '#5b7cfa' : 'transparent' }}>
                <span className="global-search-result-copy"><strong>{result.title}</strong><small style={{ color: theme.muted }}>{result.description}</small></span>
                <span className="global-search-category">{result.category}</span>
              </button>
            ))}
            {!results.length && <div className="global-search-empty"><span aria-hidden="true">⌕</span><strong>No matches found</strong><small style={{ color: theme.muted }}>Try a project, methodology, document, or tool name.</small></div>}
          </div>
        </div>
      )}
    </div>
  );
}
