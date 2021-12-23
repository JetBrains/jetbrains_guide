---
type: TutorialStep
date: 2021-09-06
title: Reformatting a selection of code or class
technologies: [ ]
topics: [ ]
author: hs
subtitle: Use keyboard shortcuts to quickly reformat some code in your project
thumbnail: ./thumbnail.png
---

## Reformatting at the File Level
Let's start with the basics for reformatting. While IntelliJ IDEA will do its best to place your caret in the right place, sometimes code can get out of alignment. There's a quick way to fix this code up. You can use **⌘⌥L** (macOS), or **Ctrl+Alt+L** (Windows/Linux) to reformat a selection of code according to your reformat settings.

Let's press **⌘⌥L** (macOS), or **Ctrl+Alt+L** (Windows/Linux) in the class that contains this horribly formatted code:

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
The result is that two lines are reformatted, lines 20 and 23:

![Code reformatted correctly](reformat-code-in-class.png)

## Reformatting Only Code You've Changed
**⌘⌥L** (macOS), or **Ctrl+Alt+L** (Windows/Linux), will reformat according to your reformat settings. We'll take a look at one of the most useful reformat settings in the next step - reformat only code you've changed. 