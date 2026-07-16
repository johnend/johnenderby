# Gatsby portfolio inventory

## Application and deployment

- Gatsby is declared as `^2.24.67`; `package-lock.json` resolves `2.32.13`.
- React and React DOM are declared as `^16.12.0`.
- npm is the original package manager; the lockfile is npm lockfile version 2.
- Gatsby scripts are `develop`, `build`, `serve`, and `clean`; the test script is a placeholder failure.
- `gatsby-config.js` configures only `gatsby-plugin-sass`.
- Styling uses SCSS modules, `gatsby-plugin-sass`, and `node-sass@4.14.1`.
- No `netlify.toml`, `_redirects`, `_headers`, sitemap, robots file, or GitHub Actions workflow exists.
- Netlify's recorded baseline is native Git deployment from `main`, `gatsby build`, publish directory `public/`, and Node `12.18.0`.
- `netlify/functions` is configured in Netlify but is absent from the repository.

## Routes and public URL surface

| URL | Source | Classification |
| --- | --- | --- |
| `/` | `src/pages/index.js` | Retain as the eventual homepage. |
| `/#process` | `src/sections/process/index.js` | Retain fragment contract. |
| `/#work` | `src/sections/work/index.js` | Retain fragment contract. |
| `/#about` | `src/sections/about/index.js` | Retain fragment contract. |
| `/#resume` | `src/sections/resume/index.js` | Retain fragment contract. |
| `/FanDuel` and `/FanDuel/` | `src/pages/FanDuel.js` | Retain `/FanDuel`; normalize the trailing-slash form later. |
| `/content.js` | Gatsby `static/` copy | Archive; remove from new public output. |
| `/favicon.ico` | Gatsby `static/` copy | Retain. |
| `/images/**` | Gatsby `static/` copy | Retain referenced URLs initially; archive unused files. |
| `/images/svgComponents/*.js` | Gatsby `static/` copy | Archive; remove incidental public JavaScript exposure. |
| `/images/pdfs/Resume.pdf` | Gatsby `static/` copy | Retain initially. |

There is no custom 404 page, redirect rule, header rule, sitemap, robots policy, or independent case-study route. Case studies are selected in React state and shown in a modal.

## Structured content sources

`static/content.js` exports:

- Six process cards: Define & Discover, Ideate & Prototype, Test & Refine, Deliver, Learn, and Begin again.
- Five social links: Twitter, Dribbble, Spotify, GitHub, and LinkedIn.
- Main and home navigation data.
- Five general portfolio case studies in `caseStudies`.
- Five FanDuel case studies in `fdWork`.
- Shared Figma and Google Sheets captions.

All case-study objects use the same broad content shape: `meta`, `intro`, `define`, `ideate`, `test`, `deliver`, `outro`, `visuals`, and `caption`. Presentation metadata includes project name, colour, website, role, tools, contribution, client, summary, splash image, and disclaimer. These values are not document-level SEO.

### Case studies

| Data key | Display name | Collection |
| --- | --- | --- |
| `lifeQuay` | LifeQuay | General portfolio |
| `ace360` | ACE360 | General portfolio |
| `stAndrews` | St Andrews Links | General portfolio |
| `menzies` | Cargo / Menzies | General portfolio |
| `AG` | The Assessors Guild | General portfolio |
| `f2pAdmin` | Free to play admin platform | FanDuel |
| `f2pGames` | Free to play games | FanDuel |
| `numberFire` | numberFire SCOUT | FanDuel |
| `playerVideos` | Player Videos | FanDuel |
| `playAction` | PlayAction | FanDuel |

## Copy embedded in implementation

The following component sources contain user-facing copy or duplicated project presentation data and must be treated as content during later migration:

- `src/sections/hero/index.js`: homepage introduction.
- `src/sections/process/index.js`: process heading and supporting copy.
- `src/sections/work/index.js`: portfolio heading, case-study selection, and modal labels.
- `src/sections/about/index.js`: biography copy.
- `src/sections/resume/index.js`: résumé copy and download/Notion labels.
- `src/sections/fdHero/index.js`: FanDuel introduction.
- `src/sections/fdWork/index.js`: FanDuel work heading, selection, and modal labels.
- `src/components/workGrid/index.js` and `workScroll/index.js`: duplicated project titles, labels, IDs, images, and accessibility text.
- `src/components/fdWorkGrid/index.js` and `fdWorkScroll/index.js`: duplicated FanDuel project titles, labels, IDs, images, and accessibility text.
- `src/components/modal/index.js`: structural labels and case-study section headings.
- `src/components/passwordProtect/index.js`, `utils.js`, `src/pages/index.js`, and `src/pages/FanDuel.js`: password prompt and access behavior.

