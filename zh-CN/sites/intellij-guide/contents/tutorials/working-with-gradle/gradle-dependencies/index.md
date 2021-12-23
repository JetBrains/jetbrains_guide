---
type: TutorialStep
date: 2021-05-14
title: Gradle 依赖项
technologies:
  - gradle
topics: [ ]
author: tg
subtitle: 在 build.gradle 文件中添加或更新依赖项。
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/6V6G3RyxEMk?start=348
---

让我们更详细地了解一下 Gradle 依赖项。 我们可以使用 **⌘N**（macOS），或 **Alt + Insert**（Windows/Linux）添加新的依赖项，然后选择“添加 Maven 工件依赖项”。

![添加新依赖项](./add-dependencies.png)

操作后会打开工件搜索。 我们可以输入想要添加的工件的名称或完整路径，IntelliJ IDEA 将给出可能匹配项的列表。

![工件搜索](./artifact-search.png)

我们可以按 Tab 键进入结果列表，然后向下移动到我们想要的结果。 也可以通过按工件上的向右箭头来查看所有版本，尽管通常我们要选择最新版本。

IntelliJ IDEA 将插入新的依赖项，这通常会使用 `implementation` 的配置：

```groovy
dependencies {
    testImplementation 'org.junit.jupiter:junit-jupiter-api:5.7.0'
    testRuntimeOnly 'org.junit.jupiter:junit-jupiter-engine:1.7.0'
    implementation 'org.apache.logging.log4j:log4j-core:2.14.0'
}
```

如果需要，我们可以更改此设置，比如我们需要 `testImplementation` 的时候。 IntelliJ IDEA 告诉我们构建文件已被更改，如果我们希望项目使用它们，我们需要重新加载这些更改。

![构建文件已更改](./build-file-changed.png)

我们可以通过以下方式做到这一点：
 - 选择提示中的建议;
 - 按右上角的刷新 Gradle 图标，
 - 使用快捷键 **⇧⌘I**（macOS），或 **Ctrl+Shift+O**（Windows/Linux）。

一旦 IntelliJ IDEA 重新加载了我们更新的构建文件，这个新的依赖项将出现在我们的 [项目窗口](https://www.jetbrains.com/help/idea/project-tool-window.html) 里面的外部库列表中。

或者，我们也可以使用 IntelliJ IDEA 的代码补全来添加新的依赖项。 我们在 `build.gradle` 文件中也可以用代码补完，就像我们在所有支持的文件类型中一样。

所以，我们可以通过输入详细信息来添加新的 `testImplementation` 依赖关系。 IntelliJ IDEA 甚至还能补全组和工件名称。 我们可以通过添加对 `junit-jupiter-params` 库的新依赖项来尝试这一点。 同样，您需要加载这些更改，比如通过按 **⇧⌘I**（macOS），或 **Ctrl+Shift+O**（Windows/Linux）。

### 热门提示
如果您发现您想要输入的库没有被补全，或者没有看到您期望在 Maven 工件搜索中获得的结果，那么有一个技巧可以帮助您。 打开 [设置/首选项对话框](https://www.jetbrains.com/help/idea/settings-preferences-dialog.html)，选择[ 构建、执行、部署 | 构建工具 | Maven | 仓库 ](https://www.jetbrains.com/help/idea/maven-repositories.html)。

![已编制索引的 Maven 仓库](./repositories.png)

您将看到 IntelliJ IDEA 有一个索引存储库列表，以及上次编制索引的日期。 选择其中一个或全部，然后按“更新”，通常这会有助于 IntelliJ IDEA 为工件提供良好的补全建议。

接下来，我们将了解到 IntelliJ IDEA 如何处理 Gradle 项目的源代码集的目录，以及这对我们有何帮助。
