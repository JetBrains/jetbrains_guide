---
date: 2020-12-03
title: 'Detect incorrect usage of Println/Printf like functions'
technologies:
  - go
topics:
  - inspections
author: dlsniper
subtitle: 'Formatting functions from packages such as pkg/errors, logrus or zap'
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
screenshot: ./screenshot.png
leadin: |
  **How to use:**

  You don't need to do anything particular to use this feature. When using any output formatting function which is similar to _fmt.Printf/fmt.Println_ from a package such as _pkg/errors_, _logrus_, or _zap_. A small list of these functions are: _ errors.Errorf()_, or _logrus.WithError().Infof()_.

  <span class="tag is-rounded">New in 2020.3</span>
---

