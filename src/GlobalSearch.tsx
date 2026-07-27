import { Fragment, useEffect, useMemo, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from 'react';
import type { Theme } from './data/theme';
import {
  DEFAULT_SEARCH_ITEMS, rankSearchItems, SEARCH_CATEGORIES, type SearchCategory, type SearchItem,
} from './data/search';

export const COMPACT_SEARCH_RESULT_LIMIT = 10;

const CATEGORY_ICON_PATHS: Record<(typeof SEARCH_CATEGORIES)[SearchCategory]['icon'], string> = {
  document: 'M6 2h8l4 4v16H6z M14 2v5h5 M9 12h6 M9 16h6',
  cycle: 'M20 7h-5V2 M4 17h5v5 M18 17a8 8 0 0 1-14-5 M6 7a8 8 0 0 1 14 5',
  sprint: 'M4 6h13 M4 12h9 M4 18h13 M15 9l3 3-3 3',
  portfolio: 'M3 7h18v13H3z M8 7V4h8v3 M3 12h18',
  plan: 'M4 4h16v16H4z M8 2v4 M16 2v4 M8 10h3 M8 14h8 M8 17h5',
  analysis: 'M4 20V10 M10 20V4 M16 20v-7 M22 20H2',
  quality: 'M12 2l8 4v6c0 5-3.4 8.5-8 10-4.6-1.5-8-5-8-10V6z M8 12l3 3 5-6',
  tools: 'M14 7a4 4 0 0 0 5 5L11 20a2 2 0 0 1-3-3l8-8a4 4 0 0 0-5-5',
  person: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M4 22a8 8 0 0 1 16 0',
  briefcase: 'M3 7h18v13H3z M8 7V4h8v3 M3 12c5 2 13 2 18 0',
  contact: 'M3 5h18v14H3z M3 6l9 7 9-7',
};

function CategoryIcon({ category }: { category: SearchCategory }) {
  const config = SEARCH_CATEGORIES[category];
  return <svg className="global-search-category-icon" viewBox="0 0 24 24" aria-hidden="true"><path d={CATEGORY_ICON_PATHS[config.icon]} /></svg>;
}

function HighlightedText({ text, query }: { text: string; query: string }) {
  const terms = [...new Set(query.trim().split(/\s+/).filter(Boolean))];
  if (!terms.length) return <>{text}</>;
  const escaped = terms.map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const matcher = new RegExp(`(${escaped.join('|')})`, 'gi');
  const exactMatcher = new RegExp(`^(?:${escaped.join('|')})$`, 'i');
  return <>{text.split(matcher).map((part, index) => exactMatcher.test(part)
    ? <mark key={`${part}-${index}`}>{part}</mark>
    : <Fragment key={`${part}-${index}`}>{part}</Fragment>)}</>;
}

function SearchCategoryBadge({ category }: { category: SearchCategory }) {
  const config = SEARCH_CATEGORIES[category];
  return <span className={`global-search-category ${config.badgeClass}`}>{config.badgeLabel}</span>;
}

function SearchResultItem({ item, index, active, query, theme, onActivate, onSelect }: {
  item: SearchItem; index: number; active: boolean; query: string; theme: Theme;
  onActivate: () => void; onSelect: () => void;
}) {
  return (
    <button
      id={`global-search-option-${index}`}
      role="option"
      aria-selected={active}
      aria-label={`${item.title}, ${SEARCH_CATEGORIES[item.category].label}. ${item.description}`}
      className={`global-search-result${active ? ' active' : ''}`}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onSelect}
      style={{ color: theme.text, borderColor: active ? '#7b61ff' : 'transparent' }}
    >
      <span className="global-search-result-icon"><CategoryIcon category={item.category} /></span>
      <span className="global-search-result-copy">
        <strong><HighlightedText text={item.title} query={query} /></strong>
        <small style={{ color: theme.muted }}><HighlightedText text={item.description} query={query} /></small>
      </span>
      <SearchCategoryBadge category={item.category} />
    </button>
  );
}

