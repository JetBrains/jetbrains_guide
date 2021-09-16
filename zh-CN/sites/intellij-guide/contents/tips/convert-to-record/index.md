---
date: 2021-05-05
title: 将class转换为record
technologies:
  - java
topics:
  - latest
  - editing
  - inspections
author: tg
subtitle: 使用检查将class转换为 Java 16 的record
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
  poster: ./tip.png
  url: https://youtu.be/Csv5TKu0TeY
seealso:
  - 
    title: IntelliJ IDEA Blog - Java 16 and IntelliJ IDEA
    href: https://blog.jetbrains.com/idea/2021/03/java-16-and-intellij-idea/
leadin: |
  IntelliJ IDEA 可以识别持有数据，并可转换为record的class。 这样的类会突出显示警告(黄色下划线) - 按 **⌥⏎** (macOS), 或 **Alt+Enter** (Windows/Linux)，Intellij IDEA将提示将class转换为record。

  字段将变为record的组件，构造器和访问器将被移除。 如果我们的class里具有equals, hashCode和toString方法，我们可以可选删除这些方法并依赖于默认record里的实现。
---

