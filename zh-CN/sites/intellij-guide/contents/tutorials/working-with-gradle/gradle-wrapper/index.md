---
type: TutorialStep
date: 2021-05-14
title: Gradle 包装器
technologies:
  - gradle
topics:
  - 构建
author: tg
subtitle: 有关使用 Gradle 包装器的项目的有用信息。
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/6V6G3RyxEMk?start=1105
---

在最后一步中，我们将介绍如何配置 [Gradle 包装器](https://docs.gradle.org/current/userguide/gradle_wrapper.html)。

我们知道如何告诉 IntelliJ IDEA 从哪里获取[ Gradle 包装器](https://www.jetbrains.com/help/idea/gradle-settings.html) 的设置。 使用 IntelliJ IDEA 的 [Gradle 向导](https://www.jetbrains.com/help/idea/gradle.html#project_create_gradle) 时通常会有 `gradle-wrapper.properties` 文件，其中包含用于此项目的 Gradle 版本的详细信息。 理想情况下，我们希望它尽可能使用 [最新版的 Gradle ](https://gradle.org/releases/)，以便我们获得最新的支持和功能。 在撰写本文时，Gradle 的当前版本是 [7.0.2](https://docs.gradle.org/7.0.2/release-notes.html)。

![Gradle 包装器的属性文件](./gradle-wrapper-file.png)

如果您将 `gradle-wrapper.properties` 文件更新为不同的版本号，IntelliJ IDEA 将检测到更改并要求我们重新加载这些更改。 IDE 将下载此新版本的 Gradle，然后使用它重新构建项目。

![Gradle 版本](./gradle-versions.png)

项目中的“.gradle”文件夹会包含您使用过的所有 Gradle 版本的文件夹。 如果要回收一些存储空间，我们可以删除不再使用的版本。

在最后一章中，我们将总结一些使用的快捷方式和其他的窍门。