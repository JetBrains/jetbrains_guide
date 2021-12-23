---
type: TutorialStep
date: 2021-08-09
title: 更复杂的手动迁移案例
technologies: [ ]
topics: [ ]
author: hs
subtitle: 迁移更复杂的从 Junit 4 到 Junit 5的案例
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/F8UTTTDtbH0?start=566
---

如果项目中的测试相当简单，则自动迁移应该会处理需要执行的大部分任务。  但是，并非所有案例都可以自动。

从 Junit 4 迁移到 Junit 5 可能是一个慢慢的过程。

在我们的项目中，我们有一些测试完全迁移到了 JUnit 5，有些部分迁移，会用一些 JUnit 4 的功能，并且可能有一些按照它们原有的经典的 JUnit 4（甚至 JUnit 3）的方式运行。 我们可以选择使用 JUnit 5 运行它们，用新的 JUnit 5 功能编写新的测试，并保持现有的稳定。

然而，我们可能想要消除对旧测试引擎的依赖，以防止意外地用旧风格编写测试。  如果我们消除这种依赖，刷新 maven 的配置更改并重新构建项目，我们将能够看到哪些类需要旧的测试引擎，哪些测试需要付出更多来迁移到 JUnit 5。

举个例子，我们手动从 [Hamcrest](http://hamcrest.org/JavaHamcrest/) 导入 `assertThat` 。  我们可以通过删除对 Junit `Assert` 类的引用， 并让 Intellij IDEA 静态导入 Hamcrest 的 `MatcherAssert.assertThat`。 我们可以使用优化 import 来消除不必要的 Junit 4 `Assert` 导入。

我们可能会发现，一些测试甚至是JUnit 3样式 - 这些测试继承了 `TestCase` 而不是使用注解。  按 **⌥⏎**（macOS），或 **Alt+Enter**（Windows/Linux）打开提示我们可以将此迁移到 JUnit 4，这似乎是一个很好的开始。 现在测试将使用注解，不会从旧的 `junit.framework` 包中导入任何东西。  接下来，我们可以进行下一步，将此测试迁移到 JUnit 5。  我们还可以优化 import，来消除任何不需要的旧的导入。

