---
type: TutorialStep
date: 2020-07-06
title: Introduction to Profiling in Rider
technologies:
  - .net
  - csharp
topics:
  - ide
  - 分析
products:
  - rider
  - dottrace
author: maartenba
subtitle: Let's run a first profiling session on a Sudoku solver sample application.
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster.png
  url: https://youtu.be/-1riV47hdqw
---

### Sudoku Solver

In this tutorial, you will make use of a [Sudoku solver application](https://github.com/JetBrains/DPA-demo). It reads a [Sudoku puzzle](https://en.wikipedia.org/wiki/Sudoku) from a text file, and then tries to solve it using a brute-force approach.

Internally, it iterates over every cell of a puzzle board, tries all combinations, and then verifies the solution.

```
0, 0, 0,  0, 0, 0,  0, 0, 0
0, 0, 0,  0, 0, 3,  0, 8, 5
8, 0, 1,  0, 2, 0,  0, 0, 0

0, 0, 0,  5, 0, 7,  0, 0, 0
0, 0, 4,  0, 0, 0,  1, 0, 0
0, 9, 0,  0, 0, 0,  0, 0, 0

5, 0, 0,  0, 0, 0,  0, 7, 2
0, 0, 2,  0, 1, 0,  0, 0, 0
0, 0, 0,  0, 4, 0,  0, 0, 1
```

A simple puzzle is solved in less than a second, more complex ones can take 10 to 20 seconds. In this tutorial, you will see if this can be optimized, and how.

### Profiling in Rider

Rider integrates with the [dotTrace profiler](https://www.jetbrains.com/profiler/) to provide performance profiling of .NET applications. A profiling session can be started from the toolbar, or from the **Run** menu.

The profiling modes available depend on your operating system, and the .NET Framework version used in your application. A [compatibility matrix](https://www.jetbrains.com/help/rider/Performance_Profiling.html) is available in the web help.

Once the profiling is started, you will see the Performance Profiler tool window open. It shows the profiling controller, where you can get a snapshot, detach from the running application, and more. For the Sudoku solver, a snapshot is captured automatically after the application exits.

A profiling snapshot gives you the information required to start optimizing your application. It shows the call tree of method calls on all threads, and the top methods with the highest execution time.

In the next step, you will see the different profiling modes that are available.

### 另请参阅

- [Sudoku solver application](https://github.com/JetBrains/DPA-demo) on GitHub
- [Performance Profiling in Rider](https://www.jetbrains.com/help/rider/Performance_Profiling.html)
- [Profiling Applications](https://www.jetbrains.com/help/rider/Profiling_Applications.html)
- [Profiling Unit Tests](https://www.jetbrains.com/help/rider/Profiling_Unit_Tests.html)