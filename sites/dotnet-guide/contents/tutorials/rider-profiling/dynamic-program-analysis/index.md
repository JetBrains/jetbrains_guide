---
type: TutorialStep
date: 2020-07-06
title: Dynamic Program Analysis
technologies: [.net, csharp]
topics: [ide, profiling]
products: [rider]
author: maartenba
subtitle: Rider automatically profiles your applications, all the time! Let's look at Dynamic Program Analysis (DPA).
thumbnail: ./thumbnail.png
longVideo: 
    poster: ./poster.png
    url: https://youtu.be/rV1Xq3PU9Qw
---

### Dynamic Program Analysis (DPA)

It's a good idea to regularly do exploratory profiling of your applications. That takes time, and as a result,
profiling is often only done after an application starts misbehaving, in production. 

Dynamic Program Analysis (or DPA) is an automatic memory profiler that runs in the background of Rider. It checks your
application for various memory allocation issues, such as closures and allocations to large and small object heaps (LOH and SOH).

Allocation data is collected automatically, with almost zero overhead, making DPA a useful tool to catch memory
issues before pushing an application to production.

### Optimize Memory Pressure based on DPA

In the previous step, we concluded that the constructor of `Cell` is on the hot path, and we are causing too much
memory traffic overall. If you run the Sudoku solver, Dynamic Program Analysis will detect several issues. The top issue
is excessive allocation of the `Cell` type indeed!

Unfortunately, optimizing the issue with `Cell` would take us too far in rewriting various bits of code for this screencast.
You can make `Cell` a `struct` instead of a `class`, as described [here](https://blog.jetbrains.com/dotnet/2020/03/31/auto-detect-memory-issues-app-dynamic-program-analysis-rider-2020-1/).
This will move `Cell` from the heap to the stack, and reduce allocations.

### Optimize Closures using DPA

When you use Language Integrated Query (LINQ), or a lot of `async/await`, the compiler may have to generate hidden classes
that "capture" the current value of a variable. These allocations are not always obvious, and it may not be required to
optimize them at all.

However, when they happen on a hot path, they may matter after all. If a hidden allocation is done often, again, your
application may experience high memory traffic.

When you work with DPA, it's a good idea to use its companion: the [Heap Allocations Viewer plugin](https://plugins.jetbrains.com/plugin/9223-heap-allocations-viewer).
Using the Heap Allocations Viewer plugin may help clarify where memory is allocated, so you can optimize code.

In the Sudoku solver, you can optimize a call to `.FirstOrDefault()` by converting the LINQ statement into a `foreach`
loop instead, so you don't require capturing an existing variable.

There are various other memory issues that you can discover when using Dynamic Program Analysis. Check our
[list of fixes for issues found by DPA](https://www.jetbrains.com/help/rider/Fixing_Issues_Found_by_DPA.html) to learn more.

### See Also

- [Dynamic Program Analysis (DPA)](https://www.jetbrains.com/help/rider/Dynamic_Program_Analysis.html)
- [Heap Allocations Viewer plugin](https://plugins.jetbrains.com/plugin/9223-heap-allocations-viewer)
- [List of fixes for issues found by DPA](https://www.jetbrains.com/help/rider/Fixing_Issues_Found_by_DPA.html)
- [Sudoku solver application](https://github.com/JetBrains/DPA-demo) on GitHub