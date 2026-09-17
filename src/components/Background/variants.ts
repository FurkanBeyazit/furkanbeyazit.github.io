/**
 * Vanilla-canvas aurora background (ReactBits-style, no WebGL).
 * Returns a cleanup function. `dark` toggles the palette.
 */

export type Ctx = {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  dark: boolean;
  reduced: boolean;
};

const ACCENT = [124, 58, 237]; // violet
const ACCENT2 = [6, 182, 212]; // cyan

function rgba([r, g, b]: number[], a: number) {
  return `rgba(${r},${g},${b},${a})`;
}

/** Handles DPR + resize; returns {w,h} getter and cleanup. */
function setupCanvas(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d')!;
  let w = 0;
  let h = 0;
  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };
  resize();
  window.addEventListener('resize', resize);
  return {ctx, size: () => ({w, h}), cleanup: () => window.removeEventListener('resize', resize)};
}

function loop(fn: (t: number) => void, reduced: boolean) {
  let raf = 0;
  let alive = true;
  const tick = (t: number) => {
    if (!alive) return;
    fn(t);
    if (!reduced) raf = requestAnimationFrame(tick);
  };
  raf = requestAnimationFrame(tick);
  return () => {
    alive = false;
    cancelAnimationFrame(raf);
  };
}

/* ---------------- aurora ---------------- */
export function aurora({canvas, dark, reduced}: Ctx) {
  const {ctx, size, cleanup} = setupCanvas(canvas);
  const blobs = [
    {c: ACCENT, x: 0.2, y: 0.15, r: 0.55, sx: 0.00021, sy: 0.00017, p: 0},
    {c: ACCENT2, x: 0.8, y: 0.25, r: 0.5, sx: 0.00017, sy: 0.00023, p: 2},
    {c: [59, 130, 246], x: 0.5, y: 0.9, r: 0.6, sx: 0.00013, sy: 0.00019, p: 4},
    {c: [236, 72, 153], x: 0.9, y: 0.85, r: 0.4, sx: 0.00025, sy: 0.00015, p: 1},
  ];
  const alpha = dark ? 0.32 : 0.14;
  const stop = loop((t) => {
    const {w, h} = size();
    ctx.clearRect(0, 0, w, h);
    ctx.globalCompositeOperation = dark ? 'lighter' : 'source-over';
    for (const b of blobs) {
      const x = (b.x + Math.sin(t * b.sx + b.p) * 0.12) * w;
      const y = (b.y + Math.cos(t * b.sy + b.p) * 0.12) * h;
      const r = b.r * Math.max(w, h) * 0.6;
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, rgba(b.c, alpha));
      g.addColorStop(1, rgba(b.c, 0));
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);
    }
  }, reduced);
  return () => (stop(), cleanup());
}
