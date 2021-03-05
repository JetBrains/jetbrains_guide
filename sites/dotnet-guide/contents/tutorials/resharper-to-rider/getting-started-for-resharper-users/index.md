---
type: TutorialStep
date: 2021-03-29
title: Getting Started
technologies: [.net,csharp]
products: [rider,resharper]
topics: [ide]
author: khalidabuhakmeh
subtitle: Learn to create and run your first solution in Rider
thumbnail: ./thumbnail.png
---

This guide is for folks looking to explore the possibility of adopting Rider as their primary development environment.

In this first step on your journey, migrating from Visual Studio to Rider, we'll walk through creating a new Console Application solution and running it in Rider. We'll explain elements along the way and compare them to what you may be familiar with as a Visual Studio user.

All developers can benefit from reading this quick start guide, and if you have used ReSharper before, you'll be at home quickly; as you'll see, there are many similarities. This guide covers common topics from a high-level perspective. For detailed information about any particular subject, we suggest going to [the official JetBrains documentation](https://www.jetbrains.com/help/rider/Introduction.html) for more in-depth details.

Let's get started!

## Welcome Screens

![Visual Studio and JetBrains Rider welcome screens](./1-welcome-screens.png)

The welcome screen is the first thing all Rider users will see. Many of the same functions are available that a developer might see on the Visual Studio welcome screen, including:

- Starting a new project or solution
- Opening an existing solution
- Cloning a current solution from a source control system: GitHub, BitBucket, or GitLab.
- New Rider users can explore **Tutorials** from the welcome screen. Tutorials cover scenarios from **Editor Essentials**, **Run Configurations**, and **Debugging Basics**.

## New Solutions

![Visual Studio and JetBrains Rider new solution screens](./2-new-solutions.png)

Starting a new solution can be an exciting time for developers. Rider scans the development environment for available templates. Templates included items shipped with the .NET SDK. Additionally, Rider will display any community templates or display custom templates in the **New Solution** dialog. Note, for .NET Core and later SDKs, the templates displayed on the left-hand side will only be relevant to the SDK version picked by the user.

Developers can choose where Rider will create a new solution, along with several other configuration options:
- Source Control options
- .NET SDK version
- .NET programming language (C# or F#)
- Enabling Docker support
- Other relevant options for the template

Let's start by creating a **"Hello, World!" Console Application**.

## Main UI Elements

![The Rider IDE UI](./3-hello-rider.png)

Essential elements developers will want to focus on in the Rider UI include the **Solution Explorer**, the **Editor** tab, and the **Main Toolbar**.

![Solution explorer on the left of Rider IDE UI](./3a-hello-rider-solution-explorer.png)

By default, we find the **Solution Explorer** on the left of the Rider instance. Here we get a familiar view of our solution, projects, and dependencies. Visual Studio users will find the navigation experience friendly.

![code editor of Rider IDE UI](./3b-hello-rider-editor.png)

The editor tab is where we can edit our code files. ReSharper users will find the experience of editing code very familiar because the ReSharper engine powers Rider's editing experience.

> The name **Rider** comes from a mash-up of the words **R**eSharper and **IDE**.

![Main toolbar of Rider IDE UI](./3c-hello-rider-main-toolbar.png)

Finally, the toolbar is where things take a different approach than Visual Studio. The Rider toolbar separates the concepts of **Build**, **Run**, and **Debug**, allowing the developer to decide what action they'd prefer to take. The hammer icon will build the current solution. The green rectangle, or play button, will build and run the solution. Finally, the green bug will build, run, and attach the necessary debugger.

Let's run our first .NET solution within Rider. We'll start by hitting the **Run** button (a green _play_ icon). Rider will compile and execute our console application, with the IDE displaying execution results at the bottom within a **Run** window. Run windows also have this **Run** button, allowing us to rerun the same run configuration. We'll discuss **Run** windows in a later step, but Rider isn't limited to running one project at a time. There can be multiple **Run** windows for each service running within our solution.

![Running a solution within JetBrains Rider using play button](./4-hit-play.png)

**Congratulations!** You've successfully navigated through your initial Rider experience. While Rider has moved elements of the development experience around, they're straightforward to find. Like most JetBrains tools, we designed Rider to allow you to make the experience your own. We encourage you to explore, drag, right-click, and generally play around in the IDE.

In the next step, we'll explore Rider's debugging experience, as it's slightly different from what you may expect coming from Visual Studio.
