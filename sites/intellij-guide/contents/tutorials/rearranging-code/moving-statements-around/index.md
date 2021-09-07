---
type: TutorialStep
date: 2021-09-06
title: Moving Statements Around
technologies: []
topics: []
author: hs
subtitle: Moving a statements up and down within its defined scope
thumbnail: ./thumbnail.png
longVideo:
poster: ./poster_long.png
url: https://youtu.be/TZdeOOhTHlc
---

## Moving a Statements Up or Down in Your Class
In the editor, place the caret in the statement you want to move and press **⇧⌘↑** (macOS), or **Ctrl+Shift+Up** (Windows/Linux) to move a statement up. Alternatively, use **⇧⌘↓** (macOS), or **Ctrl+Shift+Down** (Windows/Linux) to move a statement down. 

IntelliJ IDEA will not let you move a statement outside its defined scope. This helps to keep your code green and compiling so it's a preferable way of moving your code as you're less likely to introduce errors. Of course, if you move try to use a variable defined in a scope before you've defined it, IntelliJ IDEA will highlight this in red to show you that while you're still in the correct scope, you need to define the variable first.   

**See Also**
- [IntelliJ IDEA Help - Code Statements](https://www.jetbrains.com/help/idea/working-with-source-code.html?keymap=primary_windows#move-statements)

## Rearranging Code Settings
You're likely to want to do more than move the odd line or statement around, and you're likely to want to apply any code arrangement rules at a project level. We'll take a look at the settings to achieve that in the next step of this tutorial. 