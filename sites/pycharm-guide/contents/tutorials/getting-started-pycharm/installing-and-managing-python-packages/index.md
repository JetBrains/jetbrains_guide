---
type: TutorialStep
date: 2023-03-30
title: Installing and Managing Python Packages
technologies: []
topics: []
author: hs
subtitle: TO BE ADDED
thumbnail: thumbnail.png
longVideo:
  poster: poster_long.png
  url: https://youtu.be/EanHxYTYGio
---

In the previous two videos, we setup a Python interpreter for our project. But sometimes our project depends on Python packages. And getting those setup can be….tricky.

Any chance the IDE can help?

Well...let’s take a look.

## Use Package Tool Window
In 2021, PyCharm added a new Packages tool window, to help see Python packages are in your interpreter, as well as manage them. Let’s see it in action.

I’ll start with an open Flask project, generated from the New Project wizard for Flask.

The wizard went to the PyPi repository and installed all the necessary packages to get my application up and running for me.

Let’s see what PyCharm installed.

I have now opened the Python Packages tool window. Let’s see what’s in here.

As soon as you open it, you can already see a list of installed packages. These are the packages that PyCharm installed for me when I selected Flask as my project type.

For example, the Jinja2 and Flask packages.

It’s important to mention that these packages belong to the current virtual environment that PyCharm also created for this project.

In this case, a virtual environment in this project directory, based on Python 3.10.
So that’s the new Packages tool window. We showed how to see packages. Let’s now manage them.

## Add PyPI Package
Another cool thing you can do here is to browse for new packages to install. Sure, a common task, but working in Python projects can make this complicated.
Let’s assume you want to install ‘requests’, a very popular Python package.

In the Packages tool window, I’ll click the search bar.
I then start typing “requests”.

As you see, PyCharm will search the PyPi repository and get back to me with the most relevant packages that match my search.

If I click the package name…
...you will see on the right-hand side, that the documentation for this package is rendered.

This is the same documentation that you would find at PyPi, so, although it’s widely available for popular packages, sometimes, in the case of minor packages it will not be available.

You also have the option of clicking ‘Documentation’ and checking it from your browser.

Now, let’s imagine that you want to install this package. Instead of going to the command line, you can just click the ‘Install’ button to install the latest stable version of the package.

Or select a specific version if your application requires it.

So let’s install requests.

If we now check our list of installed packages, ‘Requests’ is already there, ready to be imported and used in our scripts.

Although not common, you might also want to delete a package. In this case, you just need to click the three dots and then ‘Delete package’.

There you go, adding a package. PyCharm put a pretty face atop what might be very different machinery in the background...local or remote environment, pip vs. conda vs. pipenv vs. poetry, and so on.

## Add Repository Package
Alright, we covered how to install packages from PyPi, but you might also want to install packages from a version control system like GitHub or from your local machine.

In this case, how’d you do it?

It’s easy and straightforward. Let’s see.

In the Package tool window, you first click ‘Add packages’.

Then you have two options, ‘Add packages from version control” or “from your local disk’.

From the disk is as simple as providing the local path to your package directory or an archive.

We are not importing anything, so, let’s hit cancel and ‘Add package’ again.

This time we will click ‘From version control’.

Here you should first select the version control system that you use, and then specify a path to the target repository.

In both cases, you can select the -e checkbox to install the package in editable mode.

## Conclusion
Well, this is it for this video. You just saw how easy it is to install and manage Python packages in PyCharm.
A quick tip to wrap up the video is that sometimes people install Python packages from the local terminal without having the virtual environment activated.

This is a very common mistake by beginners.

Then when they try to import the package using PyCharm they see a red squiggly line and an error saying ‘No module named requests’, for example.

This kind of error can be prevented when using PyCharm to install and upgrade your packages.

I hope this video was useful for you, but if you still have questions feel free to ask them in the comments below.

In the next episode, we’ll see some basic code assistance tips that will boost your productivity in PyCharm, so make sure to hit the subscribe button and don’t miss any future updates.
