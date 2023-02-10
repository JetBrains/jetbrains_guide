---
type: TutorialStep
date: 2023-02-03
title: Customising your IntelliJ IDEA Environment
technologies: []
topics: []
author: hs
subtitle: Use IntelliJ IDEA to create a new package and class.
thumbnail: ./thumbnail.png
---

IntelliJ IDEA is your IDE and, thankfully, we're all different! You probably want to use the same code style as your team but there's a lot of customisation that you can do to ensure your IDE environment is exactly how you like it. We will take a look at some of them in this section.

## Zen Mode and Hiding Tool Windows

<iframe width="560" height="315" src="https://www.youtube.com/embed/xfiE76fpgAo" >
</iframe>

It's not surprise that we often advocate for a sparse coding environment, after all the code is what we usually want to see so by hiding much of the IDE we can allow ourselves the space to focus on that.

A great way to immediately hide the peripheries in the IDE and focus on your code is with Hide Tool Windows (**⌘⇧F12** | **Ctrl+Shift+F12**). You can use the same shortcut to bring them back again.

If you prefer an even sparser interface then Zen mode might be for you. You can access it from the menu with **View > Appearance > Enter Zen Mode**. It's worth noting in Zen Mode that you can still bring back your line numbers and gutter icons by right-clicking in the gutter area and selecting them from the pop-up menu.

## Themes and Plugins

<iframe width="560" height="315" src="https://www.youtube.com/embed/iAo456wgRCo" >
</iframe>

Themes are a very personal choice and IntelliJ IDEA supports both the Light and Dark theme with the new UI. More theme support is coming as well so you can tweak the theme to be suit your eyes. You can also choose to sync your theme to your operating system so if you have your computer go to dark mode when the sun goes down, your IDE will follow suit. You can access all the themes in your Preferences/Settings dialog (**⌘,** | **Ctrl+Alt+S**) and then search for "themes".

The Preferences/Settings dialog (**⌘,** | **Ctrl+Alt+S**) is quite busy due to the immense number of things you can do and configure in IntelliJ IDEA. However, if you're new to the IDE, don't be intimidated. You can search this dialog just by typing in what you want, for example "plugins".

If you are searching for new plugins for your project, make sure you're on the *Marketplace* tab, rather than the *Installed* tab otherwise you may not find what you're looking for!

## Shortcuts and Abbreviations

<iframe width="560" height="315" src="https://www.youtube.com/embed/Fk79fAS7Phk" >
</iframe>

Shortcuts and abbreviations are a very personal choice that is often influenced by IDEs you've used before and by common functionality that you use a lot in a specific project.

IntelliJ IDEA has a very rich set of keyboard shortcuts that you can take advantage of, but if you want to set your own up you can do that in the Preferences/Settings dialog (**⌘,** | **Ctrl+Alt+S**) and then search for "keymap". Find the action you want to assign a shortcut to from the list (again you can type directly into the list to filter it), then right-click on the shortcut and select **Add Keyboard Shortcut**. Now type in the shortcut you want. IntelliJ IDEA will notify you if it clashes with an existing keyboard shortcut. Once you press **OK** and return to your code, you can invoke your new keyboard shortcut.

The steps for adding an abbreviation are somewhat similar to above, just select **Add Abbreviation** instead. Abbreviations are helpful when you want to jump to an action quickly without a shortcut, such as setting _mvn_ for the Maven tool window so it always appears first in the Search Everywhere dialog when you type in _mvn_. 

## Notifications Tool Window

<iframe width="560" height="315" src="https://www.youtube.com/embed/kg6tnhejqrI" >
</iframe>

IntelliJ IDEA is very communicative so it's worth training yourself to regularly check the Status Bar on the bottom of your IDE. This is where IntelliJ IDEA will notify you of information relating to your project including warnings, errors and when the IDE needs some action from you. You might also get a pop-up notification in some instances. You can access your Notifications Tool Window at any time by clicking on the little bell icon on the bottom-right of your screen in the new user interface or by using Recent Files (**⌘E** | **Ctrl+E**) and then typing in "notifications".

