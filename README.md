# AngularTesting

The goal of this repository is to have a collection of common testing scenarios with Angular and to demonstrate different testing layers in [Testing Pyramid](https://martinfowler.com/articles/microservice-testing/#conclusion-test-pyramid) or [Testing Trophy](https://kentcdodds.com/blog/unit-vs-integration-vs-e2e-tests) with Angular. I'm happy for every contribution/suggestion 😃.

## Different Layers of Tests

* Unit/Integration Tests - using [Angular Testing Library](https://testing-library.com/docs/angular-testing-library/intro).
* Accessibility Testing on Angular components - using [Jest-Axe](https://github.com/nickcolley/jest-axe).
* Consumer Driven Contract Tests - using [Pact](https://docs.pact.io/).
* End to End Tests - using [Cypress](https://www.cypress.io).


## Development server

Run `ng serve` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.