## Assets and downloads

`assets.txt` lists every file copied by Gatsby's `static/` behavior. Totals are:

- 36 PNG images.
- 27 raw SVG files.
- 25 JavaScript SVG components.
- One five-page A4 résumé PDF (`static/images/pdfs/Resume.pdf`, 17,187,177 bytes).
- One favicon.
- `static/content.js`.

### PNGs referenced by the application

`F2PFDLogo.png`, `ace360.png`, `assessorsGuild.png`, `bubbles.png`, `f2pGameList.png`, `fDBackground.png`, `fdPlayAction.png`, `golf-ball.png`, `handbooks.png`, `lifeQuay.png`, `menziesCargo.png`, `numberFireHome.png`, `plane.png`, `play-action-logo.png`, `playerVideos3.png`, `stAndrews.png`, `the-scout.png`, `winFromHome.png`, and `wreath.png`.

### PNGs not referenced by runtime source

`FanDuel.png`, `FanDuelSites.png`, `SportsBook.png`, `coloradoAnythingBook.png`, `createGameMeta.png`, `crest.png`, `golfer.png`, `john.png`, `nfVertical.png`, `numberFireArticleSearch.png`, `numberFirePlayerList.png`, `numberFirePlayerView.png`, `pickemtemplate.png`, `playerVideos1.png`, `playerVideos2.png`, `questionCollections.png`, and `upsell.png`.

`upsell.png` is approximately 15 MB and should remain archived unless later content work deliberately selects it.

The raw SVG and SVG-component filenames are preserved exactly in `assets.txt`. The directly referenced raw SVG is `floating-cogs.svg`. The unreferenced JavaScript SVG components identified during the audit are `playerVideoIcon.js`, `pokemonGo.js`, and `psn.js`; the remainder are referenced by legacy React code.

## External links

`external-links-source.txt` records 43 unique source-code URL strings, including:

- Five social profiles.
- One Notion résumé.
- Three project websites.
- 31 Figma embeds.
- One Google Sheets embed.
- The Meyer CSS reset attribution.
- The `https://example.com` placeholder used by modal state.

`external-links-pdf.txt` separately preserves the résumé annotations for johnenderby.com, Twitter, LinkedIn, Codecademy, Treehouse, and freeCodeCamp, plus the textual email address `john.enderby.1987@gmail.com`.

SVG namespace URLs are implementation syntax rather than navigation targets and remain preserved in the raw SVG/source snapshot.

## SEO and accessibility fields

- No route exports a document title, description, canonical URL, robots directive, Open Graph metadata, Twitter card metadata, sitemap entry, or structured data.
- Case-study `meta` objects are presentation data only.
- Grid/scroll cards contain project titles, image alt text, IDs, and SVG `<title>` values that should inform later accessibility work.
- The rebuild foundation intentionally uses temporary `noindex`; the final SEO model is deferred.

## Gatsby-specific implementation

- `gatsby-config.js`, `gatsby-browser.js`, and `gatsby-ssr.js`.
- Gatsby page discovery through `src/pages`.
- `gatsby-link` imports and Gatsby wrapper APIs.
- `gatsby-plugin-sass`, `gatsby`, `gatsby-cli`, `node-sass`, and the npm lockfile.
- Gatsby's `static/` copy semantics.
- Gatsby starter README and license material.

These files are retained in `source/` but should not be ported into the Next.js runtime.

## Safely reusable material

- All case-study data and embedded copy, after later modelling decisions.
- Images, raw SVGs, SVG artwork, favicon, and résumé PDF.
- External-link targets and captions.
- SCSS values and layouts as visual reference, not as code to migrate mechanically.
- SVG React components after individual review for React/Next compatibility and accessibility.

## Known legacy defects and risks

- Project data is duplicated between `static/content.js`, four card collections, and two modal state components.
- Mobile FanDuel data uses `f2pGame`, while selection logic expects `f2pGames`.
- The password is hard-coded and duplicated in Gatsby wrappers; access is accepted through query parameters or cookies.
- `js-cookie` and `query-string` are imported directly while relying on transitive legacy dependencies.
- Modal state begins with `https://example.com`, which is not a real project link.
- Some case-study sections and website fields are intentionally empty.
- Existing project `meta` data must not be mistaken for Next.js Metadata API fields.
