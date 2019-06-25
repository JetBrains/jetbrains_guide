---
type: tip
date: 2019-01-23
title: 'Narrow Navigation Bar With Speed Search'
technologies: []
topics: [navigation, navigationbar, speedsearch]
author: pwe
subtitle: 'Narrow and select from a long folder listing Navigation Bar by typing a speed search.'
seealso:
  - title: 'Speed Search in Tool Windows'
    href: 'https://www.jetbrains.com/help/pycharm/speed-search-in-the-tool-windows.html'
  - title: 'Navigation bar'
    href: 'https://www.jetbrains.com/help/pycharm/part-4-using-the-navigation-bar.html'
  - title: 'Navigating Tips and Tricks'
    href: 'https://www.jetbrains.com/help/pycharm/navigation-bar.html'
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
  poster: ./poster_short.png
  url: https://www.youtube.com/watch?v=PRPGmkGrMGI
longVideo:
  poster: ./poster_long.png
  url: https://www.youtube.com/watch?v=lr1IX8qAqdU
leadin: |
    *Want to quickly select a file in a directory, without the mouse?*

    Want to really move fast through listings? Speed search is the all-purpose 
    facility for narrowing to what you're looking for. Parts of strings, 
    punctuation, file extensions...whatever it takes to filter down the list.

---

We've discussed getting into the flow by reducing UI clutter and being 
keyboard-focused. We're using the Navigation Bar on-demand to get to targets 
in our project tree.

When we get a drop-down for contents of a directory, sometimes the listing 
is long. We don't want to press down arrow a bunch of times. Instead, use 
the IDEs "speed search" facility to quickly dive through a long listing. 

As shown previously, use the Navigation Bar to get to a directory listing:

- Activate the Navigation Bar with 
`Navigate -> Jump to Navigation Bar` (`Alt-Home` Win/Linux, 
`Cmd-Up` macOS)

- Use the cursor keys to get to the target directory

We now want to select one item in the list, but using speed search:

- Simplest case: Type one letter

- Type a second letter...if your choice is selected, then you're done and 
you can act on it (e.g. press enter, `Ctrl-T` to refactor, etc.)

- Type a period and a letter to search in the file extension

This becomes a very fast workflow for speeding through the navigation 
bar, all without using the mouse. Moreover, speed search is a pervasive 
pattern in the IDE.
