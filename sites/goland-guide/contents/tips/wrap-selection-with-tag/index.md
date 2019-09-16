---
type: tip
date: 2019-04-17
title: Wrap Selection With Tag
technologies: []
topics: [web, ]
author: pwe
subtitle: Use the keyboard to put a wrapper tag around a selection of code.
seealso:
  - title: Surround code fragments
    href: 'https://www.jetbrains.com/help/pycharm/surrounding-blocks-of-code-with-language-constructs.html#Surrounding_Blocks_of_Code_with_Language_Constructs.xml'
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
  poster: ./poster_short.png
  url: https://www.youtube.com/watch?v=rj7g7SNPQas
longVideo:
  poster: ./poster_long.png
  url: https://www.youtube.com/watch?v=RsD-ioLrLwo
leadin: |
    *HTML tag surrounding, the easy way.*    

    You need a `div` around a block. Use the keyboard not just for 
    selection, but also for adding the tag to surround with.

---

You're in an HTML file, working on a nice block of markup, and realize your 
CSS framework wants a wrapper `<div>`. Don't they always? What's another 
`<div>`, right?

You could use mouse to move to the start, type in `<div>`, go to the end, 
type in `</div>`, and by then you forgot what you were doing.

Instead:

- [Make a selection with your keyboard](../make-extend-selection/) 

- Invoke `Surround With` (`Shift-Ctrl-A` Win/Linux, `Alt-Cmd-T` macOS)

- Hit `T` to choose `Surround with <tag></tag>` in the Live Templates section

- In the prompt, type the name of the tag

If you're a fan of the [Emmet system](../../technologies/emmet) for quickly 
generating markup, you can also surround with Emmet.