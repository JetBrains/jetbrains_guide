---
type: TutorialStep
date: 2021-09-06
title: 仅格式化您刚更改的代码
technologies: [ ]
topics: [ ]
author: hs
subtitle: 如何仅对编辑过的代码进行重新格式化
thumbnail: ./thumbnail.png
---

### 仅重新格式化您已更改的代码
正如我们在上一步中谈到的，您可以使用快捷键 **⌘⌥L**（macOS），或 **Ctrl+Alt+L**（Windows/Linux）根据您的设置重新格式选择的代码或整个类。 您也可以在类级别上进行操作， 通过 **⌘⇧A**（macOS），或 **Ctrl+Shift+A**（Windows/Linux）打开查找操作对话框， 然后搜索 _重新格式化代码_：

![通过查找操作来格式化代码](reformat-code-find-actions.png)

在 **重新格式化代码** 选项按 **回车键** ，将当前的样式设置应用于您的类。

然而，您通常不想重新格式化您正在处理的整个文件，特别是如果这是格式不一致的代码。 您不想与您已完成的功能或 bug 修复一起提交大量的空格更改。  如果您正在处理一个格式不一致的代码的文件，但您只更改了其中的一小部分，那么使用  **重新格式化代码** 可能会更改未触及的部分。 在这种情况下，推荐您选择更改的代码，[只格式化那部分](../reformatting-a-selection-or-class)，但当您的更改分散落在文件中时，这将起不到作用。

在这种情况下，您可以使用 **⌥⇧⌘L**（macOS），或 **Ctrl+Alt+Shift+L**（Windows/Linux）来打开重新格式化选项的对话框：

![仅格式化您更改的代码](reformat-code-only-changed.png)

在此对话框中，选择 **仅未提交到 VCS 的变更**。 当你按下 **运行**，IntelliJ IDEA将格式化文件中您改变过的行，不涉及其他行。

## 用提示操作进行重新格式化
让我们在下一步中来看看如何通过 [提示操作](https://www.jetbrains.com/help/idea/intention-actions.html) 来格式化代码。