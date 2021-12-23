---
type: TutorialStep
date: 2021-08-09
title: 自动迁移测试
technologies: [ ]
topics: [ ]
author: hs
subtitle: 让 IntelliJ IDEA 自动迁移尽可能多的测试
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/F8UTTTDtbH0?start=452
---

现在，我们了解迁移测试的各个步骤，可以考虑更进一步。 让我们尝试自动迁移我们所有的测试。 按下 **⌘⇧A**（macOS）, 或 **Ctrl+Shift+A**（Windows/Linux）打开操作查找，输入“迁移”查看代码的迁移选项。 IntelliJ IDEA 提供了将代码从 Junit 4 迁移到 5 的选项。

![migrate.png](migrate.png)

这种迁移类似于我们做过的单独测试类，但是这次是对于所有测试类。 按 ** 运行 **，查看重构预览。 您可以使用**⌫**，或 **Delete**，在此处排除特定的类或方法。 按“重构”按钮以执行重构。

![refactoring_preview.png](refactoring_preview.png)

我们希望所有的测试仍然像以前一样工作，按 **⌃⇧R**（macOS），或 **Ctrl+Shift+F10** (Windows/Linux)来运行。 您还可以右键单击 “test” 文件夹，并选择运行“所有测试”。  测试结果窗口将显示运行的结果。

![run_tests.png](run_tests.png)

如果没有失败的测试结果，也没有什么问题迹象，那么可以认为这次迁移工作是正常的。 如果您愿意，就可以提交更改。

迁移后，您可以看到测试类已更改。  我们可以在提交更改之前检查每个文件。 使用 **⇧⌘]**（macOS），或 **Ctrl + 右方向键**（Windows/Linux）移动到下一个文件进行比较，以便您可以快速检查所有文件。 由于这些大多是简单的 JUnit 测试，大多数是更改 import 使用新的 JUnit Jupiter 注解，而不是旧的 JUnit 注解。

