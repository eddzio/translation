# Translation effect

A UI prototype exploring how text can transition between languages using animated effects. Built with Next.js, TypeScript, and Tailwind CSS.

## What it does

The component shows a social media comment card that can be translated into five languages — English, Spanish, French, Italian, and Danish — by pressing a button.

Before each translation, a heartbeat pulse plays on the original text to simulate a loading state. The translation then plays using one of three effects:

- **Scramble** — characters cycle through random letters before resolving into the new text, left to right
- **Blur** — the new text fades in from a gaussian blur
- **Both** — scramble and blur run together, with the blur clearing as the text resolves

Three sliders let you tune the animation in real time:

| Control | What it does |
|---|---|
| Scramble speed | How many characters resolve per interval tick |
| Blur amount | Peak blur intensity in pixels |
| Blur fade at | How far into the animation the blur starts clearing |

## Running locally

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

- [Next.js 14](https://nextjs.org) — framework
- [Tailwind CSS](https://tailwindcss.com) — styling
- [Lucide React](https://lucide.dev) — icons
- SVG `feGaussianBlur` + `requestAnimationFrame` — blur animation, no libraries