function ViewAllResultsAction({ total, visible, onClick }: { total: number; visible: number; onClick: () => void }) {
  return <button className="global-search-view-all" onClick={onClick}>View all results <span>({total - visible} more)</span></button>;
}

export default function GlobalSearch({ open, onClose, theme }: { open: boolean; onClose: () => void; theme: Theme }) {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  const allResults = useMemo(() => query.trim() ? rankSearchItems(query).map(({ item }) => item) : DEFAULT_SEARCH_ITEMS, [query]);
  const visibleResults = useMemo(() => query.trim() && !expanded ? allResults.slice(0, COMPACT_SEARCH_RESULT_LIMIT) : allResults, [allResults, expanded, query]);

  const close = () => {
    onClose();
    setQuery('');
    setExpanded(false);
    window.setTimeout(() => returnFocusRef.current?.focus(), 0);
  };

  useEffect(() => { setActive(0); setExpanded(false); }, [query]);
  useEffect(() => setActive((value) => Math.max(0, Math.min(value, visibleResults.length - 1))), [visibleResults.length]);
  useEffect(() => {
    if (!open) return;
    returnFocusRef.current = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.setTimeout(() => inputRef.current?.focus(), 0);
    return () => { document.body.style.overflow = previousOverflow; };
  }, [open]);
  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      event.preventDefault();
      close();
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [open]);
  useEffect(() => {
    resultsRef.current?.querySelector(`#global-search-option-${active}`)?.scrollIntoView({ block: 'nearest' });
  }, [active]);

  if (!open) return null;

  const select = (index: number) => {
    const result = visibleResults[index];
    if (!result) return;
    close();
    window.setTimeout(() => {
      document.getElementById(result.route.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState(null, '', result.route);
    }, 0);
  };

  const onKeyDown = (event: ReactKeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'ArrowDown') { event.preventDefault(); setActive((value) => Math.min(value + 1, visibleResults.length - 1)); }
    if (event.key === 'ArrowUp') { event.preventDefault(); setActive((value) => Math.max(value - 1, 0)); }
    if (event.key === 'Enter') { event.preventDefault(); select(active); }
  };

  return (
    <div className="global-search" role="dialog" aria-modal="true" aria-label="Search portfolio">
      <button className="global-search-backdrop" onClick={close} aria-label="Close search" />
      <div className="global-search-panel" style={{ background: theme.navBg, borderColor: theme.cardBorder, color: theme.text }}>
        <div className="global-search-input-wrap" style={{ borderColor: theme.cardBorder }}>
          <span className="global-search-icon" aria-hidden="true">⌕</span>
          <input
            ref={inputRef} value={query} onChange={(event) => setQuery(event.target.value)} onKeyDown={onKeyDown}
            placeholder="Search projects, Agile, documents, tools…" aria-label="Search all portfolio content"
            aria-controls="global-search-results" aria-activedescendant={visibleResults.length ? `global-search-option-${active}` : undefined}
          />
          <kbd>ESC</kbd>
        </div>
        <div className="global-search-meta" style={{ color: theme.muted }}>
          <span>{query.trim() ? `${allResults.length} result${allResults.length === 1 ? '' : 's'}` : 'Explore Portfolio'}</span>
          <span className="global-search-hint">↑↓ navigate · ↵ open</span>
        </div>
        <div id="global-search-results" ref={resultsRef} className="global-search-results" role="listbox" aria-label={query.trim() ? 'Search results' : 'Portfolio suggestions'}>
          {visibleResults.map((result, index) => <SearchResultItem key={result.id} item={result} index={index} active={index === active} query={query} theme={theme} onActivate={() => setActive(index)} onSelect={() => select(index)} />)}
          {allResults.length > visibleResults.length && <ViewAllResultsAction total={allResults.length} visible={visibleResults.length} onClick={() => setExpanded(true)} />}
          {visibleResults.length === 0 && <div className="global-search-empty"><span aria-hidden="true">⌕</span><strong>No matches found</strong><small style={{ color: theme.muted }}>Try a project, Agile practice, document, or tool name.</small></div>}
        </div>
      </div>
    </div>
  );
}
