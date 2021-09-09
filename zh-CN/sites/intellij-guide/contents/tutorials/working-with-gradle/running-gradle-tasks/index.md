---
type: TutorialStep
date: 2021-05-15
title: Running Gradle tasks
technologies:
  - gradle
topics:
  - build
author: tg
subtitle: There are several convenient ways to run Gradle tasks from IntelliJ IDEA.
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/6V6G3RyxEMk?start=824
---

We saw earlier that we can navigate to a specific [Gradle task](https://docs.gradle.org/current/userguide/more_about_tasks.html) in a specific Gradle project in the [Gradle Tool Window](https://www.jetbrains.com/help/idea/jetgradle-tool-window.html), and we can double-click that task to get IntelliJ IDEA to run it.

![Select a Gradle task to run it](./gradle-task.png)

We can also click on the elephant at the top of the Gradle tool window to run any Gradle task.

![Gradle elephant button](./elephant.png)

IntelliJ IDEA populates this with common Gradle tasks and ones we've run recently.

![Run Gradle command](./run-gradle-command.png)

This can be a good way to run multiple gradle tasks, like you would from the command line. For example, running `gradle clean build` to make sure everything is working as expected before committing changes.

You may have noticed this actually uses the [Run Anything](https://www.jetbrains.com/help/idea/jetgradle-tool-window.html) dialog, which we can bring up by pressing Ctrl twice. Press **⌃⌃** (macOS), or **Ctrl+Ctrl**  (Windows/Linux), type "gradle" followed by the gradle task name or names.

We can, of course, run Gradle commands from the terminal window inside IntelliJ IDEA. Open this with **⌥F12** (macOS), or **Alt+F12**  (Windows/Linux).

![Open the terminal window](./terminal.png)

If we type a Gradle command, IntelliJ IDEA highlights it. This means that this is a command that can be run inside the IDE, it doesn't have to be run from the command line.

![Terminal command highlighted](./terminal-ide-command.png)

If we press **Enter**, it will be run from the command line like we expect. If we press **⌘⏎** (macOS), or **Ctrl+Enter**  (Windows/Linux), this command will be run in IntelliJ IDEA. In this case, the [Run tool window](https://www.jetbrains.com/help/idea/jetgradle-tool-window.html) is opened and the command is run there. We see the results the same way we would have if we'd run the command from the Gradle Tool Window.

![Gradle task in run window](./gradle-run-window.png)

Next, let's look at some tips for working with Gradle in IntelliJ IDEA.