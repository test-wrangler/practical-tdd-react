# Practical TDD for React

Practical TDD for React is a workshop focused on teaching a _practical_ approach to TDD. I really want to emphasize the practical aspect of it. We won't be doing what most people would consider a purist/conventional approach to TDD. Instead, we're going to spend a lot of time looking at workflows, tools, techniques, and tradeoffs that I believe will make TDD much more approachable for you to start practicing in your day-to-day coding and consequently, make your time more productive and enjoyable. :nerd_face: If you already use TDD or automated testing when writing code, then I believe this workshop will offer some new perspective for you on how to make your TDD workflow more productive. :rocket:

## Prerequisites

Please complete the items on the list below before the workshop. This will allow us to spend as much time as possible on the good stuff. :pizza: Also, I highly recommend working through the [Resources](#Resources) in this README prior to the workshop. The workshop will be more productive for you if you have at least a base level familiarity with the tools that we're using. Please reach out to me at don@testwrangler.io or open an issue on this repo if you run into any problems or have any feedback. I look forward to seeing you at the workshop! :fireworks:

1. Install all of the [Dependencies](#dependencies)
2. [Clone](https://help.github.com/en/articles/cloning-a-repository) the repo locally.
3. Complete the [Getting Started](#getting-started) section.
4. (Optional, but recommended) [Sign up for an account on CircleCI](https://circleci.com/).
5. (Optional, but recommended) [Setup your forked repo on CircleCI](https://circleci.com/docs/2.0/getting-started/).

## Dependencies

Please make sure you have the following installed before beginning:

- Node 10.16.x / npm 6.9.x. I highly recommend using [nvm](https://github.com/nvm-sh/nvm) to manager your Node versions.
- [yarn](https://yarnpkg.com/en/) 1.17.x
- [git](https://git-scm.com/): 2.22.x (a different version of git should work fine, but try installing this version if you run into issues).

## Getting Started

1. Clone the repo.
2. Install the dependencies: `yarn`.
3. Run the React component tests: `yarn test`.
4. Run the app: `yarn start`.
5. With the app still running from the previous step, run the Cypress tests: `yarn cypress run`.

## Resources

Cypress is an awesome tool for writing flexible E2E and integration tests. If you don't know what E2E and integration tests are, don't worry - we'll go over them in the workshop. Getting familiar with Cypress would still be very beneficial for you. You can check out the docs [here](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell). Egghead.io also has a [great course](https://egghead.io/courses/test-production-ready-apps-with-cypress) that walks you through Cypress in more depth.

React Testing Library is a library developed by Kent Dodds. It's focus is on providing tools to make your React component tests act more like a user. General intro [here](https://testing-library.com/docs/intro) and React Testing Library intro [here](https://testing-library.com/docs/react-testing-library/intro). Egghead.io again has a [great course](https://egghead.io/lessons/react-confidently-ship-production-react-apps) for this as well.

You can start the local development server, wait for port 3000 to respond and open Cypress with a single command thanks to [start-server-and-test](https://github.com/bahmutov/start-server-and-test)

```shell
npm run dev
```

Source code for the application is instrumented using [@cypress/instrument-cra](https://github.com/cypress-io/instrument-cra), and code coverage reports from the end-to-end tests are saved using [@cypress/code-coverage](https://github.com/cypress-io/code-coverage) plugin. After running Cypress tests open the HTML report.

```shell
open coverage/lcov-report/index.html
```

You can also store HTML and other reports from the `coverage` folder as static test artifacts on CircleCI using `store_artifacts` command.

```
- store_artifacts:
    path: coverage
```

For more details, see [Cypress code coverage guide](https://on.cypress.io/code-coverage)

## Project Structure

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Please see the [docs](https://facebook.github.io/create-react-app/docs) for info on anything related to create-react-app.
