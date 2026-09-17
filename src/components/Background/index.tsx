import {memo, useMemo} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import {useColorMode} from '@docusaurus/theme-common';
import {useThemeSettings} from '@site/src/theme-settings/ThemeSettings';
import type {BackgroundId} from '@site/src/theme-settings/settings';
import {BG} from './registry';
import styles from './styles.module.css';

/**
 * The WebGL layer. Memoised on (bg, dark) only: a new props object on every
 * page re-render made the ReactBits components rebuild their renderer
 * (grey / white flash while scrolling between sections).
 */
const Layer = memo(function Layer({bg, dark}: {bg: BackgroundId; dark: boolean}) {
  const entry = BG[bg];
  const props = useMemo(() => entry.props(dark), [entry, dark]);
  return (
    <div className={styles.layer} aria-hidden>
      <div className={styles.fill} style={{opacity: entry.dim}}>
        <BrowserOnly>
          {() => {
            const Comp = entry.load();
            return <Comp key={`${bg}-${dark}`} {...props} />;
          }}
        </BrowserOnly>
      </div>
      <div className={styles.veil} style={{opacity: entry.veil}} />
    </div>
  );
});

/** Full-viewport background driven by the theme settings. */
export default function Background() {
  const {colorMode} = useColorMode();
  const {settings} = useThemeSettings();
  return <Layer bg={settings.bg} dark={colorMode === 'dark'} />;
}
