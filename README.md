# E-Commerce QA Automation + Manual Testing

A combined QA project for nopCommerce that includes both manual testing artifacts and Cypress automation.

## What it covers
- Manual test planning and detailed test cases
- Bug reporting and Jira evidence for issues found
- Cypress automation for auth, search, product, cart, and network flows
- Network request validation using `cy.intercept()`

## Manual testing assets
- `manual-testing/test-cases.xlsx` — detailed spreadsheet of test cases
- `manual-testing/bug-reports/` — 13 documented bug report markdown files
- `manual-testing/jira-screenshots/` — Jira backlog, sprint board, and bug detail screenshots
- Includes reproduction steps, expected vs actual results, severity, and environment notes

## Automation assets
- `cypress/e2e/` — automated test suites by feature area
- `cypress/pages/` — page object classes for reusable selectors
- `cypress/support/` — support file and Cypress setup
- `cypress.config.js` — base URL and runtime settings

## Setup
```bash
npm install
npx cypress open
npx cypress run
```

## Key files
- `package.json` — project dependencies and scripts
- `cypress.config.js` — Cypress configuration
- `cypress/e2e/` — test specs
- `cypress/pages/` — page objects
- `manual-testing/` — manual QA documentation and bug reports

## Notes
- Base URL is `https://demo.nopcommerce.com`
- `package.json` contains Cypress dependency only
- `cypress/support/commands.js` is present but currently unused
