---
type: TutorialStep
date: 2021-11-09
title: The Git Tool Window
technologies: []
topics: []
author: hs
subtitle: How the Git Tool Window can help you
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/v=aBVOAnygcZw?start=119

---

One of the most useful tools when you're working with a Git project is the Git Tool Window. This gives you visibility over the version control status of your project. One way to open the Git tool window is to hover over the quick access button in the bottom left of the IntelliJ IDEA window, and select **Git**. This will open the Git Log tool window. Alternatively, you can use **⌘9** (macOS), or **Alt+9** (Windows/Linux), to open the Git Log tool window.

![Git Log Tool Window](git-log-tool-window.png)

This window shows you all the commits for the project. You can also see a list of local branches, which in this case is just the "main" branch since we just cloned this repository. You can also see the remote branches too. If you find a visual representation of the commit history useful, this window can help you to understand the status of commits, branches, and remotes for your project.

When we're working with open source projects on GitHub, it's common to have more than one remote associated with a repository. If we go back to the intellij-samples project that we cloned from GitHub, we can see that this is actually a fork of another repository. This upstream repository is in the JetBrains organisation, and is likely to be updated by multiple people at a different rate to my fork. Ideally we want visibility of the upstream repository as well as our own fork, in order to get a better idea of what changes have gone in, and to update our own fork with these changes.