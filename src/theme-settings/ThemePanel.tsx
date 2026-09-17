import {useState} from 'react';
import clsx from 'clsx';
import {BACKGROUNDS, CARDS, FONTS, FX, PRESETS, type Settings} from './settings';
import {useThemeSettings} from './ThemeSettings';
import styles from './ThemePanel.module.css';

/** Floating picker (bottom-right). TODO: remove once a look is chosen. */
export default function ThemePanel() {
  const {settings, set} = useThemeSettings();
  const [open, setOpen] = useState(false);

  const activePreset = PRESETS.find(
    (p) => p.s.bg === settings.bg && p.s.card === settings.card && p.s.font === settings.font && p.s.fx === settings.fx,
  );

  const Select = ({k, list}: {k: keyof Settings; list: readonly string[]}) => (
    <label className={styles.row}>
      <span className={styles.key}>{k}</span>
      <select value={settings[k]} onChange={(e) => set({[k]: e.target.value} as Partial<Settings>)}>
        {list.map((v) => (
          <option key={v} value={v}>
            {v}
          </option>
        ))}
      </select>
    </label>
  );

  const share = `?bg=${settings.bg}&card=${settings.card}&font=${settings.font}&fx=${settings.fx}`;

  return (
    <div className={styles.wrap}>
      {open && (
        <div className={styles.panel}>
          <div className={styles.presets}>
            {PRESETS.map((p) => (
              <button
                key={p.id}
                type="button"
                className={clsx(styles.preset, activePreset?.id === p.id && styles.presetActive)}
                onClick={() => set(p.s)}>
                {p.label}
              </button>
            ))}
          </div>
          <Select k="bg" list={BACKGROUNDS} />
          <Select k="card" list={CARDS} />
          <Select k="font" list={FONTS} />
          <Select k="fx" list={FX} />
          <code className={styles.share}>{share}</code>
        </div>
      )}
      <button type="button" className={styles.toggle} onClick={() => setOpen((o) => !o)}>
        <span className={styles.key}>theme:</span> {activePreset ? activePreset.label : settings.bg}
      </button>
    </div>
  );
}
