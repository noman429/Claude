export type ThemeName = 'dark' | 'light';

export interface Theme {
  bg: string;
  bg2: string;
  card: string;
  cardBorder: string;
  text: string;
  muted: string;
  navBg: string;
  dashBg: string;
  dashBorder: string;
}

export const THEMES: Record<ThemeName, Theme> = {
  dark: {
    bg: '#0d0f1a', bg2: '#161a29', card: 'rgba(30,34,54,0.55)', cardBorder: 'rgba(110,120,160,0.3)',
    text: '#f5f6fa', muted: '#a9adc4', navBg: 'rgba(13,15,26,0.85)', dashBg: 'rgba(22,26,44,0.62)',
    dashBorder: 'rgba(140,150,220,0.28)',
  },
  light: {
    bg: '#f7f7fb', bg2: '#ececf4', card: 'rgba(255,255,255,0.75)', cardBorder: 'rgba(160,165,200,0.4)',
    text: '#23253a', muted: '#5b5f78', navBg: 'rgba(247,247,251,0.85)', dashBg: 'rgba(255,255,255,0.6)',
    dashBorder: 'rgba(120,130,220,0.28)',
  },
};
