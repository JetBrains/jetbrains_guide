---
type: TutorialStep
date: 2021-24-09
title: Packaging the Application
technologies: []
topics: []
author: hs
subtitle: We can package the application into a Java archive file - a JAR
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/H_XxH66lm3U?start=495
---

## Packaging our Application in a Java Archive File (JAR)

4

When the code is ready, we can package our application in a Java archive. Joe files are often used to deploy an application to the production server. A built jaw file is called an artifact. Let's look at how to create artifacts and intelligent idea. We can go to file project structure, or we can use the keyboard shortcut command semi-colon or shift control alt and S on windows to open the project structure.

Let's select artifacts. We need to add a new artifact to our project. Let's click the plus button and select jar. We need to choose from modules with dependencies. We don't need to change anything for the module. This is already correct. We do need to say which class in our project has the main method.

We'll click on the browse button. Intelligent data shows as a list of classes. We only have one in our project. So let's go ahead and pick our hello world class. All of the other defaults are fine for us. So select, okay. Now a project structure dialogue shows our new hello world dot jar artifact. This all looks correct.

So let's press okay here, too. What we've done is defined how to build the jar file, but we haven't actually built it yet. We need to go to build, build artifacts. We only have one to choose from the hello world dot jar that we've just defined less, press enter to build this. Now the status bar shows that this has been completed.

Intelligent idea, puts the artifact in out artifacts in a hello world, underscore jar folder. We want to make sure this Jaffa was created correctly. So let's try running it when we run it, it should give us the same output as running the original application. To run a Java application packaged in a jar.


