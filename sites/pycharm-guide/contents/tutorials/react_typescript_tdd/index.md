---
date: 2018-10-07
title: React, TypeScript, and TDD
technologies: [typescript, jest, react]
topics: [testing]
author: pwe
subtitle: How to write React applications in TypeScript using TDD, highlighting features of the IDE
thumbnail: ./thumbnail.png
tutorialItems:
  - /tutorials/react_typescript_tdd/project_setup/
  - /tutorials/react_typescript_tdd/project_cleanup/
  - /tutorials/react_typescript_tdd/testing/
  - /tutorials/react_typescript_tdd/nodejs_debugging/
  - /tutorials/react_typescript_tdd/chrome_debugging/
  - /tutorials/react_typescript_tdd/tsx_es6/
  - /tutorials/react_typescript_tdd/functional_components/
  - /tutorials/react_typescript_tdd/props/
  - /tutorials/react_typescript_tdd/class_props/
  - /tutorials/react_typescript_tdd/class_state/
  - /tutorials/react_typescript_tdd/rich_events_and_testing/
  - /tutorials/react_typescript_tdd/presentation_components/
---

ReactJS is wildly popular and thus wildly supported. TypeScript is increasingly popular, 
and thus increasingly supported.

The two together? Not as much. Given that they both change quickly, it's
hard to find accurate learning materials.

React+TypeScript, with PyCharm? That three-part combination is the topic
of this series. We'll show a little about a lot. Meaning, the key steps
to getting productive, in PyCharm, for React projects using TypeScript. Along
the way we'll show test-driven development and emphasize tips-and-tricks in
the IDE.

## Project Setup

- Add a screenshot of using the IDE to create, instead of npx

- `npm start` instead of `npm run-script start`

- "Welcome to React" is no longer there, instead, edit the <p>

- Before "PyCharm Professional puts"...remind them to stop the terminal server

- Update the contents of package.json

- Remove the "mark build as excluded" as WebStorm does it automatically
    * Though perhaps the other IDEs don't?
    
- Upper-case "jest" in the link

- Mention to cancel the test runner before launching in tool window

- Update the `it` to match the new tests

- Change `toBe` to be `toEqual`

- Change reference to Jest and Enzyme tutorial section title

## Project Cleanup

- Perhaps split out linting and formatting into its own section

- "ESLint is enabled" in the status message


