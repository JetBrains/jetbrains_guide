---
type: TutorialStep
date: 2023-02-03
title: Reading code
technologies: []
topics: []
author: hs
subtitle: We spend more time reading code than writing it so it makes sense to invest effort in learning how the IDE can help us here.
thumbnail: ./thumbnail.png

---

Reading code is a crucial skill that we acquire as we go through our careers. IntelliJ IDEA can help you to read code and understand what it does with various mechanisms that you can tailor to the level of *support* that you want.

## Problem Window

<iframe width="560" height="315" src="https://www.youtube.com/embed/hn51Z91rO4k" >
</iframe>

IntelliJ IDEA will tell you if your file has any warnings or errors in with the Inspections Widget that appears in the top-right hand corner of each file.

![inspections-widget.png](inspections-widget.png)

You can click on this to open the Problems tool window or use (**⌘6** | **Alt+6**). You can navigate to each error by clicking on it or use **F2** to get to the next error and **Shift+F2** to go back to the previous error. Of course the goal is to keep your code always compiling but the Inspections Widget is very helpful to see the *state* of your file at a glance.

## Go to Next Error

<iframe width="560" height="315" src="https://www.youtube.com/embed/UfN8iWKHvt0" >
</iframe>

Errors are hard to avoid at times but it's much easier to address them as they happen in IntelliJ IDEA and keep your code green and compiling. You can use (**F2** | **F2**) to navigate to the next error in your code or (**⇧F2** | **Shift+F2**) to navigate to the previous error.

You can also use the Problem Window (**⌘6** | **Alt+6**) to see all the errors in one place and address them by clicking on each one.

## Inlay Hints 

<iframe width="560" height="315" src="https://www.youtube.com/embed/UfN8iWKHvt0" >
</iframe>

Inlay hints are IntelliJ IDEA's way of *decorating* your code with extra information to fill in some of the blanks you might have. They appear in light grey text and are highly configurable. They're especially helpful to understand code which has hard-to-decipher parameter names!

Inlay hints that IntelliJ IDEA can provide include:
- Who authored the code (without using Git Blame)
- Related Problems
- Usages 
- Parameters

... and more. You can configure them in your Preferences/Settings (**⌘,** | **Ctrl+Alt+S**) and searching for "inlay hints". 

## Gutter Icons

<iframe width="560" height="315" src="https://www.youtube.com/embed/UfN8iWKHvt0" >
</iframe>

Gutter icons are often overlooked because they're just *there* but I urge you to look again, especially if you're a visual learner and perhaps haven't mastered *all* keyboard shortcuts yet. 

Gutter icons can show you:
- Annotations
- Implementations
- Overrides 
- Recursive calls

... and more. You can configure them in your Preferences/Settings (**⌘,** | **Ctrl+Alt+S**) and searching for "gutter".

## Scrollbars

<iframe width="560" height="315" src="https://www.youtube.com/embed/UfN8iWKHvt0" >
</iframe>

Scrollbars is another feature that we perhaps need to take a second look at. IntelliJ IDEA gives us two scrollbars, one on the left, as you would expect and one on the right. 

The left-hand scrollbar gives us coloured bars to indicate changes in our code, that is when something has been added, removed or changed. Errors are also shown in red, although hopefully you won't have any of those!

The right-hand scrollbar is often overlooked but it's worth looking at it because it shows you the file's status at a glance. Whereas the left-hand scrollbar shows you the file's status depending on your position in the file, the right-hand scrollbar shows you the file at-a-glance, including errors. It's helpful to scan this scrollbar when you first open a file, or when you're about to check in changes just to check that everything is as you expect it to be.