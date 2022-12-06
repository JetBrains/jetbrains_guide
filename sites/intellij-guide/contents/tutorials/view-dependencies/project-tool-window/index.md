---
type: TutorialStep
date: 2022-12-02
title: Project tool window
technologies: [gradle, maven]
topics: [build]
author: md
subtitle: View dependencies in the project tool window
thumbnail: ./thumbnail.png

---

In the Project tool window, **⌘1** (on Mac) or **Alt+1** (on Windows/Linux), under **External Libraries** we can see all the JAR files needed by our application, including the transitive dependencies. However, we cannot tell the difference between direct dependencies and transitive dependencies. One declared dependency might bring in multiple JAR files.

![Project tool window](project-tool-window.png)