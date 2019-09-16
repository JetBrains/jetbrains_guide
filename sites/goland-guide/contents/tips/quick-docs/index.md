---
type: tip
date: 2019-03-11
title: 'Quick Documentation'
technologies: []
topics: [editing]
author: pwe
subtitle: View arguments and documentation without interrupting your flow.
seealso:
  - title: Viewing Inline Documentation
    href: 'https://www.jetbrains.com/help/pycharm/inline-documentation.html'
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
  poster: ./poster_short.png
  url: https://www.youtube.com/watch?v=OVbA8RC0Csk
longVideo:
  poster: ./poster_long.png
  url: https://www.youtube.com/watch?v=EQ03Xo64kZQ
leadin: |
    *Want to learn what a symbol is about, without going to a browser?*    

    The IDE knows the symbol, its argument names/types/defaults, the 
    docstring. Let it give you a non-interrupting window, letting you get 
    back to work.

---

We frequently encounter code that we're not sure about. Other people's 
code. Heck, even our code. Sometimes we just want the arguments for a 
function. Other times we want to know positional versus keyword args. 
Or the types of the arguments. Or their default values. Or a nice 
rendered docstring.

PyCharm has several facilities for showing you documentation about a 
symbol.

First, `Quick Documentation` (`Ctrl-P` Win/Linux, `F1` macOS) brings 
non-obtrusive inline popup showing all that information, with a hyperlink 
where you can navigate to the definition. Press it again and the popup 
turns into a tool window which updates for each symbol that you land on. 
Always there, always helping...until you want to hide it, like any other 
IDE tool window.

Want the full docs in a browser, but don't want to hunt around to find 
it? For many popular packages, `External Documentation` 
(`Shift-F1` Win/Linux/macOS) brings up a browser on the documentation 
page for that symbol.
