# furkanbeyazit.github.io

Personal portfolio built with [Docusaurus 3](https://docusaurus.io). EN at `/`, KR at `/ko/`.

```bash
npm install
npm start            # http://localhost:3000  (EN)
npm start -- --locale ko   # KR preview
npm run build        # static site → build/
```

Content lives in `src/data/profile.en.ts` and `src/data/profile.ko.ts`.
Project screenshots go to `static/img/projects/<id>.png` (replace the `.svg` placeholders and update the `image` field).

Deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`
(Settings → Pages → Source: **GitHub Actions**).
