---
type: TutorialStep
date: 2023-03-30
title: Understanding the UI
technologies: []
topics: []
author: hs
subtitle: TO BE ADDED
thumbnail: thumbnail.png
longVideo:
  poster: poster_long.png
  url: https://youtu.be/QInZSbPbnnY
---

In the previous video, we looked at starting a project. Which means we had PyCharm open and looked at the IDE.

Welp, there’s a lot on the screen. How is this UI laid out? What do each of the parts do?

Well...let’s take a look.

## Editor
An IDE for Python coding means writing code, so let’s start with the editor.

When a file is open, it appears in a tab in the editor. Double-click another file, and another tab opens.
As you can imagine you can close and organize them individually, in many ways.

Inside the editor, on the right-hand side of it, you can see the inspection widget,
...which you can use to view all the problems in the current file and navigate between them.

You can also see errors and warnings on the scrollbar.

Some files might have no problems.

The inspections widget will show a green checkmark in the top-right corner of the editor.

On the left-hand side of the editor, you can find the gutter.

This shows the line numbers and lets you perform several actions.

For example, you can add or remove breakpoints by clicking the gutter.


Click the link below and watch the video about debugging from this getting started series.

By right-clicking anywhere in the editor pane, you can invoke the context menu, showing the list of actions available in the current context. Simply select the action you want to use.

For some actions, you’ll get popups, like this one, that will let you click through to perform an action.
At the bottom of the editor pane, you can also see breadcrumbs.

This shows the names of the classes, variables, functions, methods, and tags in the file that is currently open. You can use these to navigate quickly through the source code.

That’s a quick look at the editor, where you’ll spend most of your time. Let’s look at other parts of the IDE interface.

## Tool Windows
The IDE wants to help you with your coding. But it also wants to integrate your other development workflows.
For this, the IDE provides tool windows as another major part of the UI. All of the tool windows serve a specific purpose. Let’s see some of them.

First, a tool window that is open by default: the Project tool window shows the file layout of your project.
The Terminal tool window lets you work with the built-in terminal. Note that the virtual environment is already activated.

The Python Packages tool window lets you manage packages from Pypi and other repositories within the context of your virtual environment.

The Python Console tool window is an interactive Python console that lets you execute Python commands and scripts line by line, in the context of your project interpreter. It’s good for exploration.
As you see, there are also other tool windows. Feel free to explore them now, but we will learn more about some of them as we go.

At the very bottom of the IDE, you can find the status bar.

It’s a small yet very handy piece of the UI. First, the quick access button. It lets you quickly switch between the tool windows,

...and can also be used to hide and unhide the tool window bar.

The right side of the status bar contains several useful status bar widgets.

Here you can see IDE and project setting information…

….version control information…

... and your project interpreter setup.

We won’t cover how to configure your Python interpreter just yet. Jump to the  ‘Configuring a local or remote interpreter in PyCharm’ video in this series for a deeper explanation about interpreters.

At the top, you can also find the navigation bar.

This can serve as a quick alternative to the Project tool window, for moving around directories and performing file operations.

You can also use the buttons that are to the right of the navigation bar…
...to quickly perform some common actions, like running or debugging an app, updating a project or making a commit, running a search, and the like.

Quick note: this toolbar might look different if your project isn’t under version control.

This part of the UI also gives you access to Code With Me, PyCharm’s built-in functionality for collaborative development.

From here you can enable access for guests and start collaborative sessions. Click the link in the description to learn more.

Finally, right above the navigation bar, you’ll find the main menu.

It has various actions and controls, including the Preferences or Settings, and Help sections.

## Conclusion
Alright, in this video we went through the basics of PyCharm’s UI elements. I hope it has made it easier for you to start using and exploring PyCharm. In the next video, we are going to see how to customize the UI and some settings to suit your personal or team needs.
