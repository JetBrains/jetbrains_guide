---
type: TutorialStep
date: 2021-09-06
title: Reformatting with Alt + Enter
technologies: []
topics: []
author: hs
subtitle: Using intention actions on a selection to change the code style settings
thumbnail: ./thumbnail.png

---

## Reformat with Intention Actions 

Intention Actions is one of those shortcuts in IntelliJ IDEA that works in a number of places, even if IntelliJ IDEA has not specifically highlighted the code.  

In this code snippet, let's say you want your `for` loop to have curly braces. You can highlight it and then press **⌥⏎** (macOS), or **Alt+Enter** (Windows/Linux).

![Adjust Code Style Menu](adjust-code-style-menu.png)

When you press **Adjust code style settings** IntelliJ IDEA will do two things. Firstly, it will show you a preview of the code reformatted according to your current reformatting rules (more on that in the next step), secondly it will show you the settings that apply to that bit of code.

You can go to the **Wrapping and Braces** tab and change **Force Braces** to _Always_. 

![Force Braces for our For Loop](force-braces.png)

You get a live preview of what your code will look like. When you save these changes, they are saved to your current [code style scheme](https://www.jetbrains.com/help/idea/configuring-code-style.html).

If you don't like the changes, press **Escape** or **Cancel** to leave the dialog without saving. The code will revert to its previous formatting and without the curly braces on our `for` loop.

## Reformatting Code Settings
When you use the keyboard shortcut **⌘⌥L** (macOS), or **Ctrl+Alt+L** (Windows/Linux) you apply the current reformatting settings that are configured in your code style. We'll take a look at those settings in the next step of this tutorial. 