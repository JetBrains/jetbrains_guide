---
date: 2022-11-22
title: Fix Your Work with Amend Commit
technologies: []
topics: [vcs]
author: pwe
subtitle: Put some missing work back into your last commit, before you push.
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
  poster: ./poster_short.png
  url: https://youtu.be/8sSlWDiwdkc
hasBody: true
leadin: |
    *You committed too soon.*

    You're so eager to commit that you left something out. Use the IDE's 
    friendly "Amend Commit" feature to put the work back in, as if it 
    was there in the first place.
---

You’re finishing some work...whew!!! 

But, as soon as you commit, You realize: you left something out. 
Good news -- the IDE makes “Amend Commit” really easy. 

Make your change, and if you haven’t pushed, go back to the commit, and check `Amend`. 
When you commit, your change is now included.

## The Problem

Here’s the problem, and this happens to all of us...a LOT. 
You do a bunch of work, such as: write the Markdown for this tip and update some thumbnails. 
You can see the changes.


At this point, you’re really excited.
Or, really exhausted.
You want to declare victory with a commit!

It is at this EXACT point that you remember one of those cleanup tasks.
Maybe it’s: update the docs.

Are you really going to do *another* commit? Or undo the last commit?

## The Solution

Git lets you amend a commit. 
Yeh, you, out there, about to tell us it is easy from the command line, we hear you. 
But some of us civilians -- feel otherwise.

The Git tool window tells you about your last commit, and what changed.
You want to make a change, get it into that commit, as if the change was there in the first place. 
What are your options?

In [another tip](../undo-last-commit/), we showed you `Undo Commit`. 
This would put everything back, you make your change, then another commit.

Instead, with Amend Commit, you make the change.
The IDE's commit tool window says you have changes.

This is where the IDE can help versus the command line. 
Maybe you did a lot of changes before remembering the missing piece. 
You can deselect files, or go into files and deselect change regions.

Now you click “Amend”, and suddenly, you are back to where you were when you last committed. 
Except, our new change is considered part of the commit.

In our Git Log, there isn’t a new entry, just the same previous commit. 
When you view the diff for the Markdown change, you see: the date change is now included.

For those that don’t trust the convenience, you can look at the `Git Console` to see the command which you would have typed from the command line.

One last point: what would this look like without a mouse? 
We make a change, open the commit tool using `Ctrl-Alt-M` (on Mac) to check the `Amend` box.
Then `Ctrl-Enter` to commit.
