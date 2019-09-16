---
type: tip
date: 2019-01-20
title: Activate Navigation Bar
technologies: []
topics: [navigation, navigationbar]
author: pwe
subtitle: Bring up the Navigation Bar as needed, let it disappear when finished.
seealso:
  - title: Navigation bar
    href: 'https://www.jetbrains.com/help/pycharm/part-4-using-the-navigation-bar.html'
  - title: Navigating Tips and Tricks
    href: 'https://www.jetbrains.com/help/pycharm/navigation-bar.html'
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
  poster: ./poster_short.png
  url: https://www.youtube.com/watch?v=xDvTpGSqKyo
longVideo:
  poster: ./poster_long.png
  url: https://www.youtube.com/watch?v=uD1s8eF6lvU
leadin: |
  *The no-distraction way to work with your files.*
  
  Minimal UI means no project tool window or Navigation Bar.  But 
  how do you then move around files?
  
  Bring the Navigation Bar up as-needed, without the mouse. Do 
  what you need, then the popup disappears.

---

Getting into the flow means stripping down your UI distraction (turn off the 
`Project` window and `Navigation Bar`) then going *keyboard-centric* to avoid 
the mouse.  But you still need to get to your files, and sometimes you'd prefer 
to browse instead of use `Recent Files` or the `Find File` action.

If you've uncluttered your UI by hiding the Navigation Bar, bring it back on demand. 
Use `Navigate -> Jump to Navigation Bar` (`Alt-Home` Win/Linux, `Cmd-Up` macOS) 
to temporarly re-active the Navigation Bar, but as a temporary panel. Once 
you use use it, the window disappears.

If you use this tip and temporarily make it appear, how do you make it disappear? 
Press `Jump to Source` (`F4` Win/Linux, `Alt-Down` macOS) or just hit `Escape` 
to go back to where you were working.

Perhaps you didn't hide the Navigation Bar. I don't, because I like those other 
toolbar buttons to the right. But still, you'd like to use it without the mouse. 
Activating the Navigation Bar still helps, as it moves the focus out from the 
editor and up to the Navigation Bar, where you can then use your cursor keys.

How did we hide it in the Navigation Bar first place, or bring it back if wanted? 
The `View` menu's `Navigation Bar` item is a toggle. Want a faster, keyboard-centric 
way to toggle? `Find Action` (`Shift+Ctrl+A` Win/Linux, `Shift+Cmd+A` macOS) lets 
you search for such settings and even toggle inline. Type `vi nav` to speed search, 
make sure the selection is on `View: Navigation Bar`, then press enter. The 
setting is toggled...no mouse usage needed.
