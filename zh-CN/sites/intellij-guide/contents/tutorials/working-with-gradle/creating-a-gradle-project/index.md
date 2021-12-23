---
type: TutorialStep
date: 2021-05-14
title: 创建一个新的 Gradle 项目
technologies:
  - gradle
topics:
  - gettingstarted
author: tg
subtitle: 首先创建一个使用 Gradle 作为构建工具的全新项目。
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/6V6G3RyxEMk?start=17
---

首先，让我们看看创建一个新的 Gradle 项目。 我们可以从[欢迎画面中选择“新建项目”](https://www.jetbrains.com/help/idea/new-project-wizard.html)，或者如果我们已经打开了一个 IntelliJ IDEA 项目，从文件菜单中选择新建项目。这两种方法都将打开新建项目的窗口。

![新建项目窗口](./new-project.png)

然后，我们从左侧的选项中选择 Gradle。 该项目将需要一个 JDK 来运行 Gradle 构建，项目 SDK 下拉菜单中会显示所有在 IntelliJ IDEA 中配置的 JDK，但也显示了在此计算机上检测到的其他 JDK。 如果需要，我们还可以从多个不同的供应商中任何一个下载新的 JDK。 对于本视频，我将选择 JDK 11，因为这是当前的长期支持的版本。

接下来，我们有一些其他选项来配置我们的 Gradle 构建。 如果我们选中 [Kotlin DSL 构建脚本](https://docs.gradle.org/current/userguide/kotlin_dsl.html) 我们可以创建一个 Kotlin DSL 构建文件。 如果我们不选它，IntelliJ IDEA 将创建一个 `build.gradle` 文件，它使用 [Groovy](https://groovy-lang.org/)，是更常见的选择。

我们可以选择外部的库、语言或框架来添加到我们新的 Gradle 项目中。 如果我们知道我们将在新应用程序中使用其中任何一个，我们可以在向导中选择它们，但如果把它们留空，我们也可以在以后需要的时候添加。

我们将创建一个使用 `build.gradle` 文件的基本的 Java 项目。然后，我们前往下一步。

![项目名称和详细信息](./project-name.png)

这里，我们输入项目的名称，如果需要，我们可以更改其位置。 让我们将其命名为“first-gradle-project”。 如果我们想保持尽可能简单，我们可以在这里按完成。 如果我们单击“工件坐标”的标题，则可以看到更多的选项，如果需要，我们可以进行更改，但对于这个简单的案例，我们将保留这些选项。

IntelliJ IDEA 会以最小规模的 `build.gradle`文件创建基本的项目结构，然后你会发现 Gradle 在构建项目了。 完成后，项目窗口将显示项目结构，并带有标准的 Gradle 目录结构。

我们将在下一节中更详细地查看该项目。

