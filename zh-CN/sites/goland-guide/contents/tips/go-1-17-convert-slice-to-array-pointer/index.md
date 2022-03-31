---
date: 2021-07-06
title: 'Go 1.17: Convert slice to array pointer'
technologies:
  - go
topics:
  - editing
author: dlsniper
subtitle: 'With Go 1.17, it is possible to covert a slice to an array pointer'
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
screenshot: ./card.png
leadin: |
  Optimize your code by removing bounds checks when using slices and arrays.

  Go 1.17 brings a new language change:

  > Converting a slice to an array pointer yields a pointer to the underlying array of the slice. If the length of the slice is less than the length of the array, a run-time panic occurs.

  Source: [Go 1.17 release notes](https://tip.golang.org/ref/spec#Conversions_from_slice_to_array_pointer).

  <span class="tag is-rounded">New in 2021.2</span>
---

