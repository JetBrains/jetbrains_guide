---
type: TutorialStep
date: 2021-11-09
title: Summary and Shortcuts
technologies: []
topics: []
author: md
subtitle: Git interactive rebase Summary
thumbnail: ./thumbnail.png

---

## Summary 
Now we know how to use git interactive rebase either from the UI or the command line.
Give them a try and use whichever way you prefer.

### IntelliJ IDEA Shortcuts Used
Here are the IntelliJ IDEA shortcuts that we used.

| Name                                                                                             | macOS Shortcut | Windows / Linux Shortcut |
|--------------------------------------------------------------------------------------------------|----------------|--------------------------|
| [Open the Git Tool Window](https://www.jetbrains.com/help/idea/version-control-tool-window.html) | **⌘9**         | **Alt+9**                |
| Open the Commit Window                                                                           | **⌘0**         | **Alt+0**                |
| [Open the Terminal](https://www.jetbrains.com/help/idea/terminal-emulator.html)                  | **⌥F12**       | **Alt+F12**              |
| Select Fixup (in the "Rebasing Commits" popup)                                                   | **⌥F12**       | **Alt+F**                |
| Select Up (in the "Rebasing Commits" popup)                                                      | **⌥↑**         | **Alt+↑**                |
| Select Down (in the "Rebasing Commits" popup)                                                    | **⌥↓**         | **Alt+↓**                |
| Edit commit message (in the Git Log)                                                             | **F2**         | **F2**                   |

### Git commands Used
Here are the Git commands that we used.

| Name                                                                                   | terminal command             |
|----------------------------------------------------------------------------------------|------------------------------|
| Git interactively rebase from a specific commit with commit hash, for example 11aa23bc | **git rebase -i 11aa23bc**   |
| Use this commit                                                                        | **pick**                     |
| Fixup this commit (add changes to previous commit under the same commit message)       | **fixup**                    |
| Squash this commit (add changes to previous commit and combine commit messages)        | **squash**                   |

### vi Shortcuts Used
Here are the  shortcuts that we used.

| Name                                       | Shortcut |
|--------------------------------------------|----------|
| Open interactive (edit) mode               | **I**    |
| Exit interactive (edit) mode               | **esc**  |
| Remove line (**note**: not in edit mode)   | **dd**   |
| Reinsert line (**note**: not in edit mode) | **p**    |
| Write and quit                             | **:wq**  |
| Force quit                                 | **:q!**  |


### Related Links
- [(video) Using Git Interactive Rebase](https://www.youtube.com/watch?v=bPX9VHjviEM)
- [(docs) Edit project history by performing interactive rebase](https://www.jetbrains.com/help/idea/edit-project-history.html#interactive-rebase)
- [(docs) Git rebase](https://git-scm.com/docs/git-rebase)
- [(code) gitdemo project on GitHub](https://github.com/mlvandijk/gitdemo)
- [(docs) Basic vi Commands](https://docs.oracle.com/cd/E19253-01/806-7612/editorvi-43/index.html)