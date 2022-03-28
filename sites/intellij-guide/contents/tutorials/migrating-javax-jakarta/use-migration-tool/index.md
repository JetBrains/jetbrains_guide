---
type: TutorialStep
date: 2022-03-30
title: Using IntelliJ IDEA's migration tool
technologies: []
topics: []
author: hs
subtitle: Migrating to Java EE with IntelliJ IDEA's refactoring  tool
thumbnail: ./thumbnail.png
---

One common question you might have at this stage is "why don't I just do a find and replace for `javax` to `jakarta`?" The answer is that not all `javax` packages have been migrated to the `jakarta` namespace. For example, `javax.transaction.xa` package is not using Jakarta.

We're going to use IntelliJ IDEA's migration tool which was introduced in IntelliJ IDEA 2021.2 for the next steps. From the menu, navigate to **Refactor** > **Migrate Packages and Classes** > **Java EE to Jakarta EE.**

![IntelliJ IDEA Refactoring Tool](javax-to-jakarta-migration-tool.png)

You can select the scope here, for example *MyWebApp*. This also allows you to go module by module if you’re working with a larger, more realistic application. Press **Run** to get a preview of the refactorings.

![IntelliJ IDEA Refactoring Preview](refactor-preview.png)

Press **Do Refactor**. Your Java classes should be fixed now and not showing any errors. Now let's rebuild our application with **⌘F9** (macOS), or **Ctrl+F9** (Windows/Linux) and then run it with **⌃R** (macOS), or **Shift**+**F10** (Windows/Linux).

Now you should be able to navigate to [localhost:8080/MyWebApp](localhost:8080/MyWebApp) again and see the application running once more without any errors.