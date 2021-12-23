---
type: TutorialStep
date: 2021-08-30
title: 从终端中运行 IDE 功能
technologies: [ ]
topics: [ ]
author: hs
subtitle: 在终端中运行高亮显示的命令
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/tlEkrWU0d1M?start=327
---

## 在终端中运行命令
您可能会注意到终端窗口中的某些命令被高亮显示。 这是一个 [IntelliJ IDEA 2020.2 的功能](https://www.jetbrains.com/help/idea/terminal-emulator.html#smart-command-execution) ，它表明该命令可以在 IDE 中运行，这意味着我们不需要使用命令行。

![Yellow Highlight](yellow-highlight.png)

如果它以黄色高亮显示，并且我们按 **Enter**，那么该命令将按照我们的预期的那样在终端窗口中运行。 如果我们再次输入相同的命令，但这次我们在 macOS上 使用 **⌘⏎** ，或在 Windows 和 Linux 上使用 **Ctrl+Enter** ，IntelliJ IDEA 将使用 IntelliJ IDEA 中的功能，并打开相关的工具窗口。

IntelliJ IDEA 检测许多不同的命令，这些命令可以在 IDE 中运行，而不用从命令行运行。 例如 git 命令：

`git log`

如果我们按 **Enter**，它将会正常执行。 如果我们在macOS上按 **⌘⏎** ，或在 Windows 和 Linux 上按 **Ctrl+Enter** ，它将打开 intelliJ IDEA 中 [Git 日志窗口](https://www.jetbrains.com/help/idea/log-tab.html)。

这是发现 IDE 中的功能的好方法，这些功能是使用命令行的替代方式。 如果我们决定不需要这些建议，我们可以使用上下文菜单，从终端窗口的设置里关闭 “Run Commands using IDE（从终端运行IDE功能）”。 这些命令将不再高亮显示。

---