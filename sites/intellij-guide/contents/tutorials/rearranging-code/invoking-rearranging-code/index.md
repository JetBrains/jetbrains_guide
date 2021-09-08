---
type: TutorialStep
date: 2021-09-06
title: When and How to Invoke Rearranging Code
technologies: []
topics: []
author: hs
subtitle: How you can invoke rearranging code and some best practices to consider 
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/L_h8NJdYyj4
---

## When to Invoke Rearrange Code
Before we talk about _how_ to invoke rearrange code, it's worth mentioning when to invoke it. There are a couple of approaches here. Of course, if you're working on a brand-new code base it's very simple to go with invoking it [when you commit](#on-commit) your code because it's all net-new code. However, more often and more realistically, you'll be working on a code base where the standards that you, and your team, have agreed on have not been universally applied in the past.

Regardless of how you proceed, we strongly recommend that you only commit code that has been rearranged, not code that has been rearranged and changed. That is to say - commits should be _rearrange code_, or _change code_, not both. 

You might want to _scorch the earth_ and perform a series of commits on your entire code base to rearrange it as one team task and not make any other changes until the entire code base has been rearranged according to the rules you've agreed on. 

Alternatively, you might want to take a more gradual approach and just rearrange classes that you are making changes to. However, a word of warning here, we strongly recommend that you rearrange the class first in one separate commit and then go ahead and make your changes as stated earlier - rearrange code, or changes, not both!     

## How to Invoke Rearranging Code
There are a few ways that you can invoke rearrange code. Let's take a look at each one in turn.

### Manually at a Class Level
You can invoke [rearrange code](https://www.jetbrains.com/help/idea/reformat-and-rearrange-code.html#arrange_code) manually on a class. This is a great way to get a feel for how your class(es) will look when you do rearrange code on a larger scale. If you're just learning about the settings and how best to apply them to your code base, then you can start here to get comfortable. However, it doesn't scale. so it's best for playing around only!

To invoke Rearrange Code in a class, use **⌘⇧A** (macOS), or **Ctrl+Shift+A** (Windows/Linux), to bring up the Find Actions dialog and then type in _Rearrange Code_:

![Rearrange Code](rearrange-code.png)

Press **Enter** on **Rearrange Code** option to apply the settings to your class. This will give you a feel for how the [Rearrange Code Settings](../rearranging-code-settings) will apply to your project on a larger scale. 

### Rearranging Only Code You Have Changed
Often you don’t want to rearrange the whole file that you’re working on, particularly if this is a code base with inconsistent code arrangement. You don't want to commit a lot of white space changes as well as the feature or bug fix that you've done. If you are working on a file with some inconsistently arranged code, but you’ve only changed a small part of it, using **Rearrange Code** might change parts of the file you haven't touched. In this instance, you would ideally like to highlight the code you’ve changed and just rearrange that, but that won’t work when your changes are scattered throughout the file.

Instead, you can use **⌥⇧⌘L** (macOS), or **Ctrl+Alt+Shift+L** (Windows/Linux) to bring up the reformatting options dialog:

![Rearrange Code that you've changed](rearrange-code-reformat-dialog.png)

In this dialog, select **Only changes uncommitted to VCS** and select the **Rearrange Code** check box. When you press **Run**, IntelliJ IDEA will rearrange the lines in the file that you've changed and nothing else.

### Rearrange Code Per Commit
You can get IntelliJ IDEA to rearrange your code before you commit it which may be a half-way house for your team if you have a mix of new and old code. 

You can rearrange your code in the classes you are about to commit with the cog in the Commit Tool Window which is invoked with **⌘0** (macOS), or **Ctrl+0** (Windows/Linux):

![Cog next to Amend in Commit Tool Window](amend-cog.png)

When you click the cog you can select the **Rearrange** Code check box:

![Rearrange Code Option](rearrange-code-class-level.png)

This will rearrange your code in those classes when you commit them according to your settings you've defined. 

### Before Commit at a Project Level
If you always want to rearrange code at a project level before you commit it, you can use **⌘,** (macOS), **Ctrl+Alt+S** (Windows/Linux) to display the Preferences/Settings and then search for _on commit_. The option you want is **Version Control > Commit** and then the **Before Commit** panel. 

Select the **Rearrange Code** check box and press **OK** to always rearrange your files prior to commit. This will apply to all your languages. 

![Rearrange Code Before Commit](rerrange-code-before-commit.png)

## A Worked Example for Rearrange Code
So now you know _when_ and _how_ to invoke rearrange code. Let's take a look at a worked example in the next step of this tutorial.