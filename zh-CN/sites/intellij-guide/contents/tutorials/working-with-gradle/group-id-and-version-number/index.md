---
type: TutorialStep
date: 2021-05-14
title: Group ID 和版本号
technologies:
  - gradle
topics: [ ]
author: tg
subtitle: 如何设置或更改项目的 group ID 和版本号。
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/6V6G3RyxEMk?start=537
---

现在我们已经介绍了 Gradle 项目的基础知识，让我们回过头来看看如何设置项目的  [groupID 和版本号](https://maven.apache.org/guides/mini/guide-naming-conventions.html)  。

让我们按照之前的相同步骤，使用 Java 和 Groovy DSL 创建一个新的Gradle 项目。

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