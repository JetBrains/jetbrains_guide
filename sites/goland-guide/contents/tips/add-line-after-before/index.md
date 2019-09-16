---
type: tip
date: 2019-03-09
title: Add Line After/Before
technologies: []
topics: [editing]
author: pwe
subtitle: 'Smart-add a line, from the middle of a line, after or before the current line.'
seealso:
- title: Adding, Deleting and Moving Code Elements
  href: 'https://www.jetbrains.com/help/pycharm/adding-deleting-and-moving-lines.html'
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
  poster: ./poster_short.png
  url: https://www.youtube.com/watch?v=aPufd3UPEHU
longVideo:
  poster: ./poster_long.png
  url: https://www.youtube.com/watch?v=gx_xsh6j-JA
leadin: |
    *Language-aware line adding, no muss no fuss.*    

    It seems like a simple thing but many forget about it. You 
    want a new line, so you first move to the end of the current 
    line and press Enter. A line above? Worse. There's a better way.
---

It's easy to overlook, but we frequently add a line of code while in the 
middle of another line. Perhaps we were fixing something and want to 
proceed to the next line. Perhaps we were on an import and want another 
import on the line above.

It's tempting, for adding a line after, to treat this as a two-step process:

- Go to the end of the line (ugh, sometimes with the mouse)

- Press enter

Adding a line above is worse:

- Go to the beginning of the line

- Press enter to make space above

- Press `Up` to go to that new, empty line

- Perhaps press tab a few times to get the indentation right

Instead, use `Start New Line` (`Shift-Enter` Win/Linux/macOS). With your 
cursor anywhere in the current line -- where you are just finishing an 
edit -- you can then get an empty next line, with correct indentation.

For a line above, use 
`Start New Line Before Current` (`Ctrl-Alt-Enter` Win/Linux, 
`Alt-Cmd-Enter` macOS.) You get a new line, indented appropriately for the 
language and context.
