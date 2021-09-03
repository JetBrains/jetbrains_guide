---
type: TutorialStep
date: 2020-12-01
title: Navigation in web applications
technologies:
  - asp.net
  - javascript
topics:
  - web
  - ide
  - navigation
products:
  - rider
author: pwe
subtitle: How can you find what you want? Let's look at navigating around a code base.
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster.png
  url: https://youtu.be/qd7OboZCW6E
---

Rider provides loads of ways to navigate efficiently across your codebase, and the IDE itself. Let’s take a look at some of them.

Use the [sample code (ZIP file with 3 projects)](https://raw.githubusercontent.com/JetBrains/jetbrains_guide/master/sites/dotnet-guide/demos/tutorials/web-fundamentals/rider-web-fundamentals.zip) that was created using `npx create-react-app`, and open it in Rider.

I want to find the `App.js` file in it. I could open the **Solution** tool window and look for `App.js`, but if I had a large codebase, it would take longer than I want it to. Instead, I’m going to press <kbd>Shift+Shift</kbd> and look for that file using **Search Everywhere**.

**Search Everywhere** lets us find any file, action, class, or symbol, and shows all the matches in one place. If you want to see only files or actions in the search results, you can press <kbd>Tab</kbd> and switch to the tab that you need.

Now that I’ve opened the file, what else can I do with it? First, I can find a specific piece of information in it and jump straight to it using <kbd>Cmd/Ctrl+F</kbd>.

For a larger-scale search, targeted in part of my project such as the `src` directory, I can use the **Find in Path** functionality. I can look in the selected subdirectory, entire project, module, or in a specific scope. This **Find in Path** menu has many useful ways to narrow down your search: case sensitive, file name filters, regular expressions, and more.

At the bottom, you can have a quick peek into files without opening them in the editor.

Let’s say I want to check where a symbol was declared or look for its usages. I can focus on that symbol and click <kbd>Cmd/Ctrl+B</kbd> and voila! The file opens with the cursor on the definition of the symbol.

Now, what if I want to go back to a file I recently opened? There’s the **Recent Files** popup that can help with that (<kbd>Cmd/Ctrl+E</kbd>). On its right, you can see the list of recently opened files that you can quickly jump to. On the left, there’s a list of tool windows. Let’s use the speed search to narrow the list of choices and explore one more helpful navigation feature.

The **Structure** tool window can be very handy for examining a file quickly. It provides an overview of its structure and lets you jump to a specific item by simply typing its name.

### See Also

- [Sample code (ZIP file with 3 projects)](https://raw.githubusercontent.com/JetBrains/jetbrains_guide/master/sites/dotnet-guide/demos/tutorials/web-fundamentals/rider-web-fundamentals.zip) used throughout this tutorial.
- [Rider - Navigate and Search](https://www.jetbrains.com/help/rider/Navigation_and_Search__Index.html)
- [Rider Essentials tutorial](https://www.jetbrains.com/dotnet/guide/tutorials/rider-essentials/)
- [WebStorm Guide - Navigation](https://www.jetbrains.com/webstorm/guide/topics/navigation/)