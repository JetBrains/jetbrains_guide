---
type: TutorialStep
date: 2020-12-01
title: Testing code
technologies:
  - asp.net
  - javaScript
topics:
  - web
  - testing
products:
  - rider
author: pwe
subtitle: Get started with testing. We will use Jest as an example.
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster.png
  url: https://youtu.be/HE0g3dOk6lU
---

Testing is an important part of web development, and the WebStorm features in Rider make this fun and productive by bringing test writing and running into the IDE.

This project has one file of code and one file for tests. In the running section and debugging section, we showed executing a file with a context menu. Let’s do the same, and run this test code under this project’s test runner, Jest.

As with running and debugging, we get a custom tool window for the output, showing one test passed and one test failed, with information about the expected vs. received. Just like before, the IDE created a temporary run configuration. Since this project uses Jest, it’s a Jest configuration type. Other test runners, such as Karma and Mocha, are supported:

The test tool window has lots of useful features. For example, you can rerun all or only failed tests, view passed tests, and import or export test results.

You don’t have to use the test tool window to see test information. Failures are reported inline, both in the gutter and by hovering, which gives a popup explaining why the test failed. From there we can run this failed test under the debugger, to see what’s wrong. A breakpoint will be added to stop execution on that line. You can look at the values in scope and all the other debugging features, then fix the problem.

Let’s re-run the test, but slightly differently this time. See the icon on the left of the test in the editor? This icon not only shows you the test status for the tests you’ve run recently, but also lets you quickly run that one test in various ways. If I click on the shield icon, I can quickly build a code coverage report for this test. The coverage tool watches which lines of my code get executed by all the tests, then flags lines that weren’t executed.

This report shows how many files were covered with tests, including the percentage of lines that were covered in those files. This information is also shown in the project tool window, as well as color-coding in the gutter of the file indicating coverage.

### 另请参阅

- [Sample code (ZIP file with 3 projects)](https://raw.githubusercontent.com/JetBrains/jetbrains_guide/master/sites/dotnet-guide/demos/tutorials/web-fundamentals/rider-web-fundamentals.zip) used throughout this tutorial.
- [.NET Guide - Testing](https://www.jetbrains.com/dotnet/guide/topics/testing/)
- [WebStorm Guide - Testing](https://www.jetbrains.com/webstorm/guide/topics/testing/)
- [Unit Testing in ReSharper/Rider](https://www.jetbrains.com/help/rider/Unit_Testing__Index.html)
