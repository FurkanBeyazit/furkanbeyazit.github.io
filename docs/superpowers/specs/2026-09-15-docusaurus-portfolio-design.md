# Docusaurus Portfolio — Design

Date: 2026-09-15 · Site: https://furkanbeyazit.github.io (GitHub Pages, free, no custom domain)

## Goal
Replace the old HTML5 UP single page with a Docusaurus 3 site: EN and KR as two fully
separate locales (navbar EN/KR switch), clean "AI/MLOps engineer" portfolio that shows
what Furkan builds without per-project deep pages. Five layout variants are built first;
the user picks one, the rest are deleted.

## Stack
- Docusaurus 3 (TypeScript, classic preset with `docs: false`, `blog: false`).
- i18n: `defaultLocale: 'en'`, locales `['en', 'ko']`. EN at `/`, KR at `/ko/`.
- Styling: Tailwind CSS (PostCSS plugin via a small Docusaurus plugin) + hand-written
  HeroUI-style components (`Card`, `Chip`, `Button`, `Section`) in `src/components/ui/`.
  No HeroUI/NextUI runtime dependency. Dark mode default, light toggle kept.
- Deploy: `.github/workflows/deploy.yml` → build on push to `main` → publish `build/`
  with `actions/deploy-pages`. Old `index.html`, `assets/`, `images/` are removed.

## Content model (single source, two languages)
`src/data/profile.ts` exports `Profile` type; `src/data/profile.en.ts` and
`src/data/profile.ko.ts` implement it. `useProfile()` picks by `i18n.currentLocale`.

```
Profile {
  hero: { name, title, tagline, location, links: { github, linkedin, email } }
  projects: Project[]        // Danusys work, 7 cards
  earlier: Project[]         // 1 card: AI Educational Suite
  experience: Entry[]        // company, role, period, one line
  education: Entry[]
  certs: string[]
  skills: { group: string; items: string[] }[]
}
Project { id, name, summary (2 sentences), stack: string[], image: string, size?: 'lg'|'md'|'sm' }
```

### Projects (Danusys, 2025.10–)
1. MLOps Train Platform — Event DB collection → VLM two-stage auto-label (Qwen3-VL) →
   human review → class balancing → YOLO training (MLflow) → CCTV eval → ONNX + registry,
   all from one web dashboard. Stack: Python, YOLO, Qwen-VL, SAM, Prefect, MLflow, FastAPI,
   PostgreSQL, ONNX.
2. Person Re-ID Search — FastAPI service producing 1024-d SOLIDER embeddings for every
   person detection in PostgreSQL; cosine search "where else was this person seen".
   Stack: PyTorch, SOLIDER, FastAPI, PostgreSQL, Gradio.
3. Security Analytics Dashboard (table_search) — FastAPI + Alpine.js/ECharts single-page
   dashboard over CCTV event tables: TP/FP analysis, operator/server breakdowns, monthly
   reports, Excel import, VLM event reports. Stack: FastAPI, PostgreSQL, MariaDB, Alpine.js,
   ECharts.
4. Model Eval Platform — compare up to three YOLO models on real field CCTV sets,
   mAP + per-image TP/FP/FN, Excel export; used as STEP 6 of the MLOps pipeline.
   Stack: Ultralytics, FastAPI, Gradio, openpyxl.
5. Video Summary Platform (web UI) — front-end for the DVSummary backend: upload,
   analysis queue, event timeline with bbox overlay, object tracks, cross-camera person
   linking via Re-ID. Stack: Vanilla ES modules, Python proxy server, ffmpeg, HLS.
6. Daily Report (AINOS Reporter) — Windows tray app e-mailing an HTML summary with inline
   charts every morning from the analytics API. Stack: Python, SMTP, PyInstaller.
7. VLM-Gate — Docker bridge between LLM, VMS and VLM: SSE trigger → VMS → VLM callback →
   streamed description. Stack: FastAPI, SSE, Docker.

### Earlier work
- AI Educational Suite (2024–25): Quiz Generation API (GPT-4o, LangChain, FastAPI, MongoDB)
  + RAG school assistant (FAISS, OpenAI embeddings). Existing screenshots reused.

### Experience / Education / Certs / Skills
From the CV (no phone, address or ID number on the site):
- Danusys, Researcher (MLOps / CV), 2025.10–present
- Petobio, AI Engineer Intern (LLM, RAG), 2024.07–2025.01
- LeverLock, Researcher (time-series anomaly detection), 2024.07–2024.10
- Genius Sports, Sports Statistician, 2023.07–present
- Kyungbok University, Big Data, 2023–2026 · Ege University, Statistics BSc, 2009–2013
- TOEIC 940 · TOPIK 4 · Google Data Analytics · IBM Data Analyst
- Skills groups: Computer Vision (YOLO, Re-ID, VLM, SAM) · MLOps (Prefect, MLflow, ONNX,
  Docker, FastAPI) · LLM (LangChain, RAG, FAISS, OpenAI) · Data (PostgreSQL, MySQL,
  MongoDB, Pandas, time-series) · Frontend (JS, Tailwind, ECharts, Alpine.js) · BI (Power BI,
  Tableau)

## Pages (variants)
All variants read the same `useProfile()`; only layout differs.
- `/` — V2 Bento: hero → bento grid of projects → skills chips → experience timeline → contact.
- `/v1` — Docs-minimal: sidebar-like left nav, stacked sections, plain cards.
- `/v3` — Terminal: monospace, `$ whoami` hero, `ls projects/` list.
- `/v4` — Editorial: light, serif headings, wide image + problem/solution/result rows.
- `/v5` — Two-column sticky profile (left fixed, right scroll).
After selection, the chosen page becomes `/`, others are deleted.

## Images
`static/img/projects/<id>.png` — placeholders (SVG gradient with project name) until the
user drops real screenshots with the same file names. Earlier-work images copied from
`images/`.

## Out of scope
Blog, docs, per-project pages, analytics, contact form, custom domain.
