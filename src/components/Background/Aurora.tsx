import {useEffect, useRef} from 'react';
import {aurora} from './variants';

export default function Aurora({dark}: {dark: boolean}) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return aurora({canvas, ctx: canvas.getContext('2d')!, dark, reduced});
  }, [dark]);
  return <canvas ref={ref} style={{width: '100%', height: '100%', display: 'block'}} aria-hidden />;
}
