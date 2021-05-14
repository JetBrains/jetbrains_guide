---
type: TutorialStep
date: 2021-05-14
title: Running Gradle tasks
technologies: [java, gradle]
topics: [build]
author: tg
subtitle: There are several convenient ways to run Gradle tasks from IntelliJ IDEA.
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/6V6G3RyxEMk?start=823
---

## Running Gradle tasks

Let's look at how to run Gradle tasks in IntelliJ IDEA

We saw earlier that we can navigate to a specific gradle task in a specific gradle project in the gradlle tool window, and we can double-click that task to get IntelliJ IDEA to run it.

We can also click on the elephant at the top of the gradle tool window to run any Gradle task. IntelliJ IDEA populates this wtih common gradle tasks and ones we've run recently. This can be a good way to run multiple gradle tasks, like you would from the command line. For example, I often run gradle clean build when I want to make sure everything is working as expected, for example before committing changes.

You may have noticed this was actually using the run anything dialog, which we can bring up by pressing Ctrl twice. We don't need to open this from the Gradle tool window, we can press ctrl twice and type "gradle" followed by the gradle tasks.

We can, of course, run Gradle commands from the terminal window inside IntelliJ IDEA. If we type a Gradle command, we see that IntelliJ IDEA has highlighted it, this means that this is a command that can be run inside the IDE, it doesn't have to be run from the command line. If we press enter, it will be run from the command line like we expect. If we press Cmd enter, or Ctrl and enter on Windows and Linux, this command will be run in IntelliJ IDEA, in this case via the run window, so we see the results the same way we would have if we'd run the command from the Gradle Tool Window.

Next, let's look at some tips for working with Gradle in IntelliJ IDEA