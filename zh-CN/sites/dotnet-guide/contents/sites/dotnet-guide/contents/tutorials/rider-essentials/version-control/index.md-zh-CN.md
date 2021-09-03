---
type: TutorialStep
date: 2020-07-15
title: Version Control in Rider
technologies:
  - .net
  - csharp
topics:
  - ide
  - vcs
products:
  - rider
author: matkoch
subtitle: Working with Git, commit code, rebase and switch branches. Let's explore version control (VCS)!
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster.png
  url: https://youtu.be/_fTwymtpg78
---

### Commit Changes

After working on some code, there comes a time to commit it to source control. Whether you are using Git, Mercurial, Perforce, Subversion, or another Version Control System (VCS), Rider gives you the same [Commit tool window (or dialog)](https://www.jetbrains.com/help/rider/Commit_and_push_changes.html).

In the commit tool window, you can share the results of your work - in full, or partial. You can select all files to commit, or specific ones. And in the files you want to commit, you can [select the chunks of code to include/exclude](https://www.jetbrains.com/help/rider/Commit_and_push_changes.html#commit). This is especially handy for cases where you make changes to the same file, and you want to commit these changes separately to make reviewing easier later on.

While you prepare to commit code, you can look at the diff between the previous version and the new version. Rider gives you syntax highlighting, and shows code analysis results. Even better is that you can make last-minute changes directly from the diff viewer!

### Changelists

A changelist is a set of local changes that have not yet been committed to a VCS repository. You can [create multiple changelists](https://www.jetbrains.com/help/rider/Managing_Changelists.html) in Rider, so you can group changes related to different tasks, and commit these sets of changes separately.

Have you ever been multitasking? Working on a specific feature, but fixing another set of files at the same time? By using a changelist you can separate both changes from the start, so you don't have to figure this out at commit time.

### Branches and Rebasing

Branching is a mechanism that lets you diverge from the main development line, for example, when you need to work on a feature or freeze a certain state of a code base for a release, and so on.

In Rider, you can [manage branches](https://www.jetbrains.com/help/rider/Manage_branches.html) from the branches popup. It lets you create/delete branches, and makes it easy to switch to a different branch to continue work.

There are also options to merge branches, or [perform a Git rebase](https://www.jetbrains.com/help/rider/Apply_changes_from_one_branch_to_another.html#rebase-branch).

### Local History

Sometimes you are in a project that's isn't yet under version control. Or, you've done a lot of work since your last commit. You then make a big change, or delete a chunk of code, and the **Undo** action not sufficient. Now what?

[Local History](https://www.jetbrains.com/help/rider/local_history.html) constantly tracks all changes made, and automatically maintains revisions for all meaningful changes. This gives you a detailed timeline of changes in project structure and source code, with the ability to roll back to any point if necessary.

Keep in mind it is not a replacement for proper version control. It does save the day when disaster strikes!

### See Also

- [Version Control in Rider](https://www.jetbrains.com/help/rider/Version_Control_Integration.html)
- [Commit and Push Changes](https://www.jetbrains.com/help/rider/Commit_and_push_changes.html)
- [Working with Changelists](https://www.jetbrains.com/help/rider/Managing_Changelists.html)
- [Branches (Git)](https://www.jetbrains.com/help/rider/Manage_branches.html)
- [Local History](https://www.jetbrains.com/help/rider/local_history.html)