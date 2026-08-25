# Portfolio

Static site, deployed via GitHub Pages. No build step — just HTML/CSS/JS.

## Adding content

Everything the page displays comes from small data files in `assets/js/data/`.
To add something, edit the matching file and push a new object onto its array —
the page renders it automatically, no HTML editing required.

| Want to add...        | Edit this file                       |
|------------------------|--------------------------------------|
| A project             | `assets/js/data/projects.js`         |
| A proof-of-concept    | `assets/js/data/poc.js`              |
| A skill / category    | `assets/js/data/skills.js`           |
| A blog post           | `assets/js/data/blogs.js`            |
| A client/brand badge  | `assets/js/data/brands.js`           |
| An industry           | `assets/js/data/industries.js`       |
| A certification       | `assets/js/data/certifications.js`   |
| An experience entry   | `assets/js/data/experience.js`       |
| About-section bullet  | `assets/js/data/about.js`            |
| Hero title/socials    | `assets/js/data/profile.js`          |

Each file has a comment at the top showing the object shape.

## Structure

```
index.html                 # page shell + section skeletons
assets/css/                # base.css, animations.css, components.css
assets/js/data/            # content — edit these
assets/js/                 # render.js, search.js, game.js, etc. — app logic
assets/img/                # images
```

## Local preview

```
python3 -m http.server
```
then open `http://localhost:8000`. (Plain `<script>` tags are used instead of ES
modules specifically so this also works if you just double-click `index.html`.)

## Notes

- `profile.jpg`, `thumb.jpg`, `hover.mp3` and `Image.jpeg` at the repo root are
  leftovers from the previous single-file version and are no longer referenced
  (the real photo now lives at `assets/img/profile.jpg`). Safe to delete once
  you've confirmed the new site looks right.
