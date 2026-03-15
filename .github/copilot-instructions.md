# Copilot instructions

## Project overview

Minimal reference project demonstrating TypeScript, Webpack, and unit testing with Vitest. Intended as a clean, up-to-date starting point for frontend TypeScript projects.

## Commands

- `npm start` — start the dev server (webpack-dev-server, serves from `./app`)
- `npm test` — run unit tests (Vitest, no browser required)

## Architecture

- `src/` — TypeScript source files
- `test/` — Vitest spec files (`*.spec.ts`)
- `app/` — static HTML and webpack output (`bundle.js`)
- `dev-webpack.config.js` — webpack config for dev server and bundling
- `vitest.config.ts` — Vitest config (jsdom environment, globals enabled)
- `tsconfig.json` — TypeScript config targeting ES2020

## Tech stack

| Concern | Tool |
|---|---|
| Language | TypeScript 5, targeting ES2020 |
| Bundler | Webpack 5 + ts-loader |
| Dev server | webpack-dev-server |
| Styles | SCSS via sass (Dart Sass) + sass-loader |
| Unit tests | Vitest with jsdom |
| CI | GitHub Actions (Node 22) |

## Conventions

- Tests live in `test/` and are named `*.spec.ts`
- Source imports lodash and bootstrap as bundled dependencies — do not load them from a CDN
- No browser required for tests; Vitest runs in Node with jsdom
- TypeScript strict mode is on — avoid `any`, keep types explicit
- Do not use `var` — use `const` or `let`
- Do not add polyfills or target browsers older than ES2020
