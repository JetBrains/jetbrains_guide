---
type: tip
date: 2019-04-17
title: Undo Last Commit
technologies: []
topics: [vcs,]
author: pwe
subtitle: Easily and visually recover from a commit-in-error.
seealso:
  - title: Undo the last commit
    href: 'https://www.jetbrains.com/help/pycharm/undo-changes.html#revert-last-commit'
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
  poster: ./poster_short.png
  url: https://www.youtube.com/watch?v=okmwq-oa2zY
longVideo:
  poster: ./poster_long.png
  url: https://www.youtube.com/watch?v=NFS0bh4fowA
leadin: |
    *Oops, I committed again.*    

    We always remember something just after a commit. Let the IDE help 
    you "uncommit" an un-pushed commit.

---

We get into the flow, moving fast, committing fast, then... uh-oh, we committed 
too soon. Usually two seconds after clicking `Commit`. Fortunately PyCharm makes 
it easy to undo the commit if it hasn't yet been pushed.

Go to the `Version Control` tool window and click on the `Log` tab. Then 
right-click on the commit and choose `Undo` from the context menu.

The changes in that commit need to go "somewhere." In PyCharm, that 
"somewhere" is called a changelist. You can send that commit's changes to 
a new changelist (by default, one labeled with the commit message) or to 
the `Default Changelist`. Then click `Undo`.

You can now deal with the changes in that commit using normal "changelist" 
machinery. It's as if the commit never happened.
