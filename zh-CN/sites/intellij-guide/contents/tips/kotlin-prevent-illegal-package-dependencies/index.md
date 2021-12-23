---
date: 2021-05-11
title: 防止一个package依赖于另一个
technologies:
  - kotlin
topics:
  - latest
  - inspections
author: tg
subtitle: 执行架构规则，例如数据访问层不依赖于 UI 层。
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
  poster: ./tip.png
  url: https://youtu.be/7-A0Fn4fgQ8
seealso:
  - 
    title: IntelliJ IDEA Help - Code inspections
    href: https://www.jetbrains.com/help/idea/code-inspection.html
leadin: |
  Kotlin 开发人员可以配置代码检查来定义非法package依赖性，这可以防止代码意外地依赖于错误的package，例如直接与数据访问层通信的 UI 层。
---

