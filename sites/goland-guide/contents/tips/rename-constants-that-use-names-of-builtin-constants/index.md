---
date: 2022-07-15
title: 'Rename constants that use reserved names'
technologies: [go]
topics: [quick-fixes, inspections]
author: ap
subtitle: 'Rename a constant if it uses a name of a built-in constant.'
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
screenshot: ./screenshot.png
leadin: |
  The inspection will be triggered if you try to assign a value to a constant with one of the following names: `iota`, `true`, or `false`. GoLand will suggest you to rename such usages.
  
  **How to use:**

  Place the cursor on a highlighted constant name, press _Alt + Enter on Windows/Linux_ or _⌥ + ⏎ on macOS_, and select **Rename constant**. Type a new name and press _Enter_. 

  <span class="tag is-rounded">New in 2022.2</span>
---
