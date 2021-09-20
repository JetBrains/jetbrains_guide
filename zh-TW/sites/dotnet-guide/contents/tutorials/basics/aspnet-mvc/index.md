---
type: TutorialStep
date: 2020-06-05
title: Basics of ASP.NET MVC
technologies:
  - asp.net
products:
  - tRANSLATED Rider
  - resharper
topics:
  - web
author: khalidabuhakmeh
subtitle: A complete MVC pipeline with routes, models, views, and controllers.
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster.png
  url: https://youtu.be/7IniT0P13_I
---

In an ASP.NET MVC application, we have three crucial components: Model, View, Controller. The pattern is popular across many other ecosystems, and ASP.NET MVC is a particular flavor developed for .NET developers.

To get started, we first need to make sure that we register ASP.NET MVC in our `Startup` class. In our `ConfigureServices` method, we find a registration call to `AddControllersWithViews`. In our `Configure` method, we find route registration in the form of a call to `endpoints.MapControllers()`. These calls ensure that the MVC pipeline will handle the incoming HTTP requests.

All new endpoints will start with a `Controller` class. In our case, we're starting with a `WidgetsController`. After creating the controller, we can decorate it with a `Route` attribute. Adding a `Route` attribute to the controller allows us to prefix all actions with the controller name of `Widget`.

We follow up on the creation of our controller with a nested action of `Index`. This endpoint will return our view to be rendered by the client. Additionally, we can back this view with an`IndexModel`. The model allows us to pass information to the view for display purposes.

Next, we need to create a view called `Index` under the `/Views/Widgets` folder. The view will contain a form that will allow us to pass information from our browser client to a yet to be written endpoint of `Create`.  Those of us familiar with HTML should find it very similar to our previous experiences building HTML forms.


Finally, we can create the `Create` endpoint in our `WidgetsController`. We need to remember to decorate our endpoints with a `Route` attribute. In this case, we want the path `/widgets/create`. This endpoint takes in a `CreateModel` that allows ASP.NET to bind our form data to our C# object. We can see the data comes from the form by using the parameter attribute of `FromForm`. For this basic demo, we'll store our form data in a static variable so it can survive past a single request.

We also need to update our `IndexModel` to display the results of our `Name` on our original `Index` view.

Running our sample, we can retrieve our index view, fill in our form, submit our data, and display the result in our HTML view. We've stepped through the basics of creating a request/response path in ASP.NET MVC. From here, many folks should have a decent foundation to build a functional ASP.NET MVC application.

### Code Snippets

All snippets are included in their final form.

#### WidgetsController.cs

The following controller is located under `/Controllers/WidgetsController.cs`.

```c#
[Route("[controller]")]
public class WidgetsController : Controller
{
    // GET
    [HttpGet, Route("")]
    public IActionResult Index()
    {
        var model = new IndexModel() { Name = Name };
        return View(model);
    }

    // for demo purposes,
    // we'll store our value here
    private static string Name { get; set; }

    [HttpPost, Route("create")]
    public IActionResult Create([FromForm] CreateModel request)
    {
        Name = request.Name;
        return RedirectToAction("Index");
    }
}
```

#### Index.cshtml

The following view is located under `/Views/Widgets/Index.cshtml`.

```html
@model IndexModel

@{
    ViewBag.Title = "title";
    Layout = "_Layout";
}

<h2>Widgets</h2>

@if (Model.HasName)
{
    <p class="alert alert-info">
         Hello, @Model.Name!
    </p>
}


<form method="post" asp-action="Create">
    <div class="form-group">
        <label asp-for="Name"></label>
        <input type="text" asp-for="Name">
    </div>
    <button type="submit" class="btn btn-primary">Save</button>
</form>
```

#### Models

The following C# objects are located under `/Models/IndexModel.cs` and `/Models/CreateModel.cs`.

```c#
public class IndexModel
{
    public bool HasName => !string.IsNullOrEmpty(Name);
    public string Name { get; set; }
}

public class CreateModel
{
    public string Name { get; set; }
}
```

### See Also

- [Microsoft Docs ASP.NET MVC Overview](https://docs.microsoft.com/en-us/aspnet/core/mvc/overview)
- [ASP.NET](https://dotnet.microsoft.com/apps/aspnet)
- [.NET](https://dot.net/)