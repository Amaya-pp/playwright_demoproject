# playwright_demoproject
A US real-estate property search site for discovering residential properties and requesting viewings.

This repository contains 10  automated testcase using Playwright to verify the application's core functionality across supported browsers.

🚀 Tech Stack
Playwright –Functional testing

JavaScript – Test development

Node.js – Runtime environment

GitHub – Source control and test reporting

📋 Prerequisites
Before running the tests, make sure you have:

Node.js installed

npm installed

Access to the HomeScout application

Git installed (optional, for cloning the repository)

📦 Installation

Install the project dependencies:

npm install

Install Playwright browsers:

npx playwright install

🧪 Running Tests
Run all Playwright tests:

npx playwright test

Run tests in headed mode:

npx playwright test --headed

Run a specific test file:

npx playwright test homepage.spec.js --headed   

🔍 Test Coverage
The HomeScout Playwright test suite covers key user journeys such as:

1. Property Search
● Users can search for properties using a US city name or ZIP code.
● The search is not case-sensitive.
● If no properties match, the application clearly indicates that no properties were found.
2. Property Filters
● Users can filter by property type: House
● Users can filter by a minimum number of bedrooms 2+.
● Multiple filters work together.
3. Sorting
● Users can sort the results by price, low to high or high to low.
4. Saved Properties
● Users can save a property.
● Saving the same property more than once does not increase the saved-property count.
5. Schedule a Viewing
● Users can request a viewing from a property card.
● Full name, a valid email address, and a preferred viewing date are mandatory.
● The preferred viewing date must not be in the past.

📁 Project Structure
A recommended project structure is:

playwright_demoproject/
│
├── tests/
│   └── homepage.spec.js
│
├── pages/
│   └── homepage.js
│
├── playwright.config.js
├── package.json
├── package-lock.json
└── README.md

🧩 Page Object Model
The tests can use the Page Object Model (POM) to keep test cases maintainable and reusable.

📊 Test Reports
After running the tests, generate and view the HTML report:

npx playwright show-report

🔎 Debugging Tests
Run a test with the Playwright Inspector:

npx playwright test --debug

🎯 Testing Goals
The primary goals of the HomeScout Playwright test suite are to:

Validate critical user journeys

Verify property search functionality

Verify property viewing requests

Validate other features like save 

Provide reliable automated  testing

📄 License
This project is intended for testing and demonstration purposes.

