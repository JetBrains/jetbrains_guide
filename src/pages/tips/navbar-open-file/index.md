---
type: 'tip'
date: 2019-01-22
title: 'Open File With Navigation Bar'
technologies: []
topics: ['navigation', 'navigationbar']
author: 'pauleveritt'
subtitle: 'Open a file somewhere in the project tree using the keyboard and Navigation Bar.'
series:
  title: 'Using the Navigation Bar'
  position: 3
  total: 6
  previous:
    label: 'Navigate Files With Navigation Bar'
    slug: '/tips/navbar-navigate-files/'
  next:  
    label: 'Create New File With Navigation Bar'
    slug: '/tips/navbar-create-file/'
  all: 
    - label: 'Activate Navigation Bar'
      slug: '/tips/navbar-activate/'
    - label: 'Navigate Files With Navigation Bar'
      slug: '/tips/navbar-navigate-files/'
    - label: 'Open File With Navigation Bar'
      slug: '/tips/navbar-open-file/'
    - label: 'Create New File With Navigation Bar'
      slug: '/tips/navbar-create-file/'
    - label: 'Narrow Navigation Bar With Speed Search'
      slug: '/tips/navbar-speed-search/'
    - label: 'Find in Path With Navigation Bar'
      slug: '/tips/navbar-find-in-path/'
seealso:
  - title: 'Navigation bar'
    href: 'https://www.jetbrains.com/help/pycharm/part-4-using-the-navigation-bar.html'
  - title: 'Navigating Tips and Tricks'
    href: 'https://www.jetbrains.com/help/pycharm/navigation-bar.html'
thumbnail: './thumbnail.png'
shortVideo:
  poster: './poster_short.png'
  url: 'https://www.youtube.com/watch?v=G1K1hIW4msM'
longVideo:
  poster: './poster_long.png'
  url: 'https://www.youtube.com/watch?v=46KIWSORWAE'
leadin: |
    *Need a fast, no-distraction way to open a file in your project tree?*

    When you need to browse to a directory to find and open file, the 
    Navigation Bar is your best bet. Keyboard-first, use the cursor 
    keys to select, then press enter.

---

If you've closed the Project Tool window and hidden the Navigation 
Bar, you need a way to open file that's keyboard centric and doesn't 
disrupt your flow. Usually, the fastest way to open a file is the 
various search options (`Recent Files`, `Navigate to File`, etc.) 
But other times, you want to browse instead of search.

As shown previously, use the Navigation Bar to select a file:

- Activate the Navigation Bar with 
`Navigate -> Jump to Navigation Bar` (`Alt-Home` Win/Linux, 
`Cmd-Up` macOS)

- Use the cursor keys to get to the target directory

- Speed search to select the file

Once selected in the Navigation Bar, press `Enter` and the IDE will 
open your file. Clicking with the mouse also works.

As a note, this is a very common pattern for jumping to a file in 
the current directory. In this case, you don't have to press 
`Left` to go up to the directory. Even though the  current file selected, 
you can still press `Down` or better still, just start speed searching.

Opening the file isn't the only operation you can do on a selected 
Navigation Bar item. You can `Refactor This`, delete...basically, 
anything you could do when you click on the file in the Project Tool. 
We'll see two examples in subsequent tips.
