---
type: TutorialStep
date: 2021-05-14
title: Gradle 设置
technologies:
  - gradle
topics: [ ]
author: tg
subtitle: IntelliJ IDEA 里面更改 Gradle 设置的地方
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/6V6G3RyxEMk?start=1013
---

让我们来看看 IntelliJ IDEA 中一些有用的 Gradle 设置。

![Gradle 工具窗口中的设置](./gradle-settings-menu.png)

我们可以从[ Gradle 工具窗口 ](https://www.jetbrains.com/help/idea/jetgradle-tool-window.html)，或者打开 [ 设置 / 首选项](https://www.jetbrains.com/help/idea/settings-preferences-dialog.html) (**⌘,**（macOS），或 **Ctrl+Alt+S** （Windows/Linux）），然后导航到[** 文件 | 设置 | 构建、执行、部署 | 构建工具 | Gradle **](https://www.jetbrains.com/help/idea/gradle-settings.html). 通常，这些设置对于大多数项目都适用，不需要更改。

![设置/首选项 的 Gradle 设置](./settings-gradle.png)

请注意，IntelliJ IDEA 会选择一个特定的 JVM 来运行 Gradle。 如果需要，我们可以使用与项目不同的 JVM 设置。 如果我们将此 JVM 设置为与项目的相同，则可以假定从 Gradle 和 IDE 内部运行代码的 Java 版本完全相同。 但是，有时我们可能希望将其设置为其他版本，特别是如果我们要测试跨版本的兼容性。

“使用来自此位置的Gradle”下拉列表里可以选择使用 Gradle 包装器。 默认情况下，IntelliJ IDEA 使用在 `gradle-wrapper.properties `中定义的 Gradle 版本。

我们可以设置 IntelliJ IDEA 通过 Gradle 运行应用程序和测试，还是使用 IntelliJ IDEA 本身。 默认情况下，如果项目是 Gradle 项目，IntelliJ IDEA 将使用 Gradle 运行该项目中的程序和测试。 这是确保无论从 IDE 还是通过构建工具运行内容都能获得相同结果的好方法。 有时，使用 IntelliJ IDEA 运行测试比使用 Gradle 运行单元测试更快。 但是，由于Gradle也对运行应用程序进行了一些优化，因此情况并非总是如此。

在下一节中，我们将介绍 Gradle 包装器。