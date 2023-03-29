---
type: TutorialStep
date: 2023-04-04
title: Debugging Unity games
technologies: [.net,unity]
topics: [gaming,ide,editing,debugging]
products: [rider]
author: citizenmatt
subtitle: Suspend execution and inspect variables. Use pausepoints to visually inspect your scene.
thumbnail: ./thumbnail.png
longVideo: 
    poster: ./poster.png
    url: https://www.youtube.com/watch?v=gNTOFr_TQCg&start=2044s&end=2413s
---

Developing in Unity, you need to live in two worlds – the Unity Editor and your C# editor.
If you want to debug your game, you need to set breakpoints in your C# script files.
When hit, the entire Unity Editor environment is stopped – the native game engine as well as the managed C# scripts running both your game and the editor itself.

You can then use the debugger to inspect your call stack, look at and change values of fields and variables and even evaluate expressions.
Rider automatically shows you the active scene and all game objects on it.

While debugging, you can’t use the Unity Editor to select or move game objects.
However, Rider comes with a second type of breakpoint: the *pausepoint*.

Set a pausepoint in code, and when hit, it puts the Unity Editor into pause mode at the end of the current frame.
The Editor is still fully responsive. You can’t look at values in Rider’s debugger, but you can now use the Unity Editor to select game objects,
view the Inspector, change values and move objects around. When you’re done, just click the pause button in the Editor to continue playing.

### See Also

- [Debugging code with Rider](https://www.jetbrains.com/dotnet/guide/tutorials/rider-essentials/debugging/)
- [Pausepoints in Unity](https://blog.jetbrains.com/dotnet/2020/06/11/introducing-unity-pausepoints-for-rider/)
- [More about Rider for Unity...](https://www.jetbrains.com/lp/dotnet-unity/)