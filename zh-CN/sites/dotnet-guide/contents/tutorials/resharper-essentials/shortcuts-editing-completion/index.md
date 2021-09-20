---
type: TutorialStep
date: 2021-03-01
title: Shortcuts, Editing and Code Completion
technologies:
  - .net
  - csharp
topics:
  - 补全
  - editing
  - inspections
  - navigation
products:
  - resharper
author: matkoch
subtitle: Let's dive into the most important productivity shortcuts, editing, and code completion.
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster.png
  url: https://youtu.be/yvrheKkjOa4
---

### Get Going with ReSharper and <kbd>Alt-Enter</kbd>

As with any other new tool, it's very helpful to learn about its basic functionality first. ReSharper makes this very straightforward by providing <kbd>Alt-Enter</kbd> as the single entry point to [find actions and options](https://www.jetbrains.com/help/resharper/Navigating_to_Action.html), or to [apply fixes](https://www.jetbrains.com/help/resharper/Code_Analysis__Quick-Fixes.html) to our code.

After pressing <kbd>Alt-Enter</kbd>, we can start typing to find our desired action, which can include navigation methods, refactorings, or one of the several ReSharper tool windows. The list of actions always shows the assigned keyboard shortcut to help us learn faster.

Having <kbd>Alt-Enter</kbd> makes it very easy to keep your hands on the keyboard at all times, so you can avoid having to switch between input devices.

### Editing Code and Code Completion

ReSharper can help you while writing code. Wherever your caret position may be, ReSharper has a good selection of [code completion](https://www.jetbrains.com/help/resharper/Auto-Completing_Code.html) items for us!

For instance with [basic completion](https://www.jetbrains.com/help/resharper/Coding_Assistance__Code_Completion__Symbol.html), in a class body, we would get all possible access modifiers, whereas in function bodies we get all control flow keywords, imported types, parameters and variables available in that particular scope. Through [smart completion](https://www.jetbrains.com/help/resharper/Coding_Assistance__Code_Completion__Smart.html) we can even filter the list to show only relevant items, for instance to show only items of type `bool`.

Code completion also works for other languages and file formats, and even inside strings! Using [language injections](https://www.jetbrains.com/help/resharper/Auto-Completing_Code.html), HTML, regular expressions, and JSON is highlighted in strings, and shows relevant tags, character classes, or property names when needed.

Replace that part with:

### 代码模板

ReSharper's code templates can generate otherwise tedious code for you! The most basic templates are [live/surround templates](https://www.jetbrains.com/help/resharper/Templates__Template_Basics__Template_Types.html) and [file templates](https://www.jetbrains.com/help/resharper/Creating_a_File_Template.html) (even with [multiple files](https://www.jetbrains.com/help/resharper/Templates__Creating_and_Editing_Templates__Multifile.html)). A lot of general-purpose templates come preinstalled, for instance the `cw` template for `Console.WriteLine`, the `nguid` template to generate a new `Guid`, or the `try` surround template to generate a `try-catch` block (even works by temporarily overwriting the selected code). Templates can have placeholders, which can be entered when applying a template. But these placeholders can also make use of the [wide range of macros](https://www.jetbrains.com/help/resharper/Template_Macros.html) to give suggestions, including the current user, date and time, expected types for generic arguments, or transformation of other macro values (identifier name from text).

Another kind are [postfix templates](https://www.jetbrains.com/help/resharper/Postfix_Templates.html). These are typically written in a reverse order of thinking. For instance, instead of using the `foreach` live template and then defining the `numbers` collection as we go through the placeholders, with a postfix template we can write `numbers.foreach` and ReSharper will complete what we want with much less effort. A [full list of postfix templates](https://www.jetbrains.com/help/resharper/Postfix_Templates.html#list) is available from the options dialog. Postfix templates can't be defined in a simple way like live or surround templates (they require to use the ReSharper SDK), however, ReSharper also allows to define [source templates](https://www.jetbrains.com/help/resharper/Source_Templates.html) alongside our code. These can be used in a similar manner with just some smartness limitations.

### 另请参阅

- [随处搜索](https://www.jetbrains.com/help/resharper/Navigation_and_Search__Go_to_Type.html)
- [编码辅助](https://www.jetbrains.com/help/resharper/Coding_Assistance__Index.html)
- [代码生成](https://www.jetbrains.com/help/resharper/Code_Generation__Index.html)
