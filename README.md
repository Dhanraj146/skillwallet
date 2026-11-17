# Interactive Portfolio

A responsive personal portfolio built with React and Vite. The selected-work section fetches public repositories from the GitHub REST API at runtime.

## Run locally

- Install Node.js 20.19+ or 22.12+.
- Run `npm install`.
- Run `npm run dev` and open the local URL printed by Vite.
- Run `npm run build` to create the production bundle in `dist/`.

## Make it yours

Before presenting or deploying, update the sample identity and contact details in `index.html` and `src/App.jsx`. Replace `GITHUB_USERNAME` near the top of `src/App.jsx` with your GitHub account name. Adjust the skills, location, biography, and visual design to reflect your work. No API token is needed for public repositories; GitHub may rate-limit anonymous requests.

## Features

- Responsive layout with semantic sections and keyboard skip link.
- Live public repository cards, including loading, empty, and error states.
- External links open safely in a new tab.
- Reduced-motion preference support.
- React component source and Vite development/build workflow.

## Project docs

- [Project plan and milestone checklist](docs/PROJECT_PLAN.md)
- [Initial wireframe](docs/WIREFRAME.md)
- [Git collaboration workflow](docs/GIT_WORKFLOW.md)

## API

The app calls `GET https://api.github.com/users/{username}/repos?sort=updated&per_page=6`, filters out forked repositories, and displays up to three. Public endpoint documentation: [GitHub REST API — repositories](https://docs.github.com/en/rest/repos/repos#list-repositories-for-a-user).

## License

This starter repository is provided for learning and portfolio use. Add a license if you plan to distribute or reuse it publicly.
