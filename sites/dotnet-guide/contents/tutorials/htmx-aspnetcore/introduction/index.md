---
type: TutorialStep
date: 2022-04-27
title: Introduction
technologies: [.net, asp.net]
products: [rider,resharper]
topics: [data,web,editing,inspections]
author: khalidabuhakmeh
subtitle: Giving context to HTMX
thumbnail: ./thumbnail.png
---

At the end of the day, There's no better feeling than delivering a great user experience to your users. But, unfortunately, what's not fun in the current web development landscape is choosing a frontend library, setting up a build and asset pipeline, and going all in with an unfamiliar set of tools. Reworking an existing UI approach can be time-consuming and come with a set of yet-to-be-discovered problems.

What if you could use your existing ASP.NET Core knowledge to build immersive client experiences and avoid the headaches of complicated frontend frameworks? Well you can! This video series is for you, whether you're an experienced ASP.NET Core web developer looking to recapture the nostalgia of "getting stuff done" or new to ASP.NET Core feeling overwhelmed by learning both frontend and backend stacks.

## Current Web Application Development 

As complex as the modern web may seem, most web applications rely on fundamentally the same behavior derived decades ago: a client initiates a request to a server, the server responds with a payload, and the client processes that information into a user interface. The `Request/Response` pattern is easy to understand, yet powerful enough to support most developer scenarios.

As of producing this series, the trend in web development has been to do more processing on the client than ever before, with the client responsible for taking data, in the form of JSON, and HTML templates and materializing a user interface. In this approach, the server is a dispenser of JSON responses with no stake in the client experience outside of being fast and responsive to a client's data requests. While this approach works, like all trends, they begin to introduce their own set of issues. For instance:

> JavaScript files growing out of control, and slowing down page responsiveness.

We get the rise of build tools that can be difficult to get right, even for the most skilled teams. With each new build tool promising to fix the issues of the last build tool. What about:

> JSON and JS Template payloads outpacing the size of the HTML it was meant to replace.

With traditional JSON over HTTP, the payloads can seem wasteful when retrieving a large JSON payload when all we want is one field. GraphQL allows us to choose our payloads with surgical precision, but now our UI and Data services require client-side templating libraries. Keeping our data and UI usages in sync can introduce cognitive overhead that can be daunting. And how about:

> Slow client-side startup times and time to first interaction.

Browsers have a pre-designated order of processing assets known as [The Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/constructing-the-object-model). JavaScript, especially client-side frameworks, can be slow to render because they work outside the optimized path of most clients. One approach to fix this has been to reintroduce static page rendering with enough HTML to give the perception of faster page startup times that will eventually light up with client-side functionality.

These are just a subset of the normal issues developers may face when building web applications with modern web stacks. The solutions outlined solve these problems effectively, but, stepping back, we realize that many of the issues may be self-inflicted wounds.

Taking a step-back from a particular technology stack, what do we want out of our web development experience? Well, if you're anything like me, you'll want the following:

1. An application that is fast to develop and faster to use.
2. A reduction in payloads between the server and client.
3. An ability to opt in to features when they're necessary, rather than over-architecting for perceived future problems.
4. Leverage our favorite server-side tech while leaning on the HTTP spec with all its capabilities.
5. Finally, we want to have fun.

As we go through this series, we'll see how we can reduce the complexity of our web applications, lean on existing ASP.NET Core knowledge, and focus on providing user experiences that delight you and your users. In the next section, we'll be introducing [HTMX](https://htmx.org), a client-side library focused on HTML-over-the-wire.