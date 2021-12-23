---
type: TutorialStep
date: 2021-03-29
title: Working With IIS and IIS Express
technologies:
  - .net
  - csharp
  - asp.net
products:
  - rider
  - resharper
topics:
  - ide
  - data
author: khalidabuhakmeh
subtitle: Effectively working with ASP.NET Core and IIS in Rider from a Visual Studio + ReSharper user's perspective.
thumbnail: ./thumbnail.png
---

For developers working with ASP.NET and ASP.NET Core, Internet Information Services (IIS) is an essential part of the web development workflow. IIS comes in two different variants, IIS and IIS Express, with the latter being the most commonly used by developers in their daily work. The building, running, and debugging of web applications are necessary components of the ASP.NET development lifecycle. Visual Studio users are familiar with hitting the play button and having everything "just work".

## IIS Express

Let's start with the more common IIS Express experience from Visual Studio, and how it compares to Rider's experience. Beginning with a new ASP.NET Core web application, we can see our solution structure, which includes C# files, JSON setting files, and launch settings.

![Basic ASP.NET Core web application in Visual Studio](./1-visual-studio-web-application.png)

Visual Studio will read the `launchSettings.json` found under the `Properties` folder. Here we can see the run configurations for our web application. One entry defines the IIS Express run configuration and its settings, and the other establishes the run configuration for ASP.NET Core running within the Kestrel server.

![Visual Studio Launch Settings](./2-visual-studio-lauch-settings.png)

```json
{
 "iisSettings": {
  "windowsAuthentication": false,
  "anonymousAuthentication": true,
  "iisExpress": {
   "applicationUrl": "http://localhost:12613",
   "sslPort": 44317
  }
 },
 "profiles": {
  "IIS Express": {
   "commandName": "IISExpress",
   "launchBrowser": true,
   "environmentVariables": {
    "ASPNETCORE_ENVIRONMENT": "Development"
   }
  },
  "WebRider": {
   "commandName": "Project",
   "dotnetRunMessages": "true",
   "launchBrowser": true,
   "applicationUrl": "https://localhost:5001;http://localhost:5000",
   "environmentVariables": {
    "ASPNETCORE_ENVIRONMENT": "Development"
   }
  }
 }
}
```

We can choose to run either configuration using Visual Studio's run button.

![Visual Studio run dropdown showing launch settings](./3-visual-studio-run-dropdown.png)

From here, the running and debugging experience is what most developers would expect. Set a few breakpoints, step through code, and investigate in-memory values.

Developers moving to Rider will have an equivalent experience with IIS Express. From the same solution, we can see that Rider understands the `launchSettings.json` file.

![Rider web application with launch settings](./4-rider-web-application-with-launch-settings.png)

Additionally, we can see that Rider will let us run any of the defined configurations within the editor.

![Rider run launch setting from editor](./5-rider-run-from-launchsettings.png)

From the **Run Configuration** dropdown, we'll notice Rider has discovered all the run configurations from our `launchSettings.json` file. From this point, we can select the **IIS Express** configuration and either **run** or **debug** our web application running within IIS Express.

![Rider showing lauch settings in run configurations](./6-rider-launch-setting-run-configuration.png)

We can also use Rider's UI to inspect the settings read from the `launchSettings.json`. Rider's UI can help us confirm our JSON is well structured and that all the settings are the expected values.

![Rider's launchSettings UI](./7-rider-launchSettings-UI.png)

## IIS

There are instances where developers would prefer to run a full IIS instance rather than relying on IIS Express. This situation is possible in both IDEs but adds a layer of additional complexity. The first step is to publish our web application to our IIS instance. In both Visual Studio and Rider's cases, we'll need to be sure we are running our IDE process under escalated privileges.

From Visual Studio, we'll likely right-click and select the **Publish** option. From the publish dialog, we can choose **IIS** and follow the instructions.

From Rider, we can right-click the same project and select **Publish to IIS** or **Publish to folder**.

![Rider publish to IIS from project menu](./8-rider-publish-to-iis.png)

Rider can also use any publish profiles already defined from Visual Studio, which generally end with the `.pubxml` extension.

![Rider publish dialog](./9-rider-publish-dialog.png)

**For ASP.NET Core web applications, our target site's application pool must have its `.NET CLR Version` set to `No Managed Code`.** If the setting is incorrect, we will fail to attach the debugger in the next step.

![IIS Application Pool Settings For Debugging ASP.NET Core apps](./11-application-pool-settings.png)

Once our application is published, we can see the process running by visiting the configured IIS website. To debug the new IIS process, we need to use Rider's **Attach To Process** action, which we can find under the **Run** menu or using the <kbd>Ctrl+Alt+P</kbd> command.

![Rider Attach To Process](./10-rider-attach-to-process.png)

We can find our web application process under the **.NET Core Processess** section. Rider will also remember recent processes and list them at the top of the selection dialog.

![Rider Attach To Process Selection dialog](./12-rider-attach-to-process-dialog.png)

From here, we should be able to step into our code as if we were running our application in IIS Express or Kestrel.

![Debugging an IIS ASP.NET Core web application from Rider](./13-debugging-iis-aspnet-core-from-rider.png)

## Conclusion

Regardless of the hosting platform, Rider allows developers to write, deploy, and debug ASP.NET web applications with ease. Developers can find many of the concepts they've learned in Visual Studio within Rider's user interface.



 
