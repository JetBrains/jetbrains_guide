---
type: TutorialStep
date: 2023-04-04
title: Working with Blueprints
technologies: [unreal]
topics: [gaming,editing,navigation]
products: [rider]
author: citizenmatt
subtitle: Navigate back-and-forth between code an blueprints, find usages, ...
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster.png
  url: https://www.youtube.com/watch?v=_bvrngxZYds&start=1553s&end=1811s
---

Rider is set up to work with Unreal Engine code. Native `.uproject` files can be opened directly in Rider without generating a Visual Studio solution, Makefile, or Xcode project. Rider reads the Blueprints from your project, shows the usages of such files in your C++ code, and displays the values of the overridden properties.

Blueprints contain a whole set of useful information for the developers of the C++ part of the game, since the Blueprint designers extend the baseline system implemented in C++ with Blueprint-specific markup. With all the Blueprint details, developers can avoid code changes that unexpectedly affect a game’s behavior.

If there are derived Blueprint classes in your game, you can see the corresponding hint right in the code editor. To get the list of all inheritors, right-click the hint and select the derived classes option from the context menu or invoke [Find Usages](https://www.jetbrains.com/help/rider/Navigation_and_Search__Finding_Usages.html) on a C++ class.

You can get the details about `UFunctions` implemented in Blueprints. You can also check the state of a `UProperty`, including whether it has been overridden, and what value is set in the Blueprint file.

You can also [navigate](https://www.jetbrains.com/help/rider/Unreal_Engine__UnrealLink_RiderLink.html#unreallink_riderlink_features) to the blueprint objects from your C++ code.

JetBrains Rider also offers inspections to let you know if there are inconsistencies between the Blueprint-specific function specifiers used in the code and the Blueprints themselves

### See Also

- [Unreal Engine Blueprints - Documentation](https://www.jetbrains.com/help/rider/Unreal_Engine__Blueprints.html)
- [More about Rider for Unreal...](https://www.jetbrains.com/lp/rider-unreal/)