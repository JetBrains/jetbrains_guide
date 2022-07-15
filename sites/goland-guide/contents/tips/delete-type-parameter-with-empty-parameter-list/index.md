---
date: 2022-07-14
title: 'Delete a type parameter with an empty parameter list'
technologies: [go]
topics: [editing, generics, quick-fixes]
author: ap
subtitle: 'Type parameters with empty parameter lists are reported as errors, but you have a quick-fix to put it right.'
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
screenshot: ./screenshot.png
leadin: |
  Type parameters with empty parameter lists are highlighted as errors. So, if you type _func printInt[](i int)_, GoLand will highlight _[]_ because the IDE expects generics here. Sure, you can either implement type parameters or delete square brackets. To delete square brackets, try the *Delete type parameters* quick-fix.

  **How to use:**
  Place the cursor on the empty parameter list (_[]_), press _Alt + Enter on Windows/Linux_ or _⌥ + ⏎ on macOS_, and select *Delete type parameters*. 

  <span class="tag is-rounded">New in 2022.2</span>
---
