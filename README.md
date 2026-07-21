# WDD 131 — Web Design & Development Coursework

A collection of web design assignments and mini-projects built for **WDD 131 (Dynamic Web Fundamentals)** at BYU-Idaho. Each top-level folder is a self-contained page or small site exploring a different front-end concept — semantic HTML, CSS layout, DOM scripting, form validation, and client-side data rendering — built up over the course of the term with vanilla HTML, CSS, and JavaScript (no frameworks or build tooling).

Live site: [levibmackay.github.io/wdd131](https://levibmackay.github.io/wdd131/)

## Projects

The root [`index.html`](index.html) is a simple portal page linking to the assignments below.

| Project | Path | Description |
|---|---|---|
| Mission Statement | [`mission/`](mission/) | A personal mission statement page with styled layout and BYU-Idaho branding. |
| Cool Pics | [`coolpics/`](coolpics/) | A responsive image gallery page built around a single photo subject. |
| Blog | [`blog/`](blog/) | "Kids Read For Fun" — a mock blog homepage with article cards and JS-driven interactivity. |
| Credit Card Form | [`creditcard/`](creditcard/) | A credit card application form with client-side JS validation. |
| Character Card | [`character/`](character/) | A trading-card-style page for a custom character, with dynamic content rendered via JS. |
| Recipes | [`recipes/`](recipes/) | "RecipeBook" — a recipe browser that renders an in-page array of recipe objects (ingredients, instructions, tags) to the DOM. |
| Final Project | [`final_poject/`](final_poject/) *(folder name as committed)* | "Gym Bro Guide" — a small multi-page fitness site (home + motivation pages) with a shared stylesheet, image gallery, and a site plan document. |
| Ponder (in-class exercises) | [`ponder/`](ponder/) | Ungraded/in-class practice exercises not linked from the portal page: a form-validation demo (`formtest/`), a Pokémon lookup card using the [PokeAPI](https://pokeapi.co/) sprite CDN (`pokemon/`), and a sorting-algorithm visualization (`sorting/`). |
| Swift Tutorial | [`swiftTutorial/`](swiftTutorial/) | Placeholder folder for a "WeatherForcast" exercise; currently empty of source files. |

## Tech stack

- **HTML5 / CSS3 / vanilla JavaScript** — no frameworks, libraries, or build step. Every page is opened/served as-is.
- Data is embedded directly in JS (e.g. the recipe list in `recipes/recipes.js`) rather than fetched from external JSON.
- The Pokémon exercise in `ponder/pokemon/` is the one place that reaches out to a remote resource, pulling sprite images from the [PokeAPI](https://pokeapi.co/) GitHub-hosted sprite repo.

## Viewing the projects

No build or install step is required.

- **Quickest:** open any project's `index.html` (or other `.html` entry point) directly in a browser.
- **Recommended:** serve the repo root with a local static server so relative links and images resolve correctly, e.g.:
  ```bash
  npx serve .
  # or
  python3 -m http.server
  ```
  then browse to `index.html` for the portal page, or straight into any project folder.
- **Hosted version:** the repo is also published via GitHub Pages at the live site link above.

## Notes

- The `final_poject` folder name is a typo carried over from when the assignment was created; it's left as-is to match the folder structure already referenced by existing links.
- A stray `MySQL Workbench community-8.0.43` file at the repo root is a macOS alias left over from an unrelated local download — it isn't part of any assignment and can be ignored/removed.
- See [`NOTES.md`](NOTES.md) for a running list of known issues (broken image/script references, incomplete pages) and ideas for future cleanup.

## Author

Levi B Mackay ([@levibmackay](https://github.com/levibmackay))

_Last reviewed: 2026-07-20 19:33 MDT_
