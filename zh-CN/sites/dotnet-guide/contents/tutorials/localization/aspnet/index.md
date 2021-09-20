---
type: TutorialStep
date: 2020-09-29
title: Localizing ASP.NET Applications
technologies:
  - .net
  - asp.net
products:
  - rider
  - resharper
topics:
  - 数据
  - web
  - editing
  - inspections
author: khalidabuhakmeh
subtitle: Working with Cultures, Resources, & ASP.NET
thumbnail: ./thumbnail.png
longVideo:
  poster: ./thumbnail.png
  url: https://youtu.be/smCuu3TrVUc
---

Localization has been around since .NET 1.1. Looking at the interfaces of `ResourceManager` and `CultureInfo`, along with the static nature of resource access, its easy to see the ties to legacy client technology **WinForms**. With the release of ASP.NET Core, developers have new tools to work with localization in the realm of server-based web apps.

We'll explore these new mechanisms and how the ASP.NET team designed them to work in a web-centric world. You'll need a new **Razor Pages** project to follow along, or you can clone **[the complete solution from the GitHub repository](https://github.com/khalidabuhakmeh/aspnetcore_localization_sample).**

## In Startup

The configuration found in our `Startup` is essential to localizing an ASP.NET Core web application. We'll be altering both the `ConfigureServices` method and the `Configure` method to set up our localized app.

### Configure Services

To opt-in to localization, we need to modify our `Startup` file. We'll be registering a few services, configuring options, and registering middleware. All steps that are common-place for additions in an ASP.NET application.

Starting in our `ConfigureServices` method, we need to make a call to `AddLocalization`. It's essential to set the `ResourcesPath` as it tells the ASP.NET localization feature where to find our `.resx` files.

```csharp
 services.AddLocalization(options =>
 {
    options.ResourcesPath = "Resources";
 });
```

We follow up on the call to add localization by configuring the `RequestLocalizationOptions` object. We registered this object when we called `AddLocalization`.

```csharp
 services.Configure<RequestLocalizationOptions>(options =>
 {
     options.SetDefaultCulture("en-Us");
     options.AddSupportedUICultures("en-US", "de-DE", "ja-JP");
     options.FallBackToParentUICultures = true;

     options
         .RequestCultureProviders
         .Remove(typeof(AcceptLanguageHeaderRequestCultureProvider));
 });
```

We should take note of a few critical elements:

1. We set the default culture to `en-US`.
1. We are choosing to support `en-US` (US English), `de-DE` (German), and `ja-JP` (Japanese) cultures.
1. We remove the `AcceptLanguageHeaderRequestCultureProvider`. This provider sets the culture based on the client's HTTP locale via a header value. In this project, we'll be letting the user choose their culture.

Finally, we add view localization to the services collection.

```csharp
 services
     .AddRazorPages()
     .AddViewLocalization();
```

The complete `ConfigureServices` method is below.

```csharp
 public void ConfigureServices(IServiceCollection services)
 {
     services.AddLocalization(options =>
     {
        options.ResourcesPath = "Resources";
     });

     services.Configure<RequestLocalizationOptions>(options =>
     {
         options.SetDefaultCulture("en-Us");
         options.AddSupportedUICultures("en-US", "de-DE", "ja-JP");
         options.FallBackToParentUICultures = true;

         options
         .RequestCultureProviders
         .Remove(typeof(AcceptLanguageHeaderRequestCultureProvider));
     });

     services
         .AddRazorPages()
         .AddViewLocalization();

     services.AddScoped<RequestLocalizationCookiesMiddleware>();
 }
```

**Note that we have an optional `RequestLocalizationCookieMiddleware` which retains the user-selected culture between requests.** [We can see the code for that on the GitHub repository](https://github.com/khalidabuhakmeh/aspnetcore_localization_sample/blob/master/WebApplication/Middlewares/RequestLocalizationCookiesMiddleware.cs).

### 配置

The `Configure` method is the simpler of the two setups. Here, we need to register the `RequestLocalizationMiddleware` utilizing the registration method provided by ASP.NET Core.

```csharp
app.UseRequestLocalization();
```

We need to ensure that we register the middleware before any middleware that requires access to the current culture. Other than that critical factor, we can register it anywhere in our pipeline. Optionally, we register our custom `RequestLocalizationCookiesMiddleware` into the ASP.NET pipeline as well. Here is the final `Configure` method.

```csharp
 public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
 {
     if (env.IsDevelopment())
     {
        app.UseDeveloperExceptionPage();
     }
     else
     {
         app.UseExceptionHandler("/Error");
         // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
         app.UseHsts();
     }

     app.UseHttpsRedirection();
     app.UseStaticFiles();
     app.UseRequestLocalization();

     // will remember to write the cookie 
     app.UseRequestLocalizationCookies();

     app.UseRouting();
     app.UseAuthorization();

     app.UseEndpoints(endpoints => { endpoints.MapRazorPages(); });
 }
```

## Resource Files

We may remember setting the `ResourcesPath` property in our `ConfigureServices` method. This property requires a matching physical directory in our project. This `Resources` directory will hold all of our `resx` files. Before we start creating files, we'll need to understand some additional naming conventions, along with cultural suffixes we learned from the previous tutorial.

1. We should name files after the class names, which will be utilizing the resource values. For example, `Program.cs` and `Resources/Program.resx`. We can access any resource file, but this organization helps keep us focused.
2. Resource files for ASP.NET views should have the same directory structure as the views they represent. For example, `Pages/Index.cshtml` and `Resources/Pages/Index.resx`.
3. In some cases, naming isn't as important, as we can select which resource file we want ASP.NET too look for a resource value.

We recommend looking at the [Resources directory](https://github.com/khalidabuhakmeh/aspnetcore_localization_sample/tree/master/WebApplication/Resources) in our sample project to see some of the different naming conventions in practice.

## Accessing Resource Values

There are three interfaces ASP.NET developers will be working with when localizing a web application:

1. `IStringLocalizer`
2. `IHtmlLocalizer`
3. `IViewLocalizer`

### IStringLocalizer

The `IStringLocalizer` interface reads values from our resource files using a `ResourceManager` internally. It is a no-frills interface, compared to the other two interfaces. We can specify where the instance of `IStringLocalizer` looks for resource values by specifying a generic type argument. Here is an example of us injecting an instance into a Razor page.

```csharp
@inject IStringLocalizer<IndexModel> Localizer
```

We can access a value using the index operator.

```csharp
@{
 ViewData["Title"] = @Localizer["Home page"];
}
```

### IHtmlLocalizer

Similar to `IStringLocalizer`, the `IHtmlLocalizer` has all the same features, but we can expect the resource values to contain HTML elements. Any argument we pass to the localizer will be encoded, but the resource value will not be encoded.

```csharp
@inject IHtmlLocalizer<IndexModel> Localizer
@{
   var name = "Khalid";
   var message = Localizer["<div>Hello, {0}</div>", /* encoded */ name];
}
```

### IViewLocalizer

The `IViewLocalizer` implementation is shorthand for accessing the resources matching the current view. It implements the same behaviors as `IHtmlLocalizer`. We can retrieve an instance by injecting it into our Razor Page or ASP.NET MVC view.

```csharp
@* ViewLocalizer path is Resources.Pages.Index *@
@inject IViewLocalizer ViewLocalizer
```

The `IViewLocalizer` is the recommended approach for anyone localizing an ASP.NET application. It has all the same features as the previous interfaces and handles the resource file location for us.

### Example Usage

Here is an example of a Razor page utilizing all three interfaces. We can see that once injected, they all use an index operator to handle

```csharp
@page
@using Microsoft.Extensions.Localization
@using Microsoft.AspNetCore.Mvc.Localization
@model IndexModel

@inject IStringLocalizer<IndexModel> Localizer
@inject IHtmlLocalizer<IndexModel> HtmlLocalizer

@* ViewLocalizer path is Resources.Pages.Index *@
@inject IViewLocalizer ViewLocalizer

@{
 ViewData["Title"] = @Localizer["Home page"];
}

<div class="text-center">
 <h1 class="display-4">@ViewLocalizer["Home page"]</h1>
 <p>
 @HtmlLocalizer["Learn"]
 </p>
</div>

<form method="post" asp-page="Index">
 <div class="form-group">
 <label asp-for="Superhero" class="control-label"></label>
 <input asp-for="Superhero" class="form-control"/>
 <span asp-validation-for="Superhero" class="text-danger"></span>
 </div>
 <button type="submit">@Localizer["Submit"]</button>
</form>
```

## Data Annotations and HTML Forms

Localizing static content using the localization interfaces is straight-forward. Localizing C# objects take a bit more effort, but not much more. Our sample project has a `SuperHero` property bound to an ASP.NET Razor text input element. We can define the display and error messages by using **Data Annotation** attributes.

```csharp
[Display(Name = "Superhero", ResourceType = typeof(Resources.Pages.IndexModel))]
[Required(
    ErrorMessageResourceName = nameof(Resources.Pages.IndexModel.SuperHeroFieldIsRequired), 
    ErrorMessageResourceType = typeof(Resources.Pages.IndexModel)
)]
public string Superhero { get; set; }
```

The Razor view utilizes the `DisplayAttribute` to determine a `<label>` tag's value. ASP.NET uses the `RequiredAttribute` for validation, and determines the error messages using the attribute properties of `ErrorMessageResourceName` and `ErrorMessageResourceType`.

## 结论

With a few steps, we can understand the ideas behind localizing an ASP.NET application. We can transfer many of our existing skills regarding resource files to the new paradigm created for web applications. Once configured, the localization framework stays out of our way, allowing us to develop our app while also leaving room to expand our audience.

I hope this short tutorial has inspired you to localize your ASP.NET applications. Remember, you can **[access a working sample of the project seen in the video at this GitHub repository](https://github.com/khalidabuhakmeh/aspnetcore_localization_sample).**

## More Resources

Some of the resources utilized to write this tutorial are listed below:

- Mike Brind - https://www.mikesdotnetting.com/article/346/using-resource-files-in-razor-pages-localisation
- .NET Core tutorials - https://dotnetcoretutorials.com/2017/06/22/request-culture-asp-net-core/
- Microsoft Documentation - https://docs.microsoft.com/en-us/aspnet/core/fundamentals/localization?view=aspnetcore-3.1
- Alan Edwardes - https://alanedwardes.com/blog/posts/country-code-to-flag-emoji-csharp/)
