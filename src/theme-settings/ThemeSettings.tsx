import {createContext, useContext, useEffect, useMemo, useState, type ReactNode} from 'react';
import {DEFAULT, readSettings, saveSettings, type Settings} from './settings';

type Ctx = {settings: Settings; set: (patch: Partial<Settings>) => void};

const ThemeCtx = createContext<Ctx>({settings: DEFAULT, set: () => {}});

export function ThemeSettingsProvider({children}: {children: ReactNode}) {
  const [settings, setSettings] = useState<Settings>(DEFAULT);

  useEffect(() => setSettings(readSettings()), []);

  // expose axes as data attributes so CSS can switch card / font styles
  useEffect(() => {
    const el = document.documentElement;
    el.dataset.card = settings.card;
    el.dataset.font = settings.font;
    return () => {
      delete el.dataset.card;
      delete el.dataset.font;
    };
  }, [settings.card, settings.font]);

  const value = useMemo<Ctx>(
    () => ({
      settings,
      set: (patch) =>
        setSettings((prev) => {
          const next = {...prev, ...patch};
          saveSettings(next);
          return next;
        }),
    }),
    [settings],
  );

  return <ThemeCtx.Provider value={value}>{children}</ThemeCtx.Provider>;
}

export const useThemeSettings = () => useContext(ThemeCtx);
