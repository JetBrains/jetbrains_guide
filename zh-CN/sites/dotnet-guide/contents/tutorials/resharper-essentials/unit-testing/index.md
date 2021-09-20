---
type: TutorialStep
date: 2021-03-01
title: Writing and Running Unit Tests with ReSharper
technologies:
  - .net
  - csharp
topics:
  - testing
  - inspections
  - 分析
products:
  - resharper
  - dotcover
  - dottrace
  - dotmemory
author: khalidabuhakmeh
subtitle: Run, debug and profile tests, do continuous testing, and inspect code coverage.
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster.png
  url: https://youtu.be/Y2u0K_tLmcU
---

### Testing our Code

Unit tests help make sure code behaves as expected. ReSharper assists with writing and running tests. It has a [test runner](https://www.jetbrains.com/help/resharper/Unit_Testing__Index.html) that supports .NET testing frameworks like xUnit, NUnit, and MSTest, and several popular JavaScript/TypeScript frameworks like QUnit and Jasmine.

### Exploring Unit Tests

You can see all unit tests in [ReSharper's Unit Test Explorer](https://www.jetbrains.com/help/resharper/Unit_Testing_in_Solution.html). In this window, you can:

* Run Unit Tests
* Debug Unit Tests
* Profile Unit Tests (requires a [dotUltimate subscription](https://www.jetbrains.com/dotultimate/))
* Cover Unit Tests (requires a dotUltimate subscription)

You can manage how unit tests are displayed by clicking the **Group By** icons in the toolbar. By default, ReSharper groups unit tests by project and then namespace. Youcan also group by Target Framework, File System, and, if the unit test frameworks supports it, the test's Category.

From the tool window, you can start a new unit testing session. You can select which tests to run, and then **Create New Session** in the context menu.

### 键盘快捷键

When working with unit tests, keyboard shortcuts can help you be more productive. By default, unit test shortcuts will be a key combination that starts with <kbd>Ctrl+U</kbd> (for **U**nit testing). Some shortcuts are context-dependent, others are global. Here are some useful shortcuts to remember:

* <kbd>Ctrl+U, Ctrl+R</kbd> run a test, generally from the editor when within the scope of a unit test.
* <kbd>Ctrl+U, Ctrl+D</kbd> debug the unit test that's in scope.
* <kbd>Ctrl+U, Ctrl+L</kbd> run all unit tests.
* <kbd>Ctrl+U, Ctrl+Y</kbd> run the current test session.
* <kbd>Ctrl+U, Ctrl+U</kbd> run the previous run, whether it's a session, a group of tests, or a single unit test.

Too much to remember? There's always <kbd>Alt+Enter</kbd> to trigger the action menu, where you have the option to run, debug, profile, and cover a single test or test class.

### Session Management

In ReSharper, you can group unit tests in [Unit test Sessions](https://www.jetbrains.com/help/resharper/Using_Unit_Test_Sessions.html). A unit test session can contain tests of different supported frameworks, and from different projects. You can have multiple sessions, and run them separately. Tests can be included in different test sessions.

### Run Tests Until Failure

Sometimes, you may have flaky tests - tests that randomly succeed and randomly fail. To troubleshoot flaky tests with ReSharper, you can repeat a test until it fails. Whether an exception occurs in these cases, or an assertion fails, ReSharper will make it visible.

### Continuous Testing and Code Coverage

With [continuous testing](https://www.jetbrains.com/help/dotcover/Work_with_Continuous_Testing.html), the idea is to run tests immediately when code changes. There's no need to manually rebuild the project and re-run all tests after making changes: the impacted tests are run in the background automatically (the testing session is triggered by some explicit action, for example, saving changes or building the project). As a result, you get a much faster feedback loop.

ReSharper also provides coverage statistics using dotCover. By [covering Unit Tests](https://www.jetbrains.com/help/dotcover/Unit_Testing__Index.html), you can analyze which lines of code are covered by test logic, and which lines are not. Using this information, you can find out which parts of your code base may need more tests.

### Performance and Memory Profiling with dotTrace and dotMemory

You can profile your unit tests directly from the IDE. We recommend taking a look at the following articles:

* [Profile Unit Tests with dotTrace](https://www.jetbrains.com/help/resharper/Unit_Testing__Profiling_Unit_Tests.html)
* [Monitor Memory with dotMemory Unit](https://www.jetbrains.com/help/resharper/Monitoring_Memory_with_dotMemory_Unit.html)

Using these approaches, you can assert an application meets certain performance guidelines. You can also write regression tests for performance problems or memory allocations problems, and ensure these don't come back.

### 另请参阅

- [Unit Testing in ReSharper](https://www.jetbrains.com/help/resharper/Unit_Testing__Index.html)
- [Speed up creation of unit tests](https://www.jetbrains.com/help/resharper/Speed_up_Creation_of_Unit_Tests.html)
- [Unit Test Sessions](https://www.jetbrains.com/help/resharper/Using_Unit_Test_Sessions.html)
- [Unit testing memory leaks using dotMemory Unit](https://blog.jetbrains.com/dotnet/2018/10/04/unit-testing-memory-leaks-using-dotmemory-unit/)
- [xUnit](https://xunit.github.io/)
- [NUnit](https://nunit.org/)
- [MSTest](https://docs.microsoft.com/en-us/previous-versions/ms243147(v=vs.90)?redirectedfrom=MSDN)