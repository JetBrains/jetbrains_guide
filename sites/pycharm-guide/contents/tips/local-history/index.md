---
type: tip
date: 2019-04-17
title: Use Local History to Avoid Disaster
technologies: []
topics: [vcs]
author: pwe
subtitle: Use the IDE's built-in history facility to recover changes when VCS can't help you.
seealso:
  - title: Local History
    href: 'https://www.jetbrains.com/help/pycharm/local-history.html#local_history.xml'
  - title: Retention period for Local History
    href: 'https://www.jetbrains.com/help/pycharm/local-history.html#retention'  
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
  poster: ./poster_short.png
  url: https://www.youtube.com/watch?v=7R1AtB42-BE
longVideo:
  poster: ./poster_long.png
  url: https://www.youtube.com/watch?v=ow4S-SieFeQ
leadin: |
    *Movies aren't the only things with time machines.*    

    You mistakenly made a big change or deleted a file, and either you 
    aren't under version control or the change was since your last commit. Local 
    History to the rescue.

---

This is the "Oh my goodness you saved my sanity" tip.

Sometimes you are in a project that's isn't yet under version control. Or, 
you've done a lot of work since your last commit.

Then, disaster strikes...you make a big change, or delete a chunk of code, 
and `Undo` is too far away (too much has been typed in) to help.

Or worse, you deleted a file. Oh, that sinking feeling.

`Local History` to the rescue. Our IDEs have a built-in facility that tracks 
revisions for all IDE-initiated changes. On a file, `Show History` brings up 
a listing of changes on the left. On the right, a diff for the selected 
change compared to the current file. You can apply parts of the diff or 
right-click on the change to "revert" the current contents to the contents 
at that revision.

If you selected a directory and opened `Show History`, it shows file changes, 
including deletions and can thus revert a delete by right-clicking on the 
change that did the delete.

By default changes are retained for 5 days, but 
[this is configurable](https://www.jetbrains.com/help/pycharm/local-history.html#retention).

`Local History` has more features, such as applying labels to simulate 
branches and generating patches. It isn't a replacement for a VCS, but it is 
very helpful when disaster strikes.
