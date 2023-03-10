---
type: TutorialStep
date: 2023-03-30
title: Run Python Using a Run Configuration
technologies: []
topics: []
author: hs
subtitle: TO BE ADDED
thumbnail: thumbnail.png
longVideo:
  poster: poster_long.png
  url: https://youtu.be/FOdQa364sLM
---

In the previous video, we saw how PyCharm can make coding productive.

In this video, we are going to talk about run configurations and, basically, how PyCharm helps you run your Python code.

Well...let’s take a look.

## Temporary Run Configurations
First off, let’s talk about temporary run configurations, when you’re just quickly running a Python file.
Here I have a pure Python project open. It’s just a Python script from the PyCharm help documentation.
As you can see here on top, this dropdown says ‘’Add Configuration’.

It basically means that PyCharm doesn’t know how to run this script yet.

The easiest way to do it is by letting PyCharm automatically create a run configuration for you. To do it you have two options:

First, you can right-click anywhere inside the editor and press ‘Run <script name>’.

As you can see here, PyCharm created a run configuration for us, ran our script, and displayed the output inside a ‘Run’ tool window.

This run tool window is useful to see standard outputs as well as more comprehensive error messages when the Python interpreter finds an error in your program.

The temporary run configuration created by PyCharm is now stored, as you can see in the top bar.
And can now be reused every time you want to run this script again.

All you need to do is click the ‘Play’ button.

As I mentioned before, this is not the only way you can do it, though.

Let’s quickly delete this temporary run configuration.

Now the button says ‘Add configuration’ again.

If we scroll down, you can see in my code that I created a “if __name__ == '__main__'“ block. Did you notice anything?

Yes, there is this ‘play’ button in the gutter. This is another shortcut to create a temporary run configuration.

By clicking it, a context menu shows up, and the first option says Run’ and the name of your script’.

I will click it now and, as you can see, PyCharm created the same type of temporary run configuration for us, ran my program and displayed the output inside the run tool window again.

It also stored this temporary configuration for us.

That’s the quick and easy way to run some code. But sometimes you need a richer way to configure what’s needed for execution.

## Configurations From Project Templates
Let’s now look at explicitly creating a run configuration. The previous scenario applies for both PyCharm Community and PyCharm Pro. This second option is only available for PyCharm Pro.

I have here an empty Django project that I just created from the welcome screen. If you want to know how to do it make sure to watch the video number 2 in this series.

Even though we haven’t done anything yet, you can see that the run configurations button already shows the project name and a ‘Django’ logo.

It means that PyCharm already created a basic run configuration, special for Django.

If we click the play button PyCharm will launch the Django project, including launching a webserver so you can click the link in the run tool window and see your Django project up.

Cool, huh?

And PyCharm Pro does not do it for Django projects-only. It also creates configurations for your Flask projects, FastAPI projects, and projects based on other frameworks.

Next we will have a quick look at permanent run configurations.

## Permanent Run Configurations
Many times in your development workflow you will need to configure different startup points for your application, including, for example, executing your script with different Python interpreters.

This is when your permanent run configurations come in handy.

Let’s see how to do it.

The first and easiest way to do it is by transforming a temporary run configuration into a permanent one.

To do it you can simply click the dropdown menu and select ‘Save <project name> Configuration’
You can also use pre configured templates to create your run configurations.

To do it, just open the ‘Edit configurations’ dialog.

Click the plus button.

And choose the target you are creating run configurations for. Each template has specific fields that are necessary for configuring different targets.

## Conclusion
This is all for today. We saw how to quickly run our Python scripts with temporary run configurations, and why sometimes it will be handy to create permanent ones.

PyCharm can do a lot more than that so, if you are interested in creating more robust run configurations make sure to check our documentation. The link is in the description.

I hope this video was useful for you but, if you still have questions ask them in the comments below.
In the next episode, we’ll talk about basic code refactoring in PyCharm.
