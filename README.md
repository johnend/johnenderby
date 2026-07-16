# John Enderby Portfolio

This branch contains the structure-only Next.js foundation for rebuilding the portfolio. The previous Gatsby application and its complete content/asset inventory are preserved under `archive/gatsby/`.

## Setup

```sh
mise install
pnpm install --frozen-lockfile
```

## Development

```sh
pnpm dev
```

## Validation

```sh
pnpm check
pnpm build
```

## Deployment

Netlify continues to deploy from Git. Pull requests use Deploy Previews; the production branch remains `main`. The Next.js build command and publish directory are defined in `netlify.toml`.

The status page is not the final portfolio and must not replace the current production site without explicit cutover approval.
