---
type: TutorialStep
date: 2020-05-27
title: Startup Class Walkthrough
technologies:
  - asp.net
products:
  - rider
  - resharper
topics:
  - ide
  - web
author: khalidabuhakmeh
subtitle: The beginning of all ASP.NET applications
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster.png
  url: https://www.youtube.com/watch?v=7wOOrnLxuy4
---

At the heart of every ASP.NET Core project lies the `Startup` class, which allows us to configure our application. In this file, we can load configuration, register dependencies, and set the order of our ASP.NET request pipeline.

The first notable method in the Startup class is the constructor, which receives an IConfiguration value. The IConfiguration instance gives us access to the settings found in appSettings.json and appSettings.Development.json.

The next is `ConfigureServices`, which accepts an `IServiceCollection` interface. This method allows us to register dependencies and frameworks. In this project, we have added the Razor Pages framework.

Finally, we have the Configure method, which takes two parameters: `IApplicationBuilder` and `IWebHostEnvironment`. This method helps us shape our runtime request pipeline from requiring a secure connection, serving static files, and handling request routing.

As ASP.NET developers, we'll often come back to this file as our application needs evolve.

### See Also

- [Microsoft Docs Startup](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/startup?view=aspnetcore-3.1)
- [JetBrains Rider](https://jetbrains.com/rider)
- [JetBrains](https://jetbrains.com/)
- [ASP.NET](https://dotnet.microsoft.com/apps/aspnet)
- [.NET](https://dot.net/)