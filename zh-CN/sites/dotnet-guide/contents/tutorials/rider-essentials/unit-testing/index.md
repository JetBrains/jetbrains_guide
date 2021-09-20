---
type: TutorialStep
date: 2020-07-15
title: Unit Testing with Rider
technologies:
  - .net
  - csharp
topics:
  - testing
  - inspections
products:
  - rider
  - dotcover
author: maartenba
subtitle: Learn how Rider can help make sure code behaves as expected, with continuous testing and code coverage.
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster.png
  url: https://youtu.be/lr0I5w2apSI
---

### Testing our Code

Testing and test-driven development are development practices that many teams use. Rider comes with a test runner for .NET testing frameworks like xUnit, NUnit, and MSTest. For JavaScript and TypeScript, the test runner supports Karma, Jest, and more.

Unit tests can be run from the editor gutter, or using the unit test tool window. From there, you can group tests into a unit test session, and even refactor them.

### Continuous Testing and Code Coverage

The idea of [continuous testing](https://www.jetbrains.com/help/rider/Work_with_Continuous_Testing.html) is that you have test results instantly, as soon as you've changed your code. There is no need to manually rebuild the project and re-run all tests after making changes. Rider keeps track of which tests are affected by a code change, and runs them in the background on save (or build).

Using the [code coverage tool window](https://www.jetbrains.com/help/rider/Unit_Tests_Coverage_window.html), you can see which lines of code are covered by test logic (or not), and helps you figure out which parts of your code base may need more tests to cover all cases.

### 另请参阅

- [Unit Testing in ReSharper/Rider](https://www.jetbrains.com/help/rider/Unit_Testing__Index.html)
- [Getting Started with Unit Testing](https://www.jetbrains.com/help/rider/Getting_Started_with_Unit_Testing.html)
- [xUnit](https://xunit.github.io/)
- [NUnit](https://nunit.org/)
- [MSTest](https://docs.microsoft.com/en-us/previous-versions/ms243147(v=vs.90)?redirectedfrom=MSDN)