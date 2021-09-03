---
date: 2020-02-27
title: Expand/Shrink Selection
technologies:
  - .net
products:
  - rider
  - resharper
topics:
  - editing
author: matkoch
subtitle: One more chance to leave your mouse aside!
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
animatedGif:
  file: ./guide.gif
  width: 500
leadin: |
  **Fiddling around trying to get the right selection?** 😭

  Using the `Expand Selection` and `Shrink Selection` actions is an effective way to select the right text fragments. Knowing how CSharp, JSON, XML, and other formats syntactically work, they will always lead us to the next logical element or construct. For instance, we can easily select strings, block statements, methods/classes, JSON properties, or just text paragraphs. This naturally improves how we can introduce variables, move code blocks, or just fix a typo in a single word.

  Shrinking a selection works context-sensitive, meaning that if we accidentally expanded too much, we can easily go back to the previous selection.

  Note that **Editor | General | Typing Assistance | Use CamelHumps** can be enabled to treat camel-humps in single words as a next selection target.

  While technically possible, we strongly advice not to use this shortcut to select a whole file. Please consider `Ctrl+A` for that matter. 😅
---

