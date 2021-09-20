---
type: TutorialStep
date: 2020-12-01
title: Running code
technologies:
  - asp.net
  - javascript
topics:
  - web
  - running
products:
  - tRANSLATED Rider
author: pwe
subtitle: How to run your code and see the results? Let's explore.
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster.png
  url: https://youtu.be/F2rMM6Z7H_Q
---

With Rider, you can run entire apps and specific scripts right where you create your code. Regardless of what you want to run, the principles are the same. Let’s see what they are.

I want to run this JavaScript file using Node.js. To do this, I can use the context menu in the **Solution** tool window, and select **Run main.js**, or I can use a dedicated shortcut for it (<kbd>Ctrl+Shift+Alt+R</kbd>).

When you run a file this way, Rider does two things. First, it runs that file and, depending on the file type, opens it in the browser or shows the **Run** tool window with the results of running the code. Second, it creates a temporary run/debug configuration, so we could run a file like that. The newly created run/debug configuration can be found in the toolbar.

Run/debug configurations can be either temporary or permanent. To turn a temporary configuration into a permanent one, open the drop-down, or use the **Run \| Edit configurations...** menu, and save the configuration. You may be wondering what the difference is between temporary and permanent run/debug configurations. That’s simple: temporary run/debug configurations are deleted when the default limit of 5 configurations is reached.

Now, if you want to adjust the settings of a newly created configuration or use another one, you can do this here as well. To add a new one, hit **+**, select the desired configuration type, and specify the settings based on your project or configuration type. To fine-tune an existing configuration, click its name, and update what’s needed.

### See Also

- [Sample code (ZIP file with 3 projects)](https://raw.githubusercontent.com/JetBrains/jetbrains_guide/master/sites/dotnet-guide/demos/tutorials/web-fundamentals/rider-web-fundamentals.zip) used throughout this tutorial.
- [.NET Guide - Running your code](https://www.jetbrains.com/dotnet/guide/topics/running/)
- [WebStorm Guide - Running and debugging](https://www.jetbrains.com/webstorm/guide/topics/running-debugging/)
- [Working with Run/Debug Configurations](https://www.jetbrains.com/help/rider/Run_Debug_Configuration.html)
- [Run/debug configurations](https://blog.jetbrains.com/dotnet/2017/08/23/rundebug-configurations-rider/)
