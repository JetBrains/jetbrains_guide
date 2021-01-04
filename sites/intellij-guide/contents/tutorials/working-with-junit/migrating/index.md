---
type: TutorialStep
date: 2021-01-01
title: Migrating JUnit4 to Junit5
technologies: [java]
topics: [testing]
author: hs
subtitle: How to use IntelliJ IDEA to migrate from JUnit4 to Junit5
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/F8UTTTDtbH0
---

# Migrating from Junit 4 to Junit 5
- [Original JetBrains Blog](https://blog.jetbrains.com/idea/2020/08/migrating-from-junit-4-to-junit-5/)

JUnit has been around for a long time, and many applications will have a large number of JUnit tests written using JUnit 4. JUnit 5 was released in 2017, and provides a lot of features that weren't in the previous version. Let's look at how to migrate existing JUnit 4 tests to JUnit 5

1. [Adding the JUnit 5 Dependencies](#adding-the-junit-5-dependencies)
2. [Using IntelliJ IDEA Inspectionsto Migrate All Tests](#using-intellij-idea-inspectionshttpswwwjetbrainscomhelpideacode-inspectionhtmlaccess-inspections-and-settings-to-migrate-all-tests)
3. [Automatically Migrate all Tests](#automatically-migrate-all-tests)
4. [Manual Migration for More Complex Cases](#automatically-migrate-all-tests)
5. [Other Approaches to Consider](#other-approaches-to-consider)
6. [Final Steps](#final-steps)
7. [Top Shortcuts](#top-shortcuts)
8. [Other Resources](#other-resources)

## Adding the JUnit 5 Dependencies
[Video snippet](https://youtu.be/F8UTTDtbH0?t=19) 
- Understanding the structure of a typical JUnit 4 Test (to be migrated)
- Configuring our [Maven POM file](https://github.com/JetBrains/intellij-samples/blob/9afc1e77d269e0d4a0cbcf57f9862e9b321f2e68/standard-java/pom.xml) to run JUnit 4 and JUnit 5 tests with the correct scope
- Checking and running our test suite prior to migration and viewing them using the [IntelliJ IDEA Run window](https://www.jetbrains.com/help/idea/run-tool-window.html)

## Using [IntelliJ IDEA Inspections](https://www.jetbrains.com/help/idea/code-inspection.html#access-inspections-and-settings) to Migrate All Tests
[Video snippet](https://youtu.be/F8UTTTDtbH0?t=247)
- Enabling the _JUnit 4 can be JUnit 5_ inspection (available from Java 8 with the dependencies from the previous step set up)
- Using this IntelliJ IDEA inspection to migrate JUnit 4 Tests
- Understanding the [Refactoring Preview window](https://www.jetbrains.com/help/idea/refactoring-source-code.html#refactoring_preview)
- Refactor JUnit 4 tests in one class to JUnit 5 and understand how they are mapped and run
- Rerunning the tests and verifying that the JUnit 5 tests are performing the same function as they were with JUnit 4

## Automatically Migrate all Tests
[Video snippet](https://youtu.be/F8UTTTDtbH0?t=452)
- Using IntelliJ IDEA Package and Class Migration to migrate the project from JUnit 4 to JUnit 5
- Rerunning the tests and verifying the migration
- Manually comparing files before we commit them to confirm the changes are as we expect

## Manual Migration for More Complex Cases
[Video snippet](https://youtu.be/F8UTTTDtbH0?t=566)
- Removing the [dependency on the JUnit Vintage Engine](https://github.com/JetBrains/intellij-samples/blob/901b5f824e5ee2bbeb3f4b6eb213a237a70b4399/standard-java/pom.xml) from the Maven POM file to see JUnit 4 tests
- Recompiling the project to see which tests relied on the JUnit Vintage Engine and need to be migrated manually
- Updating imports for Hamcrest by statically importing it and then optimizing the imports
- Managing migrations from JUnit 3 tests 
- Removing any outstanding references to JUnit 4

## Other Approaches to Consider
[Video snippet](https://youtu.be/F8UTTTDtbH0?t=771)
- Using Find and Replace or [Structure Search](https://www.jetbrains.com/help/idea/structural-search-and-replace.html)
- Using [Live Templates](https://youtu.be/ffBeoE6NBSs) for common code
- Configuring Automatic Imports

## Final Steps
- Removing the JUnit Vintage Engine Dependency from the Maven POM file
- Confirming the migration was successful

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
- [IntelliJ IDEA 2017.3 Junit 5 Support](https://blog.jetbrains.com/idea/2017/11/intellij-idea-2017-3-junit-support/)
- [List of JUnit inspections in IntelliJ IDEA](https://www.jetbrains.com/help/idea/list-of-java-inspections.html#junit)
- [Code used in blog, video and guide](https://github.com/JetBrains/intellij-samples/tree/b52a483d0d6fe612ea4ef3f727792a10795061f8)