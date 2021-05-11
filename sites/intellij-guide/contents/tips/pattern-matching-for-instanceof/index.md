---
date: 2021-05-05
title: Use Pattern Matching for instanceof
technologies: [java]
topics: [latest, inspections]
author: tg
subtitle: Inspections can guide us to use new Java features
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
  poster: ./tip.png
  url: https://youtu.be/qCfuQkddCEM
leadin: |
  If our code uses an instanceof followed by a cast, IntelliJ IDEA highlights these with a warning and suggests replacing this with pattern matching for instanceof. 

  Press **⌥⏎** (macOS) or **Alt+Enter** (Windows/Linux) and choose "Replace with pattern variable".

  Note that this is only available if you're using a language level of Java 16 or above.

---