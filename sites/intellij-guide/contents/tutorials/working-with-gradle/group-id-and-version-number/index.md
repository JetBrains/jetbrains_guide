---
type: TutorialStep
date: 2021-05-14
title: Group ID and version number
technologies: [java, gradle]
topics: [build]
author: tg
subtitle: How to set up or change a project's group ID and version number.
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/6V6G3RyxEMk?start=536
---

## Group ID and version number

Now we've covered the basics of a new Gradle project, let's go back and look at how to set the Group ID and Version Number of a new project.

Let's folow the same steps we took earlier, creating a new Gradle project with Java and the Groovy DSL. After we've entered the project name, we can click on "artifact coordinates" to configure more settings for the project. We can optionally enter a new group ID, which is usually the company domain. If we try to change the Artifact ID, IntelliJ IDEA warns us that this should be the same as the project name

//TODO: question why this is editable at all

We can also change the project's version number, if we have a different number for the project, or a different version number format.

When we create the project, we can see the group ID and version number are set in the build.gradle file.

