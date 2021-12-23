---
type: TutorialStep
date: 2021-08-30
title: 打开 IntelliJ IDEA 终端窗口
technologies: [ ]
topics: [ ]
author: hs
subtitle: 如果使用键盘快捷键打开新的终端窗口
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/tlEkrWU0d1M?start=20
---

## 打开终端窗口
在这个例子中，我们有一个简单的 Spring Boot 应用程序，它需要一个正在运行的 [MongoDB](https://www.mongodb.com/) 数据库。 我们可以在 macOS 上使用 **⌥F12**，或在 Windows 和 Linux 上使用 **Alt+F12** [打开终端窗口](https://www.jetbrains.com/help/idea/terminal-emulator.html#open-terminal)。 终端支持操作系统支持的所有相同的命令。

如果我们想启动 MongoDB 数据库实例，并使用[特定的路径来存储数据](https://docs.mongodb.com/manual/tutorial/manage-mongodb-processes/#specify-a-data-directory)，我们可以输入：

`mongod --dbpath [path to data here]`

然后按 Enter。 当 MongoDB 在终端会话中运行时，我们可以回到编辑器中编写应用程序的代码。 通过使用内置的终端，我们不必在应用程序之间切换，并且我们可以很容易地在同一个窗口中看到我们开发中的方方面面。

![MongoDB Running in the Terminal](mongodb-running-in-terminal.png)
---