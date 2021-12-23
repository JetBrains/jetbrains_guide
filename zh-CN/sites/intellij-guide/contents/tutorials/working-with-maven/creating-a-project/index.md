---
type: TutorialStep
date: 2021-08-11
title: 创建一个 Maven 项目
technologies:
  - maven
topics:
  - gettingstarted
author: tg
subtitle: 首先创建一个使用 Maven 作为构建工具的全新项目
thumbnail: ./thumbnail.png
longVideo:
  poster: ./new-maven-project.png
  url: https://youtu.be/pt3uB0sd5kY?start=3
---

让我们创建一个全新的 Maven 项目。 从欢迎界面中选择 New Project（新建项目），或者如果您已经打开了 IntelliJ IDEA 项目，请选择 File（文件）-> New（新建）-> Project...（项目）。

从左侧的选项中选择 Maven，然后选择项目的 JDK。

![new-maven-project.png](new-maven-project.png)

我们可以可选择性地选择一个 maven 原型来创建项目。 如果您要创建一个简单的项目，那么您无需选择原型。

按 Next（下一步）。

您需要给项目一个名字，并且您可以选择性地设置位置。 如果您单击 **Artifact Coordinates（工件坐标）**，您将看到更多的 Maven 设置。

![maven-project-settings.png](maven-project-settings.png)

您可以声明 group id（组 ID）和应用程序本身的 artifact id（工件 ID）。

按 **Finish（完成）**，然后 IntelliJ IDEA 将为您生成 Maven 的 pom.xml 文件。

除了创建基本的 `pom.xml` 外，IntelliJ IDEA 还为 Maven 项目创建了默认的目录结构，并规定了源文件夹和测试文件夹。

您可以使用 **⌘E**（macOS）或 **Ctrl+E**（Windows/Linux），然后输入 _Maven_ 来打开 Maven 项目窗口，在那里您可以看到标准的 Maven 生命周期阶段和各种 Maven 插件定义的目标。



