---
type: TutorialStep
date: 2021-09-06
title: 重新格式化选择的代码或类
technologies: [ ]
topics: [ ]
author: hs
subtitle: 使用键盘快捷键快速格式化项目中的某些代码
thumbnail: ./thumbnail.png
---

## 文件级别的重新格式化
让我们从重新格式化的基本知识开始说起。 虽然 IntelliJ IDEA 会尽量将您的文本光标放在正确的地方，但有时代码可能会脱离对齐。 有一个快速的方法来修复这个问题。 您可以使用 **⌘⌥L**（macOS），或 **Ctrl+Alt+L**（Windows/Linux）根据您的设置对选择的代码进行重新格式化。

让我们在下面这段糟糕的代码上按  **⌘⌥L**（macOS），或 **Ctrl+Alt+L**（Windows/Linux）：

```java
public void horriblyFormattedMethod() {
        System.out.println("First line");
           System.out.println("Second line");
        System.out.println("Third line");
        for (int i = 0; i < 3; i++) {
            System.out.println("I have no idea where the indentation is supposed to be");
        }
    }
```
结果会是，有两行被重新格式化，第 20 行和第 23 行：

![正确地重新格式化代码](reformat-code-in-class.png)

## 仅格式化您刚更改的代码
按下**⌘⌥L**（macOS），或 **Ctrl+Alt+L**（Windows/Linux）将根据您的设置进行重新格式化。 我们将在下一步中了解到最有用的格式化设置之一 - 仅格式化您刚更改的代码。 