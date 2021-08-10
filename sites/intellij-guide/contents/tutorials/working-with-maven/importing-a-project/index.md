---
type: TutorialStep
date: 2021-08-09
title: Importing a Project
technologies: []
topics: []
author: tg
subtitle: IntelliJ IDEA understands projects that use Maven and can import them with minimal configuration
thumbnail: ./thumbnail.png
longVideo:
    poster: ./new-maven-project.png
    url: https://youtu.be/pt3uB0sd5kY?start=3

---


While it's possible you may want to create your own Maven project, it's much more likely you'll import an existing one.  This is very straightforward in IntelliJ IDEA. Select Import Project and navigate to the location of the code.  You can select the root of the project and IntelliJ IDEA will figure out how to import the project, but if you specifically know this is a Maven project and you want to use this model for your project structure, it's simplest to select the top-level Pom file, and the IDE will know you mean to import a Maven project. We can see the specific options offered to us for importing a Maven project. Generally, we'll want to keep the default settings. But here I would like to make sure any sub-projects are located and set up correctly. I can select to automatically reimport the project if we make any changes to pom.xml, in this case I don't want to at this time, because for most non-trivial projects this can take some time and I would prefer to have control over when I apply changes.  For everything else, we'll keep the defaults.

The next screen will show us all the Maven projects IntelliJ IDEA has found to import, in this case it's just one. I'm going to keep the default JDK, and default project name and path.

IntelliJ IDEA will use the Maven definition to figure out the structure of the application, and of course download all the required dependencies and add them to the project.  You can use Cmd E or Ctrl E to navigate to the Maven window, and here we can see the dependencies of this project.

As before, this window lists the goals and lifecycle phases.  We can run any of these by double-clicking on them, and we can see the familiar results of running a Maven phase in the run window, including dependencies being downloaded and tests being run. Let's skip watching the full thing and see the results…

Our build was successful, and we can see Maven has created a target directory with all the generated code and other output.

Of course, we can run the project's tests via Maven, which is particularly useful if there's a complex setup phase in Maven to get the tests running, but we can also simply run all tests or a subset of them from IntelliJ IDEA as usual.

Editing the pom.xml file is easy, and of course you get full code completion.  If you're working with Maven profiles, IntelliJ IDEA makes this simple. You can choose to enable or disable one or more profiles when you're running any of the Maven goals or phases.



There are a number of things you can do with your project from the Maven window, be sure to take a look at all the icons to see what they can do.

Everything we've looked at so far has been in the free Community Edition of IntelliJ IDEA. The full Ultimate version has some extra features.  One which may be particularly useful in understanding your Maven project is seeing the Dependencies as a diagram. This can give you an idea of which dependencies are directly imported by your application, and which are transitive. You can also see test dependencies in green, and any unresolved ones will be in red. You can change the visibility of a dependency or exclude it, via the diagram. You can also filter which ones to show, if the diagram is too big to see easily.

In this video we've covered the basics of working with Maven in IntelliJ IDEA. Take a look at the documentation for more details, or check out the YouTube channel for more video tutorials. 


