---
type: TutorialStep
date: 2021-05-14
title: Gradle Settings
technologies: [java, gradle]
topics: [build]
author: tg
subtitle: Where to change IntelliJ IDEA's settings fo Gradle.
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/6V6G3RyxEMk?start=1012
---

## Gradle Settings

Let's look at some more useful Gradle settings in IntelliJ IDEA

We can get to the settings from the Gradle Tool Window, or from the usual settings dialog and navigating to Build, Execution and Deployment, Build Tools, Gradle. Generally these settings are fine for most projects, and don't need changing.

Notice that IntelliJ IDEA has selected a specific JVM to use to run Gradle, this allows us to use a different JVM to the project JVM if we want. I will sometimes set this to be the same as the project JVM, so I can assume exactly the same version of Java for running things both from Gradle and from inside the IDE.

This "use Gradle from" dropdown is how we can configure using the Gradle wrapper to run Gradle, by default IntelliJ IDEA uses the gradle-wrapper.properties

We can say whether we want IntelliJ IDEA to run applications and tests via Gradle or use IntelliJ IDEA to run them - by default, if the project is a Gradle project, IntelliJ IDEA will use Gradle to run the applications and tests in that project. This is a good way to make sure we get the same results whether we run things from the IDE or via the build tool. I sometimes select IntelliJ IDEA to run tests, as this can be faster for running Unit tests than using Gradle. But since Gradle and the Gradle wrapper also have some optimisations for running your applciations, this is not always the case.

A final note on the Gradle Wrapper.

We saw how to tell IntelliJ IDEA where to get the settings of rthe Gradle weapper from. Projects generated using IntelliJ IDEA's Gradle wizard will usually have a gradle-wrapper.properties file which contains the details of the version of Gradle to use for this project. Ideally we want this to contain the latest versions of Gradle, where possible, so that we get the most up to date support and features. The current version of Gradle at the time of recording is 6.8.1, so let's go ahead and update this file to have that version number.

Once again, intellij idea has detected the changes and asks us to reload these changes. You can see the IDE downloads this new version of Gradle, and then rebuilds the project using it.

You may notice that the .gradle folder in your project has folders for all the versions of Gradle that you've used. We can safely delete the versions we're not using any more here.

In this screencast we saw an overview of the support for Gradle project in IntelliJ IDEA, and some tips for working effectively with them.

Thanks for watching!