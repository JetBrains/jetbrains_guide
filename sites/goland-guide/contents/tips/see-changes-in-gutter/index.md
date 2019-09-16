---
type: tip
date: 2019-04-17
title: See VCS Changed Lines In Gutter
technologies: []
topics: [editing, vcs]
author: pwe
subtitle: Quickly spot which parts of your file have changed since the last commit.
seealso:
  - title: Tracking changes to a file in the editor
    href: 'https://www.jetbrains.com/help/pycharm/viewing-changes-information.html?section=Windows%20or%20Linux#local_changes'
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
  poster: ./poster_short.png
  url: https://www.youtube.com/watch?v=YxFtsFUMb1Y
longVideo:
  poster: ./poster_long.png
  url: https://www.youtube.com/watch?v=3eFDyZ1q5LM
leadin: |
    *Visually scan to see a file's changes.*    

    Working with a version-controlled file and want to see which lines 
    have been added or changed since the last commit? Watch the color 
    codes in the gutter and click for more info.

---

Another line. 

Coding under version control means lines get added or changed since the 
last commit. Sometimes you want to spot what you've changed without the 
disruption of going to a diff dialog.

Time to get in the gutter. Adding some changes.

The IDE marks adds and changes in respective colors in the "gutter" to 
the left of the editor. You get colored stripes in regions that are 
uncommitted. This makes it easy to scan and see changes -- adds in 
one color, changes in another -- since the last commit.

Clicking in the gutter beside the line, on the decoration, brings up 
a popup toolbar with some useful VCS operations for that changed line:

- Navigate to prev/next change

- Revert that change

- Copy the previous revision for that line to the clipboard

- Move the change to a different changelist
