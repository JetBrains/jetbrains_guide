---
date: 2021-05-10
title: Evaluate JSON Path expressions
technologies:
  - json
topics:
  - latest
  - editing
author: tg
subtitle: Use IntelliJ IDEA to check if your JSON Path expression are correct.
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
  poster: ./tip.png
  url: https://youtu.be/2cfQmC0pLr8
leadin: |
  IntelliJ IDEA comes with support for [JSONPath](https://goessner.net/articles/JsonPath/) expressions. You can open up a window to evaluate JSONPath expressions by going to Edit -> Find -> "Evaluate JSONPath Expression...". If a JSON file is open, it will use this file to evaluate the expression.

  If you have JSONPath expressions as Strings in code, use "[inject language](https://www.jetbrains.com/help/idea/using-language-injections.html)" and say this is a JSONPath expression. You'll get code formatting and completion inside this string.

  You can evaluate a JSONPath expression to check it. This will open up a tool window: enter a snippet of JSON into the input and try out if an expression finds the expected path.
---

