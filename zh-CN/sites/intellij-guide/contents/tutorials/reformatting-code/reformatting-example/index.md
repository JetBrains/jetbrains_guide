---
type: TutorialStep
date: 2021-09-06
title: 重新格式化代码示例
technologies: [ ]
topics: [ ]
author: hs
subtitle: 在类里进行重新格式化并查看结果
thumbnail: ./thumbnail.png
---

## 代码重新排列前后的示例
让我们来看一些代码，然后将它们格式化。 我们将为此使用 Java 8 的 Stream 类。 目前，我们的代码样式设置意味着我们的 stream 是长链的方法调用，这使得代码行非常长：

```java
private int replaceWithMapToInt() {
    int count = integerStringMap.values().stream().filter(Objects::nonNull).flatMap(Collection::stream).filter(stringVal -> stringVal.contains("error")).mapToInt(String::length).sum();
    return count;
}
```

假设您想要更改代码样式设置，以便 stream 的操作都处于单独的一行，并且它们彼此排成一排。 您可以选择代码后，通过按 **⌥⏎**（macOS），或 **Alt+Enter**（Windows），然后使用调整代码样式的 [提示操作](https://www.jetbrains.com/help/idea/intention-actions.html)，这样可以取代进入设置对话框。 选择 **调整代码样式设置** ，然后转到换行和括号选项卡。 当您在此处进行更改时，它们将在您的编辑器中得到预览。 找到 _链式方法调用_ 并将其更改为 **始终换行**：

![更改链式方法调用为始终换行](chained-method-call-wrap-always.png)

我们的代码看起来更好看了， 但还不完美：

```java
private int replaceWithMapToInt() {
        int count = integerStringMap.values()
                .stream()
                .filter(Objects::nonNull)
                .flatMap(Collection::stream)
                .filter(stringVal -> stringVal.contains("error"))
                .mapToInt(String::length)
                .sum();
        return count;
    }
```

在这种情况下，您还希望所有点在  `.values` 下垂直排列。 对于此设置，我们需要按 **⌘,**（macOS），或 **Ctrl+Alt+S**（Windows/Linux）打开首选项/设置，然后搜索 _对齐_。 转到 **编辑器 > 代码样式 > Java > 换行和括号**，并找到 _链式方法调用_ 。 这一次选择 **多行时对齐** 复选框：

![选择多行时对齐](align-when-multi-line.png)

现在，当您按 **确定** 您的代码应该看起来像这样：

```java
private int replaceWithMapToInt() {
        int count = integerStringMap.values()
                                    .stream()
                                    .filter(Objects::nonNull)
                                    .flatMap(Collection::stream)
                                    .filter(stringVal -> stringVal.contains("error"))
                                    .mapToInt(String::length)
                                    .sum();
        return count;
    }
```

这样比最开始的很长一行容易阅读得多！

## 摘要
现在，我们已经看到了如何格式化代码，让我们通过进一步阅读来总结我们使用的快捷键。 