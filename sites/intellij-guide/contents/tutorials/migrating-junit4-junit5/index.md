---
date: 2021-01-11
title: Migrating JUnit 4 to JUnit 5
technologies: [java]
topics: [testing]
author: hs
subtitle: Migrating and updating your JUnit 4 test suite to JUnit 5
thumbnail: ./thumbnail.png
tutorialItems:
  - /tutorials/migrating-junit4-junit5/adding-dependencies/
  - /tutorials/migrating-junit4-junit5/using-junit-inspections/
  - /tutorials/migrating-junit4-junit5/automatically-migrate-all-tests/
  - /tutorials/migrating-junit4-junit5/manual-migration-more-complex-cases/
  - /tutorials/migrating-junit4-junit5/other-approaches-to-consider/
  - /tutorials/migrating-junit4-junit5/final-steps/
---

JUnit has been around for a long time, and many applications will have a large number of JUnit tests written using JUnit 4. JUnit 5 was released in 2017, and provides a lot of features that weren't in the previous version. Let's look at how to migrate existing JUnit 4 tests to JUnit 5

This tutorial will cover the configuration changes you need to make (using Maven) to tell IntelliJ IDEA to use Junit 5. We will then step through using IntelliJ IDEA inspections to complete the migration where possible and look at other approaches for more challenging use cases where you cannot perform the migration automatically.

*Note: We'll be using IntelliJ IDEA Community Edition for all the steps in this tutorial.*

## Top shortcuts
This blog post includes some shortcuts, but many more were demonstrated in the video and not all of them were mentioned here:

`⌃⏎ or Alt+Insert` to generate a new dependency in your Maven POM file - saves you typing it and gives you the correct options

`⇧⌘I or SHIFT+CTRL+O` to reload changes to your Maven configuration following changes - necessary for changes to take effect

`⌘F9 or Ctrl+F9` to rebuild a project

`⌃⇧R or CTRL+SHIFT+F10` to run all tests in your project

`⌘K or CTRL+K` to commit changes locally

`⌘,(comma) or Ctrl+Alt+S` to load IntelliJ IDEA preferences / settings

`⌫ or Delete` to exclude tests from running and `⇧⌫ or Shift+Delete` to re-include previously excluded tests

`⌘⇧A or Ctrl+Shift+A` to open the Find Action dialog

`⌃⇧F or CTRL+SHIFT+F` to open the Find in Path dialog

`CTRL twice` to load the Run Anything window

## Other Resources
- [Original JetBrains Blog](https://blog.jetbrains.com/idea/2020/08/migrating-from-junit-4-to-junit-5/)
- [IntelliJ IDEA 2017.3 Junit 5 Support](https://blog.jetbrains.com/idea/2017/11/intellij-idea-2017-3-junit-support/)
- [List of JUnit inspections in IntelliJ IDEA](https://www.jetbrains.com/help/idea/list-of-java-inspections.html#junit)
- [Code used in blog, video and guide](https://github.com/JetBrains/intellij-samples/tree/b52a483d0d6fe612ea4ef3f727792a10795061f8)
