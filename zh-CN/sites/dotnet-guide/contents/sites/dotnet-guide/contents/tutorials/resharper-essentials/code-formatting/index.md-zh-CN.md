---
type: TutorialStep
date: 2021-03-01
title: Code Formatting
technologies:
  - .net
  - csharp
topics:
  - editing
  - ide
products:
  - resharper
author: citizenmatt
subtitle: Format and reformat code for consistency in your solution.
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster.png
  url: https://youtu.be/QpeTw4p3aeU
---

### Format and Reformat Code

Code that is formatted consistently is more readable, and more enjoyable to work with. But what is good formatting? How to use whitespaces and blank lines to arrange and separate code blocks, should you use tabs for indents (or spaces?), and many more questions typically arise in these discussions.

ReSharper comes with formatting rules that can suit every  team. There are default formatting rules based on the default Visual Studio formatting options and numerous best practices. You can configure every detail of formatting rules, and ReSharper will apply it for you, as you type, or when you invoke [Code Cleanup](https://www.jetbrains.com/help/resharper/Code_Cleanup__Index.html).

Formatting rules are applied when ReSharper runs code completion and code generation, and when refactorings are performed. Formatting rules can also be applied to existing code.

### Format Selection from Alt+Enter

When you select code in the editor and use the <kbd>Alt+Enter</kbd> shortcut, you can format that selected portion of code using the current code formatting configuration. There's also an option to [configure formatting rules based on the selected code](https://blog.jetbrains.com/dotnet/2017/11/29/configuring-code-formatting-code-selection-resharper/), so you can see the effect of code formatting rules on your own code and tweak it to your preference.

### .editorconfig

[EditorConfig](https://editorconfig.org) is a configuration file convention that is used to define and maintain consistent code styles between team members working on the same code, and between different editors and IDEs. A mixed team of ReSharper and Rider users is definitely possible, and code styles will be consistent across the two!

Style configuration is saved in files named `.editorconfig`, and can be shared easily by adding it to your Git repository (or other source control).

ReSharper will apply code styles defined in files named `.editorconfig` in the directory of the current file and in all parent directories.

You can [export code styles from ReSharper to `.editorconfig`](https://www.jetbrains.com/help/resharper/Using_EditorConfig.html#export-code-style-settings). No need to dive into the EditorConfig syntax - use **Format Selection** and let ReSharper generate this syntax for you.

> **Tip:** When not using `.editorconfig`, you can also share code styles (and other ReSharper settings) using [Settings Layers](https://www.jetbrains.com/help/resharper/Sharing_Configuration_Options.html).

### Code Cleanup

Based on the current code style, or using [custom profiles](https://www.jetbrains.com/help/resharper/Code_Cleanup__Index.html#profiles), you can run [code cleanup in bulk for a project or even a full solution](https://www.jetbrains.com/help/resharper/Code_Cleanup__Index.html). A [command line code formatting tool](https://www.jetbrains.com/help/resharper/CleanupCode.html) is also available.

### File/Type Layout

Code styles not only apply to the syntax, but also apply to the order of elements in a file or type. You can [configure how to reorder type members when cleaning up your code](https://www.jetbrains.com/help/resharper/Reference__Options__Languages__CSharp__Type_Members_Layout.html).

### See Also

- [Code formatting and style](https://www.jetbrains.com/help/resharper/Code_Formatting_Style.html)
- [Indentation style](https://www.jetbrains.com/help/resharper/Indentation_Style.html)
- [Using .editorconfig](https://www.jetbrains.com/help/resharper/Using_EditorConfig.html)
- [Configuring code formatting from code selection with ReSharper](https://blog.jetbrains.com/dotnet/2017/11/29/configuring-code-formatting-code-selection-resharper/)
- [JetBrains Rider cross-platform .NET IDE](https://www.jetbrains.com/rider/)
