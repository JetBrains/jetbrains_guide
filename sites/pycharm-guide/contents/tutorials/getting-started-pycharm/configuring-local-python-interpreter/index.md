---
type: TutorialStep
date: 2023-03-30
title: Configuring a Local Python Interpreter
technologies: []
topics: []
author: hs
subtitle: TO BE ADDED
thumbnail: thumbnail.png
longVideo:
  poster: poster_long.png
  url: https://youtu.be/GTtpypvLoeY
---

In the previous video, we customized the IDE. PyCharm has lots of ways to make it feel like home.

Running Python code means setting up a Python interpreter...an area where Python can be...challenging. Maybe PyCharm can help me set up a project’s local Python interpreter?

Well...let’s take a look.

## New Interpreter

When talking about local interpreters, PyCharm lets you configure it in two main ways:
You can select and use your system interpreter
Or you can create a virtual environment using virtualenv, Pipenv, or Conda, with Poetry coming at the end of 2021.
You just need to have a Python installation already setup on your local machine.

Ok, so PyCharm lets you select your interpreter in three different points of your journey.

First, you can select the interpreter when you create a new project. We already covered how to create a new project, but we overlooked the Python interpreter configuration. 

As you can see here, when you create a new project, you need to choose between creating a new interpreter or selecting a previously configured interpreter.

We’ll create a new one.

The first thing you will need to define is what kind of Python packaging manager you want to use. PyCharm comes with support for virtualenv, Pipenv and Conda out of the box.
Let’s see how to configure a local interpreter, using virtualenv.

PyCharm will automatically identify the location where the venv folder will be created.

This new interpreter will be based on an existing one. In my case, this is Python 3.10. You can also choose another base interpreter from the list, or click the three dots to find another Python executable in your file system.
You can leave the next two checkboxes unmarked. To learn more about them visit our documentation pages. The link is in the description of this video.

You can also create a virtualenv using Pipenv.
Getting Pipenv installed on your system is an extra step.
Pause.
Once setup and visible to PyCharm, you can select it from the drop-down. Same instructions apply about the base interpreter.

Finally, you can also create a virtual environment using Conda.
Make sure that Anaconda or Miniconda is downloaded and installed on your computer
Then, pick Conda from the dropdown, check if the location is correct. Select the Python version, then ensure that the Conda executable path is correct. The env will be automatically created within your Anaconda installation.
That’s it. You can leave the checkbox unmarked for now and read the documentation for more details.

We just saw making a new interpreter and the various Python….”standards”....for doing so. Yeh, it’s complicated, but once you know all that, the other ways we’ll show, fit right in.

## Existing Interpreter
That’s how you create a new virtual environment in PyCharm when setting up a new project. But as I mentioned in the beginning, you can also select an existing Python project, that you haven’t yet opened as a PyCharm project. Let’s see how to do it.

Back on the New Project screen, click “Previously configured interpreter”. This prompts you with a dropdown. 

If you already have interpreters previously configured you can just pick the one you would like to use from this dropdown.

If you see a <no interpreter> message here you can click the three dots.

Then, select it from the different options, including virtualenv environments, conda environments, pipenv interpreters, or even your system interpreter.

That’s a look at setting up an existing project interpreter for the new project. You can also configure remote interpreters, but this is the subject of our next video. Feel free to jump there if this is what you are looking for.

## Clone project
Ok, enough about creating new projects, the second place you can configure your interpreter is when you clone a project from VCS.

I have a Django project in my GitHub repository. It has a requirements.txt file which contains my project’s dependencies.

In the PyCharm Getting Started screen, I can click the “Get from VCS” button. Here I have several options.

I will just use “Repository URL” and paste the URL [pause], accept the generated choice for the directory to clone into [pause], and click Clone.

PyCharm then opens a new project in that directory and starts cloning the repository.

Once the clone has finished, PyCharm makes a project interpreter, based on your default Python, and starts installing the packages in your requirements file.

As you can see, cloning a remote repository is easy from the welcome screen. PyCharm does the cloning then does some of the manual setup work for you.

One last case to cover: changing the interpreter of an existing project.

## Open project
We have a cloned project open and PyCharm has a “project interpreter” for it. But what if you want to change the interpreter used by a project? Let’s take a look.

Now, as you can see in the bottom right of my screen, this project is using < say the interpreter name >. We have two ways we can change this for an opened project.

You can click the interpreter name in the status bar.

This will open a list of available interpreters, and it will also give you the opportunity to either open interpreter settings or add a new interpreter.

I usually use this shortcut, but you can also find the same settings in your preferences, under “Project Interpreter.”

Here you can select an existing “project interpreter” from the dropdown, then click Apply/Ok.

Or, click the gear icon, which gives you more options for managing all the project interpreters that PyCharm knows about.

## Conclusion
That’s it! We just went through configuring local Python interpreters in PyCharm.

I hope this was useful for you, but if you still have questions ask them in the comments.

In the next episode, we’ll see how to configure remote interpreters in PyCharm, so make sure to hit the subscribe button and subscribe to our channel so you won’t miss any future updates.



