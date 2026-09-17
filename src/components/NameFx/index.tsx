import {useEffect, useState} from 'react';
import clsx from 'clsx';
import type {FxId} from '@site/src/theme-settings/settings';
import styles from './styles.module.css';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*<>/';

/** DecryptedText: scramble → settle left to right. */
function useDecrypt(text: string, on: boolean) {
  const [out, setOut] = useState(text);
  useEffect(() => {
    if (!on) return setOut(text);
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setOut(
        text
          .split('')
          .map((c, idx) => (c === ' ' ? ' ' : idx < i ? c : CHARS[(Math.random() * CHARS.length) | 0]))
          .join(''),
      );
      if (i >= text.length) clearInterval(id);
    }, 45);
    return () => clearInterval(id);
  }, [text, on]);
  return out;
}

/** Typewriter: reveal one char at a time, blinking caret. */
function useTypewriter(text: string, on: boolean) {
  const [n, setN] = useState(on ? 0 : text.length);
  useEffect(() => {
    if (!on) return setN(text.length);
    setN(0);
    const id = setInterval(() => setN((v) => (v >= text.length ? (clearInterval(id), v) : v + 1)), 70);
    return () => clearInterval(id);
  }, [text, on]);
  return text.slice(0, n);
}

export default function NameFx({text, fx, className}: {text: string; fx: FxId; className?: string}) {
  const decrypted = useDecrypt(text, fx === 'decrypt');
  const typed = useTypewriter(text, fx === 'typewriter');

  if (fx === 'decrypt') return <span className={clsx(className, styles.mono)}>{decrypted}</span>;
  if (fx === 'typewriter')
    return (
      <span className={clsx(className, styles.mono, styles.caret)}>{typed}</span>
    );
  if (fx === 'glitch')
    return (
      <span className={clsx(className, styles.glitch)} data-text={text}>
        {text}
      </span>
    );
  if (fx === 'blur-in')
    return (
      <span className={className}>
        {text.split(' ').map((w, i) => (
          <span key={i} className={styles.blurWord} style={{animationDelay: `${i * 120}ms`}}>
            {w}{' '}
          </span>
        ))}
      </span>
    );
  return (
    <span className={clsx(className, fx === 'shiny' && styles.shiny, fx === 'gradient' && styles.gradient)}>{text}</span>
  );
}
