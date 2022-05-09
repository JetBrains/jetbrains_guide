---
type: TutorialStep
date: 2022-04-27
title: ASP.NET Core Razor TagHelpers for HTMX
technologies: [.net, asp.net]
products: [rider,resharper]
topics: [data,web,editing,inspections]
author: khalidabuhakmeh
subtitle: Simplify integration of HTMX in ASP.NET Core apps
thumbnail: ./thumbnail.png
longVideo:
    poster: ./poster.png
    url: https://youtu.be/MQ35KMg1Wnk
---

So far in this video series, we've leaned on HTMX to power a range of user scenarios. It may seem like an obvious statement, but HTMX relies on our ability to generate ASP.NET Core links to endpoints. So far, we've used the `UrlHelper` class, but the ASP.NET Core class' use with our HTMX attribute definitions can add unwanted noise to already crowded HTML elements. Luckily for ASP.NET Core developers, we can use TagHelpers. With TagHelpers, we can process HTML elements before we render them to the client. Let's take a look at a before and after using [HTMX.NET](https://www.nuget.org/packages?q=htmx+owner%3Akhalidabuhakmeh) and the included TagHelpers.

Before using the HTMX.NET TagHelpers, let's take a look at an HTML element in our Razor page.

```html
<a 
   hx-get="@Url.Page("12_TagHelpers")" 
   hx-target="#target" > Click Me </a>
```

HTMX.NET models its TagHelpers after the ASP.NET Core link helpers. So let's change the previous example to use the HTMX.NET feature.

```html
<a 
   hx-get 
   hx-page="12_TagHelpers" 
   hx-target="#target"> Click Me </a>
```

HTMX.NET recognizes the presence of any `hx-*` attribute and attempts to resolve a link only if the original value is empty. Using HTMX.NET, we can now generate links to endpoints, routes, controller, and Razor pages, all with the addition of a few HTML attributes. Remember, these attributes are processed server-side and should not appear client-side. This final output will be as expected, including one HTMX attribute with the correct URL value.

```html
<a hx-get="/12_TagHelpers">Click Me</a>
```

Using either the `UrlHelper` or the TagHelpers approach is all up to your style, but it is nice to know we have options when integrating HTMX and ASP.NET Core. It's also comforting to know that our HTMX powered apps won't break due to a renaming of url paths.

There's more to HTMX.NET, and if you're interested in finding out more, [head on over to the GitHub repository](https://github.com/khalidabuhakmeh/htmx.net). I continue to add features to support more of what HTMX offers with an ASP.NET Core flair.

In the following video, let's take a look at using HTMX with client-side templates.