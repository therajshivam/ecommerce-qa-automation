# E-Commerce QA Manual Testing

Manual QA portfolio for the [nopCommerce demo store](https://demo.nopcommerce.com/). The project contains structured test cases, reproducible defect reports, and Jira evidence from exploratory and scenario-based testing of core e-commerce workflows.

## Project scope

Testing focuses on the customer journey and the validation rules that protect order and account data:

| Area | Coverage examples |
| --- | --- |
| Registration and authentication | Account creation, password rules, login behavior, and mobile password masking |
| Search | Search input handling, including special-character queries and empty results |
| Product pages | Product image behavior under network throttling |
| Cart | Quantity validation, totals, and cart state |
| Checkout | Billing validation, guest checkout, navigation, and data persistence |
| My Account | Change-password validation |

## Repository contents

| Path | Description |
| --- | --- |
| [`manual-testing/test-cases.xlsx`](manual-testing/test-cases.xlsx) | Detailed 56+ manual test-case workbook |
| [`manual-testing/bug-reports/`](manual-testing/bug-reports/) | 13 Markdown defect reports, `BUG-001` through `BUG-013` |
| [`manual-testing/jira-screenshots/`](manual-testing/jira-screenshots/) | Jira backlog, sprint board, and bug-detail evidence |

Each defect report records the affected module, severity, priority, status, description, reproduction steps, expected result, actual result, impact, and test environment.

## Defect summary

The current report set contains **13 open defects**:

- **Critical:** Search fails with a blank page for special-character input.
- **Major:** Cart totals and quantity validation, guest checkout billing validation, and change-password validation.
- **Minor:** Mobile password masking, slow-network product-image fallback, checkout back-button persistence, and registration coverage gaps.

See the individual reports for complete reproduction details and affected URLs. Start with [`BUG-004.md`](manual-testing/bug-reports/BUG-004.md) for the highest-severity issue.

## Test environment

- Application: `https://demo.nopcommerce.com`
- Primary browser: Chrome
- Desktop operating system: Windows 10
- Mobile coverage: Android Chrome for the password-masking scenario
- Network coverage: Chrome DevTools Slow 3G throttling for product-image behavior

## How to use this project

1. Open [`manual-testing/test-cases.xlsx`](manual-testing/test-cases.xlsx) to review the planned scenarios.
2. Execute the relevant scenario against the nopCommerce demo store.
3. Compare observed behavior with the expected result and capture evidence where needed.
4. Review the matching report in [`manual-testing/bug-reports/`](manual-testing/bug-reports/) for documented defects and impact.
5. Use [`manual-testing/jira-screenshots/`](manual-testing/jira-screenshots/) to see how findings were represented in Jira.
