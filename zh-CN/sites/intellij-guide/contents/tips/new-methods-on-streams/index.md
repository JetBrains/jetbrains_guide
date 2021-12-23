---
date: 2021-05-10
title: 使用 Streams API 里的新方法
technologies:
  - java
topics:
  - latest
  - inspections
author: tg
subtitle: 检查可以向我们展示 Java 16 里的新功能
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
  poster: ./tip.png
  url: https://youtu.be/4XkazKdTO1U
leadin: |
  Java 16 在 Streams API 里引入了一些新方法。 IntelliJ IDEA 可以显示哪些地方能使用新方法，并且可以自动转换代码以使用这些新方法。

  这些代码将以黄色高亮警告显示。 按 **⌥⏎**（macOS）或 **Alt+Enter**（Windows/Linux），选择 ”Replace collect(toUnmodifiableList()) with toList()“（将 collect(toUnmodifiableList()) 替换为 toList()）。

  请注意，只有当您使用 Java 16 及以上的语言级别时，才能使用此功能。
---

