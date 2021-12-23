---
type: TutorialStep
date: 2021-24-08
title: 打包应用程序
technologies: [ ]
topics: [ ]
author: hs
subtitle: 我们可以打包应用程序成 Java 归档文件（JAR）。
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/H_XxH66lm3U?start=495
---

当代码准备好后，我们可以[打包我们的应用程序到一个 JAR](https://www.jetbrains.com/help/idea/compiling-applications.html#package_into_jar)。 JAR 文件通常被用来部署应用程序到生产服务器。 一旦一个 JAR 文件被构建了，它就被称为 artifact（工件）。 让我们看看如何在 IntelliJ IDEA 中创建工件。

### 创建一个工件

1) 在 macOS 按 **Cmd+;**，或在 Windows 按 **Shift+Control+Alt+S** 打开[项目结构](https://www.jetbrains.com/help/idea/project-structure-dialog.html)对话框。


2) 在左侧菜单中选择 **Artifacts（工件）** 然后点击 **+** 图标。 选择 **JAR** 然后选择 **From modules with dependencies（来自具有依赖项的模块）**。

![Selecting a JAR file to build](jar-modules-dependencies.png)

您不需要为模块做任何更改，但是您需要说明哪一个类是您的项目下的 main 方法。 点击浏览的按钮来导航到您的 main 方法。 IntelliJ IDEA 会显示您的项目里的类列表，您只有一个类所以请选择它。

![Main class selected for JAR](main-class.png)

3) 按 **OK（确定）**来选择您的类。 所有其他的默认值足够适用于该教程，按 **OK（确定）**。 现在您可以看到定义在项目结构对话框里的您的新的 JAR 文件。

![Hello World JAR in the Project Structure dialog](hello-world-jar.png)

4) 如果和上面的截图相符合，按 **OK（确定）**。 您已经定义了如何构建 JAR 文件，但是您还没有实际构建过它。 您需要使用您的构建工件来构建它。


5) 点击 **Build（构建）** > **Build Artifacts（构建工件）**。 您将只有一个选择，就是我们刚刚定义的那个。

![Build artifacts](build-artifacts.png)

6) 按 **Enter** 来构建工件。 您的屏幕的左下角状态栏将会显示何时完成。

![Status bar](status-bar.png)

IntelliJ IDEA 将工件放置在您的 `out` 文件夹下名为 `HelloWorld_jar` 的文件夹里。

![Project window artifact](project-window-artifact.png)

要确保这个 JAR 文件已经创建成功，您将需要运行它。 我们会在这个教程的下一步使用 [运行配置](https://www.jetbrains.com/help/idea/run-debug-configuration.html) 来做这个。

---