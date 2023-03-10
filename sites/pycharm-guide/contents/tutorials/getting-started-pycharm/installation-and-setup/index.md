---
type: TutorialStep
date: 2023-03-30
title: Installation and Setup
technologies: []
topics: []
author: hs
subtitle: TO BE ADDED
thumbnail: thumbnail.png
longVideo:
  poster: poster_long.png
  url: https://youtu.be/2EB8siO-_OM
---

In the previous video, we stopped on the Welcome screen’s Projects tab.

But...what’s a project and how does it help me? What kinds of projects does PyCharm support? How do I start working with projects that might need a virtual environment?

Well...let’s take a look.

## Why "Projects"?
We get this a lot.

I’ve just installed the IDE, I’m looking at the welcome screen, and...I need to make a (air-quotes) “project.”

But what is a (air-quotes) “project” and why do I need it?

This is a major difference between an IDE like PyCharm and text editors, so let’s take a look.
You might have a really big codebase.

PyCharm is great at analyzing all of that code and making sense of it, then making you really productive at: moving around, editing, bulk refactoring, warnings about problems.

Where do we put this code intelligence? In a “project”.
But your coding isn’t just editing files. You have development workflows too. Running code. Debugging code. Python console, system terminal, tests, coverage, profiling, version control, databases, frontends...the project is your central view of all of this, for your code, in a consistent, quality, familiar UI.
So, yeah, people don’t usually fire up PyCharm to jot something down in a file. It’s your work, it’s your project, and you spend time in it.

## Starting a Project
Now, back to where we left off on the Welcome screen and the “Projects” tab.
If you’ve already worked on a project,

the welcome screen will look a bit different to you...
...with the list of your recent projects shown in the center but the options will stay the same.
There are three available options on this screen. (pause)

First, we could get an existing project from version control like GitHub, for example.
All we would need to do here is to paste a repository URL and click Clone.

I’m not going to clone the repository right now. If you want to learn more about this and other version control system -- VCS --  topics, please take a look at the ‘Introduction to Git and GitHub in PyCharm’ video from this series.
The second option we could go for is opening a project stored on our machine.

Pause.
From there, navigate your local drive to find a project you want to work on. Then, select it and click Open.

Again, we won’t be showing that option, so I’ll hit Cancel.
Instead, I’ll go with the 3rd option.

We’re going to create a new project.
Now that we decided to create a new project we can see the first difference between PyCharm Community and PyCharm Professional.

If you are using PyCharm Professional you can start taking advantage of project types.

Project types are pre-configured environments that automate the project creation by setting technology-specific preferences, downloading dependencies, creating required files, and etc.

Because PyCharm Community is only meant for pure Python you won’t see these options on the left side.

In PyCharm Professional, on the other hand, there are several technologies that you can choose from.

You can also select ‘Pure Python’ if all you want to do is work on a pure Python project, which is what you get in PyCharm Community Edition.

But chances are that your work requires a Python web framework, or scientific tools, or maybe front-end technologies.
In this case, you have some options.

If you are working with a Python Web project…

...PyCharm supports popular frameworks such as Django and Flask out of the box.

If working with data science is your goal you can leverage the scientific tooling setup. It will create both a Conda environment and the folder structure for you.

Finally, if you want to work on your front-end, PyCharm Professional also has professional support for working with JavaScript, TypeScript, and its related technologies, including Angular and React.

In this video, we are going to start working on a Django project.

We will call it “getting_started”.

We now need to take a detour and cover something in Python that is important, but certainly a stumbling block: virtual environments.

## Interpreters
In Python projects, it’s a best practice to do your work by creating a “virtual environment.” Each project then acts like it has its own Python. If you install some packages in one project, it won’t break another project.

It’s a painful part of starting a Python project. We won’t go into depth about it, but it’s important to know that PyCharm tries really hard to take care of this part: creating and activating a virtual environment for your new project.
Back to the New Project screen, we have a section called “Python Interpreter: New Virtualenv environment”.
In our case, we are going to create a new one using virtualenv, but as you can see here PyCharm also supports PipEnv and Conda out of the box.

I already have Python 3.10 installed as my default Python. PyCharm detected it, so I click ‘create’.

What happens next? PyCharm creates a new project for us. A Django project in fact.

PyCharm created and activated a virtual environment…

...downloaded all required dependencies,

...and generated an empty Django project with configuration files

... Run and Debug configurations, and more.

And the cool thing is that I can jump straight to coding now!

Now, if you close this project and we go back to the PyCharm welcome screen...

...you’ll see that the ‘Projects tab’ has changed slightly. Now you see your recent projects, and this list will grow as you have more projects.

## Conclusion
Alright, in this video we learned about projects, and how to start a new project in PyCharm. For more information on working with projects in PyCharm, check out our documentation. The links are in the description below.

In the next video, we are going to dive into PyCharm’s UI so you’ll feel more comfortable starting your code journey right away.

See you there!
