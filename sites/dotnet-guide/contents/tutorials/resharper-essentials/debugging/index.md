---
type: TutorialStep
date: 2021-03-01
title: Debugging Applications with ReSharper
technologies: [.net, csharp]
topics: [debugging]
products: [resharper]
author: khalidabuhakmeh
subtitle: What is your code doing? Identify problematic code, and run code step-by-step with the debugger.
thumbnail: ./thumbnail.png
longVideo: 
    poster: ./poster.png
    url: https://youtu.be/ZIEiWWz60Z4
---

### A Better Debugging Experience

Debugging in Visual Studio has always been great. With ReSharper, it gets better. Let's look at some of the improvements ReSharper brings.

### Inline Debugging Adornments

Traditionally, Visual Studio users would have to rely on the Auto, Locals, and Watch windows to see what values are in the current scope.
With ReSharper, you can step through your code base and [see values displayed directly in the editor](https://www.jetbrains.com/help/resharper/Debugging_Assistance.html#inline-debugging).
This is especially useful in looping scenarios, where you can see values change in real-time.

### Searchable DataTips

ReSharper provides an improved replacement for Visual Studio's DataTips. You can [search for specific values](https://www.jetbrains.com/help/resharper/Debugging_Assistance.html#searchable-datatips) in the current context by typing in the DataTip.
DataTips will say open until you click away or press the <kbd>Esc</kbd>button.

You can also can choose which values get displayed inline, so you don't have to write a `DebuggerDisplay` attribute. ReSharper lets you specify these at runtime!

### Go to Breakpoints and Breakpoints Window

When dealing with breakpoints, it's easy to forget when and where you placed them. ReSharper comes with [**Go to Breakpoints**](https://www.jetbrains.com/help/resharper/Navigation_and_Search_Navigating_Breakpoints.html) - you can trigger it using the <kbd>Ctrl+Alt+F9</kbd> shortcut.

ReSharper also adds a custom breakpoints tool window, where you can:
* Group breakpoints by file/folder/project/type/member
* Type to search for breakpoints
* Enable/disable, or remove breakpoints
* See a preview of the code where you set the breakpoint
* And more!

> **Tip:** To track a symbol across your solution, use the **Find Results** tool window and then **Set a Breakpoint** on all occurrences.

### Debugging Third-Party Assemblies

It can be frustrating when assemblies don't ship with debugging information (PDB).
When you come across an assembly with no symbols loaded, you can use ReSharper's decompiler to generate a PDB and load it into the debugger.
Once done, you can debug third-party code as if it was your own.

### See Also

- [Debugging assistance](https://www.jetbrains.com/help/resharper/Debugging_Assistance.html)
- [Navigate to breakpoints](https://www.jetbrains.com/help/resharper/Navigation_and_Search_Navigating_Breakpoints.html)
- [Debugging without source code](https://www.jetbrains.com/help/resharper/Debugging_Without_Source_Code.html)