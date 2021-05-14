---
type: TutorialStep
date: 2021-05-14
title: The build.gradle file
technologies: [java, gradle]
topics: [build]
author: tg
subtitle: See how IntelliJ IDEA makes it easier to work with Gradle's configuration file.
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/6V6G3RyxEMk?start=281
---

## The build.gradle file
Let's take a look at the build.gradle file IntelliJ IDEA generated for us.

In the plugins section we have the java plugin, the meta data underneath this is the group and version information that we left as the defaults, we're using Maven Central as the default dependency repository, and IntelliJ IDEA has set us up with a couple of default dependencies that we probably need for the project. We have the Junit 5, specifically 5.7 at the time of recording, set up as a test dependency. We also have the junit jupiter enginer, since we need this to run any Junit 5 tests that we write. Note that IntelliJ IDEA uses the updated configuration names for the dependencies, for example testImplementation instead of testCompile. It also uses the compact form for dependency declaration, with the group name, artifact name and version number separated by colons.

In order for Gradle to run JUnit 5 tests, the test section of the build.gradle file needs to say useJUnitPlatform, so IntelliJ IDEA has generated this for us too.

