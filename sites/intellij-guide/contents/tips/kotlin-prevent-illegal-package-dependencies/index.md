---
date: 2021-05-11
title: Prevent a package depending upon another
technologies: [kotlin]
topics: [latest, inspections]
author: tg
subtitle: Enforce architecture rules, such as data access layers not depending upon UI layers.
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
  poster: ./tip.png
  url: https://youtu.be/7-A0Fn4fgQ8
seealso:
  - title: (documentation) IntelliJ IDEA Help - Code inspections
    href: https://www.jetbrains.com/help/idea/code-inspection.html
leadin: |
  Kotlin developers can configure an inspection to define illegal package dependencies, which can prevent code from accidentally depending upon the wrong packages, for example the UI layer talking directly to the data access layer.


---