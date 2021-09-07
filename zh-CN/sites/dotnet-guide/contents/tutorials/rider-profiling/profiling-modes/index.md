---
type: TutorialStep
date: 2020-07-06
title: Profiling Modes
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
subtitle: What are the differences between Sampling, Tracing, Line-by-Line, and Timeline profiling?
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster.png
  url: https://youtu.be/6dD74hFW82s
---

### Sampling, Tracing, Line-by-Line, and Timeline

In the previous step, you profiled the Sudoku solver with the Timeline profiling mode. There are several other profiling modes in Rider: Sampling, Tracing, Line-by-Line, and Timeline.

* Sampling and Timeline — Collects information about method execution times in your application. Timeline collects additional data about application events, distributed over time. This makes it easier to investigate UI freezes, garbage collection issues, thread starvation and so on.
* Tracing and Line-by-Line — Collects information about the number of times a method in your application is called. Tracing does this at the method level, Line-by-Line tracks call numbers at the statement level.

Generally, your profiling workflow starts with Sampling or Timeline profiling. These have low overhead, and come in handy to do most performance analysis on your application.

When call times are less important, but you want to see call numbers, Tracing and Line-by-Line are he go-to profiling modes. These, however, come with more overhead given the detail of data they have to collect, making them unreliable to measure call times.

### Debug vs. Release Builds

Ideally, you will profile your applications in Release mode. The compiler optimizes call paths for you when your application is built in Release mode. It generally improves performance of your application by inlining methods debug/release builds, and other techniques.

In this tutorial, I will use Debug mode, because it gives some interesting cases to troubleshoot with the profiler.

In the next step, you will start optimizing the Sudoku solver by profiling and making changes.

### See Also

- [Sudoku solver application](https://github.com/JetBrains/DPA-demo) on GitHub
- [Profiling Types in dotTrace](https://www.jetbrains.com/help/profiler/Profiling_Guidelines__Choosing_the_Right_Profiling_Mode.html)