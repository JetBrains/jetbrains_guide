---
type: TutorialStep
date: 2023-04-04
title: Generate code
technologies: [.net,unity]
topics: [gaming,ide,editing]
products: [rider]
author: citizenmatt
subtitle: Rider helps with boiler-plate code, code completion, and more.
thumbnail: ./thumbnail.png
longVideo: 
    poster: ./poster.png
    url: https://www.youtube.com/watch?v=gNTOFr_TQCg&start=693s&end=848s
---

Rider makes it easy to **generate Unity event functions**, either using the *Generate* menu or simply by typing, with autocompletion.

Auto-completion will suggest event function names when declaring methods in Unity-based classes, and expand to include method signature. Start typing an event function within a class deriving from a known Unity class, such as `MonoBehaviour`.

Unity-specific live templates:
* `sprop`: a Unity property with a serialized backing field
* `sfield`: a Unity serialized field
* `log`: shorthand for `Debugger.Log()`

### See Also

- [More about Rider for Unity...](https://www.jetbrains.com/lp/dotnet-unity/)