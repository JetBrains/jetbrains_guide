---
type: TutorialStep
date: 2020-05-27
title: ASP.NET Routing
technologies:
  - asp.net
products:
  - rider
  - resharper
topics:
  - ide
  - web
author: khalidabuhakmeh
subtitle: Defining endpoints and URI path handlers
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster.png
  url: https://www.youtube.com/watch?v=Or8k6gXBV7E
---

Routing allows our ASP.NET applications to handle requests targeted at specific handlers. In ASP.NET Core 3, we saw the introduction of endpoints with different options of registration. All endpoints share two common qualities: a URI pattern and an HTTP method. URI patterns allow us to have constants, placeholders, and constraints to limit request matches. HTTP methods will enable us to restrict our handlers to HTTP methods like GET, POST, and PUT.

The first way to register an endpoint is directly in the UseEndpoints method via the Map extension methods. We see first-class methods for GET, POST, PUT, PATCH, and DELETE. While useful for demonstrations, we should not use the approach for medium to large scale applications.

Another approach to mapping endpoints is by using Controllers. ASP.NET provides attribute routing, which allows us to directly register route patterns and their HTTP method to our controllers. The results are the same, but the approach can help us evolve our application over time.

Finally, we can utilize Razor Pages, which uses a conventional folder structure to create endpoints. Razor Pages are limited to HTML form HTTP methods GET, POST, and PUT. We can set parts of the URI pattern on each instance using the `@page` directive, with the same functionality we've used in previous approaches.

Routing is essential to building any non-trivial web application. The advent of endpoints in ASP.NET Core means we get access to route values at all times in our request pipeline, making the task of handling requests and returning responses much simpler. How we register endpoints is up to us, and we have a useful set of options.

### What's Next?

Now that you have seen the basics of ASP.NET, [The Basics Series](../../basics/) will broaden your view of different .NET technologies.

### See Also

- [Microsoft Docs Routing](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/routing)
- [ASP.NET](https://dotnet.microsoft.com/apps/aspnet)
- [.NET](https://dot.net/)