---
type: TutorialStep
date: 2023-04-04
title: Inspections and quick-fixes for Unity code
technologies: [.net,unity]
topics: [gaming,ide,editing,inspections]
products: [rider]
author: citizenmatt
subtitle: Rider helps you write better code, faster.
thumbnail: ./thumbnail.png
longVideo: 
    poster: ./poster.png
    url: https://www.youtube.com/watch?v=gNTOFr_TQCg&start=848s&end=2044s
---

Unity support in Rider ships with several inspections designed to help you find issues with your code before you run it.

A couple of examples:
* Colors defined via `UnityEngine.Color`, `UnityEngine.Color32`, and `Color.HSVToRGB` are highlighted in the editor. You can also press <kbd>Alt+Enter</kbd> on a color usage and choose **Pick color from palette** to open the color editor and [modify the color visually](https://www.jetbrains.com/help/rider/Coding_Assistance__Color_Assistance.html).
* Rider shows warnings for unknown scenes, tags, and layers.
* Empty event functions are shown as dead code, with a quick-fix to remove them.
* A quick-fix is suggested to create a serialized field from a usage of an unresolved symbol.
* Rider ensures that all of your event functions have correct signatures: it highlights incorrect signatures and offers a quick-fix to correct them.
* There are warnings when using an inefficient string literal comparison with the tag property, and a quick-fix to rewrite this as a call to `CompareTag`.
* Rider warns you if you try to use the `new` keyword to create a new instance of a class deriving from `MonoBehaviour` or `ScriptableObject`. A quick-fix is suggested to use `gameObject.AddComponent<T>()` or `ScriptableObject.CreateInstance<T>()` instead.

A full list f inspections and corresponding quick-fixes is available on our [GitHub page](https://github.com/JetBrains/resharper-unity/wiki).

### See Also

- [Unity-specific inspections](https://www.jetbrains.com/help/rider/Features_Unity.html#inspections-and-quick-fixes)
- [Rider Essentials - Inspections and Quick-Fixes](https://www.jetbrains.com/dotnet/guide/tutorials/rider-essentials/inspections-quick-fixes/)
- [More about Rider for Unity...](https://www.jetbrains.com/lp/dotnet-unity/)