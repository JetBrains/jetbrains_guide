---
type: tip
date: 2019-04-17
title: Put New Project Under Version Control
technologies: []
topics: [vcs]
author: pwe
subtitle: The fastest way to register a new project directory under local version control.
seealso:
  - title: Enable Version Control Integration Dialog
    href: 'https://www.jetbrains.com/help/pycharm/enable-version-control-integration-dialog.html#Enable_Version_Control_Integration_Dialog.xml'
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
  poster: ./poster_short.png
  url: https://www.youtube.com/watch?v=jlpfzJZ7RZM
longVideo:
  poster: ./poster_long.png
  url: https://www.youtube.com/watch?v=dfwxbItS6lE
leadin: |
    *Work safely via VCS, via keyboard.*    

    You started a new project or opened a local directory and it's not 
    yet under VCS. Here's the fastest way to do so, from the keyboard.

---

You have a new project, or opened a project not under version control. First 
thing is to fix that by making a local repository.

You can use your mouse to go to the `VCS -> Enable Version Control Integration` 
menu item. But you can also do this from the keyboard, to get to the same 
dialog, without leaving the keyboard.

Use `Find Action` (`Shift-Ctrl-A` Win/Linux, `Shift-Cmd-A` macOS) and speed 
search for `en ve co` (meaning, `Enable Version Control`). It should be the 
first matching item. Press `Enter` to invoke it.

The dialog that pops up wants a selection of which VCS system to use. If it 
is Git, type `g` and the dropdown will select Git. Select `Ok` to perform 
the operation.

This action adds a VCS root in your 
`Settings/Preferences -> Version Control` preference. Later, when you want 
a remote, you can use, for example, `Share Project on GitHub`.
