---
type: TutorialStep
date: 2021-10-13
title: Introduction
technologies: [ ]
topics: [ ]
author: hs
subtitle: Two ways you can share your local repository with GitHub
thumbnail: ./thumbnail.png
---

There are a few ways to use IntelliJ IDEA to publish code that we’ve written in IntelliJ IDEA on GitHub. In this tutorial, we will go over two approaches.

The first is the quickest where you create your local and remote repository in one step. The second approach is where you first create your local repository and then, in a separate step, you share your project to GitHub.

Let’s assume you have created an IntelliJ IDEA project containing the code you want to share on GitHub. This tutorial assumes that your project is not currently using Git version control. You can verify this by trying to load your Git log window with **⌘9** (macOS), or **Alt+9** (Windows/Linux). This won't work if you have not created a local repository with Git.

You can also verify the status of your project version control by looking for a `.git` folder in the project. If you don't have one, you have not yet configured Git for your project. 