---
type: TutorialStep
date: 2021-05-14
title: Tour of a Gradle project
technologies: [java, gradle]
topics: [build]
author: tg
subtitle: Take a look around a standard Gradle project to understand it better.
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/6V6G3RyxEMk?start=139
---

## Tour of a Gradle project
Let's take a look at our Gradle project. The project window shows the standard Gradle directory structure, with a src folder with main and test subfolders. Becuase this is a Java project, these both have java and resources subfolders. IntelliJ IDEA automatically configures the folders in main to be production code, and the folders in test to be test code, hence hte green backgrounds.

You'll also see a .gradle folder, which IntelliJ IDEA uses for its gradle builds, this can safely be ignored by us, and we should set our version control to ignore this directory too.

There's a gradle folder with a wrapper subfolder, these are teh settings for the Gradle Wrapper, whcih IntelliJ IDEA uses by default when creating gradle projects. We'll look at how to configure this later in the video.

The project window also shows external libraries that our project depends upon. In this project, these libraries are here because our gradle build file has declared dependencies upon them. IntelliJ IDEA marks these as coming from Gradle. These have been added in our build.gradle file as dependencies.

The build.gradle file is the main configuration for the project's build and dependencies. IntelliJ IDEA created this minimal build file when it created this project. We'll look at this in a bit more detail later.

The last key piece to understanding your Gradle project in IntelliJI DEA is the Gradle window. We can open this via the quick access button in the bottom left corner. The Gradle window shows us all the project's tasks and its dependencies. This dependencies list is different from the project window, it shows the dependencies grouped by configuration, and it shows their own dependencies nested underneath. This can be helful for figuring out where a specific transitive dependency came from.

The Tasks section shows all the gradle build tasks, grouped by type. We don't have much to build right now as this basic project doesn't have any code yet, but we can run the clean task to show what happens. The run window is opened and we see the results of the clean task, including all the gradle output, so we can see what was run and what the results were. We can use this to help us debug problems if there are any issues.

