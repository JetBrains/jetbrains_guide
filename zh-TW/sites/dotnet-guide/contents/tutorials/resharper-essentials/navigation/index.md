---
type: TutorialStep
date: 2021-03-01
title: Navigating Code with ReSharper
technologies:
  - .net
  - csharp
topics:
  - 導覽
products:
  - resharper
author: citizenmatt
subtitle: Let's look at some fast and easy ways to navigate around a code base.
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster.png
  url: https://youtu.be/-LlVzyzO3mA
---

### Navigating Code in ReSharper

No matter which programming language you use, ReSharper helps you navigate your Visual Studio solutions. ReSharper lets you navigate C#, F#, VB.NET, JavaScript, TypeScript, CSS, HTML and many more languages, and even provides Go-to-Text to quickly find string literals in your code files.

Using [Search Everywhere](https://www.jetbrains.com/help/resharper/Navigation_and_Search__Go_to_Type.html), triggered by the <kbd>Ctrl+T</kbd> keyboard shortcut, you can navigate to types, symbols, files, string literals in source and textual files, recent edits, recent files, and recently viewed methods. ReSharper also [searches in referenced libraries and NuGet packages](https://www.jetbrains.com/help/resharper/Navigation_and_Search__Navigating_to_External_Sources.html), and can decompile code or download symbol information to show external source code.

In searches, you can make use of "CamelHumps". In code, we often use CamelCase for classes and methods. ReSharper can search based on just the uppercase characters - in other words, searching for `VE` will find `ViewEngine`.

If the list of search results contains too many entries, you can cycle through different types of results to narrow the scope. For example, pressing <kbd>Ctrl+T</kbd> again will cycle between finding symbols, files, and other elements. In a search, you can press <kbd>Shift+Enter</kbd> to open results in a separate tool window.

Some other options available are:

* [Search Everywhere/Go to Type](https://www.jetbrains.com/help/resharper/Navigation_and_Search__Go_to_Type.html)
* [Go To File](https://www.jetbrains.com/help/resharper/Navigation_and_Search__Go_to_File.html)
* [Go To File Member](https://www.jetbrains.com/help/resharper/Navigation_and_Search__Go_to_File_Member.html)
* [Go To Symbol](https://www.jetbrains.com/help/resharper/Navigation_and_Search__Go_to_Symbol.html)
* [Go To Text](https://www.jetbrains.com/help/resharper/Navigation_and_Search_Go_to_Text.html)

This is not a complete list - check the [ReSharper web help on Navigation](https://www.jetbrains.com/help/resharper/Navigation_and_Search__Index.html) for more examples and use cases.

### Navigate To menu

The [Navigate To...](https://www.jetbrains.com/help/resharper/Navigation_and_Search__Navigate_from_Here.html) action (<kbd>Alt+Backtick</kbd>) is a single shortcut for many navigation actions.  The list of navigation destinations is displayed depending on the current context.

You can invoke **Navigate To** from code in the editor, and also in the Solution Explorer, the File Structure window and several other tool windows. Definitely try it out!

### Recent Files and Edits

By keeping track of your actions and navigation history, [ReSharper lets you navigate to recent locations and edits](https://www.jetbrains.com/help/resharper/Navigation_and_Search__Navigating_to_Recent_Locations.html) using the <kbd>Ctrl+,</kbd> and <kbd>Ctrl+Shift+,</kbd> keyboard shortcuts.

This makes it easy to navigate to places where you have edited or just looked at code. The list of viewed/edited files are stored separately for each solution, and is saved. As soon as you open a solution, you'll get the list of the files you worked with in previous sessions.

### Navigate by Stack Trace

When you get a textual stack trace (for example, from a bug report), you can open it in the [Stack Trace Explorer window](https://www.jetbrains.com/help/resharper/Reference__Windows__Stack_Trace_Explorer.html). ReSharper then lets you [navigate from Stack Trace to Exception](https://www.jetbrains.com/help/resharper/Navigation_and_Search__Navigating_to_Exception.html), to make it easier to track down the origin of a particular exception.

### See Also

- [ReSharper web help on Navigation](https://www.jetbrains.com/help/resharper/Navigation_and_Search__Index.html)
- [Navigate from here](https://www.jetbrains.com/help/resharper/Navigation_and_Search__Navigate_from_Here.html)
- [Finding Text More Quickly with Go to Text in ReSharper](https://blog.jetbrains.com/dotnet/2020/10/12/finding-text-more-quickly-with-go-to-text-in-resharper/)
