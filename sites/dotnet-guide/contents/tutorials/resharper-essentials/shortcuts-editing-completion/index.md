---
type: TutorialStep
date: 2021-03-04
title: Shortcuts, Editing and Code Completion
technologies: [.net, csharp]
topics: [completion, editing, inspections, navigation]
products: [resharper]
author: matkoch
subtitle: Let's dive into the most important productivity shortcuts, editing, and code completion.
thumbnail: ./thumbnail.png
longVideo: 
    poster: ./poster.png
    url: https://TODO
---

### Get Going with ReSharper and <kbd>Alt-Enter</kbd>

As with any other new tool, it's very helpful to learn about its basic functionality first. ReSharper makes this very straightforward by providing <kbd>Alt-Enter</kbd> as the single entry point to [find actions and options](https://www.jetbrains.com/help/resharper/Navigating_to_Action.html), or to [apply fixes](https://www.jetbrains.com/help/resharper/Code_Analysis__Quick-Fixes.html) to our code.

After pressing <kbd>Alt-Enter</kbd>, we can start typing to find our desired action, which can include navigation methods, refactorings, or one of the several ReSharper tool windows. The list of actions always shows the assigned keyboard shortcut to help us learn faster.

Having <kbd>Alt-Enter</kbd> makes it very easy to keep your hands on the keyboard at all time, so you can avoid having to switch between input devices all the time.

### Editing Code and Code Completion

ReSharper can help you while writing code. Whatever your caret position may be, ReSharper has good selection of [code completion](https://www.jetbrains.com/help/resharper/Auto-Completing_Code.html) items for us!

For instance, in a class body, we would get all possible access modifiers, whereas in function bodies we get all control flow keywords, imported types, parameters and variables available in that particular scope. Through [double completion](https://www.jetbrains.com/help/resharper/Coding_Assistance__Code_Completion__Double.html) we can even filter the list to show only relevant items, for instance to show only items of type `bool`.

Code completion also works for other languages and file formats, and even inside strings! Using [language injections](https://www.jetbrains.com/help/resharper/Auto-Completing_Code.html), HTML, regular expressions, and JSON is highlighted in strings, and shows relevant tags, character classes, or property names when needed.

### Generating Code

ReSharper's code generation actions can create a lot of code for you! Constructors to initialize any set of type members, methods and properties required by an interface you're implementing, equality checks, formatting members, and more.

Using the <kbd>Alt+Insert</kbd> keyboard shortcut, you can generate type members, properties, equality member, properties with change notification when a class implements `INotifyPropertyChanged`, and more. Have a look at the [code generation options that come with ReSharper](https://www.jetbrains.com/help/resharper/Code_Generation__Index.html).

### See Also

- [Search Everywhere](https://www.jetbrains.com/help/resharper/Navigation_and_Search__Go_to_Type.html)
- [Coding assistance](https://www.jetbrains.com/help/resharper/Coding_Assistance__Index.html)
- [Code Generation](https://www.jetbrains.com/help/resharper/Code_Generation__Index.html)
