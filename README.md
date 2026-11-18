# hurlumhei-web

The website of Hurlumhei Oy at [hurlumhei.xyz](https://hurlumhei.xyz): Jarkko Peltola's CV and projects, in Finnish and English.

## Stack

- Angular 22 with static prerendering (`outputMode: "static"`), so every page is plain HTML on GitHub Pages
- Finnish at `/`, English at `/en`, with `hreflang` and canonical links
- Self-hosted fonts via Fontsource (Inter, Space Grotesk, JetBrains Mono)

## Editing content

All text, projects, jobs and skills live in [`src/app/content.ts`](src/app/content.ts), one object per language. Images are in `public/img`.

## Development

```bash
npm install
npm start        # dev server at http://localhost:4200
npm run build    # static site in dist/hurlumhei-web/browser
```

## Deployment

Every push to `main` builds the site and deploys it to GitHub Pages with [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). The custom domain comes from `public/CNAME`.

One-time setup:

1. In the repository settings, under **Pages**, set **Source** to **GitHub Actions**.
2. At the DNS provider of `hurlumhei.xyz`, add `A` records for the apex domain pointing to `185.199.108.153`, `185.199.109.153`, `185.199.110.153` and `185.199.111.153`, and optionally a `CNAME` record for `www` pointing to `rankkis.github.io`.
3. Once DNS works, enable **Enforce HTTPS** in the Pages settings.
