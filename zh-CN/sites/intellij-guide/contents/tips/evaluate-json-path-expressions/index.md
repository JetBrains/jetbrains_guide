---
date: 2021-05-10
title: 评估 JSON Path 表达式
technologies:
  - json
topics:
  - latest
  - editing
author: tg
subtitle: 使用 IntelliJ IDEA 检查您的 JSON 路径表达式是否正确。
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
  poster: ./tip.png
  url: https://youtu.be/2cfQmC0pLr8
leadin: |
  IntelliJ IDEA 内建了对 [JSONPath](https://goessner.net/articles/JsonPath/) 表达式的支持。 您可以使用编辑 -> 查找 -> “评估 JSONPath 表达式” 打开一个窗口来评估 JSONPath 表达式。 如果一个 JSON 文件是打开的，它将使用此文件来评估该表达式。

  如果您在代码中将 JsonPath 表达式用做字符串，您可以使用 “[语言注入](https://www.jetbrains.com/help/idea/using-language-injections.html)”，来指明这是 JSONPath 表达式。 您将可在此字符串中获得代码格式化和补全。

  您可以评估 JSONPath 表达式以检查它。 这将会打开一个工具窗口：你可以在这个窗口里输入 JSON 代码段，试试表达式是否能找到预期的路径。
---

