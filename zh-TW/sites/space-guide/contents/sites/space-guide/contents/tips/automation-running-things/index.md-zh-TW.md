---
date: 2020-09-22
title: Running things with Automation - job steps
topics:
  - automation
  - projects
  - work
  - code
author: maartenba
subtitle: Automation runs jobs, and jobs have one or more steps. Let's see what those steps can do!
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
  poster: ./preview.png
  url: https://youtu.be/Zd4klWP5lt4
leadin: |
  **Run all the things!**

  A `.script.kts` file defines one or more Jobs. Each Job can run one or more Steps. Jobs are triggered by events, such as Git push or when a code review is opened.

  Job steps run in an environment, which can be a container, a virtual machine (not yet available) or as a function (not yet available).

  In a container, you can run:
  * Shell scripts, using `shellScript { }`
  * Kotlin code, using `kotlinScript { }`
  * Container commands, such as `entrypoint()` and `args()`
  * Language- and framework-specific commands, that can run Gradle, .NET or Docker image builds

  Many [examples can be found here](https://www.jetbrains.com/help/space/automation-faq.html).

  [More about jobs and steps in Space Automation...](https://www.jetbrains.com/help/space/jobs-and-actions.html)
---

