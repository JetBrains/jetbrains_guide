---
type: TutorialStep
date: 2020-07-15
title: Debugging code with Rider
technologies:
  - .net
  - csharp
topics:
  - debugging
products:
  - tRANSLATED Rider
author: khalidabuhakmeh
subtitle: Examine the runtime behavior of your application, identify problematic code, run through code step by step.
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster.png
  url: https://youtu.be/F3yN9HirSQo
---

### Step through Code, Inspect what is Going On

With the debugger in Rider, you can attach to a new or existing process, and place breakpoints to pause the application and see what is going on while executing your code.

In the debugger, you can inspect variables, the current call stack, step over/into specific methods, and more. The debugger supports all .NET frameworks, .NET Core, Mono, Xamarin, Unity, ASP.NET and ASP.NET Core, in standalone apps, web apps and unit tests.

### Run Configurations

Debugging starts with [Run Configurations](https://www.jetbrains.com/help/rider/Run_Debug_Configuration.html), where you specify which project to run or debug.

When first creating or loading a project in Rider, a default run configuration is created, based on the project type, so minimal configuration is required to get started. In fact, for most application types, pressing the <kbd>F5</kbd> keyboard shortcut should be sufficient to launch the debugger.

### Breakpoints and Source Stepping

Breakpoints let you suspend the program execution at specific statement. You can then analyze variables values, call stack, and other program parameters, evaluate expressions, and step through the program. There are [different breakpoint types in the Rider debugger](https://www.jetbrains.com/help/rider/Using_Breakpoints.html).

You can [step through code](https://www.jetbrains.com/help/rider/Stepping_Through_the_Program.html), and use tools like [smart step into](https://www.jetbrains.com/help/rider/Stepping_Through_the_Program.html#smart_step_into) to debug nested calls.

Once your application is suspended, you can [use the variables pane](https://www.jetbrains.com/help/rider/Inspecting_Variables.html) to get a closer look at the current state of your program. Make use of [Pin to Top](https://www.jetbrains.com/help/rider/Inspecting_Variables.html#pinned_items) to customize how values are displayed without having to change your code.

### See Also

- [Debugging in Rider](https://www.jetbrains.com/help/rider/Debugging_Code.html)
- [Run Configurations](https://www.jetbrains.com/help/rider/Run_Debug_Configuration.html)
- [Run/Debug Configurations in Rider](https://blog.jetbrains.com/dotnet/2017/08/23/rundebug-configurations-rider/)
- [Debugging third-party/external code](https://blog.jetbrains.com/dotnet/2017/12/20/debugging-third-party-code-rider/)