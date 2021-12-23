---
type: TutorialStep
date: 2021-09-06
title: 通过 Alt + 回车键来重新格式化
technologies: [ ]
topics: [ ]
author: hs
subtitle: 选择使用提示操作更改代码样式设置
thumbnail: ./thumbnail.png
---

## 用提示操作进行重新格式化

提示操作是 IntelliJ IDEA 中的捷径之一，即使在没有高亮显示代码的情况下，它在许多地方依然有效。

在一段代码片段中，假设您希望 `for 循环` 具有大括号。 您可以选中它，然后按 **⌥⏎**（macOS），或 **Alt+回车键**（Windows/Linux）。

![调整代码样式菜单](adjust-code-style-menu.png)

当您选择 **调整代码样式设置** IntelliJ IDEA 将做两件事。 首先，它将向您展示根据当前重新格式化规则重新格式化的代码的预览（下一步将对此功能进行更多介绍），其次，它将向您显示适用于该代码段落的设置。

您可以打开 **换行和括号** 选项卡，并改变 **强制加大括号** 为 _总是_。

![为我们的 for 循环强制加上大括号](force-braces.png)

您可以实时预览您的代码会是什么样子。 当您保存这些更改时，它们会被保存到您当前的  [代码样式](https://www.jetbrains.com/help/idea/configuring-code-style.html)。

如果您不喜欢更改，请按 **Esc** 或 **取消** 来关掉对话框。 代码将恢复到其以前的格式，在我们的 `for 循环` 上没有大括号。

## 重新格式化代码设置
当您使用快捷键  **⌘⌥L**（macOS），或 **Ctrl+Alt+L**（Windows/Linux）时，您就会以当前的代码样式配置重新格式化代码。 我们将在本教程的下一步中查看这些设置。 