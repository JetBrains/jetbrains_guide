---
type: TutorialStep
date: 2021-08-09
title: Introduction
technologies: [ ]
topics: [ ]
author: hs
subtitle: Introduction to Migrating JUnit 4 to JUnit 5
thumbnail: ./thumbnail.png
---

## Introduction
JUnit has been around for a long time, and many applications will have a large number of tests written using JUnit 4. JUnit 5 was released in 2017, and provides a lot of features that weren't in the previous version. Let's look at how to migrate existing JUnit 4 tests to JUnit 5

This tutorial will cover the configuration changes you need to make (using Maven) to tell IntelliJ IDEA to use JUnit 5. We will then step through using IntelliJ IDEA inspections to complete the migration where possible and look at other approaches for more challenging use cases where you cannot perform the migration automatically.

If you want to follow along with the tutorial, check out the `start-junit-migration` tag of our [sample code](https://github.com/JetBrains/intellij-samples/tree/start-junit-migration):

```
git clone --branch start-junit-migration https://github.com/JetBrains/intellij-samples.git
```

*Note: We'll be using IntelliJ IDEA Community Edition for all the steps in this tutorial.*

## Other Resources
- [IntelliJ IDEA Blog - Migrating from JUnit 4 to JUnit 5](https://blog.jetbrains.com/idea/2020/08/migrating-from-junit-4-to-junit-5/)
- [IntelliJ IDEA Blog - 2017.3 Junit 5 Support](https://blog.jetbrains.com/idea/2017/11/intellij-idea-2017-3-junit-support/)
- [IntelliJ IDEA Help - List of JUnit inspections in IntelliJ IDEA](https://www.jetbrains.com/help/idea/list-of-java-inspections.html#junit)
- [Github - Code used in blog, video and guide](https://github.com/JetBrains/intellij-samples/tree/b52a483d0d6fe612ea4ef3f727792a10795061f8)