---
date: 2021-05-10
title: Use new methods on the Streams API
technologies: [java]
topics: [latest, inspections]
author: tg
subtitle: Inspections can show us new features from Java 16
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
  poster: ./tip.png
  url: https://youtu.be/4XkazKdTO1U
seealso:
  - title: (video) Good Old Stream API - JetBrains Technology Day for Java
    href: https://www.youtube.com/watch?v=nklbYYQpQi8
leadin: |
  Java 16 introduced some new methods on the Streams API. IntelliJ IDEA shows us places that can use the new methods and can automatically convert the code to use these new methods.

  The code will be highlighted in yellow as a warning. Press **⌥⏎** (macOS) or **Alt+Enter** (Windows/Linux) and choose "Replace collect(toUnmodifiableList()) with toList()".

  Note that this is only available if you're using a language level of Java 16 or above.

---