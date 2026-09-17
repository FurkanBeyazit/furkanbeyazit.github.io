/**
 * Theme axes for the home page. Each axis is independent; presets are named combos.
 * Persisted to localStorage and readable from the URL (?bg=..&card=..&font=..&fx=..&preset=..).
 */

export const BACKGROUNDS = ['faulty-terminal', 'aurora', 'dark-veil', 'iridescence', 'threads', 'light-rays', 'plasma', 'letter-glitch'] as const;
export type BackgroundId = (typeof BACKGROUNDS)[number];

export const CARDS = ['terminal', 'spotlight', 'glass', 'star-border', 'glare', 'tilt', 'outline', 'neon', 'flat'] as const;
export type CardId = (typeof CARDS)[number];

export const FONTS = ['jetbrains', 'fira', 'plex', 'space-mono', 'source-code', 'inter', 'grotesk', 'dm-sans'] as const;
export type FontId = (typeof FONTS)[number];

export const FX = ['none', 'shiny', 'gradient', 'glitch', 'decrypt', 'typewriter', 'blur-in'] as const;
export type FxId = (typeof FX)[number];

export type Settings = {bg: BackgroundId; card: CardId; font: FontId; fx: FxId};

export const DEFAULT: Settings = {bg: 'faulty-terminal', card: 'spotlight', font: 'jetbrains', fx: 'typewriter'};

export const PRESETS: {id: string; label: string; s: Settings}[] = [
  {id: 'p01', label: '01 Faulty Terminal', s: {bg: 'faulty-terminal', card: 'spotlight', font: 'jetbrains', fx: 'typewriter'}},
  {id: 'p02', label: '02 Decrypted Terminal', s: {bg: 'faulty-terminal', card: 'spotlight', font: 'fira', fx: 'decrypt'}},
  {id: 'p03', label: '03 Letter Glitch', s: {bg: 'letter-glitch', card: 'spotlight', font: 'jetbrains', fx: 'typewriter'}},
  {id: 'p04', label: '04 Aurora', s: {bg: 'aurora', card: 'spotlight', font: 'jetbrains', fx: 'typewriter'}},
  {id: 'p05', label: '05 Dark Veil', s: {bg: 'dark-veil', card: 'spotlight', font: 'plex', fx: 'typewriter'}},
  {id: 'p06', label: '06 Iridescent', s: {bg: 'iridescence', card: 'glass', font: 'jetbrains', fx: 'typewriter'}},
  {id: 'p07', label: '07 Threads', s: {bg: 'threads', card: 'spotlight', font: 'jetbrains', fx: 'decrypt'}},
  {id: 'p08', label: '08 Light Rays', s: {bg: 'light-rays', card: 'spotlight', font: 'jetbrains', fx: 'typewriter'}},
  {id: 'p09', label: '09 Plasma', s: {bg: 'plasma', card: 'glass', font: 'fira', fx: 'typewriter'}},
];

const KEY = 'fb-theme';

function pick<T extends readonly string[]>(list: T, v: string | null | undefined): T[number] | undefined {
  return v && (list as readonly string[]).includes(v) ? (v as T[number]) : undefined;
}

export function readSettings(): Settings {
  if (typeof window === 'undefined') return DEFAULT;
  let s: Settings = {...DEFAULT};
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      // validate each stored axis so ids removed later fall back to the default
      const st = JSON.parse(raw) as Partial<Record<keyof Settings, string>>;
      s = {
        bg: pick(BACKGROUNDS, st.bg) ?? s.bg,
        card: pick(CARDS, st.card) ?? s.card,
        font: pick(FONTS, st.font) ?? s.font,
        fx: pick(FX, st.fx) ?? s.fx,
      };
    }
  } catch {}
  const q = new URLSearchParams(window.location.search);
  const preset = PRESETS.find((p) => p.id === q.get('preset'));
  if (preset) s = {...preset.s};
  s = {
    bg: pick(BACKGROUNDS, q.get('bg')) ?? s.bg,
    card: pick(CARDS, q.get('card')) ?? s.card,
    font: pick(FONTS, q.get('font')) ?? s.font,
    fx: pick(FX, q.get('fx')) ?? s.fx,
  };
  return s;
}

export function saveSettings(s: Settings) {
  try {
    localStorage.setItem(KEY, JSON.stringify(s));
  } catch {}
}
