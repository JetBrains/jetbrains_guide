---
type: TutorialStep
date: 2020-07-15
title: NuGet Tool Window in Rider
technologies:
  - .net
  - csharp
topics:
  - ide
  - editing
products:
  - rider
author: maartenba
subtitle: Working with NuGet, including search with typos, CamelHumps, Update All, and more!
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster.png
  url: https://youtu.be/lnDQEcFWZIA
---

### Managing Package References in Rider

To [manage NuGet packages in Rider](https://www.jetbrains.com/help/rider/Using_NuGet.html), you can use the NuGet tool window. It shows installed packages, and lets you search for available packages on [NuGet.org](https://www.nuget.org/) and other feeds.

Search supports CamelHumps, so you can search for ***BDN*** instead of _**B**enchmark**D**ot**N**et_. Rider will also try to find packages when you make a typo in the search query.

### Everything is a Filter

Everything is a filter! If you want to update packages with a specific prefix, search for that prefix and then update all. The same can be done for a specific project, by using the project filter.

### Manage Sources and Folders

In Rider, you can verify the size of all NuGet caches, and when needed, clear them. It's also possible to specify where downloaded packages should be stored on disk.

### 另请参阅

- [Using NuGet in Rider](https://www.jetbrains.com/help/rider/Using_NuGet.html)
- [NuGet Tool Window Reference](https://www.jetbrains.com/help/rider/Reference_Windows_NuGet.html)