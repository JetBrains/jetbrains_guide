---
type: TutorialStep
date: 2021-01-29
title: Comparing Rider's Toolbar with Visual Studio
technologies:
  - .net
  - csharp
products:
  - rider
  - resharper
topics:
  - ide
  - data
author: khalidabuhakmeh
subtitle: Learn how Rider's toolbar UI compares with the toolbar found in Visual Studio.
thumbnail: ./thumbnail.png
---

Developers with a mouse-focused workflow will likely be very familiar with Visual Studio's toolbar. Here are the everyday actions found in Visual Studio's toolbar, listed from left to right:

![Visual Studio default toolbar](./visual-studio-toolbar.png)

- Navigation buttons
- New Project
- Open File
- Undo and Redo Changes
- Solution Configurations dropdown
- Solution Platforms dropdown
- Debug Button
- Find Files
- Start Window

Other action elements will appear when the context permits those actions to be performed. For example, when the editor is in focus, we can choose to comment or uncomment the current line by clicking the appropriate toolbar button.

When looking at Rider's toolbar, we'll notice it is a bit more sparse by default. On the left-hand side, we have breadcrumb navigation denoting the path from our solution's root to the current file in focus. To the right of the breadcrumbs, we immediately see the toolbar with the following default actions:

![JetBrains Rider's default toolbar](./rider-default-toolbar.png)

- Version Control Widget
- Search Everywhere button
- Build Solution button
- Solution Configurations
- Run Widget (Run, Debug, Attach to Process)
- IDE and Project Settings

The **Run Widget** is of particular interest as you'll be using it to run and debug applications. It's quite intuitive to use and you'll be reading more about it in the debugger section of this guide.

While the UI is fully customizable, Rider's development team has gone through the meticulous process of making all functionality accessible via shortcut keys. The **Search Everywhere** feature is beneficial, as it is only a <kbd>Shift+Shift</kbd> away from helping developers find the action they need.

Moving from Visual Studio to Rider doesn't have to be a jarring experience. The Rider toolbar indeed has its difference, but folks using Rider tend to find the UI changes help improve their daily workflows. In combination with Rider's configuration options and advanced actions, developers can make Rider fit their needs no matter the development scenario. 
