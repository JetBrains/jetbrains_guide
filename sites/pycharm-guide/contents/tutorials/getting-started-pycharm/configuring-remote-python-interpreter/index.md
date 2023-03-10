---
type: TutorialStep
date: 2023-03-30
title: Configuring a Remote Python Interpreter
technologies: []
topics: []
author: hs
subtitle: TO BE ADDED
thumbnail: thumbnail.png
longVideo:
  poster: poster_long.png
  url: https://youtu.be/6RlgQBB1UDU
---

We just looked at configuring a local interpreter. But we don’t always have a “local” environment. Sometimes – and increasingly often – our environment is…”over there”.

How do we configure remote interpreters – SSH, Docker, Docker Compose, WSL, etc. – in PyCharm Professional?

## New Interpreter
As discussed in the previous video, to run your Python code you’ll need to configure at least one Python interpreter. We showed a number of ways to get there, for local interpreters.

In this video, we’re going to cover technologies for remote interpreters. Instead of a Python installation on your local environment, the Python is…”over there”.

For all of these options, make sure you have Python downloaded and installed on your machine, as well as any of these technologies.

Where do these choices appear? As you can see, my project from the previous video has a local interpreter -- a virtualenv -- setup.

To setup a remote Python interpreter, I can either:

Click the Python Interpreter widget in the status bar and choose ‘Add Interpreter’.

Or, go directly to the Add Interpreter screen in Settings/Preferences, [pause]

...then click the gear icon and choose Add.

We’re now oriented on where in PyCharm Professional we’ll be working.

Support for remote interpreters is part of PyCharm Professional’s offering. If you haven’t yet, I encourage you to try it now. It has a free 30-day trial.

## SSH
Let’s start with remote interpreters using SSH, one of the oldest and most supported systems for remote execution.

From the “Add Python Interpreter” dialog, click “SSH Interpreter.”

Here you can choose to either configure a new server or select an existing one.

To configure a new server, select ‘New server configuration’ and specify the server information, including host, port, and username.

When finished, click Next.

Next, we are going to provide authentication options to establish the connection.
You can choose to connect via password or with a key pair. I will proceed with the password, then click “Next”.

In the final step I’ll choose the path to the Python interpreter inside the target server.

...then configure the path mappings between the local project and the server.

This is necessary because PyCharm needs a local copy of your source code to provide you with some advanced features such as code completion and project-wide refactorings.

When you are working on remote hosts, you are actually editing your files locally and synchronizing it right after.

This is why I suggest you select the checkbox that enables automatic upload of the local changes to the remote server, so you ensure everything is always synced up.

When done, click “Finish”.

And this is it. By clicking ‘finish’ we went through all the necessary steps to configure a new remote interpreter via SSH.

With that in place, we can now run this code, but remotely, over SSH.

Now that we created a new server configuration, let’s see how to select an existing one.

Back to the initial step, instead of ‘New server configuration’ I will select ‘Existing server configuration’.

Here I can click the dropdown and choose an available SSH configuration from the list. For example, the configuration I just saved.

Easy? This was the first way to configure a remote interpreter in PyCharm. Now, let’s move on and see how to do it in Docker.

## Docker
Another way you can configure a remote interpreter in PyCharm is via Docker containers.
Docker also requires some pre-configuration, so, in order to follow the next steps make sure that you have Docker installed and that you have a stable Internet connection.
Now, the first step I’ll go through is going to “Preferences”, selecting “Build, Execution, Deployment | Docker”, and select Docker for mac.

If you are on a different OS you should pick the option that describes your OS.

In this video we are going to use the example from our documentation on the “Using Docker as a remote interpreter” page.
For that example, I have already created a PyCharm project called “QuadraticEquation” and added a file called ‘solver.py’.

This project currently has a local interpreter configured inside a virtual environment. Let’s configure a Docker-based remote interpreter for this project.

I will click ‘Add interpreter’ to bring up the Add Python Interpreter dialog.

There, I select ‘Docker’ as the server, and add ‘Python:latest’ as the ‘Image name’.

