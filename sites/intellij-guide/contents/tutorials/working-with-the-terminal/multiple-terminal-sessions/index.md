---
type: TutorialStep
date: 2021-08-30
title: Opening more terminal sessions 
technologies: []
topics: []
author: hs
subtitle: You can run more than one terminal inside your IDE
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url:  https://youtu.be/tlEkrWU0d1M?start=74

---
## Opening Multiple Terminal Sessions
We can [open a second terminal tab](https://www.jetbrains.com/help/idea/terminal-emulator.html#new_session) with **⌘T** on macOS, or **Ctrl+Shift+T** on Windows and Linux, to run the MongoDB shell as a new command:

`mongo`

Then we can interact with the server that’s running, and check everything is OK for our application.

![Multiple MongoDB Shell](mulitple-mongo-shell.png)

Running commands in different tabs is helpful, but sometimes two different processes are closely related and we want to see them together. For this, we can [split](https://www.jetbrains.com/help/idea/using-code-editor.html#split_screen) our terminal window by right-clicking on it and selecting one of the options so that we can run two in the same window. For example, you can open up the mongo shell in this split window and can see if the commands have any impact on the running server.

![Split Terminal View](split-terminal-view.png)

---

