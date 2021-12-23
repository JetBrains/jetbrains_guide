---
type: TutorialStep
date: 2021-05-14
title: 源代码集目录
technologies:
  - gradle
topics: [ ]
author: tg
subtitle: 了解 IntelliJ IDEA 如何处理 Gradle 项目的源代码集目录
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/6V6G3RyxEMk?start=490
---

Gradle的概念是 [代码集](https://docs.gradle.org/current/dsl/org.gradle.api.tasks.SourceSet.html) 为存放代码和测试代码的位置。

一些 Gradle 插件带有默认的代码集，例如 Java 插件有一个“main”代码集，其中的默认位置是 `src/main/java`。 IntelliJ IDEA 已经为这个项目的 `java` 插件自动创建了源代码集目录，我们可以看到：
 - `src/main/java`
 - `src/main/resources`
 - `src/test/java`
 - `src/test/resources`

尝试添加一个具有自己的源代码集的新插件，例如 `groovy`。

```groovy
plugins {
    id 'java'
    id 'groovy'
}
```

请记得使用 **⇧⌘I**（macOS），或 **Ctrl+Shift+O**（Windows/Linux）重新加载构建文件的更改。

IntelliJ IDEA 能了解您的插件的源代码集及其目录。 去到[ 项目窗口 ](https://www.jetbrains.com/help/idea/project-tool-window.html)，在“main”文件夹上通过按 **⌘N**（macOS），或 **Alt+Insert** （Windows/Linux），然后选择"目录"来创建一个新目录。

![新目录名称建议](./new-directory.png)

IntelliJ IDEA 会从 Gradle 源代码集列表中建议创建一个名为“groovy”的文件夹。 文件夹会是蓝色的，因为它已知是存放源代码的。

现在，我们熟悉了 Gradle 项目的结构和 build.gradle 文件的工作原理，让我们来看看如何设置或更改项目的 [groupID 和版本](https://maven.apache.org/guides/mini/guide-naming-conventions.html)。
