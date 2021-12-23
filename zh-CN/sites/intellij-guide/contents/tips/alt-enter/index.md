---
hasBody: true
date: 2021-05-28
title: Alt+Enter
technologies:
  - java
topics:
  - editing
  - inspections
author: tg
subtitle: 在代码中大多数的位置都可以使用上下文操作的功能。
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
  poster: ./tip.png
  url: https://youtu.be/73w_X5Bfq7U
seealso:
  - 
    title: IntelliJ IDEA Blog - Alt+Enter, the Problem-solving Shortcut
    href: https://blog.jetbrains.com/idea/2020/08/alt-enter-the-problem-solving-shortcut/
  - 
    title: IntelliJ IDEA Help - Inspections
    href: https://www.jetbrains.com/help/idea/inspections-settings.html
  - 
    title: IntelliJ IDEA Help - Intention Actions
    href: https://www.jetbrains.com/help/idea/intention-actions.html
leadin: |
  IntelliJ IDEA 在代码中大多数的位置都可以提供智能的建议。 它可以为编译器的错误和检查的警告提供修复功能。 即使没有警告或者错误，它也可以使用意图功能来建议使用其他的方式编写代码。
---

  IntelliJ IDEA 会在代码的左侧显示灯泡，来让您知道它为您提供了一些建议。 红色的灯泡用于错误，黄色的用于其他建议。

![Alt Enter on errors](red-light-bulb.png)

  如果代码中有错误，按 **⌥⏎**（macOS），或 **Alt+Enter**（Windows/Linux），可以显示建议的选项，使代码能够编译。

  如果有一个警告，IntelliJ IDEA 会向您展示警告的内容是什么，并可能就如何修复该警告提供一个或多个建议。 这些警告通常来自在代码上运行[检查](../../topics/inspections/)的结果。

  即使代码运行得非常好，按 **⌥⏎**（macOS）, 或 **Alt+Enter**（Windows/Linux），往往也会提示使用其他的方式来编写这段代码的建议。 这些建议可以帮助我们重塑代码，例如使其更具有可读性，或者作为更大的重构的一部分，以实现一些其他的模式。 这些建议通常可以通过[意图](https://www.jetbrains.com/help/idea/intention-actions.html)来配置。

![Alt Enter on errors](suggestions-on-working-code.png)


---
