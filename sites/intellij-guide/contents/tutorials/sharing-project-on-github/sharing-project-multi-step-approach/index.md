---
type: TutorialStep
date: 2021-10-13
title: Sharing your project on GitHub - The multi-step approach
technologies: []
topics: []
author: hs
subtitle: How to enable version control for your project and share it to GitHub in multiple steps
thumbnail: ./thumbnail.png
---

The first approach assumed we want to do everything in a single step. Often we’ll want to create a local Git repository for our project well before we want to publish our code publicly on GitHub.

Let’s assume we have a more complex project than Hello World and that we’re still in the process of writing the code. We don’t want to publish our project on GitHub just yet, but we do want to enable source control for it as we want to do small commits locally while we evolve the code. We often want to save our project’s progress each step of the way, for example, once the tests are passing. So, first, we will create a local Git repository for this IntelliJ IDEA project.

We start with a project that is not currently under any source control, so there’s no Git or VCS tool window. To use Git as the version control for an IntelliJ IDEA project, go to the VCS menu and select *Enable Version Control Integration*. 

![Enable Version Control Integration](enable-version-control-integration.png)

IntelliJ IDEA supports multiple version control systems, but for this example we want to choose Git. IntelliJ IDEA creates a Git repository in the root directory of the project. We also now have access to the Git tool window. If we open this, we can see the [Console tab](https://www.jetbrains.com/help/idea/version-control-tool-window-console-tab.html) which shows the Git commands that have been run and their result, or we can switch to the visual [Log tab](https://www.jetbrains.com/help/idea/log-tab.html). Using IntelliJ IDEA’s terminal to list the project’s files, we can also see that we now have a .git folder in the root of our project.

Now we’ve enabled Git, but we haven’t added anything to source control yet. We can see that our files are shown in red, which means as far as Git is concerned, these are new files that are not yet added to Git, so they’re not in source control. Let’s select which files we want to be in source control, and make our first commit.

We can open the commit window using *Ctrl+K* on Windows/Linux or *⌘K* on macOS. The tutorial uses the [Commit Tool Window](https://www.jetbrains.com/help/idea/commit-and-push-changes.html#commit-tool-window), which was added in IntelliJ IDEA 2020.1. If you’re still using the old commit dialog, you can switch to the commit tool window in Preferences -> Version Control -> Commit -> Use non-modal commit interface.

If we open up the unversioned files list in this commit window we can see all the files in our project are listed because none of them have been added to Git yet. We probably don’t want to add everything to Git, there are some directories and files, like build output files, that we don’t need to put under source control. Seeing all the files in a single list like this might not be helpful, so we could opt to group the files, for example by directory or module. 

![Export By Directory](export-by-directory.png)

With this view I can see there are two directories that I don’t want to add to Git, because they’re build directories. I do want to add the gradle wrapper directory, my source, and the files in the root of my project. If I open up the .idea folder, I can see all IntelliJ IDEA’s settings files. Each team will have their own idea of which settings should be saved into source control, if any. IntelliJ IDEA automatically adds a [.gitignore file](https://git-scm.com/docs/gitignore) to this directory with default folders and files to exclude from source control. We could add other files to this .gitignore file if there are other specific IDE settings that we don’t want to include. However, I’m going to add all the other settings files to Git.

![Add Versioned Files](add-versioned-files.png)

Add a description for this commit describing what functionality these changes do. When we commit this, we get a balloon saying this was successful. When we go back to the Git window, the Log tab shows us this commit. We can see the files that were changed in this commit and the commit message. We can hide the Git window by pressing *Alt+9* or *⌘9* again.

https://youtu.be/4ukhZvOmAtk?t=301

So far we’ve been committing all these changes to our local Git repository. If you open the Log tab, we can see this project only has local branches, which means all the code and the commit history is only saved on this local computer. Once you finished setting up your project and are ready to share it and its history publicly on GitHub, go to *Git -> GitHub -> Share Project on GitHub*.

![Share Project on GitHub](share-project-on-github-alternative.png)

We recommend not waiting too long to push your project to GitHub since putting the project on a remote server like GitHub means that the code is safely backed up to another location.

If you’re already logged in to GitHub via IntelliJ IDEA, you don’t need to re-authenticate. We need to give the repository a name, this needs to be a unique repository name for the GitHub account it will live in. We can rename the remote here if we like, or leave it as *origin*. We can optionally add a description to help others understand what this project is. When we press *Enter* or click *Share*, IntelliJ IDEA will create a new repository on GitHub under the account and push this code to that repository. The balloon notification shows when this is complete, so we can click on the link and see the new repository on GitHub in a browser. We can see the code on the project, and the three commits that we made locally are now available on GitHub.

If we go back to IntelliJ IDEA, we can see the Git Log has been updated to show that the remote, origin, is also at this commit. When we expand the Remote branches we can see the master branch under the origin remote. This shows us everything has been successfully pushed to GitHub, and that IntelliJ IDEA is also up to date with all the information from the GitHub remote.

https://youtu.be/4ukhZvOmAtk?t=850