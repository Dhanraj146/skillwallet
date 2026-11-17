# Project plan

## Goal
Create a responsive personal portfolio that presents a developer's profile and selected work, and demonstrates a live public API integration.

## Audience and primary task
Recruiters, hiring managers, and collaborators should be able to understand who the developer is, scan recent projects, and make contact within a few minutes.

## Initial scope
- Personal introduction and availability
- Selected projects loaded from the GitHub public repositories API
- Skills/about section and clear contact links
- Mobile and desktop responsive layouts
- Setup and API documentation

## Milestones

| Milestone | Target | Status |
|---|---:|---|
| Repository setup, feature plan, initial wireframe | Week 1 | Complete |
| Responsive layout and navigation | Week 2 | Scaffold included |
| API integration and dynamic content | Week 3 | Scaffold included |
| UI polish, browser checks, deployment | Week 4 | Planned |

The brief says “1 weeks” at the top but lists a four-week milestone plan. This repository follows the specific Week 1–4 milestones; confirm the actual course deadline with the team.

## Team roles (for 2–4 members)
- **Coordinator / Git owner:** keep issues and milestones organized, review pull requests.
- **UI developer:** layout, responsive behavior, visual polish.
- **API developer:** fetch lifecycle, data mapping, error states.
- **QA / documentation:** accessibility and browser checks, README and deployment notes.

For a two-person team, combine coordinator with documentation and UI with API work.

## Week 1 checklist
- [x] Create project repository structure and starter app.
- [x] Choose the GitHub public repositories API as the dynamic data source.
- [x] Draft the page wireframe and feature scope.
- [x] Document local setup and team Git workflow.
- [ ] Agree on the real profile owner, content, and contact details.
- [ ] Create remote repository and invite team members.

## Acceptance criteria
- Main page has semantic header, navigation, main content, sections, and footer.
- Layout adapts to phone, tablet, and desktop widths.
- API content has loading, success/empty, and error feedback.
- Project links and email contact are easy to find.
- Another team member can install dependencies and run the app from README instructions.
