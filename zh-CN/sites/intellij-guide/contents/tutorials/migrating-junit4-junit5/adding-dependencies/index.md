---
type: TutorialStep
date: 2021-08-09
title: 添加依赖项
technologies:
  - maven
topics: [ ]
author: hs
subtitle: 添加 JUnit  5 依赖项
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/F8UTTTDtbH0?start=44
---

此项目目前使用 JUnit 4.13，但这些准则适用于 JUnit 4 的任何版本。  我们也有 Hamcrest 的依赖项。 我们需要编辑 Maven pom.xml 文件。

```xml
<!-- start of pom.xml is above here -->
<dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>4.13</version>
    <scope>test</scope>
</dependency>
<dependency>
    <groupId>org.hamcrest</groupId>
    <artifactId>hamcrest-library</artifactId>
    <version>2.2</version>
    <scope>test</scope>
</dependency>
<!-- rest of pom.xml below -->
```

为了迁移到 JUnit 5，我们需要做的第一件事就是添加 JUnit 5 依赖项。 为了让 IntelliJ IDEA 为我们做到这一点，在 pom.xml 文件中按  **⌘N**（macOS），或者**Alt+Insert**（Windows/Linux），IDE 将提供添加新依赖项的选项：

![](add-dependency.png)

对于大多数测试套件，我们需要做的只是添加两个新的依赖。 首先，让我们添加 `junit-jupiter-api` 的依赖。

IntelliJ IDEA 认出来了 5.7.2 是当前版本。

![](mvn-artifact-search.png)

Intellij IDEA 使用新的依赖版本和导入更新了 Maven POM 文件。

单击右上角的 Maven 图标，确保 IntelliJ IDEA 加载更改后的内容。 或者，您也可以使用 **⇧⌘I**（macOS），或者**Ctrl+Shift+O**（Windows/Linux）。

我们只需要这些依赖项来运行测试，因此也设置测试作为范围。

```xml
<dependency>
   <groupId>org.junit.jupiter</groupId>
   <artifactId>junit-jupiter-api</artifactId>
   <version>5.7.2</version>
   <scope>test</scope>
</dependency>
<dependency>
   <groupId>org.junit.vintage</groupId>
   <artifactId>junit-vintage-engine</artifactId>
   <version>5.7.2</version>
   <scope>test</scope>
</dependency>
```

现在，我们应该能够安全地从 Maven 的 pom.xml 文件中删除旧的 JUnit 4 依赖项，并且进行编译。 单击 Maven 图标，确保 IntelliJ IDEA 从项目中删除旧的依赖项。

使用 **⌘O**（macOS）, 或 **Ctrl+N**（Windows/Linux）, 跳回到 Junit4ToJUnit5 类，以查找文件。 使用 **⌘F9**（macOS）, 或 **Ctrl+F9**（Windows/Linux）来重新构建整个项目。 如果构建后没有问题，请使用 **⌃R**（macOS）, 或 **Shift+F10**（Windows/Linux）来运行测试类，以检查测试工作是否正常。

结果显示在 [运行工具视图](https://www.jetbrains.com/help/idea/run-tool-window.html)，您可以用 **⌘4**（macOS）, 或 **Alt+4**（Windows/Linux）来打开它。

如果测试运行正确，那么您可以提交更改。

我们已经增加了新的依赖项到 Maven 的 pom.xml 文件， 并从它删除了旧的 Junit 4 依赖项。 使用 **⌘K**（macOS）, 或 **Ctrl+K**（Windows/Linux）来提交更改，因为您知道一切都在计划之中。 我们将继续在一系列小步骤中完成迁移。
