---
type: TutorialStep
date: 2022-12-02
title: Build tool window
technologies: [gradle, maven]
topics: [build]
author: md
subtitle: View dependencies in the build tool window
thumbnail: ./thumbnail.png

---

To see direct dependencies and their transitive dependencies, we can look in the Build tool window. 
There is no shortcut to open the Build tool window. We can open it by clicking **Quick Launch** in the bottom-left and selecting **Gradle**, or **Maven** depending on what we're using.
![Quick Launch Gradle](quick-launch-gradle.png)

![Quick Launch Maven](quick-launch-maven.png)

Alternatively, we can open it by using Recent Files, **⌘E** (on Mac) or **Ctrl+E** (on Windows/Linux), and typing "gradle" or "maven", or the name of your build system.

![Recent Files Gradle](recent-files-gradle.png)

![Recent Files Maven](recent-files-maven.png)

The Build tool window shows you each IntelliJ IDEA module separately, and each module’s "Dependencies" folder shows you all your dependencies in a hierarchical structure. We can expand our dependencies to see their transitive dependencies.

![Build Tool Window Gradle](build-tool-window-gradle.png)

![Build Tool Window Maven](build-tool-window-maven.png)
