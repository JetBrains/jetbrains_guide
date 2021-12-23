---
type: TutorialStep
date: 2021-08-30
title: 打开更多的终端会话
technologies: [ ]
topics: [ ]
author: hs
subtitle: 您可以在您的 IDE 中运行多个终端
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/tlEkrWU0d1M?start=74
---

## 打开多个终端会话
我们可以在 macOS 上使用 **⌘T**，或在 Windows 和 Linux 上使用 **Ctrl+Shift+T** [打开第二个 Terminal 选项卡](https://www.jetbrains.com/help/idea/terminal-emulator.html#new_session)来使用新命令来运行 MongoDB shell。

`mongo`

然后我们可以与正在运行的服务器进行交互，并检查我们的应用程序是否一切正常。

![Multiple MongoDB Shell](mulitple-mongo-shell.png)

在不同的选项卡中运行命令很有帮助，但有时两个不同的进程密切相关，我们想把它们放在一起看。 为此，我们可以右键单击我们的终端窗口并选择其中的一个选项来[拆分](https://www.jetbrains.com/help/idea/using-code-editor.html#split_screen)它，这样我们就可以在同一个窗口中运行两个。 例如，您可以在此拆分窗口中打开 mongo shell，并查看命令是否对正在运行的服务器有任何影响。

![Split Terminal View](split-terminal-view.png)

---

