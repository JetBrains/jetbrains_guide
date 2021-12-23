---
type: TutorialStep
date: 2021-08-11
title: Maven 工具窗口
technologies:
  - maven
topics:
  - 构建
author: tg
subtitle: Maven 工具窗口允许您访问目标、依赖项等。
thumbnail: ./thumbnail.png
longVideo:
  poster: ./maven-window.png
  url: https://youtu.be/pt3uB0sd5kY?start=3
---

您可以再次使用 **⌘E**（macOS）或 **Ctrl+E**（Windows/Linux）导航到 Maven 窗口，在这里我们可以看到此项目的依赖。

![maven-window.png](maven-window.png)

这个窗口列出了目标和生命周期阶段。  我们可以通过双击来运行它们当中的任意一个，并且我们可以在运行窗口看到运行 Maven 阶段的熟悉的结果，包括正在被下载的依赖和正在被运行的测试。

![](maven-install.png)

如果构建成功，如上面屏幕截图显示的那样，您将看到 Maven 创建了一个 target 目录包含所有生成的代码和其他的输出。

![](target-directory.png)

您还可以通过 **Run Anything（运行任何内容）**（**⌃⌃** （macOS） 或 **Ctrl+Ctrl** （Windows/Linux）））来运行 Maven 目标。

![](run-anything.png)

当您运行任意的 Maven 目标或者阶段时，您可以从 Maven 窗口选择开启或者关闭一个或多个[配置文件](https://www.jetbrains.com/help/idea/work-with-maven-profiles.html)

您可以从 Maven 窗口中对项目执行许多操作，请务必看一看所有的图标，看看它们可以执行哪些操作。

到目前为止，我们看到的所有内容都包含在 IntelliJ IDEA 的免费社区版里。 IntelliJ Ultimate 有一些额外的功能。  对于理解 Maven 项目来说，一个可能特别有用的功能是通过图表显示依赖。

![](show-diagram.png)

这可以让您了解哪些依赖是由应用程序直接导入的，哪些依赖是传递的。 您可以通过图标更改或者排除某个依赖的可见性。

![](dependencies-diagram.png)

如果图表太大而不容易查看的话，您还可以筛选要显示哪些。

