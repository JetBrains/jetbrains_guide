---
type: TutorialStep
date: 2022-12-02
title: Dependency management config file
technologies: [gradle, maven]
topics: [build]
author: md
subtitle: View dependencies in the dependency management config file
thumbnail: ./thumbnail.png

---

You can find direct dependencies in the dependency management config file. Direct dependencies are the dependencies that your project depends on directly. They are declared in the dependency management config file.

One example is this pom.xml in a Maven project.

![Pom.xml](pom-xml.png)

Another example is the build.gradle in a Gradle project. 

![Gradle Build file](build-gradle.png)

Note that the dependency management config file includes only declared dependencies and not their transitive dependencies (or the dependencies that these declared dependencies depend on).