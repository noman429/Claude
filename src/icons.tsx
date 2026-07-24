import { ICON_PATHS } from './data/tools';
import { BRAND_ICONS } from './data/brandIcons';

export function ToolIcon({ icon, color }: { icon: keyof typeof ICON_PATHS; color: string }) {
  return (
    <svg viewBox="0 0 24 24" width={40} height={40} fill="none" stroke={color} strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <path d={ICON_PATHS[icon]} />
    </svg>
  );
}

export function BrandLogo({ brand }: { brand: keyof typeof BRAND_ICONS }) {
  const icon = BRAND_ICONS[brand];
  return (
    <svg viewBox="0 0 24 24" width={40} height={40} fill={icon.hex} role="img" aria-label={icon.title}>
      <path d={icon.path} />
    </svg>
  );
}
