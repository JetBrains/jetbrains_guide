---
type: tip
date: 2019-10-09
title: Adding a package from the clipboard
technologies: [go]
topics: [editing]
author: dlsniper
subtitle: Copy a package URL, let the IDE do the go get operation for you
seealso:
  - title: Use quick pop-ups
    href: 'https://www.jetbrains.com/help/go/basic-editing-procedures.html#quick_popups'
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
  poster: ./poster_short.png
  url: https://youtu.be/Jp1PTUfUcj8
leadin: |
    nothing

---

We can't talk about the clipboard without mentioning that whenever the IDE detects a 
possible import path of a package in the clipboard it will suggest installing it as 
a module or adding it to the GOPATH, depending on the project type. This is all done 
locally, of course, so no data is sent to us.