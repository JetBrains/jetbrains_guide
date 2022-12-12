---
hasBody: true
date: 2022-12-09
title: Browse Branch's Commits
technologies: []
topics: [vcs,]
author: pwe
subtitle: Review the changes in main before bringing them to your branch.
seealso:
- title: Sync with a remote Git repository
  href: https://www.jetbrains.com/help/pycharm/sync-with-a-remote-repository.html
- title: Update your project
  href: https://www.jetbrains.com/help/pycharm/sync-with-a-remote-repository.html#update
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
  poster: ./poster_short.png
  url:  https://www.youtube.com/watch?v=LJt_XQZWZvs
leadin: |
  *Look before you leap.*

  You're on a feature branch but main has commits.
  Let's take a look at them before doing anything dangerous.
---
## The Problem

You’re working on a feature branch.

In the last video, we saw how the IDE can show you when the main branch gets updated.
You look and yes, in fact, main does have incoming commits
You go to git log but nothing!

What’s up with that?

The IDE checks regularly for remote changes. 
But it doesn't “fetch” the changes.
Our IDE help pages explain all this. 
Your local git is just as it was before the check. 
And it certainly hasn't updated your working copy files.

## The Solution

In Git terms, we want to “fetch changes”. 
This gets us the “new data from commits”, but “changes are not applied to your code.”

How do you do a fetch? 
If you prefer the keyboard, search-by-action and type fetch. 
You can also: open the branches popup and click the blue down arrow. 
Or, go to the Git Menu and do a fetch from there.

The Git Log timeline now tells you that origin/main – that kind of violet color – has two new commits in the swimlane view.
We’re in the “ALL” branches view. 
To emphasize our current state, double click to zoom on our local branch. 
No evidence in the swimlanes of those two commits from origin/main. 
Same for Local Main. 

But remote/main -- that shows the two commits. 
We finish by going back to the ALL view.

That tells you about the commits. 
But what about the changes in the commit? 
Just click on the commit and get more detail, including a diff.

But if you know you’re working alone, you can use the IDE’s “update” action, Cmd-T on Mac.
It combines fetch and pull. 
As explained in our help pages, update does several things at once.
