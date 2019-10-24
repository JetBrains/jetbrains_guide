---
type: tip
date: 2019-10-09
title: Select all occurrences in a file 
technologies: [go]
topics: [editing]
author: dlsniper
subtitle: Quickly select all occurrences of a piece of text in the current file
seealso:
  - title: Use quick pop-ups
    href: 'https://www.jetbrains.com/help/go/basic-editing-procedures.html#quick_popups'
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
  poster: ./poster_short.png
  url: https://youtu.be/Jp1PTUfUcj8
leadin: |
    nothing

---

Do you want to select all the occurrences of a piece of code? Then simply press 
Ctrl+Alt+Shift+J.

After the selection is complete, you can start editing all the fragments as if they 
were all the same one.

Just to remind you, if you plan to use this feature to rename something, then you 
should have a look at our Rename refactoring, which works safely across multiple 
packages, not just at the file level.

GoLand will search through the current file until it finds a matching piece of text, 
which it then adds to the selection. You can press Alt+J again to go forward 
further, or Shift+Alt+J to go back. When the search reaches the end of the file, it 
will start over again from the beginning

