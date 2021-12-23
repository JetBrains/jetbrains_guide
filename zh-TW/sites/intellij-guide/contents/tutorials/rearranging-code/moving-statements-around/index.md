---
type: TutorialStep
date: 2021-09-20
title: Moving Statements Around
technologies: [ ]
topics: [ ]
author: hs
subtitle: Moving a statements up and down within their scope
thumbnail: ./thumbnail.png
---

## Moving a Statement Up or Down in Your Class
In the editor, place the caret in the statement you want to move and press **⇧⌘↑** (macOS), or **Ctrl+Shift+Up** (Windows/Linux) to move a statement up. Alternatively, use **⇧⌘↓** (macOS), or **Ctrl+Shift+Down** (Windows/Linux) to move a statement down.

IntelliJ IDEA will not let you move a statement outside its defined scope. This helps to keep your code green and compiling so it's a preferable way of moving your code as you're less likely to introduce errors. Of course, if you accidentally move the use of a variable higher than its definition, IntelliJ IDEA will highlight this in red to show you that while you're still in the correct scope, you need to define the variable first.

## Moving Lines Around
As well as moving statements around, you can also move lines around within your class. We'll look at this in the next step of this tutorial.   