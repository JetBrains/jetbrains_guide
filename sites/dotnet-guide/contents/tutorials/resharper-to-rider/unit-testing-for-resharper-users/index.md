---
type: TutorialStep
date: 2021-01-29
title: Unit Testing For ReSharper Users
technologies: [.net,csharp]
products: [rider,resharper]
topics: [ide]
author: khalidabuhakmeh
subtitle: Learn the basics of the unit testing in Rider from a Visual Studio + ReSharper user's perspective.
thumbnail: ./thumbnail.png
---

Unit testing is an essential tool in modern software development toolkits. Rider and ReSharper share many of the same features, and in the tutorial, we'll cover the crucial similarities between the two products. We believe Visual Studio + ReSharper users will have few issues writing, running, and debugging unit tests in Rider; after all, the two products share the same engine.

Let's get into it!

<!--more-->

## General Overview

Rider can run all your favorite unit testing frameworks like **[NUnit](https://nunit.org/)**, **[XUnit](https://xunit.net/)**, and **[MSTest](https://docs.microsoft.com/en-us/dotnet/core/testing/unit-testing-with-mstest)** by utilizing the [`Microsoft.NET.Test.Sdk`](https://www.nuget.org/packages/Microsoft.NET.Test.Sdk/16.9.0-preview-20210127-04) package. The presence of this package allows Rider to discover test fixtures and individual unit tests. Like ReSharper, Rider will denote discovered test structures in the gutter of a unit test file, except that Rider uses a different set of icons. Rider uses green **play** buttons, while Resharper uses **circle** icons.

![Comparison between ReSharper and Rider unit testing icons](./editor-comparison.png)

The difference working within the editor with individual test files is very similar. Where the experience differs is in the overview of all unit tests in an existing solution. ReSharper users would typically utilize two windows within Visual Studio: **Unit Test Explorer**, **Unit Test Sessions**.  Within Rider, users will find a consolidated experience in the **Unit Tests** tool window.

![Comparison between Unit Test Explorer windows and Rider Unit Tests](./unit-tests-explorer-comparison.png)

Many of the same abilities are present across the **Unit Test Explorer** tool window in ReSharper and the **Unit Tests** tool window in Rider:

- Run Unit Tests
- Debug Unit Tests
- Cover Unit Tests
- Profile Unit Tests
- Grouping/Filtering Options

Rider supports a vertical view with many variants of running a test hidden under the **play** button's sub-menu.

![Rider unit test tool window vertical action bar](./rider-vertical-runner-bar.png)

## Writing and Running A Test

Whether you practice strict test-driven development or other forms of testing, the unit testing loop basics start with writing a unit test and ends with executing said unit test. Let's start with the most basic **NUnit** test.

```c#
[Test]
 public void Test1()
 {
   Assert.Pass();
 }
```

Running the newly authored test in ReSharper will create a new unit test session and open the **Unit Test Sessions** tool window.

![running unit tests with resharper and visual studio](./resharper-unit-tests.png)

Running the same test in Rider will create a new unit test session tab within the **Unit Tests** tool window.

![running unit tests with rider](./rider-run-unit-tests.png)

While the UI is slightly different between ReSharper and Rider, developers can find many of the same features by exploring the icons found in Rider's **Unit Tests** tool window.

## Debugging, Coverage, and Profiling

User's with a **[dotUltimate license](https://jetbrains.com/dotUltimate)** will also have access to integrated tools like **[dotCover](https://jetbrains.com/dotCover)**, **[dotMemory](https://jetbrains.com/dotMemory)**, and **[dotTrace](https://jetbrains.com/dotTrace)**.  All these tools are available via the <kbd>Alt+Enter</kbd> shortcut menu, and within the **Unit Tests** window. Within Visual Studio, hitting <kbd>Alt+Enter</kbd> over our unit test reveals several options. Rider users will see the same options listed within the IDE, in a slightly different order:

- **Run**
- **Debug**
- **Cover**
- **Profile**
- **Run under dotMemory Unit**

![alt+enter menu from within Visual Studio an ReSharper](./resharper-alt-enter-menu.png)

## Conclusion

The unit testing experiences between Rider and ReSharper are almost identical, and developers transitioning to Rider as their full-time IDE will find it enjoyably familiar. Rider supports many of the popular unit testing frameworks, so users should have no issues running their unit test runner of choice. Additionally, dotUltimate license holders get more as integrations with **dotCover**, **dotMemory**, **dotCover** and **dotTrace** take unit testing to a whole new level. Unit testing is a cornerstone of modern software development, and with Rider, it's never been more powerful.

Speaking of a whole new level, [check out our tutorial series on unit testing in Rider](/tutorials/rider-essentials/unit-testing/). You'll learn about the power of **continuous testing** and **code coverage**.

### See Also

- [JetBrains Rider](https://jetbrains.com/rider)
- [JetBrains ReSharper](https://jetbrains.com/resharper)
- [Unit Testing with Rider](/tutorials/rider-essentials/unit-testing/)
- [Getting Started With Unit Testing](https://www.jetbrains.com/help/rider/Getting_Started_with_Unit_Testing.html)
- [Unit Testing](https://www.jetbrains.com/help/rider/Unit_Testing__Index.html)