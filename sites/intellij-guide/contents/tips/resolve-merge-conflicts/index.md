---
hasBody: true
date: 2021-09-24
title: Resolve Merge Conflicts in VCS
technologies: [git]
topics: [vcs, editing]
author: vb
subtitle: Use VCS options in IntelliJ IDEA to resolve merge conflicts visually in the editor
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
  poster: ./tip.png
  url: https://youtu.be/GvAUA-jD9d0 
seealso:
  - title: IntelliJ IDEA Help - Resolving Merge Conflicts
    href: https://www.jetbrains.com/help/idea/resolving-conflicts.html
leadin: |
  Use **⇧⇧** (macOS), or **Shift+Shift** (Windows/Linux), to bring up the Search Everywhere dialog. You can now search for _Resolve Conflicts_ to open the **Conflicts** dialog which helps you to visually resolve merge conflicts between two different versions of the code.
  - You can use the option available in the **Merge Revisions** dialog and **you should carefully review** before you accept or ignore code changes as well as resolving conflicts. This dialog visually helps you to review and resolve merge conflicts.
  - **Note:** The **Resolve Conflicts** option from the Search Everywhere dialog will only display the **Conflicts** dialog when there are merge conflicts in your code, otherwise you will get an error. 
  
---

## Resolving Conflicts Using Git Toolbar Options
Alternately, you can open the **Conflicts** dialog by using **Git -> Resolve Conflicts** option available from the menu. 

![Resolve Conflicts Using Git Toolbar](git-resolve-conflicts-toolbar.png)

### Conflicts Dialog
The **Conflicts** dialog shows a list of files that have merge conflicts. You can select files and merge manually, or you can accept either your changes or their (incoming) changes. 

![Conflicts Dialog Showing List of Conflicted Files](conflicts-dialog.png)

### Manually Resolving Conflicts using Merge
When you manually merge changes, you use the **Merge Revisions** dialog which provides a visual view of changes and conflicts between two different versions of the code. It has three different views:

![Merge Revisions Dialog](merge-revisions-dialog.png)

#### Left View
The Left view shows your changes of the file. 

#### Result View
The Result view is where any changes made and conflicts resolved are shown visually. You can always refer to the Result View to keep making required changes and resolving conflicts.

#### Right View
The Right view shows the incoming file changes.

### Resolving Merge Conflicts
You should carefully review the changes **_(highlighted in blue)_** and accept any one of the changes that are required. In case of conflicts **_(highlighted in red)_**, you should accept the changes that you want, and ignore those that you don't.

#### Accepting Code Changes
![Accept Code Change](accept-change.png)

To accept a code change, click on the **>>** symbol in the Left View or the **<<** symbol in the Right View which is pointing towards the Result view. This will apply the corresponding change in the Result view.

#### Ignoring Code Changes
![Ignore Code Change](ignore-change.png)

To ignore a code change, click on the **X**. This means that the change is disregarded from the selected view (Left or Right). Ignoring code changes means that they are not applied to the Result view.

### Finish Merging

![Save Changes to Finish Merging](finish-merging.png)

When you have successfully resolved all your merge conflicts, IntelliJ IDEA will prompt you that **All Changes have been processed**. When you press **Apply** the conflicts in the file are all resolved.