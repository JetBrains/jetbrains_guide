---
type: TutorialStep
date: 2021-24-08
title: 做一个修改
technologies: [ ]
topics: [ ]
author: hs
subtitle: 编辑我们的 Hello World 应用程序的输出，以检查其是否按预期工作。
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/H_XxH66lm3U?start=747
---

让我们继续修改 Java 文件，看看再次运行您的 _HelloWorld JAR_ 配置时是否打印出了一条新消息。

1) 在您的 `HelloWorld.java` 类中，将字符串从 "Hello World" 更改为其他的内容。

![Changed Hello World string](changed-hello-world.png)

2) 与其点击 _HelloWorld JAR_ 运行配置旁边的箭头，您可以按两次 **Control** ，来显示 [Run Anything（运行全部）](https://www.jetbrains.com/help/idea/running-anything.html) 对话框。 开始输入 _HelloWorld_，您将看到您的两个运行配置。 选择 _HelloWorld JAR_ ，然后按 **Enter**。

![Run anything dialog box with Hello World](run-anything.png)

3) 选择您的 _HelloWorld JAR_ 文件，并按 **Enter**。 在您的[运行窗口](https://www.jetbrains.com/help/idea/run-tool-window.html) ，您应该可以看到 IntelliJ IDEA 已经运行了您的应用程序并打印出您的新的字符串。 这意味着它在运行应用程序之前重建了 JAR 文件。

![Run window showing new output](new-output-string.png)

如果您有需要的话，您也可以滚动到运行窗口的右边来检查 IntelliJ IDEA 使用了哪个运行配置。 让我们在本教程的最后一步中总结一下我们所学到的东西。


---