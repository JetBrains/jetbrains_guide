---
type: TutorialStep
date: 2021-09-20
title: 移动语句
technologies: [ ]
topics: [ ]
author: hs
subtitle: 在其范围内上下移动语句
thumbnail: ./thumbnail.png
---

## 在您的类中上下移动语句
在编辑器中，放置文本光标在您想要移动的语句上，按 **⇧⌘↑**（macOS）或 **Ctrl+Shift+向上箭头**（Windows/Linux）来向上移动语句。 或者使用 **⇧⌘↓**（macOS）或 **Ctrl+Shift+向下箭头**（Windows/Linux）来向下移动语句。

IntelliJ IDEA 将不会允许您将语句移出其定义的范围外。 这有助于保持您的代码没有错误并可以编译，所以这是移动您的代码的一个更好的方式，因为您不太可能引入错误。 当然如果您不小心把一个变量的使用移到了比它的定义更高的位置，IntelliJ IDEA 将会红色高亮它来表示虽然您仍处于正确的范围，您需要先定义该变量。

## 移动行
除了移动语句外，您还可以在您的类中移动行。 我们将在本教程的下一步来看看。   