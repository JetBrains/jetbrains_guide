---
type: TutorialStep
date: 2021-09-06
title: Reformatting Only Code You've Changed
technologies: []
topics: []
author: hs
subtitle: You can use IntelliJ IDEA's Reformatting dialog to only rearrange code that you've changed
thumbnail: ./thumbnail.png

---


## Reformatting Only Code You Have Changed
Often you don’t want to reformat the whole file that you’re working on, particularly if this is a code base with inconsistent formatting. You don't want to commit a lot of white space changes as well as the feature or bug fix that you've done.  If you are working on a file with some inconsistently formatted code, but you’ve only changed a small part of it, using **Reformat Code** might change parts of the file you haven't touched. In this instance, you would ideally like to highlight the code you’ve changed and [just reformat that](../reformatting-a-selection-or-class), but that won’t work when your changes are scattered throughout the file.

Instead, you can use **⌥⇧⌘L** (macOS), or **Ctrl+Alt+Shift+L** (Windows/Linux) to bring up the reformatting options dialog:

![Reformat Only Code That's Changed](reformat-code-only-changed.png)
˚º
In this dialog, select **Only changes uncommitted to VCS**. When you press **Run**, IntelliJ IDEA will reformat the lines in the file that you've changed and nothing else. 

## A Worked Example for Reformat Code
So now you know _when_ and _how_ to invoke reformat code. Let's take a look at a worked example in the next step of this tutorial.

