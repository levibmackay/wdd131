# Project Notes

Internal working notes for this repo. Not published anywhere — just a place to track real
state, gotchas, and ideas between sessions. See `README.md` for the public-facing overview.

## Per-project status

- **mission/** — done. Single static page, no known issues.
- **coolpics/** — done. Static gallery page, no known issues.
- **blog/** — done, but `blog/blog.js` still has the original scratch comments left in from
  when it was built (`// I need to removed all of these articles...`, `// Do I need to add a
  border...`). Harmless, just worth cleaning out if this file gets touched again.
- **creditcard/** — functionally done (client-side validation in `card.js` checks card number,
  expiry, etc.) but has two small rough edges:
  - The `<img class="card-image">` in `creditcard/index.html` (a base64-inlined decorative SVG
    of a chip icon) has no `alt` attribute — the only `<img>` in the whole repo missing one.
    Since it's purely decorative, `alt=""` would be the correct fix rather than a description.
  - `creditcard/index.html` links `favicon.png` which does not exist anywhere in the folder —
    404 in the browser console, cosmetic only.
- **character/** — done. Note the character portrait is hotlinked from
  `https://andejuli.github.io/img/snortleblat.png` (an external GitHub Pages URL, not this
  repo) rather than the local `character/snortleblat.png` that's actually sitting in the
  folder. If that external site ever goes away, the image breaks. Worth switching
  `character/script.js` to point at the local file instead.
- **recipes/** — mostly done, but **`recipes/index.html` has a broken script tag**: it loads
  both `recipes.js` and `app.js` (`<script src="recipes.js"></script>` then
  `<script src="app.js"></script>`), but `app.js` does not exist in the folder — only
  `recipes.js` and `recipes.css` are present. This throws a 404 on every page load; harmless
  since nothing currently depends on `app.js`, but it should either be removed or the missing
  file created, depending on what it was originally meant to hold (likely leftover from
  splitting rendering logic out of `recipes.js` at some point).
- **final_poject/ ("Gym Bro Guide")** — the least finished piece in the repo:
  - `final_poject/final-project.js` defines 24 workout objects, each with an
    `image: "./images/<name>.jpg"` path (e.g. `bench-press.jpg`, `push-ups.jpg`,
    `deadlift.jpg`, ...). **None of those 24 files exist.** The only images actually present in
    `final_poject/images/` are `hero.webp`, `logo.webp`, `logo2.webp`, `PersonalTraining3.webp`,
    `street-workout-itamar-kazir-tank-gangstar.webp`, `wireframe1.webp`, `wireframe2.webp`, and
    `workout-img.webp` — none of which match the per-workout filenames the data expects, and
    all `.webp` rather than the `.jpg` the data references. Every workout card that renders an
    image is currently a broken-image icon. This is the single biggest gap in the repo — either
    swap in real per-workout images (matching names, and probably `.webp` for consistency) or
    fall back to one of the existing generic images per category.
  - `final_poject/siteplan/site-plan.html` references `..//images/logo.png`,
    `..//images/wireframe1.png`, and `..//images/wireframe2.png` — note the doubled slash and
    the `.png` extension. The real files are `final_poject/images/logo.webp`,
    `wireframe1.webp`, `wireframe2.webp`. All three images in the site-plan doc are broken.
    Quick fix: correct the path to `../images/...` and the extension to `.webp`.
- **ponder/** — ungraded scratch exercises, not linked from the portal page (intentional, per
  README). All three (`formtest/`, `pokemon/`, `sorting/`) load fine on their own.
  `pokemon/pokemon.js` pulls sprite images straight from
  `raw.githubusercontent.com/PokeAPI/sprites` — the only place in the repo that depends on a
  live third-party network request at view time.
- **swiftTutorial/** — empty placeholder (`swiftTutorial/WeatherForcast/` contains nothing but
  a stray `.DS_Store`). Either fill it in with the actual exercise or drop the folder; right now
  it exists but does nothing.

## Repo-wide gotchas

- **Root `index.html` portal links are fragile.** Every link is written as
  `../wdd131/<project>/index.html` (e.g. `../wdd131/mission/index.html`) instead of a plain
  relative `mission/index.html`. This only resolves correctly because the site is published on
  GitHub Pages at `https://levibmackay.github.io/wdd131/`, where `../wdd131/...` happens to loop
  back to the same path. Opened locally (double-click `index.html`, or served from the repo
  root with `python3 -m http.server`), every link on the portal page 404s, because there's no
  sibling `wdd131/` folder above the repo root. If this ever gets touched again, switch the
  links to plain relative paths (`mission/index.html`, `coolpics/index.html`, etc.) — that
  works identically on GitHub Pages and locally, with no dependency on the deployed path.
- `.DS_Store` files are committed in a few places (`final_poject/.DS_Store`,
  `final_poject/images/.DS_Store`, `swiftTutorial/.DS_Store`,
  `swiftTutorial/WeatherForcast/.DS_Store`) even though `.gitignore` lists `.DS_Store`. These
  were presumably added before the ignore rule existed and never got untracked — `git rm
  --cached` would clean them up, but leaving them alone for now since they're harmless.
- The stray `MySQL Workbench community-8.0.43` file at the repo root (a macOS alias, not a
  project file) is called out in the README as safe to delete; hasn't been removed yet.

## Ideas for next steps

- Fix the `recipes/index.html` → `app.js` 404 (delete the tag or add the file).
- Decide on real images for the final project workout cards — this is the most visible gap if
  anyone actually clicks through the site.
- Fix the three broken image paths in `final_poject/siteplan/site-plan.html`.
- Switch the character portrait to the local `character/snortleblat.png` instead of the
  external hotlink.
- Add `alt=""` to the decorative credit-card chip icon image.
- If ever revisited, replace the root portal page's `../wdd131/...` links with plain relative
  paths so the page works the same locally and when deployed.
