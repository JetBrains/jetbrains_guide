---
type: tip
date: 2019-04-15
title: 'Run From Keyboard'
technologies: []
topics: [editing]
author: pwe
subtitle: Use the keyboard to select and run a run configuration.
seealso:
  - title: Running
    href: 'https://www.jetbrains.com/help/pycharm/running-code.html'
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
  poster: ./poster_short.png
  url: https://www.youtube.com/watch?v=dGOuR1RXlIk
longVideo:
  poster: ./poster_long.png
  url: https://www.youtube.com/watch?v=yeU1npO7L20
leadin: |
    *Run one of your configurations, without the keyboard.*    

    Need to run a recent run configuration, and don't want to use the 
    mouse? Use this action and its keybinding.

---

These tips have a recurring theme: use your keyboard, not your mouse. Running 
your code should be the same way.

Use the `Run` action (`Shift-Alt-F10` Win/Linux, `Ctrl-Alt-R` macOS) to get 
a popup listing your defined run configurations, both permanent and temporary. 
You can then use the arrow keys or speed-type to highlight the one you want to 
run, pressing `Enter` to select and execute it.

"Select" is used intentionally: one you select this run configuration, it is 
the active one, and the simpler `Run <your configuration>` action 
(`Shift-Alt-F10` Win/Linux, `Ctrl-R` macOS) will immediately run it.

You can do more from the keyboard than just run it. Each entry in the popup has 
a submenu which you can access by pressing the right arrow. This lets you choose 
how you want to run it (Run, Debug, Coverage, Profile, Run under the concurrency 
diagram, etc.) as well as edit that configuration or delete it.

Debugging is popular option, so it gets its own popup sequence. Use the 
`Debug` action (`F9` Win/Linux, `Alt-Cmd-R` macOS) to give the popup, but leading 
directly to debugging (to skip the submenu step.) Once selected, you can re-run 
that debug configuration with the `Debug <your configuration>` action 
(`Shift-F9` Win/Linux, `Ctrl-D` macOS.)

Again, for both the run popup and debug popup, don't forget to speed type to 
select, instead of the arrow keys.

There are, obviously, many other ways to run your code (menus, right click, 
gutter icons, tool window buttons.) For keyboard-centric folks, give this a try.
