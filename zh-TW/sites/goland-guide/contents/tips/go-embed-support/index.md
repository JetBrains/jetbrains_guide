---
date: 2021-05-24
title: 'Support for go:embed directive'
technologies:
  - go
topics:
  - editing
author: dlsniper
subtitle: 'Embed files and folders into your binaries with no external tool'
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
  poster: ./thumbnail.png
  url: https://www.youtube.com/watch?v=gcgKG7E1BPw&list=PLM-t1Z4tbFflGjn5Qzjjku5J7SX3p-nhY&index=2&t=0s
leadin: |
  Go 1.16 introduced a new feature called *go:embed*.

  This works using a compiler directive, *//go:embed*, and a
  variable, or more, of type *string*, *[]byte*, or *embed.FS*.

  If you want to embed a directory, then you must use the *embed.FS*
  type for the variable in which you need to embed the content.

  **How to use:**
  You don't need to do anything special to get the IDE to support
  this feature.

  Open any Go 1.16, or newer, based project, and embed what you need.
---

