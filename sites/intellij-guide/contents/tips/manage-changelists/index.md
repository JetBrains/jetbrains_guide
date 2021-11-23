---
hasBody: true
date: 2021-11-30
title: Manage VCS Changelists in IntelliJ IDEA
technologies: [git]
topics: [vcs, refactoring, interface]
author: vb
subtitle: Group and commit changes related to certain tasks
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
  poster: ./tip.png
  url: https://youtu.be/fO8oDVBsHWA
seealso:
  - title: IntelliJ IDEA Help - Manage Changelists
    href: https://www.jetbrains.com/help/idea/managing-changelists.html
leadin: |
  Select the files or changed lines in a file which you want to group together for certain tasks, use **⌘⇧M** (macOS) or **Alt + Shift + M** (Windows/Linux) to bring up **Move Files to Another Changelist** dialog. 
  
  Name to create new changelist or choose from existing changelists. IntelliJ IDEA restores the selected changes in corresponding changelist.

---

## Default Active Changelist

Use **⌘0** (macOS) or **Alt + 0** (Windows/Linux), to show the **Commit** tool window.

**Changes** in **Commit Tool Window** is default active changelist. Active changelist is highlighted in bold.

![Default Active Changelist](default-active-changelist.png)

### Set Active Changelist
You can set changelist to Active if you want to commit your changes to VCS. Select the changelist, use **^Space** (macOS) or **Ctrl + Space** (Windows/Linux) to set as active changelist.

![Set Active Changelist](set-active-changelist-ctrl-space.png)

## Creating Changelist

### Using Search Everywhere
Use **⇧⇧** (macOS), or **Shift+Shift** (Windows/Linux), to bring up the Search Everywhere dialog. You can now search for _Changelist_ and select **New changelist...** to bring up **New changelist** dialog.

![New Changelist using Search Everywhere](create-change-list-using-search-everywhere.png)

### Using Commit Window
You can also right-click or secondary click on Commit Window to show options and click **New changelist...** to bring up **New changelist** dialog.

![New Changelist using Commit Window](new-changelist-using-commit-window.png)

### New changelist dialog

[New Changelist dialog Reference](https://www.jetbrains.com/help/idea/2021.2/new-changelist-dialog.html)

![New Changelist dialog](new-changelist.png)



## Deleting Changelist

You can use Commit Window to **Delete Changelist**

![Delete Changelist using Commit Window](delete-changelist-using-commit-window.png)

Alternatively, you can use **⌘⇧A** (macOS), or **Ctrl+Shift+A** (Windows/Linux), to bring up the Find Actions dialog which will filter the Search Everywhere dialog to just Actions.

# Scenarios to use different changelists
  - Suppose you are working on your code which requires only selected changes to be committed in VCS and still you want to continue developing your code. In that case, you can move your changes to different changelist and group together.
  - If you want to run your application with unique configuration without impacting your existing code, you can maintain the changed files in different changelist