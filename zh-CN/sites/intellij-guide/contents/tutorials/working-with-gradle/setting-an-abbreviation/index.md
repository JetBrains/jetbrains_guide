---
type: TutorialStep
date: 2021-05-14
title: Setting an abbreviation
technologies: [ ]
topics:
  - tricks
author: tg
subtitle: Use a unique abbreviation to quickly navigate to the Gradle tool window
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/6V6G3RyxEMk?start=767
---

您可能已经注意到，当我们在随处搜索选项中输入“Gradle”时，会有很多结果。 We may want to provide a way to quickly access the Gradle tool window.

You can, of course, [set a keyboard shortcut](https://www.jetbrains.com/help/idea/configuring-keyboard-and-mouse-shortcuts.html#add-keyboard-shortcut) for any IntelliJ IDEA action, and you may want to set one for opening the Gradle tool window.

Alternatively, or even additionally, we can [add an abbreviation](https://www.jetbrains.com/help/idea/configuring-keyboard-and-mouse-shortcuts.html#add-abbreviation).

On the Keymap page of the Settings/Preferences dialog, **⌘,** (macOS), or **Ctrl+Alt+S**  (Windows/Linux), right-click an action and select **Add Abbreviation**.

![Add abbreviation](./add-abbreviation.png)

We can provide a short, memorable text string which we can use when searching for the Gradle tool window. For example, enter "grdl" and press **Enter**, or **OK**.

![Enter abbreviation](./abbreviation-to-use.png)

Now, if we bring up the Search Everywhere dialog by pressing **Shift** twice, and we type "grdl" we'll see the Gradle Tool Window as the first result, it's not hiding in a list of similar looking results.

![Enter abbreviation](./grdl-search-results.png)

Next, let's look at how to run Gradle tasks.