# Git collaboration workflow

## Branches
- `main` contains the reviewed, presentable version.
- Create short feature branches from `main`, e.g. `feat/responsive-nav`, `feat/github-projects`, or `docs/setup-guide`.

## Contributions
1. Pull the latest `main` and create a focused branch.
2. Make one coherent change and keep commits small.
3. Run `npm run build` before opening a pull request.
4. Open a PR with a short summary, screenshots for visual changes, and any manual checks.
5. Ask one teammate to review; resolve feedback before merging.
6. Delete the feature branch after merge.

## Commit style
Use concise imperative messages, optionally with a type prefix: `feat: add project loading state`, `fix: wrap project cards on mobile`, `docs: explain GitHub API setup`.

## Issue tracking
Create issues for content personalization, responsive review, accessibility review, API error review, and deployment. Assign one owner and a completion check to each issue.
