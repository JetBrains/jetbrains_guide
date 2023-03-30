---
type: TutorialStep
date: 2023-04-04
title: Unit testing
technologies: [unreal]
topics: [gaming,testing]
products: [rider]
author: citizenmatt
subtitle: The Unreal Engine testing framework is built in and works without additional configuration.
thumbnail: ./thumbnail.png
longVideo: 
    poster: ./poster.png
    url: https://www.youtube.com/watch?v=_bvrngxZYds&start=2240s&end=2346s
---

JetBrains Rider includes support for the [Unreal Engine testing framework](https://docs.unrealengine.com/4.27/en-US/TestingAndOptimization/Automation/). To work with Unreal Engine tests, use the [Unit Tests window](https://www.jetbrains.com/help/rider/Reference_Windows_Unit_Tests.html). In this tool window you can review the results of the tests, reruns failed, and all or specific tests.

The [Unreal Engine testing framework](https://docs.unrealengine.com/4.27/en-US/TestingAndOptimization/Automation/) is built in and the Engine tests work without any additional configuration.

To get Unreal Engine plugin tests running in JetBrains Rider, you need to:
1.  Index plugins by enabling **Index plugins** setting on the **Languages & Frameworks \| C++ \| Unreal Engine** page of JetBrains Rider settings.
2.  Reference the plugin that includes the tests in the `.uproject` file.

In the [Unit Tests window](https://www.jetbrains.com/help/rider/Reference_Windows_Unit_Tests.html), you can explore all the existing categories in the current solution. The categories are defined by the flags passed to the tests. Use Group By switcher to change the grouping in the tool window.

To run a single test or all tests in a test class, click the action indicator next to it. Even if you have a set of Spec tests defined in the `Define` method after the `DEFINE_SPEC` macro or the `BEGIN_DEFINE_SPEC`/`END_DEFINE_SPEC` macros, JetBrains Rider will successfully discover them and show the corresponding icon. You can also set the caret at the test /test class and press `Alt+Enter`. In the [action list](https://www.jetbrains.com/help/rider/Actions_List.html#action_list), choose Run/Debug for a test class.

Tests with `EAutomationTestFlags::Disabled` flag will stay disabled in JetBrains Rider, and will be marked with the corresponding Ignored symbol.

### See Also

- [Unreal Engine tests](https://www.jetbrains.com/help/rider/Unreal_Engine__Tests.html)
- [Unit Testing with Rider](https://www.jetbrains.com/dotnet/guide/tutorials/rider-essentials/unit-testing/)
- [More about Rider for Unreal...](https://www.jetbrains.com/lp/rider-unreal/)