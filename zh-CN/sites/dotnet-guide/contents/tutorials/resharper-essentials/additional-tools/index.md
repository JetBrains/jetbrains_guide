---
type: TutorialStep
date: 2021-03-01
title: Additional Tools
technologies:
  - .net
  - csharp
topics:
  - editing
  - ide
  - inspections
products:
  - resharper
author: maartenba
subtitle: There's more in ReSharper! Architecture diagrams, localization manager, build tools, ...
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster.png
  url: https://youtu.be/4VC20lc_92o
---

### Architecture Diagrams

ReSharper comes with a number of architecture tools, including diagrams. There's a [project dependency diagram](https://www.jetbrains.com/help/resharper/Architecture__Project_Dependencies_Exploration.html), and a [type dependency diagram](https://www.jetbrains.com/help/resharper/Exploring_Type_Dependency_Graph.html).

#### 项目依赖关系图

The project dependency diagram lets you visualize project dependencies in your solution, and explore its architecture. They help to analyze project coupling in a solution. You can open it from the **ReSharper \| Architecture ** menu.

The toolbar on the left shows your solution, solution folders, and projects. You can use it to filter which projects to include on the diagram.

[Coupling analysis shows how a project dependency is used](https://www.jetbrains.com/help/resharper/Architecture__Project_Dependencies_Exploration.html#understanding-links-between-projects) - the thickness of the arrows on the diagram gives you information about how many usages there are. Using the context menu, you can show usages in a separate tool window and group them by type of usage.

#### 类型依赖关系图

The [type dependency diagram](https://www.jetbrains.com/help/resharper/Exploring_Type_Dependency_Graph.html) provides a way to investigate the inheritance hierarchy of types from your solution and from referenced libraries.

It visualizes how types depend on one another. Using the context menu, you can also initiate refactorings - no need to dive into code.

### Localization Manager

ReSharper's [Localization Manager](https://www.jetbrains.com/help/resharper/Resources__LocalizationManager.html) helps you localize applications.

You can open the Localization Manager from the **ReSharper \| Windows \| Localization Manager** menu, or use **Go to Action** (<kbd>Ctrl+Shift+A</kbd> and search for *Localization Manager*). In the Localization Manager tool window, you can view and edit localizable resources in a single grid. You can add, edit, and rename localizable strings. The grid view makes it easy to spot missing values that need a translation.

> **Tip:** Check the *[Localization Becomes easier with the Localization Manager in ReSharper](https://blog.jetbrains.com/dotnet/2019/12/09/localization-becomes-easier-localization-manager-resharper-2019-3/)* blog post for more background.

ReSharper also has inspections related to localization. When a string literal is detected that will be shown in the UI (for example when using `Console.WriteLine`, or by setting the text in a textbox control), ReSharper will highlight it. You can then use <kbd>Alt+Enter</kbd> and [move the string literal to a resource](https://www.jetbrains.com/help/resharper/Quickly_internationalize_a_NET_application.html).

### ReSharper Build

ReSharper Build [helps speed up building large solutions](https://blog.jetbrains.com/dotnet/2015/10/15/introducing-resharper-build/). It can be enabled using the **ReSharper \| Tools \| Build & Run** menu. This opens a new tool window where you can see which projects are being rebuilt, enable/disable ReSharper Build, and more.

Build acceleration works based on several techniques:
* ReSharper build will build multiple projects in parallel, when possible.
* ReSharper build uses multiple techniques to discover which projects have to be rebuilt.

Some changes in a solution may need the entire project chain to be rebuilt, other changes may only require a couple of projects to be rebuilt. ReSharper Build orchestrates this process.

### 运行配置

Visual Studio lets you run the current project, or define multiple startup projects. More complex solutions often have multiple projects that can be run, and switching between them is cumbersome.

ReSharper makes this easier with [Run Configurations](https://www.jetbrains.com/help/resharper/Run_Configurations.html). Using the <kbd>Ctrl+Shift+Alt+R</kbd> keyboard shortcut, you can quickly launch a project, executable, or static method. The popup menu lets you select whether you want to run, debug, profile, cover the executable.

> **Tip:** When you write a public static method, ReSharper gives you an <kbd>Alt+Enter</kbd> entry to debug/run/profile that method.

### Intermediate Language (IL) Viewer

When compiling .NET languages, your source code will be compiled to [Intermediate Language, or IL](https://en.wikipedia.org/wiki/Common_Intermediate_Language). This IL code can be executed on a variety of platforms and CPU types. Thanks to the "Just In Time" compiler in the .NET runtime, IL is translated into native code that can be executed.

Both ReSharper and dotPeek let you [explore (decompiled) IL instructions](https://www.jetbrains.com/help/resharper/Viewing_Intermediate_Language.html). It's good for learning!

When you hover an IL instruction, you can see what it does. For example, boxing issues can be seen in IL.

> **Note:** Boxing may cause memory traffic, and may not be intended/desired. Usually these types of memory hints are not something you will search for in IL code. You can use the [Heap Allocations Viewer extension](https://plugins.jetbrains.com/plugin/12390-heap-allocations-viewer) to enable additional inspections that warn about hidden allocations like boxing.

You can use profilers like dotMemory and dotTrace, or enable [Dynamic Program Analysis (DPA)](https://www.jetbrains.com/help/resharper/Dynamic_Program_Analysis.html) in ReSharper to analyze at runtime.

### 命令行工具

ReSharper is not only a Visual Studio extension! It ships as a set of standalone [command line tools](https://www.jetbrains.com/help/resharper/ReSharper_Command_Line_Tools.html) that can run outside Visual Studio, for example on your continuous integration server. They also exist as tools for the dotnet CLI.

These tools are available:
* [InspectCode](https://www.jetbrains.com/help/resharper/InspectCode.html), which executes code inspections and can give you a report about where code can be improved, new language features can be used, and all that.
* [dupFinder](https://www.jetbrains.com/help/resharper/dupFinder.html) will detect duplicated code in your solution or project, and gives hints about where you refactor code to make your code base more maintainable.
* [CleanupCode](https://www.jetbrains.com/help/resharper/CleanupCode.html), which checks code style and reformats code based on your formatting settings. This command line tool helps you maintain a uniform, formatted code base.

### 另请参阅

- [Explore Type hierarchies in ReSharper](https://www.jetbrains.com/help/resharper/Navigation_and_Search__Viewing_Type_Hierarchy.html)
- [Localization Manager](https://www.jetbrains.com/help/resharper/Resources__LocalizationManager.html)
- [Localizing applications with ReSharper](https://blog.jetbrains.com/dotnet/2019/12/09/localization-becomes-easier-localization-manager-resharper-2019-3/)
- [ReSharper Build](https://www.jetbrains.com/help/resharper/Reference_Windows_ReSharper_Build.html)
- [运行配置](https://www.jetbrains.com/help/resharper/Run_Configurations.html)
- [Exploring IL with ReSharper and dotPeek](https://blog.jetbrains.com/dotnet/2017/01/19/exploring-intermediate-language-il-with-resharper-and-dotpeek/)
- [Dynamic Program Analysis (DPA)](https://www.jetbrains.com/help/resharper/Dynamic_Program_Analysis.html)
- [ReSharper Command Line Tools](https://www.jetbrains.com/help/resharper/ReSharper_Command_Line_Tools.html)
