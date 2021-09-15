---
date: 2021-05-10
title: 在提交时使用轻量级的检查配置
technologies:
  - java
topics:
  - latest
  - vcs
  - inspections
author: tg
subtitle: 在将变更提交到版本控制之前，你需要先完全自定义必须要执行的检查
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
  poster: ./tip.png
  url: https://youtu.be/9i6EeC2OVqU
seealso:
  - 
    title: IntelliJ IDEA Help - Configure profiles
    href: https://www.jetbrains.com/help/idea/customizing-profiles.html
leadin: |
  你可以在提交前选择用于运行分析的检查配置。 Using an inspection profile with a much smaller number of checks, for example only Java errors and warnings, can run much faster than our full inspection profile and prevent us from committing breaking changes.
---

