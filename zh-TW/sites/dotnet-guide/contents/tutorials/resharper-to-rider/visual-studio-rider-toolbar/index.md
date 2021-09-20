---
type: TutorialStep
date: 2021-01-29
title: Comparing Rider's Toolbar with Visual Studio
technologies:
  - .net
  - csharp
products:
  - tRANSLATED Rider
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

- Build Solution
- Solution Configurations dropdown
- Run Configurations dropdown
- Run (Play) button
- Debug (Bug) button
- Stop button
- Profiling
- Attach To Process
- 隨處搜索
- IDE and Project Settings

Developers moving from Visual Studio might want the **Back** and **Forwards** navigation buttons. Rider hides those actions by default but can we can add them back by going to `View \| Appearance \| Toolbar`, after which we'll get an additional set of actions:

- Open
- Save All
- Reload From Disk
- Navigation buttons

![JetBrains Rider Toolbar with additional navigation items](./rider-with-toolbar-extra.png)

As in Visual Studio, the toolbar is highly customizable. We can right-click anywhere on the toolbar and click the resulting `Customize Menus and Toolbars...` option. A new dialog should appear with Rider's menu and toolbar locations ready to be customized for our unique workflow style.

![JetBrains Rider Toolbar With Customizations](./rider-toolbar-customizations.png)

While the UI is fully customizable, Rider's development team has gone through the meticulous process of making all functionality accessible via shortcut keys. The **Search Everywhere** feature is beneficial, as it is only a <kbd>Shift+Shift</kbd> away from helping developers find the action they need.

Moving from Visual Studio to Rider doesn't have to be a jarring experience. The Rider toolbar indeed has its difference, but folks using Rider tend to find the UI changes help improve their daily workflows. In combination with Rider's configuration options and advanced actions, developers can make Rider fit their needs no matter the development scenario. 
