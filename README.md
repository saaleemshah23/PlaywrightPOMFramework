

# Playwright Test Automation Framework

A robust and scalable test automation framework built using **Playwright** and **TypeScript** for testing web applications. 
This framework includes several types of automated tests like functional, UI, and end-to-end tests, designed to validate web applications like [the-internet.herokuapp.com](https://the-internet.herokuapp.com).
Can be run on any device or browser. Chrome, Firefox, Safari etc. and Any Mobile device or OS.

Test Report:![image](https://github.com/user-attachments/assets/b2a209bf-4a42-4031-8c9b-e0852ba90360)

## Features

- **Automated Web Application Testing**: Includes tests for various features like login, form authentication, dynamic content, alerts, etc.
- **Parallel Execution**: Tests can be run in parallel for faster execution.
- **Allure Reporting**: Generates detailed reports with visual representation of test results.
- **Cross-Browser Testing**: The framework supports testing on different browsers.
- **Continuous Integration (CI)**: Integrated with GitHub Actions for automated testing.
- **Page Object Model**: Clear separation of test logic and page actions for better maintainability.


## Tech Stack

- **Playwright**: For test automation and browser interaction.
- **TypeScript**: For type safety and enhanced development experience.
- **Jest**: For running and managing tests.
- **Allure Reporting**: For generating test reports.
- **GitHub Actions**: For Continuous Integration/Continuous Deployment (CI/CD).
- **Node.js**: For running the test scripts and server-side logic.

## Installation

Follow these steps to run the test automation framework locally:

1. **Clone the repository**:

git clone https://github.com/saaleemshah23/PlaywrightPOMFramework/
cd your-repo-name
Install dependencies:
npm install
Setup environment (if necessary): Create a .env file or set environment variables (e.g., API keys, credentials).
npx playwright test
For Allure Reporting (Optional): Generate Allure reports by running:
npm run allure:report
npm run allure:open