We can leave the Python interpreter path as is, and click OK.
If you now check the interpreter in the status bar you will see that we are currently using our remote Docker-based interpreter in this project.

Now it’s time to run our code inside the container. To do that, click the gutter icon and select ‘Run Solver’.

You can see that the script is launched in the  ‘Run’ tool window, and here you can see the container ID where it is running.

If you want to double-check it, go to the ‘Services’ tool window’, expand the ‘Containers’ node, click properties and, ha!, there you go. The same container ID.

And there you go.

This is how you configure your project to run remotely inside a Docker container. Now let’s talk about Docker Compose.

## Docker Compose
Maybe you’d like to run multiple containers instead of one at a time. Let’s see how to use Docker compose to configure remote Python interpreters in PyCharm.

For starters, the same requirements described for Docker apply for Docker Compose.

In this example we are going to use a Django application with a PostgreSQL database running in a separate container. I will go through the example, but you can find a proper step-by-step in our documentation.

I started by cloning the project from GitHub. If you want to know how  to do it, make sure to jump to the video “Creating your first project in PyCharm”. The link is above.

In this example we created two containers, one for the database and one for the application, and have Docker Compose linking them together.

This repository already has a Dockerfile.

...And a docker-compose.yml file.

As you see from this file we are creating two services, one web and one database.

With these files in place we can start configuring Docker Compose.
Open Preferences and go to Build, Execution, Deployment and then select Docker.

In my case I’ll add support for Docker for Mac, but it will depend on your OS.

With this part ready click OK and let’s configure the interpreter.
On your Status Bar click the current interpreter name and click ADD INTERPRETER.

Now select Docker Compose from the list.

For server, select “Docker”.

The configuration file is the docker-compose.yml file we created earlier.

Service is the entry service declared inside your docker-compose file. In this case, we will use our web service. All other containers in the compose file will be started together with this one as if you started them with the command docker-compose up from the command line.

In this case we will not configure any environmental variables or change the Python interpreter path.

PyCharm will now setup the remote interpreter.

Now open your docker-compose file and click the double ‘play’ button next to services.

We’ve just launched our services using Docker Compose.

We can see it in your ‘Services’ tool window now.

Our settings file tells Django how to connect to the Postgres server running in the “db” Docker Compose service.

Now we should be ready to run the whole application under Docker Compose.

First I will run any pending migrations.

Then will edit the run configurations for this project via Run, Edit configurations.

Just update your ‘HOST’ to 0.0.0.0 and click OK
To run, just click the ‘play’ button, wait until everything is launched, and click the link to open in the default browser.

That’s it, we configured a set of services to run under Docker Compose, integrated into the IDE’s tooling, then successfully launched our app.

## WSL
Let’s now see our last way to configure a remote interpreter in PyCharm, using the windows subsystem for Linux - WSL. This is available for Windows users-only.

First, you need to do some prep from your side.
Make sure you have Python installed on your computer
Install the Windows Subsystem for Linux and initialize your Linux distribution.

Ensure you have ‘rsync’ installed
We’ll add a Python interpreter based on WSL. Start by clicking the project interpreter in your status bar and then click ‘add interpreter’.

In the Add Interpreter dialog, this time, select WSL from the list.

Then select the Linux distribution, and specify the path to the Python executable inside the distribution you selected.

As a note, PyCharm currently can’t manage virtual environments inside WSL, so packages will be installed into this interpreter.

Click OK and PyCharm will add the interpreter to the project and set the path mappings.

When working in WSL it’s also good to configure your terminal in WSL, for that, you will need to open ‘Settings’ and go to Tools, ‘Terminal’.

Select the subsystem path from the dropdown in the ‘S hell path’ field and click ‘OK’.

Type wsl.exe in the Shell path field and click Ok.

We now have a WSL-based Python environment and interpreter to use for this project, just like our other kinds of interpreters.

## Conclusion
And that’s it for configuring remote interpreters in PyCharm Professional!

I hope this video was useful for you, but if you still have questions feel free to ask them in the comments below.

In the next episode, we’ll see how to install and manage Python packages in PyCharm, so make sure to hit the subscribe button so you won’t miss any future updates.
