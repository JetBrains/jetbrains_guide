---
type: TutorialStep
date: 2021-08-09
title: 最后的一些步骤
technologies: [ ]
topics: [ ]
author: hs
subtitle: 完成迁移
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/F8UTTTDtbH0?start=808
---

现在，我们已经删除了所有涉及到JUnit 4的类和功能，可以删除旧的测试引擎，只使用更先进的JUnit 5测试引擎了。 按 **⇧⌘I**（macOS），或 **Ctrl+Shift+O**（Windows/Linux）来加载Maven的变更内容，然后按  **⌘F9**（macOS），或 **Ctrl+F9**（Windows/Linux）重新构建项目，并查看编译结果。

如要检查测试是否仍然有效并可以通过，例如，通过按 **Ctrl** 两次，打开运行全部的窗口。 如果您键入 _所有_ ，您应该可以查看到"所有"的运行配置并执行我们项目的所有测试。

![run_anything.png](run_anything.png)

如果测试都通过了，您可以悠闲地查看这些变更的地方了。

我们已经成功地将这个项目中的所有测试迁移到JUnit 5。  第一步是迁移项目，以便在 JUnit 5 平台上运行我们的 JUnit 4 测试。 对于大多数项目，都应该能做到这一点，可能没有必要去掉所有旧的测试引擎。 最重要的是能够以新的 JUnit 5 样式编写和运行测试。 我们在[另一个教程](../../writing-junit5-tests)中涵盖了使用JUnit 5的优势 。
