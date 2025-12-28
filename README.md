# GoTask (Rocketseat Angular course project)

This repository contains the "GoTask" application — a practice project built during the Rocketseat Angular course taught by Felipe da Silva (@DevFortin). It is a small Angular app used to learn and demonstrate Angular concepts, Tailwind integration, and component-based architecture.

## What this is
A learning project created while following the Rocketseat Angular course by Felipe da Silva (@DevFortin). The app demonstrates typical Angular app structure (components, modules, styles) and includes Tailwind-related configuration in the Angular workspace.

## Tech stack
- Angular (v21)
- Tailwind CSS
- TypeScript
- Node / npm

## Prerequisites
- Node.js (recommended: Node 18 or later)
- npm (the project uses npm; a version compatible with your Node is fine)

## Getting started
1. Open a terminal in the project root (this repository).
2. Install dependencies:

   npm install

3. Run the development server:

   npm start

This runs the Angular dev server and the app will be available at http://localhost:4200 by default.

## Available npm scripts
The `go-task/package.json` contains the following scripts:

- `npm run ng` — runs the local `ng` script (Angular CLI binary) defined in package.json
- `npm start` — `ng serve` (start dev server)
- `npm run build` — `ng build` (build production bundle)
- `npm run watch` — `ng build --watch --configuration development` (build in watch mode)
- `npm test` — `ng test` (run tests)

Note: When passing extra arguments to an npm script, use the `--` separator. For example, to run an Angular CLI generator using the `ng` script in `package.json`, do:

  npm run ng -- generate component components/header

Or run the CLI directly with npx (no global Angular CLI required):

  npx ng generate component components/header

A common mistake that results in the error "Missing script: \"ng\"" is running `npm run ng generate component ...` without the `--`. The correct syntax is `npm run ng -- generate ...`.

## Project structure (top-level)
- `go-task/` — Angular application folder
  - `src/app/` — application source (components, routes, styles, templates)
  - `public/` — static assets
  - `package.json` — app-specific scripts and dependencies

There are multiple UI components under `src/app/components/` such as `header`, `main-content`, `task-card`, `task-list-section`, and modals for comments and forms.

## Notes and troubleshooting
- If `ng` commands fail, prefer `npx ng ...` or use the `npm run ng -- ...` pattern described above.
- If you run into dependency errors, try removing `node_modules` and reinstalling:

  rm -rf node_modules package-lock.json; npm install

(Windows PowerShell users can remove `node_modules` with `rm -r node_modules`.)

## Credits
This project is an exercise from the Rocketseat Angular course by Felipe da Silva (@DevFortin). All course material and guidance belong to Rocketseat and the instructor.

## License
This repository does not include a license file. Use and distribution are subject to the original course terms and your local policies.

----
If you want, I can also:
- add a minimal `README` in the `go-task/` folder with app-specific notes,
- add a CONTRIBUTING or LICENSE file, or
- update this README to include screenshots and a more detailed file map.

Tell me which of those you'd like next.
