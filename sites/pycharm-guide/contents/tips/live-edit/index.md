---
type: tip
date: 2018-11-07
title: LiveEdit HTML and CSS
technologies: []
topics: [editing]
author: pwe
subtitle: With the LiveEdit plugin, open HTML and CSS in Chrome, over HTTP, and see updates as you save.
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
  poster: ./poster_short.png
  url: https://www.youtube.com/watch?v=rGms9nsfdTM
longVideo:
  poster: ./poster_long.png
  url: https://www.youtube.com/watch?v=EYwXD6vAACg
leadin: |
  *Tired of starting a server a reloading your browser to see file changes?*

  Install the LiveEdit plugin and easily view HTML and CSS, including changes.

  The LiveEdit plugin for PyCharm Professional (not bundled) is easy 
  to install and gives a great editing experience for HTML and CSS.
---

PyCharm Professional bundles WebStorm and, with the optional LiveEdit plugin,
makes it easy to see HTML and CSS updates as you save them.

One you install the LiveEdit plugin, go to an HTML file and create a Debug
configuration. You can do this with a right-click. This opens a private
Chrome session with the flag to turn on Chrome's DevTools protocol. This lets
PyCharm Professional "remote control" the browser, using an actual HTTP
URL.

As you type and save HTML and CSS, you'll see the changes in the browser.

In previous versions, PyCharm needed a special extension in Chrome to allow
this remote-control feature. That's no longer true.
