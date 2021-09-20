---
type: TutorialStep
date: 2020-05-27
title: Dependency Injection and ConfigureServices
technologies:
  - asp.net
products:
  - tRANSLATED Rider
  - resharper
topics:
  - web
author: khalidabuhakmeh
subtitle: Registering ASP.NET services and instances
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster.png
  url: https://www.youtube.com/watch?v=a32WK_wyM2E&feature=youtu.be
---

We'll be focusing on the `ConfigureServices` method and performing registration through the `IServiceCollection` interface.

Throughout this video, We'll see the behavior of our `HelloWorldService` change. We will inject the `HelloWorldService` into a Razor page, and the changes will become clear as we switch between the registration types in `ConfigureServices`.

We'll first register our dependency as `Transient`. The creation of our `HelloWorldService` will occur every time our application asks for an instance. Changing our registration to Scoped will create a single instance for each new web request. Finally, registering a dependency as a `Singleton` will limit our `HelloWorldService` to a single instance for the duration of our application's run.

By changing the registration of our dependencies, we can dramatically alter the behavior in our ASP.NET application.


### See Also

- [Microsoft Docs Startup](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/startup)
- [Dependency Injection](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection)
- [ASP.NET](https://dotnet.microsoft.com/apps/aspnet)
- [.NET](https://dot.net/)