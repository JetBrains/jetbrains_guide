---
hasBody: true
date: 2021-05-25
title: Alt+Enter
technologies: []
topics: [editing]
author: tg
subtitle: Context Actions are available from most places in the code. 
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
  poster: ./tip.png
  url: https://youtu.be/ukGjQxga6Wg
seealso:
  - title: IntelliJ Blog - Alt+Enter, the Problem-solving Shortcut
    href: https://blog.jetbrains.com/idea/2020/08/alt-enter-the-problem-solving-shortcut/
  - title: IntelliJ IDEA Help - Inspections
    href: https://www.jetbrains.com/help/idea/inspections-settings.html
  - title: IntelliJ IDEA Help - Intention Actions
    href: https://www.jetbrains.com/help/idea/intention-actions.html
leadin: |
  IntelliJ IDEA offers intelligent suggestions most places in the code. It can offer fixes for compiler errors and inspection warnings. It can even use intentions to suggest other ways in which you could write code even if there's no warning or error.

---

  IntelliJ IDEA lets you know that it has suggestions for you with a light-bulb on the right-hand side of the code. This light-bulb is red for errors, and yellow for other suggestions.

  If there's an error in the code, pressing **⌥⏎** (macOS), or **Alt+Enter** (Windows/Linux), can suggest options that will make the code compile.

  If there's a warning, IntelliJ IDEA will show you what the warning is, and may offer one or more suggestions on how to fix that warning. These warnings are often from [inspections](../../topics/inspections/) running on the code.

  Even if the code is working perfectly well, pressing **⌥⏎** (macOS), or **Alt+Enter** (Windows/Linux), will often show suggestions on other ways to express this code. These suggestions can help us to reshape the code, for example to make it more readable, or as part of a larger refactoring towards some other pattern. These suggestions can often be configured via [intentions](https://www.jetbrains.com/help/idea/intention-actions.html).


  //TODO add video link 

---
