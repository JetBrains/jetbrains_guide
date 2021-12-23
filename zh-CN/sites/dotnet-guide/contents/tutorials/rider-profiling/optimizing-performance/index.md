---
type: TutorialStep
date: 2020-07-06
title: Optimize Performance with Rider
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
subtitle: Let's try to optimize the Sudoku solver by profiling, and then optimizing code based on the performance snapshot.
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster.png
  url: https://youtu.be/P__B5MII4h8
---

### Measure Performance with Sampling

To profile the Sudoku solver, you will use [sampling](https://www.jetbrains.com/help/profiler/Profiling_Guidelines__Choosing_the_Right_Profiling_Mode.html). Since the application is mostly code and does not have much File I/O and multithreading going on, there is no added benefit from using Timeline mode.

Once you start the profiler, the application starts and you will see the Performance Profiler tool window open. It shows the profiling controller, where you can get a snapshot manually. The full performance snapshot is what we want to see for the Sudoku solver, so you can let it complete its work. Rider will automatically capture a snapshot after the application exits.

### Analyzing Performance Snapshots

With a performance snapshot, you can [start investigating application performance](https://www.jetbrains.com/help/rider/Analyzing_Profiling_Snapshots.html). It shows the call tree of method calls on all threads, and the top methods with the highest execution time. For the Sudoku solver, you can use the call tree and navigate the path where most time is spent, also called the "hot path" because it's doing most work.

You can optimize the top item, and then profile your application again.

### Profile and Measure, then Optimize

A good profiling workflow is cyclic in nature. You start profiling, so you have a baseline to start working from. You can then optimize one item, and profile the application again. If it performs better, you can start optimizing other bits of code, and then repeat the cycle.

### Memory Pressure and Performance

After you optimize several bits of code in the Sudoku solver, you will come to the conclusion that the constructor of `Cell` is on the hot path. This constructor does not have a lot of code, other than assigning values to two of the `Cell` class' properties.

This may mean the performance problem stems from high memory traffic. Each object has to be cleaned up by the Garbage Collector at some point, which may mean your application gets suspended for a short period of time. If this happens many times, application performance will suffer from cleaning up many objects continuously.

You can find garbage collection times and filters when profiling with Timeline mode, but using a memory profiler may be required. Another tool available in Rider is [Dynamic Program Analysis (DPA)](https://www.jetbrains.com/help/rider/Dynamic_Program_Analysis.html#prerequisites). We will explore DPA in the next step.

### See Also

- [Sudoku solver application](https://github.com/JetBrains/DPA-demo) on GitHub
- [Performance Profiling in Rider](https://www.jetbrains.com/help/rider/Performance_Profiling.html)
- [Analyze Profiling results](https://www.jetbrains.com/help/rider/Analyzing_Profiling_Snapshots.html)
- [Inline Method refactoring](https://www.jetbrains.com/help/rider/Refactorings__Inline_Method.html)
- [Heap Allocations Viewer plugin](https://plugins.jetbrains.com/plugin/9223-heap-allocations-viewer)
- [Dynamic Program Analysis (DPA)](https://www.jetbrains.com/help/rider/Dynamic_Program_Analysis.html#prerequisites)