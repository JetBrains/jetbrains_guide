---
type: TutorialStep
date: 2021-09-06
title: EditorConfigs的使用
technologies: [ ]
topics: [ ]
author: hs
subtitle: 什么是 .editorconfig 文件， 以及如何在 Intellij IDEA 中使用它
thumbnail: ./thumbnail.png
---

## 确保启用EditorConfig文件功能
要在IntelliJ IDEA中使用 [EditorConfig 文件](https://www.jetbrains.com/help/idea/configuring-code-style.html#editorconfig) 需要你开启 _EditorConfig_ 插件。 如果你不知道如何做到这一点，请查看 [插件帮助](https://www.jetbrains.com/help/idea/managing-plugins.html)。

### .editorconfig 文件的使用
IntelliJ IDEA 提供了一个允许您使用 `.editorconfig` 文件管理所有代码样式设置的插件。 您需要将 `.editorconfig` 文件放入到包含您想要用`.editorconfig` 文件去管理的文件根目录中。

`.editorconfig` 文件中的所有选项都在现有的代码样式设置基础上，应用于其所处的目录，以及所有子目录。 如果没有在 `.editorconfig` 中定义，则使用项目的设置。 这意味着它优先于现在 IntelliJ IDEA 的偏好/设置中的设置。

某些 `.editorconfig` 里面的设置是 IntelliJ IDEA 特有的，这些设置是以 `ij_` 为前缀的。

### 添加 EditorConfig 文件
让我们来试着 [添加一个 `.editorconfig` 文件](https://www.jetbrains.com/help/idea/configuring-code-style.html#66e1c5ae) 到您的项目。

最简单的方法是使用 **⌘1**（macOS），或 **Alt+1**（Windows/Linux）来显示项目窗口，然后在正确的目录中按 **⌘N**（macOS），或 **Alt+Insert**（Windows/Linux）。 这将打开** 新建 **对话框。 输入 _editor_ ，结果将过滤到 `.editorconfig` 文件。

![新建 EditorConfig 文件](new-editor-config.png)

当您按下 **回车键**，将可以选择配置您的 `.editorconfig` 文件。

![EditorConfig 文件配置](editor-config-options.png)

您可以选择要定义的属性，IntelliJ IDEA 将为它们创建设置。 如果您将复选框留空，IntelliJ IDEA 不会将设置填充到文件 - 您可以稍后手动添加它们。

### 从 EditorConfig 文件预览更改
您可以通过在 `.editorconfig` 文件里按下 _像眼睛一样的侧边栏按钮 _ 来选择要预览的文件来预览 `.editorconfig` 文件的变化将如何影响您的代码。

![预览 EditorConfig 配置更改](preview-editor-config-changes.png)

当您选择文件后，您在 `.editorconfig` 文件中做出的任何更改都将反映在预览中。 此视图中的更改不会保存并应用到文件。 如果您的预览窗口没有出现，请确保您已选择右上角的  _编辑器和预览_ 图标。


## 重新格式化代码的示例
让我们来看看本教程下一步中的示例。