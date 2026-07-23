import { ICON_PATHS } from './data/tools';

export function ToolIcon({ icon, color }: { icon: keyof typeof ICON_PATHS; color: string }) {
  return (
    <svg viewBox="0 0 24 24" width={40} height={40} fill="none" stroke={color} strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <path d={ICON_PATHS[icon]} />
    </svg>
  );
}
