---
type: TutorialStep
date: 2021-08-11
title: 导入一个 Maven 项目
technologies:
  - maven
topics:
  - gettingstarted
author: tg
subtitle: IntelliJ IDEA 了解使用 Maven的项目，并且可以通过最少的配置来导入它们
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/pt3uB0sd5kY?start=3
---


虽然您有可能想创建自己的 Maven 项目，但您更有可能导入现有的项目。  这在 IntelliJ IDEA 中非常简单。 从欢迎界面上选择 [Open（打开）](https://www.jetbrains.com/help/idea/import-project-or-module-wizard.html#open-project)，或者主菜单上的 **File（文件）**，然后导航到代码所在的位置。

您可以选择项目的根目录，IntelliJ IDEA 将想办法导入该项目，但如果您明确知道这是一个 Maven 项目，并且您想为您的项目结构使用这种模式，最简单的方法是选择顶层的 `pom.xml` 文件，然后 IDE 会知道您是想导入一个 Maven 项目。

![](open.png)

根据您使用的 IntelliJ IDEA 版本，系统会向您显示用于导入 Maven 项目的特定选项——通常我们会希望保留默认设置。 在当前版本的 IntelliJ IDEA（撰写本文时为 2021.2），您可能会看到一系列的对话框：

![](open-as-project.png)

如果您选择了 `pom.xml` 文件来打开项目（而不是顶级文件夹），IntelliJ IDEA 将询问您是只想打开该文件，还是要导入整个项目。 在本教程中，我们选择 **Open as Project（作为项目打开）**。

![](trust-project.png)

如果您正在打开一个不属于您的项目（例如从 GitHub 克隆），您可能不想信任这个项目，因为它能在您的机器上运行您不知道的代码。 但是如果您了解该项目，并且相信它下载的代码和依赖项是安全的，请选择 **Trust Project（信赖项目）**。

IntelliJ IDEA 将使用 Maven 定义来弄清应用程序的结构，当然还可以下载所有必需的依赖项并将其添加到项目中。  


