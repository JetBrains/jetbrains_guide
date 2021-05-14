---
type: TutorialStep
date: 2021-05-14
title: Source set directories
technologies: [java, gradle]
topics: [build]
author: tg
subtitle: Understand how IntelliJ IDEA deals with Gradle's source set directories
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/6V6G3RyxEMk?start=489
---

## Source set directories
Gradle has the concept of source sets for where your code and test sources live.

https://docs.gradle.org/current/dsl/org.gradle.api.tasks.SourceSet.html

Some Gradle plugins come with default source sets, for example the Java plugin has a "main" source set where the default is src/main/java. IntelliJ IDEA has automatically created the source set directories for the java plugin for this project. If we add a new plugin, for example "groovy", which has its own source sets, IntelliJ IDEA is aware of these source sets and their directories. So if we go to the project window... and decide to create a new directory in the "main" folder, IntelliJ IDEA suggests a folder called "groovy" from the list of Gradle source sets the IDE knows about. This is coloured blue as it's known to be a source set for production code.

