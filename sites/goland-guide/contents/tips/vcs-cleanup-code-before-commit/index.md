---
date: 2021-07-06
title: 'Cleanup code before commit'
technologies: [platform]
topics: [vcs]
author: dlsniper
subtitle: 'Remove all the redundant parenthesis and other unneeded code before commit'
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
  poster: ./thumbnail.png
  url: https://www.youtube.com/watch?v=cXzphrn-WiI&list=PLM-t1Z4tbFflp57RnfgjXOdpOg6fLhs_q&index=14
leadin: |
  Sometimes an extra pair of parenthesis make their way into our code. Since it's not needed to improve the clarity or help the code function in any way, its better to remove it. That's why, it's useful to run a `Cleanup` step before the code reaches upstream.

  **How to use:**
  Invoke the `Commit` using _Ctrl + K on Windows/Linux_ and _Cmd + K on macOS_, then select the `Commit options`, and select the `Cleanup` feature.
  
  <span class="tag is-rounded">New in 2021.2</span>
---
