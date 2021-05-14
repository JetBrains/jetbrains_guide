---
type: TutorialStep
date: 2021-05-14
title: Gradle Wrapper
technologies: [java, gradle]
topics: [build]
author: tg
subtitle: Useful information for working with projects that use the Gradle Wrapper.
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/6V6G3RyxEMk?start=1105
---

## Gradle Wrapper

Finally, the Gradle Wrapper.

We saw how to tell IntelliJ IDEA where to get the settings of rthe Gradle weapper from. Projects generated using IntelliJ IDEA's Gradle wizard will usually have a gradle-wrapper.properties file which contains the details of the version of Gradle to use for this project. Ideally we want this to contain the latest versions of Gradle, where possible, so that we get the most up to date support and features. The current version of Gradle at the time of recording is 6.8.1, so let's go ahead and update this file to have that version number.

Once again, intellij idea has detected the changes and asks us to reload these changes. You can see the IDE downloads this new version of Gradle, and then rebuilds the project using it.

You may notice that the .gradle folder in your project has folders for all the versions of Gradle that you've used. We can safely delete the versions we're not using any more here.

In this tutorial we saw an overview of the support for Gradle projects in IntelliJ IDEA, and some tips for working effectively with them.

In our last step we'll summarise some of the shortcuts used and other tips.