# English Excellence

Landing page for an English language school. Vite + vanilla HTML/CSS/JS, no
framework.

Live: https://nikita-parkhomenko.github.io/final-project/

## Run it

```bash
npm install
npm run dev
```

## Structure

`src/partials/` has one HTML file per section, `src/css/` one stylesheet per
section, both loaded into `index.html` via `vite-plugin-html-inject`. Shared
stuff (tokens, buttons, container widths) lives in `variables.css` /
`common.css` / `container.css`.

Breakpoints: 320–375 fluid, 375–768 adaptive, 768 tablet, 1280 desktop.

## Branching

No direct commits to `main`. Use one branch per section (`feature/header`,
`feature/hero`, `feature/about-us`, etc.), each its own PR.
