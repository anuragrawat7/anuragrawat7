# Setup guide — anuragrawat7

## 1. Create the profile repository
Create a **public** repository named exactly `anuragrawat7` (matching your GitHub username). Add the files from this package at the repository root and push them to the `main` branch.

The root `README.md` appears on your GitHub profile automatically.

## 2. Enable the contribution snake
The workflow is `.github/workflows/snake.yml`. In the repository:
- Open **Settings → Actions → General**.
- Under Workflow permissions, allow the workflow to write to the repository (or retain the explicit `contents: write` permission in the workflow).
- Open **Actions**, enable workflows if prompted, and run **Generate contribution snake** once using **Run workflow**.
- When it succeeds, a branch named `output` will contain the generated SVGs.
- The snake appears in the README after the workflow publishes the files. It also runs daily.

## 3. Enable the portfolio website
The static website files are `index.html`, `styles.css` and `script.js`.
- Open **Settings → Pages**.
- Under **Build and deployment → Source**, select **GitHub Actions**.
- Push to `main`, or run **Deploy portfolio to GitHub Pages** manually from Actions.
- Your site will be published at `https://anuragrawat7.github.io/`.

## 4. Personalise before sharing
Search the files for these placeholders and update them:
- `https://www.linkedin.com/` → your actual LinkedIn profile URL.
- Project One / Two / Three → your actual public project names, repository URLs, architecture and outcomes.
- Add an email/contact link only if you want it public.
- Update the skills to match technologies you can confidently discuss in an interview.

## 5. Optional profile polish
- Pin 3–6 strongest repositories on your GitHub profile.
- Add a useful README to every pinned project: problem, features, architecture diagram, tech stack, setup, API examples, tests and screenshots.
- Add repository topics such as `java`, `spring-boot`, `microservices`, `kafka`, `postgresql`.
- Keep the contribution graph honest: stats and visitor counters are third-party services and may occasionally be unavailable or rate-limited.

## Files
- `README.md` — GitHub profile README
- `.github/workflows/snake.yml` — contribution snake generator
- `.github/workflows/pages.yml` — GitHub Pages deployment
- `index.html`, `styles.css`, `script.js` — animated portfolio site
