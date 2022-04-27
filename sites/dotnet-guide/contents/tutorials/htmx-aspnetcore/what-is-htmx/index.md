---
type: TutorialStep
date: 2022-04-27
title: What is HTMX?
technologies: [.net, asp.net]
products: [rider,resharper]
topics: [data,web,editing,inspections]
author: khalidabuhakmeh
subtitle: Understanding the spirit of the HTMX library
thumbnail: ./thumbnail.png
longVideo:
    poster: ./poster.png
    url: https://youtu.be/J9vubzONlqo
---

Most client-side JavaScript stacks assume that you will adopt all the philosophies and strategies as part of the development process: State management, routing, UI rendering, and asset management. The less you deviate from the prescribed happy path, the more likely you are to succeed, or at least that's the idea. While the approach works, it mostly ignores the strengths found within your server-side technology of choice. In the case of this series, we're talking about the improvements in ASP.NET Core and the decades of improvements that have gone into .NET to make it a solid choice. Picking a frontend library can sometimes feel like the proverbial ["throwing the baby out with the bathwater"](https://en.wikipedia.org/wiki/Don%27t_throw_the_baby_out_with_the_bathwater).

Not only has ASP.NET Core seen improvements over the last several years, but the underlying .NET Framework's performance continues to improve and provides a compelling foundation beyond web development. .NET has production-tested integrations with databases, third-party services, and [NuGet packages](https://nuget.org) that make developing server-side solutions a breeze. ASP.NET Core developers will likely be big proponents of Razor, which allows us to combine the C# programming language with HTML structures. Finally, We can host all these technologies on beefy servers to perform complex and process-intensive tasks. So what does this pretext have to do with HTMX?

HTMX recognizes the role of server-side technology in delivering high-quality user experiences while respecting the client's strengths. HTMX leverages AJAX, CSS Transitions, WebSockets, and Server-Sent Events directly in HTML to trigger requests and swap the realized HTML responses directly into the DOM. Access the full capability of modern clients declaratively using HTML attributes rather than writing JavaScript. The creator of HTMX, Carson Gross at [Big Sky Software](https://github.com/1cg), says "HTMX is HTML if they kept going".

General motivations behind HTMX include:

- Any DOM element can trigger an HTTP request.
- Additional HTTP methods can be used in addition to GET and POST.
- An interaction results in an HTML response used to update the existing UI.
- State management is accomplished server-side, with responses reflecting state in HTML payloads.

As a developer, HTMX takes only a few minutes to understand but has a rich collection features that we can build any UI experience. Using HTMX we can follow conventions so little to no additional JavaScript is necessary. Additionally, if we need to use an existing JavaScript library, HTMX plays nicely with the existing ecosystem. Regardless of your preference, HTMX works with your philosophies, not the other way around.

If this sounds appealing to you, please continue, I promise you won't be disappointed.

## Prerequisites

I've provided [a sample project available on GitHub](https://github.com/khalidabuhakmeh/htmx-aspnetcore) for folks who want to follow along. We will use [.NET 6](https://dot.net), but all techniques and approaches should work on prior versions. The samples use Razor pages, but the server-side technology is swappable for any tech you prefer. We are also using Bootstrap 5, but HTMX is design library agnostic; I just wanted to make the samples look nice for you. Finally, we'll be using [HTMX.NET](https://nuget.org/packages/htmx), an optional library I developed to enhance the ASP.NET Core and HTMX experience.

This video series will show techniques ASP.NET Core developers can utilize to enhance existing web applications. Like most technologies, there is always more than one solution. As you go through this video series and learn more, think about how you may solve previous examples in new ways. 

Let's look at our first example, the obligatory "Hello World"!

