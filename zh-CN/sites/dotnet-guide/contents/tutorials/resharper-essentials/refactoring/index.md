---
type: TutorialStep
date: 2021-03-01
title: Refactoring Code with ReSharper
technologies:
  - .net
  - csharp
topics:
  - refactoring
products:
  - rider
author: rachelappel
subtitle: How to safely refactor code, without breaking the build? Let's have a look.
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster.png
  url: https://youtu.be/vd9BvAPVmEI
---

### Refactoring

Refactoring is the process of restructuring code to improve readability and future maintainability.

ReSharper comes with a large set of automated solution-wide code refactorings that let you to rename, move, and safely delete symbols; introduce and inline fields, variables, or parameters, and carry out many more transformations painlessly - without breaking your code's logic!

Refactorings exist for almost all the languages supported by ReSharper. Using the [**Refactor This...**](https://www.jetbrains.com/help/resharper/Refactor_This.html) action, you get access to all available refactorings in the current context.

Some [refactorings can be applied inline](https://www.jetbrains.com/help/resharper/Refactorings__Inplace_Refactorings.html), without invoking any commands. If ReSharper sees a code change that could be an intention to refactor the code, the **Refactor This** action is shown in the gutter on the left-hand side of the editor. You can use this action and apply the refactoring with ease.

### See Also

- [Refactorings in ReSharper](https://www.jetbrains.com/help/resharper/Refactorings__Index.html)
- [Refactor This](https://www.jetbrains.com/help/resharper/Refactor_This.html)
- [Video: Refactoring to Patterns with ReSharper by Zoran Horvat](https://www.youtube.com/watch?v=_n3u5SjC7t4)
