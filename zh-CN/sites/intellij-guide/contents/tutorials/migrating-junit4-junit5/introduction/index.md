---
type: TutorialStep
date: 2021-08-09
title: 简介
technologies: [ ]
topics: [ ]
author: hs
subtitle: 介绍从 Junit 4 迁移到 Junit 5 的方法
thumbnail: ./thumbnail.png
---

## 简介
JUnit 已经存在很长时间了，许多应用程序使用 JUnit 4 编写大量的测试代码。 JUnit 5 于 2017 年发布，并提供了许多新功能。 让我们看看如何将现有的 Junit 4 测试类迁移到 Junit 5

此教程将涵盖您需要做出的配置更改（使用 Maven），用来告诉 IntelliJ IDEA 去使用 JUnit 5。 然后，我们将逐步使用 IntelliJ IDEA 检查，尽可能完成迁移，并查看其他无法被自动迁移的，更具挑战性的情况以及方法。

如果您想按照教程进行，请查看 [sample code](https://github.com/JetBrains/intellij-samples/tree/start-junit-migration) 里面的 `start-junit-migration` 标签：

```
git clone --branch start-junit-migration https://github.com/JetBrains/intellij-samples.git
```

*注意：我们将使用 IntelliJ IDEA Community Edition 来示范本教程中的所有步骤。*

## 其他资料
- [IntelliJ IDEA Blog - Migrating from JUnit 4 to JUnit 5](https://blog.jetbrains.com/idea/2020/08/migrating-from-junit-4-to-junit-5/)
- [IntelliJ IDEA Blog - 2017.3 Junit 5 Support](https://blog.jetbrains.com/idea/2017/11/intellij-idea-2017-3-junit-support/)
- [IntelliJ IDEA Help - List of JUnit inspections in IntelliJ IDEA](https://www.jetbrains.com/help/idea/list-of-java-inspections.html#junit)
- [Github - Code used in blog, video and guide](https://github.com/JetBrains/intellij-samples/tree/b52a483d0d6fe612ea4ef3f727792a10795061f8)