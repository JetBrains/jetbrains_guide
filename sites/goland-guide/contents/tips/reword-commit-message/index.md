---
type: tip
date: 2019-04-22
title: Reword Commit Message
technologies: []
topics: [vcs]
author: pwe
subtitle: Change the wording in your last commit message, after you committed.
seealso:
  - title: Edit a commit message
    href: 'https://www.jetbrains.com/help/pycharm/edit-project-history.html#reword-commit'
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
  poster: ./poster_short.png
  url: https://www.youtube.com/watch?v=rO9h0Ssffac
longVideo:
  poster: ./poster_long.png
  url: https://www.youtube.com/watch?v=H4zxILWWnD8
leadin: |
    *Fix that message.*    

    It always happens: as soon as you click `Commit`, you spot the typo 
    in the message or remember a change. Use the VCS Log's `Reword` to 
    fix it.
---

It happens all the time. You write a commit message and click `Commit`, 
*just* as you spot a typo or realize you forgot something in the message. 
And since memorizing arcane VCS command-line switches isn't your thing, 
well, that typo is just going to have to tolerated.

Let the IDE help.

If you haven't pushed the commit, it is easy to recover from this. Go to 
the `Version Control` tab (`Alt-9` Win/Linux, `Cmd-9` macOS) and click 
the `Log` tab in its window.

You'll see a list of commits. In this case you want the first one. 
Either right-click on it and choose `Reword` or select it (it's probably 
already selected) and hit `F2`. Then click `Ok`.

Exactly what an IDE should be for: take something arcane and make it 
visible, obvious, and easy.
