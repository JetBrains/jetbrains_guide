---
date: 2021-05-24
title: 'Detect incorrect usages of t/b.Fatal* calls in goroutines'
technologies:
  - go
topics:
  - testing
  - inspections
author: dlsniper
subtitle: 'Find if tests or benchmarks are using t/b.Fatal* calls inside goroutines incorrectly'
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
  poster: ./thumbnail.png
  url: https://www.youtube.com/watch?v=_berOV6vpTA&list=PLM-t1Z4tbFflGjn5Qzjjku5J7SX3p-nhY&index=3&t=0s
leadin: |
  Calling *t/b.Fatal\** methods from a goroutine is not advised as it
  may produce unexpected behavior.

  **How to use:**
  You don't need to do anything to run this inspection as it's
  enabled by default.

  Open your tests or benchmarks and see if it catches any issues.

  <span class="tag is-rounded">New in 2021.1</span>
---

