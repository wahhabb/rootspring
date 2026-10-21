# Rootspring Press — Website Plan

A one-page preliminary site for Rootspring Press, built with SvelteKit and deployed on Vercel. Mobile-first, works well on phones and laptops.

## 1. Decisions (confirmed)

| Topic       | Decision                                                                        |
| ----------- | ------------------------------------------------------------------------------- |
| Contact     | Simple obfuscated `mailto:` email link — no backend needed                      |
| Palette     | Cream background + forest green + warm orange/gold accent                       |
| Book copy   | Full description from `content.md` + both endorsement blurbs                    |
| Buy options | Amazon and local-bookstore (Ingram/Spark) presented as **equal-weight** choices |

### Stack version

**SvelteKit 3** (released October 1, 2026) on Svelte 5. Native CSS, TypeScript throughout. Changes in v3 that shape the setup:

- Config lives in **`vite.config.ts`** (no more `svelte.config.js`).
- The `$lib` alias is replaced by **`#lib`** standard subpath imports.
- Reworked env-var handling, service worker, and error handling.
- Scaffolding fresh with the current `sv` CLI — no migration needed.

## 2. Design Direction

**Mood:** modern, warm, botanical, hopeful — "a bit playful," never irritating. Draws directly from the brand assets: the charcoal line-art tree/root logo on cream paper, and the lush forest cover with its gold title.

**Palette (CSS custom properties)**

- `--cream` `#F4EFE6` — page background (matches logo paper)
- `--ink` `#2B2B28` — primary text (charcoal, from the logo)
- `--forest` `#2F5233` — deep green, headings/structure
- `--moss` `#5E7B52` — secondary green
- `--gold` `#E39A2C` — accent for buttons, links, highlights (from the cover title)
- `--gold-deep` `#C97E1A` — hover/active state

**Typography (two Google fonts)**

- **Headlines:** _Fraunces_ — a soft, characterful display serif with a playful "opsz/SOFT" axis. Echoes the book cover's warm serif.
- **Body:** _Nunito Sans_ — friendly, highly readable humanist sans. Clean counterpoint to Fraunces.
- Loaded efficiently: self-hosted via `@fontsource` (or preconnected Google Fonts) with `font-display: swap`, only the weights used.

**Motion (friendly, subtle, respectful)**

- Gentle fade/rise-in of sections as they scroll into view (IntersectionObserver).
- Soft hover lift on the book cover and buttons.
- A small, slow "growing" or sway animation on a decorative sprig/leaf motif derived from the logo — tasteful, looping slowly.
- **All motion gated behind `prefers-reduced-motion`** — disabled for users who ask for less.

## 3. Sections (single page)

1. **Home / Hero**
   - Rootspring Press logo, company name.
   - Intro line: tiny Portland, OR publisher for the works of Wahhab & Kay Baldwin and friends; not accepting unsolicited manuscripts.
   - Soft botanical motion in the background/accent.
2. **New Book**
   - Book cover image (prominent, with hover lift), title + author.
   - Full marketing description from `content.md`.
   - Both endorsement blurbs (Llewellyn Vaughan-Lee; Brian D. McLaren) styled as pull-quotes.
   - **Buy block — equal weight:** two side-by-side cards/buttons:
     - _Buy from Amazon_ → existing Amazon link.
     - _Order from your local bookstore_ → note about asking an independent dealer to order via Ingram/Spark.
3. **Contact**
   - Obfuscated `info@rootspringpress.com` as a `mailto:` link (assembled so it isn't plainly scrapable).
   - Portland, OR mention.

## 4. Navigation ("slide from section to section")

- Sticky top navbar: small logo mark + links **Home · New Book · Contact**.
- Click a link → **smooth-scroll** to that section.
- **Scroll-spy:** active section's nav link highlights as you scroll (IntersectionObserver).
- Mobile: condensed nav (compact inline links or a simple toggle) sized for thumbs; navbar stays reachable.
- Respects reduced-motion (instant jump instead of smooth scroll when requested).

## 5. Images (efficient display)

- Convert `FinalFrontCover.jpg` (575 KB) and `LogoBlack.jpg` to optimized **WebP** (with JPG fallback), plus appropriately sized variants.
- Use `width`/`height` attributes to reserve space (no layout shift), `loading="lazy"` for below-the-fold images, and `srcset`/`sizes` for the cover so phones download a smaller file.
- Logo likely needs trimming/a transparent or cream-matched treatment so it sits cleanly on the cream background.

## 6. Technical Structure

```
rootspring/
├─ src/
│  ├─ app.html
│  ├─ app.css              # global tokens (CSS custom properties), resets, typography
│  ├─ routes/
│  │  ├─ +layout.svelte    # fonts, nav, global shell
│  │  └─ +page.svelte      # the one page (composes sections)
│  └─ lib/                 # imported via the #lib subpath alias (SvelteKit 3)
│     ├─ components/
│     │  ├─ Nav.svelte
│     │  ├─ Hero.svelte
│     │  ├─ NewBook.svelte
│     │  ├─ Contact.svelte
│     │  └─ Reveal.svelte  # scroll-in animation wrapper
│     └─ content.ts        # book text/blurbs/links as typed data
├─ static/                 # logo, optimized cover images, favicon
├─ vite.config.ts          # SvelteKit + adapter-vercel config (v3: config lives here)
├─ tsconfig.json
└─ package.json
```

- `@sveltejs/adapter-vercel` for deployment, configured in `vite.config.ts`.
- `#lib/...` subpath imports (v3) instead of the old `$lib` alias.
- Content lives in a typed `content.ts` module so copy is easy to edit later.
- Accessibility: semantic landmarks, alt text, focus-visible states, AA color contrast, keyboard-navigable.

## 7. Build Order

1. Scaffold SvelteKit (TS) + Vercel adapter; set up `app.css` tokens and fonts.
2. Optimize images into `static/`.
3. Build layout shell + Nav (smooth scroll + scroll-spy).
4. Build Hero, New Book, Contact sections with real content.
5. Add motion + reduced-motion handling; polish responsive breakpoints (phone → laptop).
6. Local verification (`npm run dev`), then `npm run build` / preview.
7. Deploy to Vercel.

## 8. Open / Later (not blocking)

- Favicon + social share (OG) image.
- Real domain hookup (`rootspringpress.com`) in Vercel.
- Future sections (authors, catalog) when more books exist.
