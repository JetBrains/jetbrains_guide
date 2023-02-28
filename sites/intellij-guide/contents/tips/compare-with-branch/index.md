---
hasBody: true
date: 2022-12-15
title: Compare With Branch
technologies: []
topics: [vcs,]
author: pwe
subtitle: See the changes in another branch's commits.
seealso:
- title: Compare branches
  href: https://www.jetbrains.com/help/idea/manage-branches.html#compare_branches
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
  poster: ./poster_short.png
  url:  https://www.youtube.com/watch?v=7Rjl1Cerbl0
leadin: |
  *You want to merge -- but what's in those commits?*

  You see the commits from the main branch.
  What changes do they contain?
---
## The Problem

We saw how to [see that another branch has commits](../see-unsynced-commits).
Also, how to [browse that branch's commits](../browse-branch-commits) and what it looks like in the Git Log swimlanes.

These swimlanes are great! 
They tell us that those commits are in main. 
We kinda want them in our feature branch.

One more thing though: what changes are included in those commits?

## The Solution

We saw going to the Git Log, choosing a commit, and getting to a diff. 
This is against your local *branch*, not the uncommitted changes in your *working directory*.
But that’s not the branch. 
That’s a commit on the branch. 
If the branch had multiple commits, you could select all of them. 
The IDE will figure out all the changes, vs. your local branch.

That’s a lot of work. 
Let’s just compare with the branch. 
In the branches popup, select a branch, and choose “Compare With your-branch-name”.
The top shows commits in “main”, since your branch last updated with it.
The bottom has your commits, in your branch, not yet a part of main.

That’s for *commits* on your branch. 
“Show Diff with Working Tree”, though, compares against the changes in your *working directory*.
Use “Show Diff”, then navigate through the changes.


