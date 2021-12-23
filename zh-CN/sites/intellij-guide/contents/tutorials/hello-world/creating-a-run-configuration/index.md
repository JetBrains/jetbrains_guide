---
type: TutorialStep
date: 2021-24-08
title: 创建一个运行配置
technologies: [ ]
topics: [ ]
author: hs
subtitle: 为我们创建的 JAR 文件使用 IntelliJ IDEA 运行配置。
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/H_XxH66lm3U?start=611
---

现在您创建了 JAR 文件，您需要运行它来检查它的行为是否与运行您的 `HelloWorld.java` 文件中的 main 方法相同。 要将您的 Java 应用程序作为 JAR 运行，您可以创建一个新的[运行配置](https://www.jetbrains.com/help/idea/run-debug-configuration.html)。

1) 按两次 **Shift** ，来使用 [search everywhere（随处搜索）](https://www.jetbrains.com/idea/guide/tips/search-everywhere/)。 如果您不知道 IntelliJ IDEA 中的某个快捷键，那么随处搜索是搜索您所需要的一个好方法。 在这种情况下，您需要创建一个新的运行配置，因此在对话框里输入 _edit configurations（编辑配置）_。


2) 当正确的选项出现时，您可以使用方向键来选择它，并按 **Enter**。

 ![Searching for edit configurations in search everywhere](edit-config-search-everywhere.png)

3) 在运行配置对话框中，您可以看到 IntelliJ IDEA 为运行 HelloWorld.java 类中的 main 方法自动创建的运行配置。

![Run configuration for HelloWorld.java](class-run-configuration.png)

4) 让我们创建一个新的配置来运行我们的新 JAR 文件。 您可以通过按下 **+** 按钮并从列表中选择 _JAR Application（JAR 应用程序）_ 来创建它。


5) 首先，给您的新运行配置一个名称，如 `HelloWorld JAR`，这样您就可以区分出这个和之前 IntelliJ IDEA 创建的。


6) 点击 **Path to the JAR（JAR 路径）**的浏览按钮。 您需要导航到您的 JAR 文件。 请记住它在您的项目的输出目录中。

![Path to JAR file](path-to-jar.png)

7) 向下滚动到对话框底部的 **Before launch（执行前）**部分。 在此处按 **+**，然后从下拉列表中选择 _Build Artifacts（构建工件）_ 。

 ![Select artifacts](select-artifacts.png)

8) 选择您的 `HelloWorld.jar` 工件并按 **OK（确定）**。 这意味着 IntelliJ IDEA 将在我们运行此配置之前重新构建您的 `HelloWorld.jar` 文件。


9) 再次按 **OK（确定）** 以保存这个新的运行配置。 默认情况下，您的新运行配置将显示在[导航栏](https://www.jetbrains.com/help/idea/run-debug-configuration.html)中。

![New JAR run configuration in the navigation bar](new-run-config-nav-bar.png)

如果您按下 _HelloWorld JAR_ 运行配置旁边的黑色下拉菜单箭头，您可以看到您的 _HelloWorld_ 原始运行配置和我们刚创建的新配置。 让我们运行您的新的 _HelloWorld JAR_ 配置，看看它是否能正常工作。 在下拉中选择 _HelloWorld JAR_ 的情况下，按运行配置右侧的绿色箭头。

您应该可以得到和运行类文件一样的 "Hello World" 输出。

![Run window from the JAR file](run-output-with-jar.png)

这证明了它是按照我们预期的方式工作的。 但是，您怎么知道这是在运行您的 JAR 文件，而不过是您的类文件？

如果您看下[运行窗口](https://www.jetbrains.com/help/idea/run-tool-window.html)，您可以看到，IntelliJ IDEA 正在使用 `-jar` 参数来运行 JAR 文件。 它还显示了 `HelloWorld.jar` 文件的完整路径。

`../IdeaProjects/HelloWorld/out/artifacts/HelloWorld_jar/HelloWorld.jar`

在此之前，它显示的是完全限定（fully qualified）名称的类名，包括了包。 您可以确信，您的新运行配置确实运行了您创建的 `HelloWorld.jar`。 最后，让我们检查一下，每次使用我们创建的运行配置时，您的 JAR 文件是否按照我们配置的那样被重建了。 我们将在本教程的下一步通过对我们的类文件进行修改并检查输出结果来验证它。

---
