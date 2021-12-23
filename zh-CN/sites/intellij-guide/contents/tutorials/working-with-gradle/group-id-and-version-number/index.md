---
type: TutorialStep
date: 2021-05-14
title: Group ID and version number
technologies:
  - gradle
topics: [ ]
author: tg
subtitle: How to set up or change a project's group ID and version number.
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/6V6G3RyxEMk?start=537
---

Now we've covered the basics of a new Gradle project, let's go back and look at how to set the [groupID and version](https://maven.apache.org/guides/mini/guide-naming-conventions.html) of a new project.

Let's follow the same steps we took earlier, creating a new Gradle project with Java and the Groovy DSL.

![Create another new project](./second-new-project.png)

After we've entered the project name, e.g. "more-gradle", we can click on "artifact coordinates" to configure more settings for the project.

![Artifact co-ordinates](./artifact-coords.png)

We can optionally enter a new GroupId, which is usually the company domain. If we try to change the ArtifactId, IntelliJ IDEA warns us that this should be the same as the project name

We can also change the project's version number, if we have a different number for the project, or a different version number format.

When we create the project, we can see the groupID and version number are set in the build.gradle file.

```groovy
group 'com.jetbrains'
version '1.0-SNAPSHOT'
```

Next, we'll look at how to open an existing Gradle project, and how IntelliJ IDEA helps us here.