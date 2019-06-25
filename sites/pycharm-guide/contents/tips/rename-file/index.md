---
type: tip
date: 2019-03-12
title: 'Rename a File and Its References'
technologies: []
topics: [editing]
author: pwe
subtitle: 'Change your mind on a file name and the IDE makes all the changes for you.'
seealso:
- title: Renaming a file or directory
  href: https://www.jetbrains.com/help/pycharm/rename-refactorings.html
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
  poster: ./poster_short.png
  url: https://www.youtube.com/watch?v=ES03Kbf0Aio
longVideo:
  poster: ./poster_long.png
  url: https://www.youtube.com/watch?v=NXB5pk1F0_k
leadin: |
    *Rename files with peace of mind.*    

    Changed your name about what you named a file but terrified of all 
    the places it might be used? You might not remember, but the IDE does. 
    Let the Rename Refactoring do the work, safely and quickly.

---

You made a file. You tried to choose the right filename. You then used it 
all over your project.

Now you've changed your mind.

It's sitting there, annoying you, but you can't be bothered to find all the 
places that use it. Search and replace might find a bunch of false positives. 
You'd really like something that understood symbols, and just in imports.

Select the file and use 
`Refactor | Rename` (`Shift-Ctrl-Alt-T, 1` Win/Linux, `Ctrl-T, 1` macOS) 
to change the name of the file and occurrences. This will also adjust VCS. 
Best of all, if you change your mind, `Undo` puts it all back as one 
editor transaction.
