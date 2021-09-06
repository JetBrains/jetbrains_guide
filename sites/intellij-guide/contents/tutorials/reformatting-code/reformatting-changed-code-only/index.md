---
type: TutorialStep
date: 2021-09-06
title: Reformatting Code You've Changed
technologies: []
topics: []
author: hs
subtitle: Reformatting only code you've changed in a larger shared code base
thumbnail: ./thumbnail.png

---

## Reformatting Only What We Have Changed
_Often we don’t want to reformat the whole file that we’re working on, particularly if this is a system with inconsistent formatting and we don’t want to commit a lot of white space changes as well as our feature or bug fix.  If we were working on a file with some inconsistently formatted code, but we’ve only changed a small part of it, running “Reformat Code” might change parts of the file we haven’t touched. We could highlight the code we’ve changed and just reformat that, but that won’t work if our changes are scattered throughout the file.

There’s a better way: we can use ⌥⇧⌘L or Ctrl+Alt+Shift+L, to bring up the reformatting options.  We can say we only want to format the lines of the file that have been changed, and leave everything else alone.  Now when the file is formatted, it only changes the lines that we’ve touched and nothing else._

