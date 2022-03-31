---
type: TutorialStep
date: 2021-05-11
title: 'C# Source Generators in Action'
technologies:
  - .net
  - csharp
products:
  - rider
  - resharper
topics:
  - editing
  - completion
  - ide
author: maartenba
subtitle: Andrey Dyatlov
thumbnail: ./thumbnail.png
longVideo:
  poster: ./thumbnail.png
  url: https://youtu.be/052xutD86uI
---

C# 9 introduced the long-awaited compiler integrated code generation capability. If you've dreamed of getting rid of thousands of lines of code or have always wanted to try metaprogramming, now it's easier than ever!

In this talk, you will learn not only how to write your own source generator from scratch, but also how to provide the user with the necessary configuration flexibility and clear messages about problems. When using source generators, it's difficult to look at the resulting code, debug and troubleshoot, and write tests. This keeps many programmers from using it and in this talk, you will learn how generators cope with these problems.

As metaprogramming isn't new to C#, this talk will also cover how a source generators' approach is different from other technologies such as Fody, PostSharp, T4, and so on. Do they still have unique niches and advantages, or is the future with generators?

### Resources

* [Source code for the first demo](https://github.com/TessenR/NotifyPropertyChangedDemo)
* [Source code for the second demo](https://github.com/TessenR/BestPracticesSourceGeneratorsDemo)
* [Useful links (existing generators, tutorials, how-to's, etc)](https://gist.github.com/TessenR/ab40df2d6e971a8d6e5c6c6295d85d11)

### About the Presenter

**Andrey Dyatlov, ReSharper Software developer at JetBrains**

Andrey started his programming career with SCADA systems and industry equipment. He joined JetBrains 5 years ago, and works on the C# language support in ReSharper/Rider on everything from parser implementation to static analysis and refactorings. He is interested in static program analysis, type theory, and metaprogramming.

* Twitter: https://twitter.com/a_tessenr