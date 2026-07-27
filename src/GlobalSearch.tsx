import { useEffect, useMemo, useRef, useState } from 'react';
import type { Theme } from './data/theme';
import { SEARCH_ITEMS } from './data/search';

const normalize = (value: string) => value.toLocaleLowerCase().trim();

export default function GlobalSearch({ open, onClose, theme }: { open: boolean; onClose: () => void; theme: Theme }) {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
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

  useEffect(() => setActive(0), [query]);
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.setTimeout(() => inputRef.current?.focus(), 0);
    return () => { document.body.style.overflow = previousOverflow; };
  }, [open]);

  if (!open) return null;

  const select = (index: number) => {
    const result = results[index];
    if (!result) return;
    onClose();
    setQuery('');
    window.setTimeout(() => {
      document.getElementById(result.section)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState(null, '', `#${result.section}`);
    }, 0);
  };

  return (
    <div className="global-search" role="dialog" aria-modal="true" aria-label="Search portfolio">
      <button className="global-search-backdrop" onClick={onClose} aria-label="Close search" />
      <div className="global-search-panel" style={{ background: theme.navBg, borderColor: theme.cardBorder, color: theme.text }}>
        <div className="global-search-input-wrap" style={{ borderColor: theme.cardBorder }}>
          <span className="global-search-icon" aria-hidden="true">⌕</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Escape') onClose();
              if (event.key === 'ArrowDown') { event.preventDefault(); setActive((value) => Math.min(value + 1, results.length - 1)); }
              if (event.key === 'ArrowUp') { event.preventDefault(); setActive((value) => Math.max(value - 1, 0)); }
              if (event.key === 'Enter') { event.preventDefault(); select(active); }
            }}
            placeholder="Search projects, skills, experience, docs…"
            aria-label="Search all portfolio content"
            aria-controls="global-search-results"
          />
          <kbd>ESC</kbd>
        </div>
        <div className="global-search-meta" style={{ color: theme.muted }}>
          <span>{query ? `${results.length} result${results.length === 1 ? '' : 's'}` : 'Quick links'}</span>
          <span className="global-search-hint">↑↓ navigate · ↵ open</span>
        </div>
        <div id="global-search-results" className="global-search-results" role="listbox">
          {results.map((result, index) => (
            <button
              key={`${result.category}-${result.title}`}
              role="option"
              aria-selected={index === active}
              className={`global-search-result${index === active ? ' active' : ''}`}
              onMouseEnter={() => setActive(index)}
              onClick={() => select(index)}
              style={{ color: theme.text, borderColor: index === active ? '#5b7cfa' : 'transparent' }}
            >
              <span className="global-search-result-copy">
                <strong>{result.title}</strong>
                <small style={{ color: theme.muted }}>{result.description}</small>
              </span>
              <span className="global-search-category">{result.category}</span>
            </button>
          ))}
          {results.length === 0 && (
            <div className="global-search-empty">
              <span aria-hidden="true">⌕</span>
              <strong>No matches found</strong>
              <small style={{ color: theme.muted }}>Try a project, methodology, document, or tool name.</small>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
