---
type: TutorialStep
date: 2020-06-05
title: Basics of Razor Pages
technologies:
  - asp.net
products:
  - rider
  - resharper
topics:
  - web
author: khalidabuhakmeh
subtitle: A complete Razor Pages pipeline.
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster.png
  url: https://youtu.be/5K-uB_ei5VA
---

Razor Pages is a newer, simplified web application programming model. It removes much of the ceremony of ASP.NET MVC by adopting a file-based routing approach. Each Razor Pages file found under the `Pages` directory equates to an endpoint. Razor Pages have an associated C# objected called the page model, which holds each page's behavior. Additionally, each page works on the limited semantics of HTML, only supporting `GET` and `POST` methods.

In this video, we'll create a complete request/response experience using a single Razor Pages endpoint. We can start with the ASP.NET Razor Pages template installed with .NET.

We first start by creating a storage mechanism to hold our `Name` value. We are using `TempData,` which is a volatile storage mechanism provided by ASP.NET. Any data stored in `TempData` will only exist from the time of our incoming request to the time we return a response.

Our next step is to implement our `OnPost` method, which will process our incoming form data, and assign it to our `TempData` property. After storage, we want to redirect the page to the `OnGet` handler of our page. Redirecting is an essential part of web development, as it avoids the additional POST requests when we refresh a URL in our browser session.

From here, we can edit the HTML in our Razor Page. We create a form that posts to our `OnPost` handler, along with an input for `Name`. The HTML syntax should look very familiar to seasoned web developers.

Running our application, we can see our functionality in action. We can view our HTML, `POST` the form with our name, and display the `Name` property, which we stored in `TempData`.

### Code Snippets

All snippets are included in their final form. They exclude namespaces, as those may differ depending on the project name.

#### Index.cshtml

The following view is located under `/Pages/Index.cshtml`.

```c#
@page
@model IndexModel
@{
    ViewData["Title"] = "Home page";
}

<div class="text-center">
    <h1 class="display-4">Welcome @Model.Name</h1>
</div>

<form method="post" asp-page="Index">
  <div class="form-group">
    <label asp-for="Name"></label>
    <input asp-for="Name" class="form-control" placeholder="Enter Name" autocomplete="off" />    
  </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

#### Index.cshtml.cs

The following view is located under `/Pages/Index.cshtml.cs`. It may be visibly collapsed under `Index.cshtml`.

```c#
public class IndexModel : PageModel
{
    public string Name => (string)TempData[nameof(Name)];

    public void OnGet()
    {
    }

    public IActionResult OnPost([FromForm]string name)
    {
        TempData["Name"] = name;
        return RedirectToPage("Index");
    }
}
```

### 另请参阅

- [Microsoft Docs ASP.NET Razor pages](https://docs.microsoft.com/en-us/aspnet/core/razor-pages/?view=aspnetcore-3.1&tabs=visual-studio)
- [ASP.NET](https://dotnet.microsoft.com/apps/aspnet)
- [.NET](https://dot.net/)