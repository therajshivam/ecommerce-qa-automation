# E-Commerce QA Automation Suite

![CI](https://github.com/yourusername/ecommerce-qa-automation/actions/workflows/ci.yml/badge.svg)
![Cypress](https://img.shields.io/badge/tested%20with-cypress-04C38E.svg)
![JavaScript](https://img.shields.io/badge/language-JavaScript-yellow)
![License](https://img.shields.io/badge/license-MIT-blue)

> A complete end-to-end QA suite covering manual testing and Cypress automation
> for a real-world e-commerce web application — built to demonstrate
> industry-ready QA skills.

---

## Project Walkthrough
[Click here to watch the full project walkthrough](#) ← Loom link goes here after Week 4

---

## Overview

This project demonstrates a full QA lifecycle — from test planning and manual
test execution to Cypress automation, network testing, CI/CD pipeline, and
HTML reporting. The application under test is nopCommerce, a fully functional
e-commerce platform.

**What is covered:**
- Formal test plan with scope, strategy, risks, and exit criteria
- 50+ manual test cases across 7 modules
- 8 documented bug reports with video reproduction
- 25+ automated Cypress tests using Page Object Model
- BDD scenarios written in Gherkin for business-critical flows
- Network request validation using cy.intercept()
- Test data seeding using cy.task()
- Automated CI/CD pipeline via GitHub Actions
- Mochawesome HTML reports with failure screenshots

---

## Application Under Test

| Detail | Value |
|--------|-------|
| Application | nopCommerce Demo |
| URL | https://demo.nopcommerce.com |
| Type | E-Commerce Web Application |
| Modules Tested | Auth, Search, Product, Cart, Checkout, Account, Network |

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| Cypress | UI Automation + Network Testing |
| JavaScript | Test scripting language |
| BDD Cucumber | Gherkin feature files for business flows |
| Page Object Model | Design pattern for maintainable tests |
| cy.intercept() | Network request spy and stub |
| cy.task() | Test data seeding via Node.js |
| Mochawesome | HTML report generation |
| GitHub Actions | CI/CD pipeline |
| Jira | Bug tracking and sprint management |
| Google Sheets | Manual test case management |

---

## Project Structure
```
ecommerce-qa-automation/
│
├── cypress/
│   ├── e2e/                    ← Cypress test specs
│   │   ├── auth/               ← Login and Register tests
│   │   ├── search/             ← Search tests
│   │   ├── product/            ← Product page tests
│   │   ├── cart/               ← Cart tests
│   │   ├── checkout/           ← Checkout tests
│   │   ├── account/            ← My Account tests
│   │   └── network/            ← cy.intercept() tests
│   ├── features/               ← BDD Gherkin feature files
│   ├── step-definitions/       ← Cucumber step definitions
│   ├── pages/                  ← Page Object Model classes
│   ├── fixtures/               ← Test data (users, products, addresses)
│   └── support/                ← Custom commands and global hooks
│
├── manual-testing/
│   ├── test-plan.pdf           ← Formal test plan document
│   ├── test-cases.csv          ← 50+ manual test cases
│   └── bug-reports/            ← Individual bug report markdown files
│
├── jira-screenshots/           ← Sprint board and bug ticket screenshots
├── reports/                    ← Mochawesome HTML reports
├── .github/workflows/ci.yml    ← GitHub Actions pipeline
├── cypress.config.js
└── README.md
```

---

## Test Coverage

| Module | Manual Test Cases | Automated Tests | BDD Scenarios |
|--------|------------------|-----------------|---------------|
| Registration | 10 | 5 | 2 |
| Login | 10 | 6 | 3 |
| Search | 8 | 5 | 0 |
| Product Page | 6 | 3 | 0 |
| Cart | 10 | 6 | 4 |
| Checkout | 8 | 5 | 3 |
| My Account | 4 | 3 | 0 |
| Network/Intercept | 0 | 5 | 0 |
| **Total** | **56** | **38** | **12** |

---

## How to Run Locally

**Prerequisites:**
- Node.js v18 or above
- Git

**Step 1 — Clone the repo**
```bash
git clone https://github.com/yourusername/ecommerce-qa-automation.git
cd ecommerce-qa-automation
```

**Step 2 — Install dependencies**
```bash
npm install
```

**Step 3 — Open Cypress Test Runner (headed)**
```bash
npx cypress open
```

**Step 4 — Run all tests headlessly**
```bash
npx cypress run
```

**Step 5 — Generate Mochawesome report**
```bash
npm run report
```

---

## BDD Feature Example
```gherkin
Feature: User Login

  Scenario: Successful login with valid credentials
    Given user is on the login page
    When user enters valid email and password
    Then user should be redirected to My Account page
    And user should see welcome message

  Scenario: Login with incorrect password
    Given user is on the login page
    When user enters valid email and wrong password
    Then user should see invalid credentials error message
```

---

## Network Testing with cy.intercept()
```javascript
it('should return 200 when product is added to cart', () => {
  cy.intercept('POST', '**/addproducttocart/**').as('addToCart')
  cy.visit('/some-product')
  cy.get('.add-to-cart-button').click()
  cy.wait('@addToCart')
    .its('response.statusCode')
    .should('eq', 200)
})

it('should handle failed network response gracefully', () => {
  cy.intercept('POST', '**/addproducttocart/**', {
    statusCode: 500,
    body: { error: 'Server Error' }
  }).as('failedCart')
  cy.get('.add-to-cart-button').click()
  cy.wait('@failedCart')
  cy.get('.error-notification').should('be.visible')
})
```

---

## CI/CD Pipeline

Every push to `main` triggers the full pipeline:
```
Install dependencies
       ↓
Run Cypress tests headlessly
       ↓
Merge Mochawesome JSON reports
       ↓
Generate HTML report
       ↓
Upload report as artifact
       ↓
Upload screenshots on failure
```

---

## Mochawesome Report

![Mochawesome Report](#) ← screenshot goes here after Week 4

---

## Manual Testing Artifacts

| Artifact | Link |
|----------|------|
| Test Plan | [View PDF](manual-testing/test-plan.pdf) |
| Test Cases | [View Google Sheet](#) ← your sheet link |
| Bug Reports | [View folder](manual-testing/bug-reports/) |

---

## Bug Reports Summary

| Bug ID | Module | Title | Severity | Video |
|--------|--------|-------|----------|-------|
| BUG-001 | Cart | Cart total not updating without clicking Update | Major | [Watch](#) |
| BUG-002 | Checkout | Guest checkout allows empty billing name | Major | [Watch](#) |
| BUG-003 | Auth | Password field briefly unmasks on mobile | Minor | [Watch](#) |
| BUG-004 | Search | Special characters in search cause blank page | Critical | [Watch](#) |
| BUG-005 | Product | Product image broken on slow connection | Minor | [Watch](#) |
| BUG-006 | Account | Change password accepts same old password | Major | [Watch](#) |
| BUG-007 | Cart | Quantity accepts 0 without error message | Major | [Watch](#) |
| BUG-008 | Checkout | Back button during checkout loses cart data | Minor | [Watch](#) |

---

## Jira Board

![Sprint Board](jira-screenshots/sprint-board.png)
![Bug Tickets](jira-screenshots/bug-tickets.png)

---

## Debugging Guide

When a test fails, follow this order:

**Step 1** — Check `cypress/screenshots/` — Cypress auto-captures a screenshot
at the exact moment of failure. This tells you what the UI looked like.

**Step 2** — Check `cypress/videos/` — Full video recording of the test run.

**Step 3** — Read the error message in terminal — Cypress error messages are
very descriptive. Look for `expected` vs `actual` values.

**Step 4** — Run in headed mode to watch the failure live:
```bash
npx cypress run --headed --spec "cypress/e2e/auth/login.cy.js"
```

**Step 5** — Add `cy.log()` inside the failing test to print values mid-run
and narrow down exactly where the issue is.

---

## Author

**Your Name**
[LinkedIn](#) | [GitHub](https://github.com/yourusername)

---

## License
MIT


