---
type: TutorialStep
date: 2023-03-30
title: Customizing the UI
technologies: []
topics: []
author: hs
subtitle: TO BE ADDED
thumbnail: thumbnail.png
longVideo:
  poster: poster_long.png
  url: https://youtu.be/N2uo4RbGycM
---

In the previous video, we took a tour of the PyCharm UI, in all its IDE glory.

But maybe you don’t want the big IDE layout. Minimal and personalized is the new sexy.

Did you know you can strip down PyCharm’s IDE UI? Add a new theme and customize the keymap? Even...install plugins?

Well...let’s take a look.

## Themes
The very first thing you may want to do is change the UI theme.
Go to Preferences or Settings, depending on your OS, and in the Appearances section, you can see that PyCharm comes with a few predefined themes.

But there’s also a variety of custom ones to choose from. Let’s look in the Plugins section and search the marketplace for “theme”.
Let’s install one of the most popular themes,”Dark Purple Theme”.
And there you go! PyCharm has now installed and switched to the community plugin for the Dark Purple theme.

What about if you want to quickly check what the other themes you’ve installed look like? You can go back to Preferences/Settings and change the current theme in Appearance & Behavior | Appearance or use the Switch popup! Press Ctrl+` , select Theme, and move through all the available themes in one go!

That’s a look at theming, everybody’s favorite “make yourself at home” customization. But there’s more, as we’ll see next.

## Layout
We just looked at themes to change the colors and whatnot of the IDE.

But what if we don’t want to look like an IDE at all? Let’s see how to get a lean, mean UI...while keeping the IDE.
We just looked at the Switch popup for changing themes. This isn’t the only thing the Switch popup is good for.

For example, if you want to make your workspace less cluttered, you can use this popup to switch to Zen mode, which can be very helpful whenever you need to remove distractions and focus on your code.
What else? You can change the position of tool windows.

This lets you move them around to other parts of the IDE, using your mouse.
You can even make a tool window float on top of the editor or detach it completely so that you can view it independently on a different monitor. When done, you can re-dock it.

Another thing you can do to reduce clutter is hiding some UI elements. First, you can customize the status bar by right-clicking it and removing any widgets you’re not using.

If you click the quick access button located on the status bar, you can get rid of the tool window bar.
This will make a little more space in the editor. With the tool window bar hidden, you can still access all the tool windows by hovering over the quick access icon and choosing what you need or by using the dedicated shortcut for it, for example, Cmd+1 for the Project tool window.

It’s a toggle, so repeat to close it.

The fastest way to toggle the visibility of UI elements is the Find Action command, Cmd/Ctrl+Shift+A. Let’s say you’re not going to use breadcrumbs and you don’t want to see them. You can use Find Action, then look for “breadcrumbs,” and then turn them off from there.

That’s a quick look at customizing the “look” part of look and feel. It’s easy to turn off parts of the UI and turn them back on. Let’s now turn to the “feel” part of look and feel.

## Keymap
As you make yourself at home in PyCharm, you’ll want to keep your hands on the keyboard and use the mouse less.

Let’s look at using and customizing the keymaps.
We’ll start in Settings (or Preferences).

In the Keymap section, you can choose the keymap you want to use, reassign existing shortcuts, and create custom shortcuts for the actions that don’t have anything associated with them.

Let’s say you want to know what shortcut is assigned to the Event Log action, which is uder Tool Windows.

This action doesn’t have a key binding…

..so we’re going to assign a custom one to it. Let’s make it 1+2.

Now, whenever we press 1 then 2, we’ll open the event log. Pressing the same will close it.

What if you don’t know what is the shortcut for an action such as toggling the project tool window?

Back in Keymap settings, in the input box, type in part of the action name. You’ll then see a listing of actions and the keybinding currently in use.

One last customization for keymaps...you can change to a different bundled keymap.

You can even install plugins for custom keymaps.

Keeping your hands on the keyboard means customizing it to work the way you want. Now that we’ve shown that, let’s close out with other customization options.

## Other Customizations
Apart from theming and keymaps, there are lots of other things you may want to customize.
If you don’t know where a specific setting you want to change is located, just look for it! Let’s say we want to change the default font.

Now we can only see the applicable sections with the word font in them. Looks like we need the one called Font.
I’m going to use Fira Code and enable ligatures for it.

See, the editor has now changed even more.

The same applies to all of the other settings.

Let’s say we want to change some code style settings for Python, why not?

We can look for code style, then go to the Python section and make changes there. Let’s change, for example, the ‘Hard wrapping’ setting to wrap our lines at 79 characters to follow the PEP-8 convention.

The Settings/Preferences window has...as you can see, many options. All let you make the IDE look as much -- or as little -- as you’d like.

## Conclusion
Alright, in this video we went through some UI customization that will help you get more comfortable with PyCharm. Of course, PyCharm is an IDE and has multiple configurable settings. We’ve covered just the basics.

I encourage you to play around and explore ‘Appearance and behavior’, ‘Editor settings’, ‘Plugins’, as well as other preferences that we haven’t talked about yet. If you need some help, the link to our documentation is in the description of this video.

In the next video, we are going to see how to configure local and remote interpreters in PyCharm.
See you there!

