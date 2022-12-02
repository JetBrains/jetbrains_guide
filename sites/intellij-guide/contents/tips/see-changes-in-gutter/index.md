---
hasBody: true
date: 2022-12-2
title: See VCS Changed Lines In Gutter
technologies: []
topics: [editing, vcs]
author: pwe
subtitle: Quickly spot which parts of your file have changed since the last commit.
seealso:
  - title: Tracking changes to a file in the editor
    href: https://www.jetbrains.com/help/idea/viewing-changes-information.html#local_changes
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
  poster: ./poster_short.png
  url: https://www.youtube.com/watch?v=wp86DkW0VLA
leadin: |
    *Visually scan to see a file's changes.*    

    Working with a version-controlled file and want to see which lines 
    have been added or changed since the last commit? Watch the color 
    codes in the gutter and click for more info.

---
We've all been there.

I’m working hard. Adds... edits... deletes.
You go away then come back. 
Uhhhhh, what was it that I did?

Let the IDE’s gutter show you! Green shows additions, blue means changes, and the expando triangle means deletions.

Click to see an inline diff, and actions, such as rollback.


## The Problem

It’s easy to forget what you did -- an hour ago.
For example, you’re cranking out something big, such as this tip.

You’re adding new lines of content.
You’re changing lines.
You’re deleting lines. 
You spent HOURS in thought. 
It feels good to get it all written down.

You then go away to some other work. 
When you come back, you’ve lost your train of thought. 
What were you doing? 
What had you done?

VCS could help.
You can do it the caveman way, from the command-line.
Or, you can use the IDE’s nice Git integration. 
It will show you the changed files. 
But you then need to go into them, and go through a diff.
And the listing will show you every change in the project.

What you want is something in the editor, to use while you’re editing, at a glance, what’s changed. 
So you can stay in the flow.

## The Solution

Use the IDE’s gutter markers to spot changes with just a quick look. 
Changed regions have a color block. 
Maybe one region was added: it’s in green.
Maybe another had an edit: it’s in blue.

A third region had the line contents deleted, with a blank line in its place. 
It’s in yet another color:
And finally, another region had a deletion. 
The gutter marker is now a little expando triangle.

Next, perhaps you want to know more about that change. 
These regions are clickable.
This gives you a little, non-obtrusive, easily-dismissed, inline inlay.
The inlay shows a little preview of the diff. 
Nice!

It also has some really-useful buttons. 
You can:

- Move between changes
- Rollback that change (which you will use ALL THE TIME)
- Launch a full diff
- Copy that change region to the clipboard
- Toggle highlighting the change
- *se the changelist facility to move this change out-of-the-way.

When you’re done, hit escape or click elsewhere to dismiss the panel, and you’re right back where you were.
