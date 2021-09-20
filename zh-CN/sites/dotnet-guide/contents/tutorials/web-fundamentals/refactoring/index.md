---
type: TutorialStep
date: 2020-12-01
title: 重构
technologies:
  - asp.net
  - javaScript
topics:
  - web
  - ide
  - 重构
products:
  - rider
author: pwe
subtitle: See how the IDE helps you safely refactor code, without breaking existing code.
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster.png
  url: https://youtu.be/h51GC702vv4
---

Every so often, you might need to restructure your existing code without changing its behavior. You don’t want to do it manually –  life is too short. Let’s see how Rider helps.

We want to change the name of a symbol, which might be used in a couple of places in a file. But now it is broken in another file which imports it, so we change our mind.

Let’s use project-wide refactoring to rename `App` to be `MyApp`. Use the context menu on a file, select **Rename**, choose a new name, and let the IDE rename it for us. The IDE will also find all the references to it, including the ones in comments, strings, and text. The IDE is smart! It knows you probably want to rename the exported symbol when renaming the file.

The cool thing about this is that if you then change your mind, you can easily undo the refactoring. Press <kbd>Cmd+Z</kbd> on macOS or <kbd>Ctrl+Z</kbd> on Windows/Linux, and symbols return to their previous name, as do the filenames on disk.

There are quite a few other refactorings available. You can look them up from the **Refactor** menu, or use **Refactor This...** in code (<kbd>Ctrl+Shift+R</kbd>). You’ll see all the refactorings available in the current context there.

Let’s try performing another action that Rider can help you with: extracting a component. Why do it yourself when the IDE can do it for you? We just need to decide on a few things and we’ll get a component created for us on one side and the usage on the other. Have a look at our web help about [safely refactoring code](https://www.jetbrains.com/help/rider/Refactoring_and_Cleaning_Code.html).

### 另请参阅

- [Sample code (ZIP file with 3 projects)](https://raw.githubusercontent.com/JetBrains/jetbrains_guide/master/sites/dotnet-guide/demos/tutorials/web-fundamentals/rider-web-fundamentals.zip) used throughout this tutorial.
- [.NET Guide - Refactoring](https://www.jetbrains.com/dotnet/guide/topics/refactoring/)
- [WebStorm Guide - Refactoring](https://www.jetbrains.com/webstorm/guide/topics/refactoring/)
- [Inplace Refactorings](https://www.jetbrains.com/help/rider/Refactorings__Inplace_Refactorings.html#change_signature)