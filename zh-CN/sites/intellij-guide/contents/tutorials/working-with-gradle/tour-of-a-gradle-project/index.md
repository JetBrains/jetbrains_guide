---
type: TutorialStep
date: 2021-05-14
title: Gradle 项目的概览
technologies:
  - gradle
topics:
  - 接口
author: tg
subtitle: 看一下标准的Gradle项目，以便更好地理解它。
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/6V6G3RyxEMk?start=139
---

让我们来看看我们的 Gradle 项目。

![Gradle 项目](./project.png)

[项目窗口](https://www.jetbrains.com/help/idea/project-tool-window.html) 显示了标准的Gradle目录结构，带有 `src` 文件夹，以及 `main` 和 `test` 的子文件夹。 因为这是一个 Java 项目，因此它们也都包含 `java` 和 `resources` 子文件夹。 IntelliJ IDEA 会自动将 _main_ 中的文件夹配置为生产代码（蓝色的），_test_ 为测试代码（绿色的）。

您还会看到一个 `.gradle` 文件夹，IntelliJ IDEA 将其用于 gradle 本身的构建，我们可以忽略它，同时也应该设置我们的版本控制来忽略此目录。

有一个 `gradle` 文件夹，带有一个 `wrapper` 子文件夹。 这些是 [Gradle Wrapper](https://docs.gradle.org/current/userguide/gradle_wrapper.html) 的设置，IntelliJ IDEA 在创建 Gradle 项目时会默认使用这个设置。 我们稍后会了解到 [如何配置](../gradle-wrapper/)。

![项目依赖项](./dependencies.png)

项目窗口还会显示我们项目所依赖的外部库。 在这个项目中，这些库会表示出来是因为我们的 gradle 构建文件里已声明了依赖项。 IntelliJ IDEA 还会标记出这些是来自于 Gradle。 这些已作为依赖项添加到我们的 `build.gradle` 文件中。

`build.gradle` 文件是项目构建和依赖项的主要配置。 IntelliJ IDEA 在创建此项目时创建了最小规模的构建文件。 [我们将在下一步中更详细地介绍这一点](../the-build-gradle-file/)。

在IntelliJ IDEA中了解您的Gradle项目的最后一个关键内容是[ Gradle 工具窗口](https://www.jetbrains.com/help/idea/jetgradle-tool-window.html)。 我们可以通过左下角的快速访问按钮打开它。

![Gradle 工具窗口](./gradle-window.png)

Gradle 工具窗口向我们显示项目的所有任务及其依赖项。 这里的依赖项列表与项目窗口不同，它会按配置分组来显示依赖项，并显示嵌套在其下面的自己的依赖项。 这对于确认特定依赖项的来源很有帮助。

任务部分会显示所有 Gradle 构建任务，按类型分组。 我们现在没有什么需要构建的内容，因为这个基本项目还没有任何代码，但我们可以运行 `clean` 任务来看看会发生什么。

![构建成功](./build-successful.png)

打开 [运行窗口](https://www.jetbrains.com/help/idea/run-tool-window.html)，我们会看到 `clean` 任务的结果，包括所有 Gradle 输出，我们可以看到运行的内容和结果。 我们可以用它来帮助我们调查遇到的问题。

接下来，让我们详细地看一下 `build.gradle` 文件。