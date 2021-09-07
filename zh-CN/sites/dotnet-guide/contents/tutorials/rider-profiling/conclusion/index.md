---
type: TutorialStep
date: 2020-07-06
title: Conclusion - Profiling in Rider
technologies:
  - .net
  - csharp
topics:
  - ide
  - profiling
products:
  - rider
  - dottrace
author: maartenba
subtitle: What have we learned? Profiling, profiler modes, optimizing code, DPA, and more. Let's summarize!
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster.png
  url: https://youtu.be/2C6Nx7jJegg
---

### Optimizing Application Performance with Rider

In this tutorial, we used the profiler in Rider to investigate and optimize performance of the [Sudoku solver application](https://github.com/JetBrains/DPA-demo).

There are still some issues remaining, such as excessive allocations of the `Cell` type, which can be solved with [making `Cell` a `struct`](https://blog.jetbrains.com/dotnet/2020/03/31/auto-detect-memory-issues-app-dynamic-program-analysis-rider-2020-1/). Some small updates of the codebase already greatly improved performance!

Keep in mind that we used Debug builds to analyze the application. Release builds would include compiler optimizations and provide better performance of our application.

We have seen the different profiling modes in Rider: Sampling, Tracing, Line-by-Line, and Timeline. Sampling or Timeline profiling have low overhead, and come in handy to do most performance analysis on your application. Tracing and Line-by-Line provide accurate call numbers, but don't provide reliable call timings.

A good profiling workflow is cyclic: start with a baseline profiling session, make incremental changes, and analyze performance improvements (or regressions) as you go.

Dynamic Program Analysis (or DPA) analyzes your code automatically, every time it runs. It gives you feedback around memory usage and allocations, and shows the call stacks where most memory allocation is happening. The Heap Allocations viewer may help you figure out where hidden allocations and boxing occur in code.

### See Also

- [Performance Profiling in Rider](https://www.jetbrains.com/help/rider/Performance_Profiling.html)
- [Profiling Applications](https://www.jetbrains.com/help/rider/Profiling_Applications.html)
- [Profiling Unit Tests](https://www.jetbrains.com/help/rider/Profiling_Unit_Tests.html)
- [Dynamic Program Analysis (DPA)](https://www.jetbrains.com/help/rider/Dynamic_Program_Analysis.html)
- [Heap Allocations Viewer plugin](https://plugins.jetbrains.com/plugin/9223-heap-allocations-viewer)
- [List of fixes for issues found by DPA](https://www.jetbrains.com/help/rider/Fixing_Issues_Found_by_DPA.html)
- [Sudoku solver application](https://github.com/JetBrains/DPA-demo) on GitHub
- [dotTrace performance profiler](https://www.jetbrains.com/profiler/)
- [dotMemory memory profiler](https://www.jetbrains.com/dotmemory/)