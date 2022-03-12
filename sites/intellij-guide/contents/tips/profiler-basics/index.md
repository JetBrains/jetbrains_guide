---
date: 2021-05-11
title: Profile your application
technologies: [java]
topics: [latest, ultimate]
author: tg
subtitle: See how your application is performing with the built-in profiler
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
  poster: ./tip.png
  url: https://youtu.be/wuoil5EBB_c
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/OQcyAtukps4
seealso:
  - title: (video) Profile Tools and IntelliJ IDEA Ultimate
    href: https://www.youtube.com/watch?v=OQcyAtukps4
  - title: (video) A Simple Approach to Advanced JVM Profiling
    href: https://www.youtube.com/watch?v=TDpbt4thECc
  - title: (documentation) IntelliJ IDEA Help - Profiling tools
    href: https://www.jetbrains.com/help/idea/cpu-profiler.html
leadin: |
  Access the profiler window using Find Action, **⌘⇧A** (macOS), or **Ctrl+Shift+A** (Windows/Linux), or via the quick access buttons, and it shows a list of running processes

  Click on a process to attach a profiler to it, for example a CPU profiler. The IDE will show the results, for example as a Flame Graph.

  Click on a process in the profiler window to edit the configurations of the profilers.

  Right click on a process in the profiler window to capture a memory snapshot at this moment in time. Open this to see which objects are taking up the most space on the heap.

  Right click on a process in the profiler window to see the CPU and Memory use in real time. This is really helpful for getting a current view on what's happening in the application right now.

  Find out more about the profiler in IntelliJ IDEA's [help documentation](https://www.jetbrains.com/help/idea/cpu-profiler.html).

---