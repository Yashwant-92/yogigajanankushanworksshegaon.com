# Kushan Angular Implementation

This repository is a Next.js app. Per project constraints, we can't replace or remove the existing Next.js app. However, below is a complete Angular starter (added under angular-site/) that recreates the current website's layout and styling using Tailwind via CDN and custom CSS classes. You can copy the angular-site folder into a standalone repo to run it with Angular CLI.

## How to run the Angular app (in a separate repo or outside your Next.js runtime)
1) Ensure you have Node 18+ and Angular CLI: npm i -g @angular/cli
2) Move the `angular-site/` directory to its own repository (or outside this Next.js project) to avoid tool conflicts.
3) From `angular-site/`, install deps:
   npm install
4) Start the dev server:
   npm start
   It will serve on http://localhost:4200

Notes:
- Tailwind CSS is loaded via CDN in index.html, and theme colors are extended to match the Kushan brand.
- Custom classes (kushan-card, kushan-hero-gradient, etc.) are defined in src/styles.css.
- Images use plain <img>. If you see upstream issues from providers, switch to unoptimized images or try priority loading if you later add an optimizer.

