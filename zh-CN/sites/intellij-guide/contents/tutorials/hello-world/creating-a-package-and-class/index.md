---
type: TutorialStep
date: 2021-24-08
title: 创建包和类
technologies: [ ]
topics: [ ]
author: hs
subtitle: 使用 IntelliJ IDEA 创建新的包和类。
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/H_XxH66lm3U?start=116
---

我们建议将 IntelliJ IDEA 应用全屏，为您的新的 Hello World 项目提供最大的空间。

项目窗口显示构成我们项目的所有目录和文件。

![Project Window](project-window.png)

当然，您可以使用鼠标来浏览项目窗口，但是您也可以使用方向键。 您还可以在 macOS 上使用 **Cmd**+**1** ，或在 Windows/Linux 上 **Alt**+**1** 切换是否显示该工具窗口。

### 创建您的包和类

接下来，您将创建包和类。 应用程序的包用来把属于同一类别或提供类似功能的类归类到一起。 它们对于组织可能具有数百个类的大型应用程序很有用。

1) 要创建一个新类，请选择蓝色的 src 文件夹，在 macOS 上按 **Cmd**+**N** ，或在 Windows/Linux 上按 **Alt**+**Insert**。 从弹出窗口里选择 _Java Class（Java 类）_ 。

![New Java class](new-java-class.png)

您可以在此处输入一个简单的类名，但如果您要在特定的包中创建新的类的话，您可以输入按点分隔的整个包路径，然后输入类名。 例如 `com.example.helloworld.HelloWorld`。

![New package and class](new-package-and-class.png)

在这里， `example` 可以是您想使用的域名， `HelloWorld` 是您的 Java 类的名字，来让 IntelliJ IDEA 创建它。

当您按下 **Enter**，IntelliJ IDEA 将创建您想要的包，以及您指定的此包的正确目录结构。 它还创建了一个新的 `HelloWorld.java` 文件，并生成了此类文件的基本内容。 例如，包语句和类声明，这个类与文件具有相同的名称。

![New project and class created in IntelliJ IDEA](new-project-and-class-idea.png)


### 编码您的 HelloWorld 类

1) 您可以通过按 **Shift**+**Enter**，在类文件中移动到下一行。 这样就可以把文本光标移动到下一行的正确位置，而且不会破坏前一行的内容。

2) 要创建标准的 Java 主方法，输入 `main`。 IntelliJ IDEA 会显示一个 [live template（实时模板）](https://www.jetbrains.com/help/idea/using-live-templates.html) ，您可以使用该模板生成完整的代码构造来节省大量时间。 您还可以在 macOS 上使用 **Cmd**+**J**，或在 Windows/Linux 上使用 **Ctrl**+**J** ，查看 IntelliJ IDEA 中适用于当前上下文的所有实时模板。

**注意**： 按下 **Escape** 总是会关闭一个下拉菜单或者对话框， 且不做改变。

![Main method live template](main-live-template.png)

3) 按 **Enter** 来选择它。 IntelliJ IDEA 将为您生成代码的其余部分。

![Main method created](main-method-created.png)

4) 现在，您需要调用一个方法，将一些文本打印到标准系统输出。

IntelliJ IDEA 为您提供 [代码完成](https://www.jetbrains.com/help/idea/auto-completing-code.html)。 如果您输入 `Sy`，您会看到一个下拉菜单显示您可能想要调用的类。 您需要 `System` ，那么您可以在高亮的选项下按 **Control**+**.**。

![System using code completion](system-code-completion.png)

**注意**：它对大小写敏感，输入 `sy` 而不是 `Sy` 会给您不同的结果！

5) 现在输入 `o`， IntelliJ IDEA 将建议您使用 `out` 作为下一个函数。 IntelliJ IDEA 正在向您展示 `System` 类的可访问字段和方法列表。 那些以字母 `o` 开头的方法和字段列在前面，接下来是包含字母 `o` 的其他方法和字段。


6) 按 **Control+.**，这次 IntelliJ IDEA 将会建议 `println`。 按 **Enter** 来选择它。


7) IntelliJ IDEA 也会把文本光标放在括号里，这样您就可以提供方法的实参。 输入一个引号 `"`，IntelliJ IDEA 将为您输出一对引号。 现在您可以在引号之间输入您的文本—— `Hello World`。

![Hello World statement](hello-world-statement.png)

**注意**：除了以上的步骤，您也可以输入 `sout` ，来使用 [实时模板](https://www.jetbrains.com/help/idea/using-live-templates.html)，该模板将为您创建代码构造，但我们想向您展示代码补全的功能！

恭喜，您刚刚创建了您的第一个 Java 应用程序！ 像这样的 Java 文件可以编译成字形码， 并在 Intellij IDEA 中运行。 让我们在下一步看看。


---

