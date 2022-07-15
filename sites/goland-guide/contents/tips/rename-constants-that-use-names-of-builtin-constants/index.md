---
date: 2022-07-15
title: 'Rename constants that use reserved names'
technologies: [go]
topics: [quick-fixes, inspections]
author: ap
subtitle: 'Rename a constant if it uses the name of a built-in constant.'
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
screenshot: ./screenshot.png
leadin: |
  The inspection will be triggered if you try to assign a value to a constant with one of the following names: `iota`, `true`, or `false`. GoLand will suggest you to rename such usages.
  
  **How to use:**

  Place the cursor on highlighted constant name, press _Alt + Enter on Windows/Linux_ or _⌥ + ⏎ on macOS_, and select *Reserved word used as name*. Type a new name that differs from names of built-in constants. 

  <span class="tag is-rounded">New in 2022.2</span>
---
