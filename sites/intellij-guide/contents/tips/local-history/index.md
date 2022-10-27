---
hasBody: true
date: 2022-10-27
title: Use Local History to Avoid Disaster
technologies: []
topics: [vcs]
author: pwe
subtitle: Use the IDE's built-in history facility to recover changes when VCS can't help you.
seealso:
  - title: Local History
    href: https://www.jetbrains.com/help/idea/local-history.html
  - title: Retention period for Local History
    href: https://www.jetbrains.com/help/idea/local-history.html#local-history-retention  
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
  poster: ./poster_short.png
  url: https://youtu.be/qBxu_PdDHFw

leadin: |
    *Movies aren't the only things with time machines.*    

    You mistakenly made a big change or deleted a file, and either you 
    aren't under version control or the change was since your last commit. Local 
    History to the rescue.

---

You’re in your repo. You add a file. 
Later, you make some edits, but then -- you change your mind.
You want to revert but you never committed.

Use the IDE’s local history on a file… when you aren’t under version control, or you’re in between commits. 
Browse each IDE change, see diffs, recover from mistakes.

Delete a file by accident?
Go to the folder’s local history, and recover that too!

## The Problem

This is the "Oh my goodness you saved my sanity" tip.

Sometimes you are in a project that isn't yet under version control. 
Or, you've done a lot of work since your last commit. 
For example, a file is under version control, but you've been very busy.

You pause for a bit, have some inspiration, and hack away. 
You delete a paragraph, then ultimately finish the text.
But now you want that paragraph back! 
Git can’t help, because you didn't commit before hacking away.

You could try “Undo-Undo-Undo-Copy-Redo-Redo-Paste.” 
But that’s barbaric. 
There has to be a better way.

## The Solution

This is going be one of those things that people love about our IDEs.

Local History to the rescue. 
Our IDEs have a built-in facility that tracks revisions for all IDE-initiated changes -- whether you are using a VCS or not.

Right-click on a file and choose “Local History” then “Show History”.
On the left, you get a list of changes detected by the IDE.
When you select one, you get a diff – comparing to the current file contents – on the right.

As you go through the changes, you see each diff. 
Like our normal diff viewer, you can apply changes to recover portions.

Perhaps you want the entirety of the file at that point in the history. 
Right-click on that revision and choose revert.

If a certain revision is known to be in a certain state, right-click and apply a friendly label.

That covers changes to a file. 
But what if you deleted the file, and it wasn't under VCS?
Go to that file’s folder and choose Local History. 
The deletion event is there, and you can restore the file.

As a wrapup, let’s see the same sequence -- without the mouse! 
First, invoke `Search Everywhere` and search for the `Show Local History` action.

In the Local History window, tab into the `Old Changes` panel. 
Cursor down to the edit. 
Tab to go into the changes. And – on Mac – `Ctrl-Cmd-Right arrow` to accept changes.
