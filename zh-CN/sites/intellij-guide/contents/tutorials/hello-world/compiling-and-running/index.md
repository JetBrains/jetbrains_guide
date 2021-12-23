---
type: TutorialStep
date: 2021-25-08
title: 编译和运行
technologies: [ ]
topics: [ ]
author: hs
subtitle: 使用 IntelliJ IDEA 运行您的 Hello World 应用程序
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/H_XxH66lm3U?start=371
---


现在您已经编写您的 'HelloWorld.java' 类，您需要编译和运行它。 IntelliJ IDEA 可以帮您做这个事情。 有很多方法可以使用来运行应用程序，作为首先的方式，您可以点击方法左侧的绿色的箭头。 这些被称为[间距图标](https://www.jetbrains.com/help/idea/settings-gutter-icons.html)。

您将会注意到那里有两个绿色箭头。 和类邻近最上面的，可以用来运行类。 我们的类只包含 Java 的 `main` 方法，所以这就是它要运行的全部内容。 然而如果您有一些包含多个测试的类，使用绿色运行箭头将运行这个类下面所有的测试。

第二个绿色箭头和 Java 的 main 方法相邻。 点击它将会运行 Java 的 main 方法。 就我们的应用而言，两个绿色箭头做的是同样的事情。 当您点击绿色箭头，您将会看到不同的选项，比如说调试，但是我们现在只是运行它，所以选择运行的选项。

![Running the class from the gutter icons](running-class-arrows.png)

IntelliJ IDEA 现在将会编译文件成 class 文件然后运行它。 运行的输出结果会显示在您的界面的底部的运行工具窗口。

### 运行窗口

让我们更详细地看看您的运行窗口。

![Run window](run-window.png)

第一行显示用来运行程序的命令。 我们通常并不需要担心这是什么，但是当您想看看到底运行了什么以及是如果运行的时候，知道这个会很有用。 比如说，当您向右滚动，您将会看到 `com.example.helloworld.HelloWorld`。 这告诉您，运行的是您的 HelloWorld 类。 您也可以确切地查看使用的是哪个 JDK，如果您在同一台电脑上有多个 Java 版本，这会很有用。

这个窗口的第二行是您的程序的输出 —— 您用来输出的 "Hello World" 语句。

最后一行，既 `Process finished with exit code 0`（进程已结束，退出代码为 0）显示该程序运行没有错误。

### IntelliJ IDEA 做了什么

让我们来快速地看看当您运行应用程序时发生了什么。 IntelliJ IDEA 编译您的 HelloWorld.java 文件成 class 文件。 默认的情况下，IDE 创建了一个名叫 `out` 的文件夹。 生成代码（不是测试的代码），被放置在 `out` 文件夹下的 `production` 文件夹。 IntelliJ IDEA 为我们的 `HelloWorld` 项目创建了一个文件夹，然后为我们的包创建目录结构。 编译的 class 文件 `HelloWorld.class` 可以在此目录层次结构的最后找到。

![Out folder directory structure](out-directory.png)

### 运行配置和快捷键

IntelliJ IDEA 还为我们运行的应用程序创建了一个[运行配置](https://www.jetbrains.com/help/idea/run-debug-configuration.html)。 如果您有需要，您可以从[导航栏](https://www.jetbrains.com/help/idea/guided-tour-around-the-user-interface.html#navigation-bar)运行或调试任何的运行配置。 我们将在本教程的稍后部分更详细地查看运行配置。

![Run configuration in the navigation bar](run-config-nav-bar.png)

如果您想回到运行窗口，您可以在 macOS 上使用  **Cmd**+**4** 或在 Windows 上使用  **Alt**+**4** 打开它，再次使用同样的快捷键来关闭它并返回焦点到编辑器。

---

