---
type: tip
date: 2019-04-17
title: Run npm Scripts from package.json
technologies: []
topics: [javascript, web]
author: pwe
subtitle: Browse your package.json scripts and run in a dedicated tool window. 
seealso:
  - title: Running and debugging scripts from the npm tool window
    href: 'https://www.jetbrains.com/help/pycharm/installing-and-removing-external-software-using-node-package-manager.html#ws_npm_run_debug_scripts_from_npm_tool_window'
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
  poster: ./poster_short.png
  url: https://www.youtube.com/watch?v=FiADQjW532s
longVideo:
  poster: ./poster_long.png
  url: https://www.youtube.com/watch?v=l4LRzsOIrcE
leadin: |
    *Use npm scripts, visually.*    

    Got a project with `npm` run scripts in `package.json`? Let the 
    IDE help with a tool window to browse them and a dedicated tool 
    window to run them.

---

Modern web development means NodeJS tools which mean a `package.json` file. 
This file sometimes has helper scripts under the `scripts` key. Running 
these perform various project operations such as `build`.

PyCharm Professional makes it easy to browse and run these. There are 
several different paths to opening the `npm` tool window:

- Right-click on `package.json` and choose `Show npm scripts`

- Click the `npm` tool window on left

- Cmd-E npm
    
*Note: If you leave the tool window open, resize it to take less vertical space.*

Now that you can see the `npm` scripts, double-click on one to run that 
npm script in a run window at the bottom. Behind the scenes, this creates 
a temporary run configuration of type `npm`.

Sometimes your `package.json` changes and there's a new/changed/deleted `npm` 
script. The `npm` tool window has a `Reload scripts` button in its mini-toolbar.

One surprising addition: the names of your `npm` scripts are available as 
findable actions. If you have a `build` script and do `Find Action`, speed 
searching for `run build` will let you immediately invoke it. 