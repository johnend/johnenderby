# Gatsby preservation archive

This directory preserves the portfolio exactly as it existed before the Next.js rebuild.

- Source tag: `pre-nextjs-rebuild`
- Source commit: `ec07e720d1a05e28c76e94110634177670e680ec`
- Source snapshot: `source/`
- Human inventory: `INVENTORY.md`
- Exact static-file inventory: `assets.txt`
- Source-code external URLs: `external-links-source.txt`
- Résumé PDF URLs and email address: `external-links-pdf.txt`
- SHA-256 manifest for every tracked source file: `checksums.sha256`

The snapshot was produced with `git archive` from the safety tag. It is a preservation record, not a runtime content source. Application code must not import from it, and Netlify must not publish it.

Verify the archive from this directory with:

```sh
cd source
sha256sum --check ../checksums.sha256
```
