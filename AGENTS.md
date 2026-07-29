<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This repo uses Next.js `16.2.10`. Read the relevant guide in `node_modules/next/dist/docs/` before changing Next.js APIs, routes, layouts, metadata, config, or Server Components.

<!-- END:nextjs-agent-rules -->

# John Enderby Portfolio Repo Guide

This is a small Next.js portfolio being rebuilt from an archived Gatsby application. Keep changes scoped, explicit, and consistent with the source, styling, and preservation boundaries below.

## Baseline Rules

- Use `pnpm` for repository scripts.
- Do not use `npm`, `yarn`, or `bun` in this repository.
- Do not add, remove, or upgrade dependencies without explicit confirmation.
- Do not start `pnpm dev` unless explicitly asked; the user may already have a development server running.
- Prefer targeted validation first, then broaden when touching shared APIs, tokens, or route behavior.
- Keep implementation changes in the layer that owns the behavior instead of adding parent-scoped overrides or parallel abstractions.
- Do not create folders, component APIs, or content abstractions speculatively.

## Source Architecture

- `src/app` owns routes, layouts, metadata, route boundaries, and page composition.
- Route-only code belongs in private `_components` or `_lib` folders beside its route.
- `src/components` owns reusable presentational components with multiple consumers.
- `src/features` owns portfolio domains such as navigation, portfolio sections, and case studies.
- `src/lib` owns framework-neutral shared helpers and must not import from app, feature, or component layers.
- `src/styles` owns global reset, primitive, semantic, and base CSS only.
- Keep types beside the code that owns them; do not add a root `types` directory without a cross-domain need.
- Use the `@/*` alias. Add barrels only when they define a useful feature boundary.
- Promote route-local code only after it gains domain complexity or another consumer.

## Styling

- Use CSS Modules for route and component styling.
- Check existing semantic tokens before adding new ones.
- Keep primitive values, semantic roles, base element styles, and component-local styles separate.
- Use camelCase CSS Module class names.
- Keep component-specific layout variables local to the component module.
- Do not introduce Sass, Tailwind, CSS-in-JS, or parent-scoped override chains.
- Do not introduce design-system abstractions without demonstrated reuse.
- Preserve visible keyboard focus and respect reduced-motion preferences when adding interactions.

## Content and Migration Safety

- Treat `archive/gatsby` as a read-only preservation record.
- Never import files from the archive into runtime code.
- Do not delete or rewrite archived copy or assets without explicit approval.
- Keep content separate from implementation and do not add a content framework until its authoring model is approved.
- Preserve public URLs according to `archive/gatsby/INVENTORY.md`; do not add routes or redirects speculatively.
- The initial Next.js page is a structure-only deployment check, not the final portfolio UI.

## Validation Entry Points

- `pnpm lint` - ESLint.
- `pnpm lint:css` - Stylelint for `src/**/*.css`.
- `pnpm typecheck` - generate Next.js route types and run TypeScript without emitting files.
- `pnpm test` - Vitest once.
- `pnpm format:check` - Prettier check.
- `pnpm check` - ESLint, Stylelint, type checking, tests, and Prettier.
- `pnpm build` - production Next.js build.

Run the narrowest command covering the changed surface before the full check and build.

## Worktrees

- Main checkout: `/home/johne/Developer/johnenderby`.
- Feature worktrees: `/home/johne/Developer/johnenderby-worktrees/<branch-summary>`.
- Keep the main checkout on `main`.
- Merge feature branches from the main checkout unless explicitly asked otherwise.

## Applied Learning

Add concise repository-specific lessons here only after a repeated failure or platform constraint makes them useful.

- Avoid `path` as a zsh loop variable; it overwrites `PATH`.
- Prefer user screenshots over CDP debugging during visual iteration.
