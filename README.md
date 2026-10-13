# agishan.github.io

My personal site, built with [Astro](https://astro.build) and deployed to GitHub Pages
on every push to `main`.

## Run it locally

Needs Node 22+.

```sh
npm install
npm run dev      # http://localhost:4321, reloads as you edit
npm run build    # production build into dist/
```

## Where to edit things

| What | Where |
|---|---|
| Name, bio, "Now" line, photos, socials, resume link | `src/data/site.ts` |
| Reading list and cooking photos (misc page) | `src/data/site.ts` |
| A job | `src/content/work/<name>.md`, one file per job |
| A project | `src/content/projects/<name>.md`, one file per project |
| Colours, fonts, spacing | `src/styles/global.css` |
| Header, nav, footer | `src/layouts/Base.astro` |
| Images, resume PDF | `public/` (e.g. `public/photos/me.jpg` is served at `/photos/me.jpg`) |

**Add a job or project:** copy an existing file in `src/content/work/` or
`src/content/projects/`, change the frontmatter, and write the page below the `---`.
The file name becomes the URL (`shopify.md` → `/work/shopify`). `order` sets the
position (lower is higher). `draft: true` hides an entry from the site.

Every file with a `todo:` line in its frontmatter still needs real content (search for `todo:` or `TODO`). `todo` notes are private and never appear on the site.

## Deploying

Push to `main`. The workflow in `.github/workflows/deploy.yml` builds the site and
publishes it. One-time setup: in the repo's **Settings → Pages**, set **Source** to
**GitHub Actions**.

## History

The old al-folio (Jekyll) version is kept in the local `al-folio-backup` branch.
