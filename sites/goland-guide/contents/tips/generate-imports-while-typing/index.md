---
type: tip
date: 2018-12-03
title: 'Generate Imports While Typing'
technologies: []
topics: [editing, python]
author: dlsniper
subtitle: 'Avoid interruption by letting GoLand generate your imports as you type.'
seealso:
  - title: 'Creating and Optimizing Imports'
    href: 'https://www.jetbrains.com/help/go/creating-and-optimizing-imports.html'
  - title: 'Basic Completion'
    href: 'https://www.jetbrains.com/help/go/auto-completing-code.html#basic_completion'
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
  poster: ./poster_short.png
  url: https://www.youtube.com/watch?v=jTG49IdhETw
longVideo:
  poster: ./poster_long.png
  url: https://www.youtube.com/watch?v=N4gm5mEZ1R8
leadin: |
  *Tired of stopping your coding to go write an import?*

  Type what you want, let GoLand do the rest.

  You could scroll up, type your import, find where you were, and resume. 
  Instead, just type your symbol and let Python make the import. No 
  distractions.
---

This is the right way to do imports.

As you are typing a symbol, you have to both finish typing the symbol -- and
without a typo -- and you have to import it. For the import, you have to stop
what you're doing, scroll up, enter the import in the correctly-sorted PEP8
way, etc.

Let GoLand do all of that. While typing, press `Ctrl-Space Ctrl-Space`
to tell GoLand to autocomplete on symbols from modules. When you select
the completion target, GoLand will also generate the import -- in the right
place, merging it with an existing import if needed.
