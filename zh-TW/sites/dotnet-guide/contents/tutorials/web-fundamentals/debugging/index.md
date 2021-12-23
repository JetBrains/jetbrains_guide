---
type: TutorialStep
date: 2020-12-01
title: Debugging code
technologies:
  - asp.net
  - javascript
topics:
  - web
  - debugging
products:
  - tRANSLATED Rider
author: pwe
subtitle: What's your code doing? Step through code with the debugger, and find out.
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster.png
  url: https://youtu.be/10HzlZSEqVQ
---

Even the best codebases have bugs. For JavaScript developers, our IDEs bundle WebStorm’s debugger. Let’s take a look at its key features.

Let’s open an HTML page using the IDE. From the context menu in the **Solution** tool window, choose **Debug**. In HTML files, this creates and selects a JavaScript Run/Debug configuration, which is a **JavaScript Debug** configuration type. The run configuration points to our project’s `index.html` page, with Chrome as the browser.

JavaScript files can be debugged under the NodeJS debugger instead of Chrome. Use the context menu again, but for a JavaScript file. Choose Debug to start debugging, and see a new Run/Debug Configuration created. If we edit the new configuration, we see it is of type NodeJS.

Debugging in both Chrome and NodeJS have similar features. We commonly log to the console when debugging. This JavaScript file is included in our HTML and has a `console.log()` line. When debugging, the IDE re-routes these log statements from the Chrome console to its console.

Breakpoints let you stop execution on a specific line of code. In the IDE, adding a breakpoint is done by clicking in the gutter beside the line. A red circle will appear. Now when I click, execution stops on that line, and shows information about variables. No restart or browser refresh needed! Clicking the **Resume** button continues execution past the breakpoint.

When we stop at a breakpoint, we can inspect the state of the program, at that point: the variables and values in the local scope, and other scopes. You don’t have to look in the debugger tool window: values are shown inline in the editor, too.

If you close a file and then later re-open it, the breakpoint is still there, even if you close the IDE completely. This also means it’s easy to lose track of breakpoints in big projects. With the **View Breakpoints** dialog, the IDE makes it simple to see all of them, and delete ones you are not using. To have the debugger pop up when you hit a problem, rather than manually set breakpoints, you can set a breakpoint to handle JavaScript exceptions from here, too.

You can also set conditions on breakpoints, so you only pause execution when a certain condition is true or the breakpoint has been hit a number of times.

The IDE’s debugger has many ways to walk through your code. First, **Resume** continues execution until the breakpoint is reached again. The loop variable is now increased. **Step over** goes to the next line after the breakpoint, even if the breakpoint line calls a function. If you are stopped on a line that calls a function, and you want to debug into that function, you can use **Step Into**, and step through that function’s code.

Stopping at a breakpoint lets you use the variables pane to inspect the scope. What if you’d like more power? You can also, when stopped at a breakpoint, use the console. Its prompt is in the context of the breakpoint and its local variables.

Often you’re interested in one particular variable or expression as you step through code. You can set up “watches”, which focus on the variable or expression. Now as we resume through the code, we can easily see the expression results at different points in execution.

Make sure to check the linked resources for more debugging tips and tricks - not only in HTML and JavaScript, but also in your C# code.

### See Also

- [Sample code (ZIP file with 3 projects)](https://raw.githubusercontent.com/JetBrains/jetbrains_guide/master/sites/dotnet-guide/demos/tutorials/web-fundamentals/rider-web-fundamentals.zip) used throughout this tutorial.
- [.NET Guide - Debugging your code](https://www.jetbrains.com/dotnet/guide/topics/debugging/)
- [WebStorm Guide - Running and debugging](https://www.jetbrains.com/webstorm/guide/topics/running-debugging/)
- [Working with Run/Debug Configurations](https://www.jetbrains.com/help/rider/Run_Debug_Configuration.html)
- [Advanced debugging with breakpoints](https://blog.jetbrains.com/dotnet/2017/08/28/rider-advanced-debugging-breakpoints/)
