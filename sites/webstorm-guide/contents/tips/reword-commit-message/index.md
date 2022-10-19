---
hasBody: true
date: 2022-10-05
title: Edit Commit Message
technologies: []
topics: [vcs]
author: pwe
subtitle: Edit the wording in your last commit message, after you committed.
seealso:
  - title: Edit a commit message
    href: https://www.jetbrains.com/help/webstorm/edit-project-history.html#reword-commit
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
  poster: ./poster_short.png
  url: https://youtu.be/qjaCu9BYeUg
leadin: |
    *Fix that message.*    

    It always happens: as soon as you click `Commit`, you spot the typo 
    in the message or remember a change. Use the VCS Log's `Reword` to 
    fix it.
---

That last commit message…(sigh)...had a typo.
You haven’t pushed yet. Just right-click on the commit, choose “Edit Commit Message”, and fix the mistake.

Now your commit history…passes the spell-checker.

## The Problem

This is my development life. 
I finally wrap up a big pile of work, go to do a commit.
And, in the rush of victory, make a spelling error, which I spot just as I finish clicking “Commit”. 
Alas, it’s there, in the history.

We haven’t pushed. So there’s hope.

## The Solution

Of course, the best solution is to fix the problem before committing. 
Our IDEs have a plugin called Grazie which does...let’s just call it “super cool spelling and grammar checking.” 
It probably warned you about the typo.

It will probably even fix the typo for you.

Back to our messed-up commit message.
We could of course, go to the Terminal and type some arcane commit message. 
And of course, hope we don’t corrupt our repo.
This has some downsides: go to the command-line, type something a little obscure, possibly get something wrong, and get no help from the spell checker.

Fortunately, this is the kind of thing our IDEs are great at. 
Right-click on the commit, and you’ll get a list of actions to take on that commit.

There are LOTS of things we can do to help, as this list shows. 
Beside `Edit Commit Message`, you can see `F2`.  
This shows we could have skipped the context menu by selecting the commit and pressing `F2`.

We’ll select that option and be prompted with a dialog to edit the commit. 
The existing commit message is there. 
We can see, there’s a warning about the typo. We mouseover for more detail. 
This is the Grazie plugin helping us again.

We can type to fix it, or use Alt-Enter to get a correction.

Once fixed, click Ok to finish the operation. 
You now see the commit history with the fixed commit message. 

One point in closing...we mentioned that you should only use this option if you haven’t pushed. 
If you go back to older commits and right-click, you’ll see some options are grayed out.
