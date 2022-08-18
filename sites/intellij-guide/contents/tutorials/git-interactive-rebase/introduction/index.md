---
type: TutorialStep
date: 2022-08-12
title: Introduction to Git interactive rebase
technologies: []
topics: []
author: md
subtitle: What is Git interactive rebase and why would you use it?
thumbnail: ./thumbnail.png

---

This guide tutorial will cover how to clean up your Git commit history with Git interactive rebase, both via the UI and from the command line.

Git interactive rebase allows you to change individual commits, squash commits together, drop commits or change the order of the commits. This allows you to clean up your Git commit history to make it linear and meaningful, which can make it easier to understand the history of the project in the future.

Open the Git window in IntelliJ IDEA using **⌘+9** on Mac (or **Alt+9** on Windows & Linux). In the Git log window we can see the commits that were made to the project. 

We will use a Git demo project available on [GitHub](https://github.com/mlvandijk/gitdemo). We use [TDD (Test Driven Development)](https://martinfowler.com/bliki/TestDrivenDevelopment.html) to add a new feature. We will start by adding a failing test, writing the minimum of code we need to get that test to pass and finally do some refactoring. Even though we made the necessary changes in multiple commits, we don't need to keep all these individual commits for future reference.