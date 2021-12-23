---
type: TutorialStep
date: 2021-08-11
title: 了解依赖
technologies:
  - maven
topics: [ ]
author: tg
subtitle: 添加和可视化依赖
thumbnail: ./thumbnail.png
longVideo:
  poster: ./generate-dependency.png
  url: https://youtu.be/pt3uB0sd5kY?start=81
---

我们可以使用 Code（代码）菜单上的 **Generate（生成）**选项来轻松地添加新的依赖或者使用 **⌘N**（macOS）或 **Alt+Insert**（Windows/Linux）。

![generate-dependency.png](generate-dependency.png)

这将打开工件搜索对话框，您可以使用该对话框查找您所需的依赖项。

![maven-artifact-search.png](maven-artifact-search.png)

---

**_重要技巧：</strong> 如果您发现没有您的库的补全提示，或者没有看到您期望在 Maven 工件搜索中获得的结果，那么有一个技巧可以帮助您。 打开 [设置/首选项对话框](https://www.jetbrains.com/help/idea/settings-preferences-dialog.html)，选择[ 构建、执行、部署 | 构建工具 | Maven | 仓库 ](https://www.jetbrains.com/help/idea/maven-repositories.html)。</p>

![已编制索引的 Maven 仓库](repositories.png)

您将看到 IntelliJ IDEA 有一个索引存储库列表，以及上次编制索引的日期。 选择其中一个或者全部，然后按 **Update（更新）**，通常这会有助于 IntelliJ IDEA 对工件提出好的建议。

---

正如您对 IntelliJ IDEA 所期望的那样，如果您想直接编辑 XML，您可以在 `pom.xml` 文件内获得代码补全。 这不仅可以让您创建有效的 XML（例如自动关闭标签），还可以提供依赖的建议。

![pom-completion.png](pom-completion.png)

您可以在 Maven 窗口中查看所有已声明的依赖项。 嵌套在我们声明的依赖的下面，您可以看到它们本身所依赖的依赖项。

![maven-window-dependencies.png](maven-window-dependencies.png)

当您在项目窗口中查看时，您可以看到所有 Maven 依赖，无论它们是由项目声明的还是作为传递依赖所引入的。

![project-window.png](project-window.png)






