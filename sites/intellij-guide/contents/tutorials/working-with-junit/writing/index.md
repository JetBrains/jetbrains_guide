---
type: TutorialStep
date: 2021-01-01
title: Writing Junit5 Tests
technologies: [java]
topics: [testing]
author: hs
subtitle: How to use IntelliJ IDEA to write JUnit 5 Tests
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/we3zJE3hlWE
---

# Writing Tests with JUnit
- [Original JetBrains Blog](https://blog.jetbrains.com/idea/2020/09/writing-tests-with-junit-5/)

In this tutorial we’re going to look at features of JUnit 5 that can make it easier for us to write effective and readable automated tests.

1. [Setting up Gradle for JUnit5](#setting-up-gradle-for-junit-5)
2. [Creating and Running a Test](#creating-and-running-a-test)
3. [Optional Configuration](#optional-configuration) 
4. [Disabling or Ignoring Tests](#disabling-or-ignoring-tests)
5. [Helpful test names for display](#helpful-test-names-for-display)
6. [IDE Tip: Live Templates](#ide-tip-live-templates)
7. [Multiple Assertions](#multiple-assertions)
8. [Test Assumptions](#test-assumptions)
9. [Data Driven Tests](#data-driven-tests)
10. [Checking Exceptions](#checking-exceptions)
11. [Grouping tests with @Nested](#grouping-tests-with-nested)
12. [Top Shortcuts](#top-shortcuts)
13. [Other Resources](#other-resources)

## Setting up Gradle for JUnit 5
[Video Snippet](https://youtu.be/we3zJE3hlWE?t=11)
- Adding the JUnit 5 dependency to your Gradle build file
- Telling Gradle to use JUnit 5
- Applying changes to your Gradle configuration

## Creating and Running a Test
[Video Snippet](https://youtu.be/we3zJE3hlWE?t=102) 

- Creating an [example JUnit 5 test](https://github.com/trishagee/junit5-showcase/blob/2a40f1715edecd50c638f6d6c1d0924c75002698/src/test/java/com/mechanitis/demo/junit5/ExampleTest.java)
- Generating a test method in the test class
- Using the JUnit 5 Assertions class
- Running the test class and viewing the [run tool window](https://www.jetbrains.com/help/idea/run-tool-window.html)
- Using IntelliJ IDEA to help you reduce class visibility
- Viewing failing tests

## Optional Configuration
[Video Snippet](https://youtu.be/we3zJE3hlWE?t=224)
- Configuring [parameter hints] for tests(https://www.jetbrains.com/help/idea/viewing-reference-information.html?#parameter-hints-exceptions-blacklist)
- Configuring how IntelliJ IDEA [runs unit tests with Gradle](https://www.jetbrains.com/help/idea/gradle.html?#gradle_settings_access)

## Disabling or Ignoring Tests
[Video Snippet](https://youtu.be/we3zJE3hlWE?t=349)
- [Disabling tests](https://junit.org/junit5/docs/current/user-guide/#writing-tests-disabling) with JUnit 5 `@Disabled` annotation

## Helpful test names for display
[Video Snippet](https://youtu.be/we3zJE3hlWE?t=391)
- [Making tests more readable](https://junit.org/junit5/docs/current/user-guide/#writing-tests-display-names) with JUnit 5 `@DisplayName` annotation

## IDE Tip: Live Templates
[Video Snippet](https://youtu.be/we3zJE3hlWE?t=434)
- Using [live templates] to create new test methods exactly how we like them](https://www.jetbrains.com/help/idea/using-live-templates.html)

## Multiple Assertions
[Video Snippet](https://youtu.be/we3zJE3hlWE?t=513)
- Proving that [more than one thing](https://junit.org/junit5/docs/current/user-guide/#writing-tests-assertions) works with JUnit 5 `assertAll` assertion

## Test Assumptions
[Video Snippet](https://youtu.be/we3zJE3hlWE?t=685)
- Writing [JUnit 5 assumptions](https://junit.org/junit5/docs/current/user-guide/#writing-tests-assumptions)

## Data Driven Tests
[Video Snippet](https://youtu.be/we3zJE3hlWE?t=773)
- Using [parameterised tests](https://junit.org/junit5/docs/current/user-guide/#writing-tests-parameterized-tests) to pass data in as test parameters 
- Running parameterised tests and understanding the results

## Checking Exceptions
[Video Snippet](https://youtu.be/we3zJE3hlWE?t=917)
- Checking that [exceptions are correctly thrown] in JUnit 5 with the(https://junit.org/junit5/docs/current/user-guide/#writing-tests-assertions) `assertThrows` annotation

## Grouping tests with @Nested
[Video Snippet](https://youtu.be/we3zJE3hlWE?t=1031)
- Using [nested tests](https://junit.org/junit5/docs/current/user-guide/#writing-tests-nested) in JUnit 5

## Top shortcuts
This blog post includes some shortcuts, but many more were demonstrated in the video and not all of them were mentioned here:

`⌘[ or Ctrl+Alt+left arrow` to navigate back – makes it easy to navigate between all the places you’ve been while writing code and running tests

`⌘[ or Ctrl+Alt+left arrow` to navigate back – makes it easy to navigate between all the places you’ve been while writing code and running tests

`⌘⇧T or Ctrl+Shift+T` to navigate between test and test subject. This is explored in the Top 5 Navigation Tips (blog and video).

`⌃⇧J or Ctrl+Shift+J` to join Lines to create compiling code.

`⇧⌘⏎ or Ctrl+Shift+Enter` to complete Statement close off the brackets and statement, and it also formats the code too.

`⌃⇧Space or Ctrl+Shift+Space` to use smart completion

## Other Resources
- [JUnit docs](https://junit.org/junit5/docs/current/user-guide/)
- [Migrating from JUnit 4 to JUnit 5 – blog, with embedded video](https://blog.jetbrains.com/idea/2020/08/migrating-from-junit-4-to-junit-5/)
- [Unit Testing and Coverage in IntelliJ IDEA (video)](https://youtu.be/QDFI19lj4OM)
- [Editor Tips & Tricks (blog and video)](https://blog.jetbrains.com/idea/2020/08/editor-tips-and-tricks-in-intellij-idea/)
- [Top 15 IntelliJ IDEA Shortcuts Blog (blog and video)](https://blog.jetbrains.com/idea/2020/03/top-15-intellij-idea-shortcuts/)
- [Code used in blog, video and guide](https://github.com/trishagee/junit5-showcase)
