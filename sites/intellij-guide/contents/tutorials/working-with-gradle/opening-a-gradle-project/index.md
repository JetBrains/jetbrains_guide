---
type: TutorialStep
date: 2021-05-14
title: Opening a Gradle project
technologies: [java, gradle]
topics: [build]
author: tg
subtitle: What you need to know to get started with an existing Gradle project
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/6V6G3RyxEMk?start=585
---

## Opening a Gradle Project
We've covered creating new Gradle projects, let's look at what's probably the more common case, importing existing Gradle projects into IntelliJ IDEA.

In this example, we're going to look at how to open a Gradle project from a local directory, but we could just as easily clone the code from a remote repository, it would work in a similar way. In the Welcome screen we can select Open, and navigate to the location with the project code.

IntelliJ IDEA will look for known build systems in the project, for example Maven and Gradle, or IntelliJ IDEA config files.

This project that I've selected is a multi module Gradle project, it has the Gradle wrapper configured so that's the files we see here, the settings.gradle file states which modules make up the gradle project, and each module contains its own build.gradle file. This particular project does not have any IntelliJ IDEA settings set, IntelliJ IDEA uses the Gradle configuration to determine the structure of the project, its dependencies, and how to build it. You can see IntelliJ IDEA has created IntelliJ IDEA modules for each of the sub projects in this multi-project Gradle application.

Each of these IntelliJ IDEA modules is a Gradle project in its own right, with its own build.gradle and its own tasks and dependencies. If we open the Gradle Tools Window, we can see the top level tasks for the whole project, and the tasks and dependencies for each of the subprojects, or modules. These may be different, since they reflect what's configured in each module's build.gradle file.

Let's build the whole project to see if it all works the way we expect. It builds sucessfully, which is good news. We can see that Gradle has created a directory "build" for the output of the build. IntelliJ IDEA recognises this as an output directory. We can navigate through the directories to take a look at the results of the tests, for example, and open them in a browser.
