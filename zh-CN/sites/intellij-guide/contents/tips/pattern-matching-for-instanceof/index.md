---
date: 2021-05-05
title: 对 instanceof 使用模式匹配
technologies:
  - java
topics:
  - latest
  - inspections
author: tg
subtitle: 检查可以引导我们使用新的 Java 功能
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
  poster: ./tip.png
  url: https://youtu.be/qCfuQkddCEM
leadin: |
  如果我们的代码在 instanceof 之后使用了类型转换，IntelliJ IDEA 会用一个警告来高亮它们，并建议用instanceof 的模式匹配来代替。

  按 **⌥⏎**（macOS）或 **Alt+Enter**（Windows/Linux），并选择 "Replace with pattern variable"（替换为模式变量）。

  请注意，只有当您使用 Java 16 及以上的语言级别时，才能使用此功能。
---

