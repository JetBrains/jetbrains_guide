---
date: 2020-12-03
title: 'Check context.CancelFunc usage'
technologies: [go]
topics: []
author: dlsniper
subtitle: 'Ensure that the cancel function is always called'
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
  poster: ./thumbnail.png
  url: https://www.youtube.com/watch?v=tfM9kzrR2Lc&list=PLQ176FUIyIUZrbrlz4AY1V8VzBJKZyVlW&index=18
leadin: |
    **How to use:**

    In code that uses a _context.WithCancel_ call, check for any warning messages. If one shows up, you can use the _Show Context Action_ menu, _Alt-Enter on Windows/Linux_ or _⌥ + Enter on macOS_, and use either the _Navigate to 'cancel' function_ or _Navigate to the end of the problematic execution path_ options from it. By using these feature, you can then gain the insight into what the IDE sees as a problematic execution path, and place the correct call to the cancel function.

    <span class="tag is-rounded">New in 2020.3</span>
---
