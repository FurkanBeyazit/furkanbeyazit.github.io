# furkanbeyazit.github.io

Personal portfolio built with [Docusaurus 3](https://docusaurus.io). EN at `/`, KR at `/ko/`.

```bash
npm install
npm start            # http://localhost:3000  (EN)
npm start -- --locale ko   # KR preview
npm run build        # static site → build/
```

Content lives in `src/data/profile.en.ts` and `src/data/profile.ko.ts`.

To swap a project thumbnail for your own photo:
1. Drop the image in `static/img/projects/` (any name, e.g. `mlops-train.jpg`). 16:9 works best (matches the current `.svg` placeholders, e.g. 1280×720).
2. In `src/data/profile.en.ts` (and `.ko.ts`), find that project's entry and change `image: '/img/projects/mlops-train.svg'` to `image: '/img/projects/mlops-train.jpg'`.
3. The old `.svg` placeholder can be deleted once nothing references it.

Deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`
(Settings → Pages → Source: **GitHub Actions**).
