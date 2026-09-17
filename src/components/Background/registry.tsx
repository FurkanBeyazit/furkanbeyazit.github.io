import type {ComponentType} from 'react';
import type {BackgroundId} from '@site/src/theme-settings/settings';

/**
 * Background registry. `load` is only called inside <BrowserOnly>, so the
 * WebGL components (ogl) never touch SSR. `dim` is the layer opacity and
 * `veil` the strength of the dark overlay that keeps text readable.
 */
export type BgEntry = {
  label: string;
  dim: number;
  veil: number;
  load: () => ComponentType<any>;
  props: (dark: boolean) => Record<string, unknown>;
};

export const BG: Record<BackgroundId, BgEntry> = {
  'faulty-terminal': {
    label: 'Faulty Terminal',
    dim: 0.55,
    veil: 0.55,
    load: () => require('@site/src/components/rb/FaultyTerminal/FaultyTerminal').default,
    props: (dark) => ({
      scale: 1.5,
      gridMul: [2, 1],
      digitSize: 1.2,
      timeScale: 1,
      scanlineIntensity: 0.5,
      glitchAmount: 0.6,
      flickerAmount: 0.5,
      noiseAmp: 0.8,
      curvature: 0,
      tint: dark ? '#22d3ee' : '#4c1d95',
      mouseReact: true,
      mouseStrength: 0.5,
      pageLoadAnimation: false,
      brightness: dark ? 0.35 : 0.5,
      lightMode: !dark,
    }),
  },
  aurora: {label: 'Aurora', dim: 1, veil: 0, load: () => require('./Aurora').default, props: (dark) => ({dark})},
  'dark-veil': {
    label: 'Dark Veil',
    dim: 0.9,
    veil: 0.25,
    load: () => require('@site/src/components/rb/DarkVeil/DarkVeil').default,
    props: (dark) => ({hueShift: 30, noiseIntensity: 0.02, scanlineIntensity: 0.1, speed: 0.4, warpAmount: 0.1, lightMode: !dark}),
  },
  iridescence: {
    label: 'Iridescence',
    dim: 0.45,
    veil: 0.5,
    load: () => require('@site/src/components/rb/Iridescence/Iridescence').default,
    props: () => ({color: [0.55, 0.4, 1], speed: 0.6, amplitude: 0.12, mouseReact: true}),
  },
  threads: {
    label: 'Threads',
    dim: 0.7,
    veil: 0.2,
    load: () => require('@site/src/components/rb/Threads/Threads').default,
    props: (dark) => ({color: dark ? [0.4, 0.75, 0.95] : [0.3, 0.2, 0.6], amplitude: 1.2, distance: 0.3, enableMouseInteraction: true}),
  },
  'light-rays': {
    label: 'Light Rays',
    dim: 0.8,
    veil: 0.15,
    load: () => require('@site/src/components/rb/LightRays/LightRays').default,
    props: (dark) => ({
      raysOrigin: 'top-center',
      raysColor: dark ? '#22d3ee' : '#7c3aed',
      raysSpeed: 1,
      lightSpread: 0.9,
      rayLength: 1.6,
      followMouse: true,
      mouseInfluence: 0.15,
      noiseAmount: 0.05,
      distortion: 0.03,
      lightMode: !dark,
    }),
  },
  plasma: {
    label: 'Plasma',
    dim: 0.55,
    veil: 0.35,
    load: () => require('@site/src/components/rb/Plasma/Plasma').default,
    props: (dark) => ({color: '#8b5cf6', speed: 0.6, scale: 1.2, opacity: 0.9, mouseInteractive: true, lightMode: !dark}),
  },
  'letter-glitch': {
    label: 'Letter Glitch',
    dim: 0.9,
    veil: 0.25,
    load: () => require('@site/src/components/rb/LetterGlitch/LetterGlitch').default,
    // one hue (cyan/teal), mostly dark tones so letters glow up briefly then sink back
    props: (dark) => ({glitchColors: dark ? ['#10202a', '#10202a', '#163a48', '#1b5566', '#2a8ea3'] : ['#e2e8f0', '#e2e8f0', '#bfdbe3', '#9ccbd6', '#5fb3c4'], glitchSpeed: 220, centerVignette: true, outerVignette: true, smooth: true, backgroundColor: dark ? '#0b0e14' : '#f7f7fb', lightMode: !dark}),
  },
};
