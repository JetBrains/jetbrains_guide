---
type: TutorialStep
date: 2021-25-08
title: 创建一个新项目
technologies: [ ]
topics: [ ]
author: hs
subtitle: 使用新项目向导创建新项目。
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/H_XxH66lm3U?start=25
---

在此教程中，您将会创建、运行和打包一个简单的 Java 应用程序，该应用程序可以打印 "Hello World" 到系统输出。 您还将看到一些 IntelliJ IDEA 功能，这些功能可以提高您的工作效率，例如编码辅助和辅助工具。 本教程中的所有功能在 IntelliJ IDEA Community 和 IntelliJ IDEA Ultimate 中都可以使用。

**在每个教程步骤的底部，都有视频相关部分的链接。**

1）您可以使用[新项目向导](https://www.jetbrains.com/help/idea/creating-and-running-your-first-java-application.html)在 IntelliJ IDEA 中创建新项目。 在欢迎屏幕界面，您可以点击 **New Project（新项目）**，或者如果您已经在一个项目里时，您可以使用 **File（文件）** > **New（新建）** > **Project（项目）**。

如果您之前还没有打开项目， **New Project（新建项目）** 选项位于欢迎屏幕中：

![Welcome Screen - New Project Highlighted](welcome-screen.png)

如果您以前已打开了一个项目， **New Project（新建项目）** 按钮将在顶部栏上。

![img.png](welcome-screen-existing-projects.png)

2）您需要创建一个 Java 项目，这是默认的选项。 您还需要从项目 SDK 下拉菜单中选择一个 JDK 用于编译此项目：

![Java Project and JDK selection](java-select-jdk.png)

IntelliJ IDEA 将在列表的顶部显示已配置的 JDK 列表，并在列表的底部显示它在您的机器上检测到的 JDK 的列表。 您可以选择其中的任何一个，或者您可以点击 **Download JDK（下载 JDK）**。

有许多不同的供应商打包和提供 Java。 该列表显示了一些最常见的。 OpenJDK 是 Oracle 的免费、开放的 JDK 构建，它将永远是最新的版本。 如果您选择另一个供应商，比如说 Adopt OpenJDK，您将看到该供应商所有可用的版本。

![Different JDK Vendors](different-jdk-vendors.png)

此教程不需要最新版本的 Java，所以请自由选择您最熟悉的版本。 最后，如果您想要使用您的机器上的 JDK，但它尚未被 IntelliJ IDEA 检测到，您可以按 **Add JDK（添加 JDK）** 来浏览它。

如果您选择下载 JDK，IDE 将花费一点时间下载和安装 Java 开发套件。 您不需要进行任何额外的配置，一旦下载完成，IntelliJ IDEA 会为您处理。

3）在该教程里，您不需要任何额外的库或框架，所以按 **Next（下一步）**


4）您可以从模板里创建一个项目，但是在该教程里，我们要从零开始做一切事情，所以按 **Next（下一步）**。

   ![No templates selected](no-templates.png)

5）您需要给项目起个名字。 我们推荐 _HelloWorld_。 如果您愿意，您可以更改默认的项目位置，但是对于该教程来说，默认的位置是可以的。

   ![Name Project HelloWorld](name-hello-world.png)

6）按 **Finish（完成）** 来让 IntelliJ IDEA 创建您的项目。


---

