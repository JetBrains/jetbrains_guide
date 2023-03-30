---
type: TutorialStep
date: 2023-04-04
title: Editing, code completion, inspections
technologies: [unreal]
topics: [gaming,ide,editing,inspections]
products: [rider]
author: citizenmatt
subtitle: Let's explore what the coding experience is like!
thumbnail: ./thumbnail.png
longVideo: 
    poster: ./poster.png
    url: https://www.youtube.com/watch?v=_bvrngxZYds&start=648s&end=1553s
---

Rider for Unreal Engine operates on Windows, macOS, and Linux. It is powered by [ReSharper C++](https://www.jetbrains.com/resharper-cpp/), which offers cutting-edge native support for modern C++. Users benefit from its 1300+ code inspections, 290+ quick-fixes, solution-wide refactoring, and code generation abilities. Rider also automatically adds missing #includes for you. This all happens without compromising the speed or responsiveness of the IDE.

### Class, Module and Plugin templates

Rider offers a set of predefined templates for Unreal Engine classes and dedicated actions to create a new plugin and module, allowing you to automate boilerplate code generation and switch between the IDE and Unreal Editor less often.
Adding a class, module, or plugin can be done from the **File \| New** menu, or from the solution explorer context menu.

### Remote Procedure Calls

When analyzing your code, JetBrains Rider identifies [Unreal Engine remote procedure calls (RPCs)](https://docs.unrealengine.com/en-us/Gameplay/Networking/Actors/RPCs) by `Client`, `Server`, and `NetMulticast` specifiers in the `UFUNCTION` declaration statements.

JetBrains Rider checks whether Unreal Engine RPCs have the corresponding required `_Validate` and `_Implementation` functions and will highlight the RPC if at least one of them is not found. You can press `Alt+Enter` on the highlighting to generate the missing implementation stubs.

### Unreal Engine naming convention

When developing Unreal Engine projects, you are probably using [Unreal Engine coding standard](https://docs.unrealengine.com/en-us/Programming/Development/CodingStandard). Rider ensures that your Unreal Engine code is accurate with the help of specialized Unreal Engine inspections for missing or incorrectly set Unreal Engine reflection macros. The IDE also accommodates Unreal Engine naming conventions across all of its actions. Inconsistent Unreal Engine naming inspections detect names that don’t follow the rules and suggest quick-fixes for them.

### See Also

- [Create new Unreal Engine entities](https://www.jetbrains.com/help/rider/Unreal_Engine__Create_Entity.html)
- [Rider Essentials - Inspections and Quick-Fixes](https://www.jetbrains.com/dotnet/guide/tutorials/rider-essentials/inspections-quick-fixes/)
- [Unreal Engine-specific code inspections](https://www.jetbrains.com/help/rider/Unreal_Engine__Code_Analysis.html#code-inspections)
- [More about Rider for Unreal...](https://www.jetbrains.com/lp/rider-unreal/)