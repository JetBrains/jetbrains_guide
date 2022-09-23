---
hasBody: true
date: 2022-09-22
title: Undo Last Commit
technologies: []
topics: [vcs,]
author: pwe
subtitle: Undo a commit...without misery.
seealso:
  - title: Undo the last commit
    href: https://www.jetbrains.com/help/pycharm/undo-changes.html#revert-last-commit
  - title: Manage changelists
    href: https://www.jetbrains.com/help/pycharm/managing-changelists.html
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
    poster: ./poster_short.png
    url:  https://youtu.be/sAXyAivHeb0
leadin: |
    *You botched your last commit.*    

    You want to fix it, but you haven’t memorized the Git voodoo chant.
    Good news. If you haven’t pushed yet, the IDE can make this really easy.
---
First go to the Git tool window and make sure you’re on the log tab.

It shows the list of commits on the current branch.
The most recent one is at the top.

Right-click that commit and in the pop-up window, choose Undo Commit.

That commit has some changes. Let’s keep them in the default changelist.
Now the commit tool window says I have changes.

And now that commit…never happened. Let’s look a little deeper.

## The Problem
You are editing, say a Markdown file. 
Let’s leave the Commit tool window and Git tool window open, to see the updates as we go.

You change the title, and make a commit. 
And for the thousandth consecutive time, you spot a typo, just as the onkeyup event fires when clicking commit.
Alas, the commit tool window shows that there are no changes.
And, in your Git log, there it is, the mistaken commit.

That means it’s too late, right! 
Nope, if you haven’t pushed to a “protected” branch, you can clean things up locally. 
And the IDE puts a convenient UI atop the underlying Git command. 

## The Solution
In the Git tool window, find the most recent commit. 
It’s the one at the top. 
When we select it, we get more detail about the commit. 
We can double-click the file to see a diff of the change.

When you right-click on a commit, you get some actions you can take on it. 
Some might be grayed-out. 
For example, if we right-click on an older, pushed commit, we’ll see “Undo Commit” is grayed-out.

Back to the first commit. Right-click on it, and select “Undo Commit”.

Now, the commit had some changes in them, and these changes need to go somewhere. 
The IDE’s [changelists](https://www.jetbrains.com/help/pycharm/managing-changelists.html) provide such a place. 
We’ll stick with the `Default Changelist`.

This results in our Commit tool window showing the changes when we click ok.

A look in the Git log also shows a change.

That commit is…gone! We’re back to where we were before the commit.

What would this have been like from the command line? 
Let’s take a look at the Git tool’s Console tab, to see behind the scenes. 
There it is, the command that we would have had to type, from the command line. 
