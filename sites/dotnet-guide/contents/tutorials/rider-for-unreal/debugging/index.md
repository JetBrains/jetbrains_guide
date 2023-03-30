---
type: TutorialStep
date: 2023-04-04
title: Debugging Unreal Engine with Rider
technologies: [unreal]
topics: [gaming,ide,debugging]
products: [rider]
author: citizenmatt
subtitle: Use the Unreal Editor log and the debugger to see what's going on in your game.
thumbnail: ./thumbnail.png
longVideo: 
    poster: ./poster.png
    url: https://www.youtube.com/watch?v=_bvrngxZYds&start=1812s&end=2239s
---

### Unreal Editor log

While playing, you can see real-time log messages in Rider's Unreal Editor log. This is useful as it does not require you to switch back-and-forth between the Unreal Engine Editor and Rider while you are working on your code.

### Debugging

To debug your game, Rider comes with a rich debugger UI and LLDB backend on all three major platforms. On Windows, this debugger is developed by the JetBrains team and is capable of debugging code built with the Microsoft Visual C++ compiler.
You can set line breakpoints, watchpoints, conditional breakpoints, and others. You can also use evaluate expressions or set values during debugging sessions.

The LLDB-based debugger has support for Natvis files and automatically finds and loads the UE4.natvis, providing user-friendly views of Unreal Engine data types.

In the debugger, Rider automatically generates one-line summaries for all structures not covered by Natvis, and summaries are colored to increase readability.
It shows the [Raw View](https://docs.microsoft.com/en-us/visualstudio/debugger/create-custom-views-of-native-objects?view=vs-2019#BKMK_Item_expansion) for Natvis-generated values.
Built-in formatters are enabled for wide/Unicode strings (`wchar_t`, `char16_t`, `char32_t`).

### See Also

- [Unreal Engine debugger](https://www.jetbrains.com/help/rider/Unreal_Engine__Debugger.html)
- [Debugging code with Rider](https://www.jetbrains.com/dotnet/guide/tutorials/rider-essentials/debugging/)
- [More about Rider for Unreal...](https://www.jetbrains.com/lp/rider-unreal/)