---
type: tip
date: 2019-04-17
title: Only Commit Some Changes
technologies: []
topics: [vcs]
author: pwe
subtitle: Unselect files or changed regions within files during the commit process.
seealso:
  - title: Commit part of a file
    href: 'https://www.jetbrains.com/help/pycharm/commit-and-push-changes.html?section=Windows%20or%20Linux#partial_commit'
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
  poster: ./poster_short.png
  url: https://www.youtube.com/watch?v=xo_tzr6q29o
longVideo:
  poster: ./poster_long.png
  url: https://www.youtube.com/watch?v=2dfhBkZ87oQ
leadin: |
    *Time to commit but not everything is ready?*    

    You've done a lot of work. Perhaps overlapping, perhaps some unfinished. 
    Let the IDE help you leave files or parts of a file out of the commit.

---

You're working fast, in the flow, and just wrapped up something great. 
Tests pass, time to commit.

Ugh, you weren't disciplined: you did two things at once and the other thing 
isn't finished. Even if it was finished, it doesn't belong in an isolated 
commit.

Partial commits to the rescue.

Start your commit, and in the commit dialog, de-select the files you want 
to omit. (Or click the root to de-select everything, then select the files 
that you want in the commit.)

That let's you do a partial commit with the not-ready files left out. But 
what if a file has some parts that are done and others that aren't?

Partial commit also applies to chunks in a file. In the commit dialog's 
diff viewer, un-check the parts of the file you want to not commit.

Once you have the subset of changes that you actually want to commit, 
proceed as usual.