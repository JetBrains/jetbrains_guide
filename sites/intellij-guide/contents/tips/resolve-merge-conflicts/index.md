---
hasBody: true
date: 2021-09-16
title: Resolve Merge Conflicts in VCS
technologies: [java]
topics: [settings, vcs, editing]
author: vb
subtitle: Use VCS Options in IntelliJ to resolve merge conflicts visually
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
  poster: ./tip.png
  url: https://youtu.be/tGxG3KZkRQI  
seealso:
  - title: IntelliJ IDEA Help - Resolving Merge Conflicts
    href: https://www.jetbrains.com/help/idea/resolving-conflicts.html
leadin: |
  Use **⇧⇧** (macOS), or **Shift+Shift** (Windows/Linux), to bring up the Search Everywhere dialog and you can search for **Resolve Conflicts** to open Conflicts' dialog that helps in visually Resolving Merge Conflicts between two different versions of Code.
  - You can utilize the option available in **Merge Revisions dialog** and **you should carefully review** to accept or ignore code changes as well as **Resolving Conflicts**. It visually helps users in easily reviewing and resolving merge conflicts.
  - **Note:** Resolve Conflicts option is available only when there are any merge conflicts. 
  
---

## Resolving Conflicts Using Git Toolbar Options
Alternately, you can open Conflicts dialog by using **Git -> Resolve Conflicts** option available in ToolBar. 

![Resolve Conflicts Using Git Toolbar](git-resolve-conflicts-toolbar.png)

### Conflicts Dialog
The Conflicts Dialog shows list of files that has merge conflicts. You can select files and merge manually, or you can accept either your changes or incoming changes. 

![Conflicts Dialog Showing List of Conflicted Files](conflicts-dialog.png)

### Manually Resolving Conflicts using Merge
When you manually merge changes, IntelliJ **Merge Revisions Dialog** opens providing visual view of changes and conflicts between two versions of code. 
It has 3 different views.

![Merge Revisions Dialog](merge-revisions-dialog.png)

#### Left View
Left view in the Merge Revisions dialog shows your changes of the file. 

#### Result View
Result view in the Merge Revisions dialog is where any changes made and conflicts resolved are visually shown. You can always refer Result View to keep making required changes and resolving conflicts.

#### Right View
Right view in the Merge Revisions dialog shows the incoming file changes.


### Resolving Merge Conflicts

You have to carefully review the changes **_(highlighted in blue)_** and accept any of the one that is required. In case of conflicts **_(highlighted in red)_**, you can accept the change that is required and must ignore the one, that is not required.

#### Accepting Code Change
![Accept Code Change](accept-change.png)

To **accept Code Change**, click on Double **>>** symbol in Left View or **<<** symbol in Right View pointing towards result view. This will apply the corresponding change in the result view.

#### Ignoring Code Change
![Ignore Code Change](ignore-change.png)

To **ignore Code Change**, click on **X** which ignores the change from selected view. Ignoring Code Changes will not apply changes in result view.

### Save Changes to Finish Merging

![Save Changes to Finish Merging](finish-merging.png)

Upon successfully resolving by applying the correct changes and fixing the conflicts, the popup message appears stating that **All Changes have been processed**. When you apply the changes, the selected file's merge conflicts is successfully resolved and saved.
