---
hasBody: true
date: 2022-11-23
title: Only Commit Some Changes
technologies: []
topics: [vcs]
author: pwe
subtitle: Unselect files or changed regions within files during the commit process.
seealso:
  - title: Commit part of a file
    href: https://www.jetbrains.com/help/rider/Commit_and_push_changes.html#push
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
  poster: ./poster_short.png
  url: https://youtu.be/OlFg1g3hcLs
leadin: |
    *Time to commit but not everything is ready?*    

    You've done a lot of work. Perhaps overlapping, perhaps some unfinished. 
    Let the IDE help you leave files or parts of a file out of the commit.

---

You’ve done a lot of work, but not all the changes should go in one commit. 
Let’s use partial commit.

In the commit window, look at your changes.
Skip the first file by clicking the checkbox.
In the second file, open the diff and deselect some of its changes.

Now when you commit -- just those parts are included. 
The unselected parts remain as changes.

## The Problem

You sit down to do some work. It’s going well. You’re in the zone.
You have an idea for some other work, something for next week. 
Exciting stuff, you can’t help yourself. 
You write it down.

You get a phone call: you forgot a change in something that you did last week. 
Need to make a small fix.

Back to what you were doing at first.
You wrap it up.

Time to ship it, with a good commit message.
But there are actually 3 units of work slotted for this commit.

- Today’s work
- Next week’s work, 
- And last week’s work. 

Each should get separate commits.
Of course, you could just do a single commit, with a commit message for each unit. 
Fast for you, for now.
But not fast for others, trying to decipher the commit history later.

You could roll back the second two changes, then manually re-apply them.
But that’s -- how shall we say -- inefficient. 
You could use the under-appreciated changelist (or stash) facilities. 

Maybe there’s a quick and easy solution.

## The Solution

What’s a partial commit? Here’s a website that explains it.

That paragraph describes exactly what we want to do. 
The how? Maybe a little cumbersome.
Fortunately our IDEs have been putting a pretty face on this operation for a while.

Let’s return to the commit tool window and walk through committing just the work we want.
First, leaving out an entire file. 
Just click the checkbox on any files.

Sometimes you have a big directory hierarchy of files that might have been copied in. 
Leaving them out is easy. 
Just deselect the parent. 
You could even go in and re-select just a couple.

Next, leaving out part of a file. 
Bring up the diff tool. 
Find the change you want to omit and click the checkbox. 

If you change your mind, re-select it.
This is just like the normal diff tool. 
You could scroll through changes in a file, between files, use the keyboard-only -- all those productivity tips apply.

When you finish, you’ll see the checkbox has a “dash”. 
That means it is between “checked” and “unchecked”. Think of it as “some.”
You do your commit as normal. 
It leaves the unselected changes out of the commit, meaning they are still there. 

You could continue your process to select the changes for next week’s commit, with a good commit message.
Then, the changes for last week’s commit, again with a good commit message.
There, you’ve processed all the changes and your commit history is easy to digest later.

Want to see what happened behind the scenes? 
The Git tool’s Log tab shows the commands issued. 
This is what you would have had to type.
