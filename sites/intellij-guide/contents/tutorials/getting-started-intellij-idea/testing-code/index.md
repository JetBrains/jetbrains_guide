---
type: TutorialStep
date: 2023-02-03
title: Testing code
technologies: []
topics: []
author: hs
subtitle: Testing is an important part of the development workflow, irrespective of where you do it in the process.
thumbnail: ./thumbnail.png

---

Writing tests for our code is another task you're likely to be looking to your IDE to support you with. IntelliJ IDEA can generate your tests for you with its Code Generation capabilities but there's a couple more tips that I recommend you check out when working with tests in IntelliJ IDEA. We will look at:
- Splitting Windows
- Navigating to a Test

## Splitting Windows

<iframe width="560" height="315" src="https://www.youtube.com/embed/k7gUpiWRPiY" >
</iframe>

Sometimes it's helpful to see the code and its test next to each other which you can do with a right-split window in IntelliJ IDEA. You can open a right-split from the Recent Files (**⌘E** | **Ctrl+E**) by holding down (**⇧** | **Shift**) when you press Enter to open the file. There's also an icon to the right of the Recent Files dialog that you can use if you prefer the mouse.

You can also hold down (**⇧** | **Shift**) and press Enter to open a file from the Project tool window in a right split.

## Navigating to a Test

<iframe width="560" height="315" src="https://www.youtube.com/embed/ky-LGO0_iq4" >
</iframe>

You can use (**⇧⌘T** | **Ctrl+Shift+T**) to Navigate to Test and if IntelliJ IDEA can find a Test file that it thinks tests that file based on the name of your class it will navigate there. If there isn't a test file that IntelliJ IDEA can find, it will suggest creating a test and can add some of the code constructs for the tests as well. 