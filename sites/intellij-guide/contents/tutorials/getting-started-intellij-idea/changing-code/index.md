---
type: TutorialStep
date: 2023-02-03
title: Changing code
technologies: []
topics: []
author: hs
subtitle: Code is rarely a write-once activity, we often need to go back and change it multiple times.
thumbnail: ./thumbnail.png

---

Changing code is more common than writing code and IntelliJ IDEA can support you here as well. The tips listed here are just a few of the most helpful ones to get you started and also to potentially come to your assistance if things don't go the way you think! We will look at:
- Refactoring Code
- Reformatting Code
- Working with Multiple Carets
- Extending or Shrinking Selection
- Using the Clipboard History
- Using Local History

## Refactoring Code

<iframe width="560" height="315" src="https://www.youtube.com/embed/wDkTiWhlGyE" >
</iframe>

We often want to go back and revisit code that either we wrote or someone else wrote. That can be a variety of reasons including stabilising it, iterating on the functionality, or just reshaping it to improve the readability without changing the semantics.

IntelliJ IDEA supports a huge range of refactorings and associated keyboard shortcuts, but there's one shortcut you can use to invoke all refactorings which is (**⌃T** | **Ctrl+Alt+Shift+T**).

Some of the more common refactorings are:
- Rename
- Change signature
- Extract or inline a variable | field | parameter | method | constant

You should always use IntelliJ IDEA's refactoring capability when you're refactoring your code, but if you do forget and edit a variable name directly, for example, IntelliJ IDEA will prompt you with an `R` in the gutter. When you click this `R` icon IntelliJ IDEA will ask if you want to go ahead and let the IDE manage the refactor and show you associated problems as a result of your actions, so you can fix them before continuing.

## Reformatting Code

<iframe width="560" height="315" src="https://www.youtube.com/embed/24praE09oxE" >
</iframe>

Most teams have code standards that want to apply to all new code that is checked into version control. IntelliJ IDEA supports lots of formatting standards that you can access in your Preferences/Settings (**⌘,** | **Ctrl+Alt+S**) and then searching for "formatting" in **Editor > Java**. There are some different ways to apply those settings to your code; choose the best way at the time.

To reformat a file or selection of code:
Use (**⌥⌘L** | **Ctrl+Alt+L**) to reformat a file or selection of code according to the settings you have defined in your project. 

You can get additional reformat settings with (**⌥⇧⌘L** | **Ctrl+Shift+Alt+L**) which is useful because there's an option called **Only changes uncommitted to VCS** that you can select if you're working with a codebase where only changed or added code is adhering to a newer team-agreed formatting style. This is helpful to ensure you don't check in formatting changes in addition to changes in the codebase.

To change the formatting options for a selection of code:
You can select a section of code and then use Context Actions (**⌥⏎** | **Alt+Enter**) and then choose **Adjust code style settings** from the menu.

To automatically reformat code before you check it into version control:
In your Commit tool window (**⌘1** | **Alt+1**) there's a small cog icon, when you click that there's an option called **Reformat code**. Select this to ask IntelliJ IDEA to reformat your code according to your code style settings before you commit it to source control.

## Working with Multiple Carets

<iframe width="560" height="315" src="https://www.youtube.com/embed/z39jUnMZy44" >
</iframe>

Multiple carets are very useful for making the same change in multiple places and when you're working with list formats. You can use (**⌥** | **Ctrl**) twice, holding it down the second time and the pressing the Down key to create a stack of carets. [This blog post](https://foojay.io/today/working-with-multiple-carets-in-intellij-idea/) also covers how you can create carets at the end of your lines or in random places.

## Extending or Shrinking Selection

<iframe width="560" height="315" src="https://www.youtube.com/embed/KFqqOP89XJA" >
</iframe>

IntelliJ IDEA allows you to select code by scope which is helpful when you have longer methods or code that hasn't been formatted properly. Use (**⌥↑** | **Ctrl+W**) to expand the scope and (**⌥↓** | **Ctrl+Shift+W**) to collapse the scope.

## Using the Clipboard History

<iframe width="560" height="315" src="https://www.youtube.com/embed/TY_CqQYx4g0" >
</iframe>

Clipboard history (**⌘⇧V** | **Ctrl+Shift+V**) is like your normal clipboard but multiple of them! IntelliJ IDEA keeps track of everything you copy inside the IDE and the last thing on your clipboard that you copied outside the IDE. You can search through your Clipboard history, paste a subset or paste multiple entries. 

## Using Local History

<iframe width="560" height="315" src="https://www.youtube.com/embed/l0SWLbYitHg" >
</iframe>

Local History is not a substitute for version control, but it can get you out of trouble when something unexpected happens. IntelliJ IDEA takes snapshots of your code when certain events happen such as tests pass (or fail), you make some changes, or you perform a refactor. You can view the local history of a directory from the Project tool window by right-clicking on the directory and selecting **Local History > Show History**. You can view the local history of a file by either right-clicking on it in the Project tool window or by right-clicking in the file itself and selecting **Local History > Show History**.

The Local History dialog shows you a diff view so you can choose to roll back the whole file to a specific snapshot or just take a subset of the changes.

Just remember when something unexpected happens, check your Local history in IntelliJ IDEA before you rewrite all that code that you think you've lost!