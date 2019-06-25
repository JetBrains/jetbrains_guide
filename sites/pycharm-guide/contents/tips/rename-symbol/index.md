---
type: tip
date: 2019-03-12
title: 'Rename Symbol'
technologies: []
topics: [editing]
author: pwe
subtitle: 'Change a variable name, class name, or other symbol, across the project.'
seealso:
- title: Renaming a symbol
  href: 'https://www.jetbrains.com/help/pycharm/rename-refactorings.html'
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
  poster: ./poster_short.png
  url: https://www.youtube.com/watch?v=RV8ZP_UoXhE
longVideo:
  poster: ./poster_long.png
  url: https://www.youtube.com/watch?v=Qa7rLYyUnco
leadin: |
    *Refactor names like a ninja.*    

    Put your cursor on a symbol and refactor it. All usages in the 
    project change with it.

---

You wrote a function which you use all over the place in a project. Or a 
class. The name no longer matches its purpose. But the change is too much 
of a hassle.

The IDE knows where it is used. Even better, it knows the difference between 
usage in your project vs. finding it in a dependency, and best of all, usage 
as a symbol vs. just some letters in a string.

What if the same symbol name is used in two Python modules? Yep, PyCharm 
can tell the difference and only rename to the appropriate the symbol from 
that module.

Same for method names. Have the same method in two classes? `Refactor Rename` 
will look in your project for the correct usage and rename it.

Simply put your cursor on a symbol and use 
`Refactor | Rename` (`Shift-Ctrl-Alt-T, 1` Win/Linux, `Ctrl-T, 1` macOS.) 
Provide the new name, preview the places it found, and select `Do Refactor`.

Change your mind? Refactoring is done as a single editor transaction, 
meaning `Undo` reverts all the places that were renamed.
