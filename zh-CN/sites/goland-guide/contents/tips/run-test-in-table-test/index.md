---
date: 2020-12-03
title: 'Run a single test from a table test'
technologies:
  - go
topics:
  - testing
author: dlsniper
subtitle: 'Focus your testing on new test cases or tests that fail'
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
  poster: ./thumbnail.png
  url: https://www.youtube.com/watch?v=KsWMIZciveo&list=PLM-t1Z4tbFfl-umlMg_ND7gW9rGjTDzKt&index=4
leadin: |
  When you have a testing table of more than a handful of cases, it can be hard to focus on a specific test case.

  **How to use:**

  If the IDE can determine the name of the test, then you can use either the green arrow next to the test name or using **Run context configuration** via _Ctrl + Shift + F10 on Windows/Linux_ or _^ + ⇧ + F10 on macOS_.

  **Note:** This feature relies on the IDE to interpret the test name. This means that there are some restrictions on how to name your tests for the IDE to correctly determine them and provide this functionality:
  - The test data variable must be a slice, an array, or a map. 它必须在与调用相同的函数中定义，并且在初始化后不得触动（for 循环中的 range 子句除外）。
  - The individual test data entry must be a struct literal. 子测试名称表达式中使用的循环变量在调用前不得触动。
  - A subtest name expression can be a string field in the test data, a concatenation of test data string fields, and an fmt.Sprintf() call with %s and %d verbs.


  <span class="tag is-rounded">New in 2020.3</span>
---

