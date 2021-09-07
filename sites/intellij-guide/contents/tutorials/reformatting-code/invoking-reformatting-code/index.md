---
type: TutorialStep
date: 2021-09-06
title: Invoking Format Code
technologies: []
topics: []
author: hs
subtitle: Reformatting code segments, whole classes or directories
thumbnail: ./thumbnail.png

---

## Invoking Reformat Code

Include information from 8183

You can get IntelliJ IDEA to manually [reformat a code segment](https://www.jetbrains.com/help/idea/reformat-and-rearrange-code.html#reformat_code) as a one off act or [reformat a whole file](https://www.jetbrains.com/help/idea/reformat-and-rearrange-code.html#reformat_file).

_Highlight a specific piece of code, like the code above, and press ⌥⌘L, (Ctrl+Alt+L on Windows and Linux, but be aware that there are key conflicts with the operating system shortcuts on certain versions of Linux),_

Alternatively, you can [reformat a specific directory](https://www.jetbrains.com/help/idea/reformat-and-rearrange-code.html#reformat_module_directory). 


It's worth mentioning here that you can also [exclude files from reformatting](https://www.jetbrains.com/help/idea/reformat-and-rearrange-code.html#exclude_file_from_reformat) if you want to.



## Reformatting Only What We Have Changed
_Often we don’t want to reformat the whole file that we’re working on, particularly if this is a system with inconsistent formatting and we don’t want to commit a lot of white space changes as well as our feature or bug fix.  If we were working on a file with some inconsistently formatted code, but we’ve only changed a small part of it, running “Reformat Code” might change parts of the file we haven’t touched. We could highlight the code we’ve changed and just reformat that, but that won’t work if our changes are scattered throughout the file.

There’s a better way: we can use ⌥⇧⌘L or Ctrl+Alt+Shift+L, to bring up the reformatting options.  We can say we only want to format the lines of the file that have been changed, and leave everything else alone.  Now when the file is formatted, it only changes the lines that we’ve touched and nothing else._


https://www.jetbrains.com/help/idea/settings-code-style.html#scheme

Why you might want to do that and how to (again) manage it if it's just your changes if required. 
