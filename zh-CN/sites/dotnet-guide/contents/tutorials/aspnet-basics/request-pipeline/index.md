---
type: TutorialStep
date: 2020-05-27
title: Request Pipeline
technologies:
  - asp.net
products:
  - rider
  - resharper
topics:
  - ide
  - web
author: khalidabuhakmeh
subtitle: Configuring our HTTP handlers in Startup
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster.png
  url: https://youtu.be/XRaUj6Y2Gi0
---

The `Configure` method in `Startup` outlines the runtime behavior of our web application. Here, we can register middleware and determine the path our requests will take.

To understand middleware, we need to know that it operates on the Nesting Doll model. Each middleware holds a reference to the next in the chain and is responsible for continuing or breaking that chain. Ordering our middleware registration is essential. Middleware is executed from first to last, with no guarantee of running all registered middleware.

A middleware instance has two options when handling a client's request.

First, It can respond immediately with an HTTP Response, breaking the chain, and ending the request. Secondly, It can pass the incoming request to the next middleware in the chain. At this time, it can handle the returning response and change it, or do nothing at all. ASP.NET Core has pre-packaged middleware, and open-source contributions designed to enhance our application's request pipeline. Shaping our app depends on middleware, and it occurs here, in the Configure method.

### 另请参阅

- [Microsoft Docs Startup](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/startup?view=aspnetcore-3.1)
- [Middleware](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/middleware/?view=aspnetcore-3.1)
- [ASP.NET](https://dotnet.microsoft.com/apps/aspnet)
- [.NET](https://dot.net/)