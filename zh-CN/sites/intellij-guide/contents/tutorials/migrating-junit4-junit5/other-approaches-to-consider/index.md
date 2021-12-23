---
type: TutorialStep
date: 2021-08-09
title: 考虑其他方法
technologies: [ ]
topics: [ ]
author: hs
subtitle: 您还可以考虑其他迁移的方法
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/F8UTTTDtbH0?start=771
---

要删除对 JUnit 4 类的引用，我们可以 [在文件中查找](https://www.jetbrains.com/help/idea/finding-and-replacing-text-in-project.html) `org.junit`。 这将显示所有的，且包括新的 Jupiter 类。 我们可以尝试以一个表达式来表示点后面的下一个字符需要是一个大写字母：`org.JUnit.[A-Z]`. 这是一个正则表达式，我们需要切换对大小写敏感的选项，另外确保我们采用 [正则表达式](https://www.jetbrains.com/help/idea/finding-and-replacing-text-in-project.html#limit_search) 来查找。

![find_in_files_with_regex.png](find_in_files_with_regex.png)

现在，我们可以看到所有从 `org.junit` 导入类的文件。

![files_to_change.png](files_to_change.png)

有很多方法我们可以解决这个问题，一个是简单地删除旧的导入，使用新的JUnit 5 的 `Assertions` 类，并添加静态导入 `assertEquals` 方法，以用于类中的所有测试。

有些问题可以通过代码检查来解决。 如果我们启用“JUnit 5 测试中的已废弃断言”的代码检查，就可以让 IntelliJ IDEA 建议使用新的 JUnit 5 断言。 当我们看到编辑器里，有一个警告提示旧断言声明，我们可以让 IntelliJ IDEA 自动使用新的JUnit 5 的 Assertions 代替。

![replace_assertions.png](replace_assertions.png)

IntelliJ IDEA 有代码检查和自动修复，以帮助将代码从 JUnit 4 迁移到 JUnit 5，但如果没有特定的修复方法，我们可以采取另一种方法，比如查找和替换，或 [结构搜索](https://www.jetbrains.com/help/idea/structural-search-and-replace.html)，在有很多文件要更改，但更改都是一样的情况下就更合适。 对于一些共通的代码我们可以使用  [实时模板](https://youtu.be/ffBeoE6NBSs)，而且我们可以配置自动导入设置，以确保新的 JUnit 导入会出现在提示里。 正确的解决方案将取决于需要进行何种更改以及受影响的文件数量。

