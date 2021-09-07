---
date: 2020-02-27
title: Occurrence Selection
technologies:
  - .net
products:
  - rider
topics:
  - editing
author: matkoch
subtitle: Poor man’s manipulation to the rescue!
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
animatedGif:
  file: './guide.gif'
  width: 500
leadin: |
  **Where we go, we don’t need _Find & Replace_!** 🛹⚡️

  Using actions for occurrence selection is a powerful way to transform and manipulate all kinds of texts. We start by making a selection for our text. With every call to `Add Selection for Next Occurrence` we get another multicaret that can be moved around, insert and delete text, expand or shrink its individual selection, or toggle the casing of its text. This is exactly what we need if we have to fix only a couple of similar invocations or change the format of our data! 🎭📐

  Remember to always use meaningful names! 🏷
  Invoking `Unselect Occurrence` removes the previously added selection; `Select All Occurrences` scans the whole document for occurrences and selects them.

  But remember: always give refactorings a try first! 🔧🤓

  ### See Also
  - https://www.jetbrains.com/help/rider/Multicursor.html
  - https://www.jetbrains.com/help/rider/Toggling_Case.html
---

