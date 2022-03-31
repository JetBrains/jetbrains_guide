---
type: TutorialStep
date: 2021-05-14
title: The build.gradle file
technologies:
  - gradle
topics: [ ]
author: tg
subtitle: See how IntelliJ IDEA makes it easier to work with Gradle's configuration file.
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/6V6G3RyxEMk?start=281
---

Let's take a look at the build.gradle file IntelliJ IDEA generated for us.

```groovy
plugins {
    id 'java'
}

group 'org.example'
version '1.0-SNAPSHOT'

repositories {
    mavenCentral()
}

dependencies {
    testImplementation 'org.junit.jupiter:junit-jupiter-api:5.7.0'
    testRuntimeOnly 'org.junit.jupiter:junit-jupiter-engine:1.7.0'
}

test {
    useJUnitPlatform()
}
```

In the plugins section we have the [`java`](https://docs.gradle.org/current/userguide/java_plugin.html) plugin. The metadata underneath this is the group and version information that we left as the defaults. We're using Maven Central as the default dependency repository.

IntelliJ IDEA has set us up with a couple of default dependencies that we probably need for the project. We have [JUnit 5](https://junit.org/junit5/docs/current/user-guide/), specifically 5.7 at the time of recording, set up as a test dependency. We also have [junit-jupiter-engine](https://mvnrepository.com/artifact/org.junit.jupiter/junit-jupiter-engine), since we need this to run any JUnit 5 tests that we write.

Note that IntelliJ IDEA uses the updated [configuration names for the dependencies](https://docs.gradle.org/current/userguide/declaring_dependencies.html), for example `testImplementation` instead of `testCompile`. It also uses the compact form for dependency declaration, with the group name, artifact name and version number separated by colons.

In order for Gradle to run JUnit 5 tests, the test section of the `build.gradle` file needs to say `useJUnitPlatform`, so IntelliJ IDEA has generated this for us too.

Now that we know where the dependencies should be declared for a Gradle project, let's look at how to add or update dependencies.