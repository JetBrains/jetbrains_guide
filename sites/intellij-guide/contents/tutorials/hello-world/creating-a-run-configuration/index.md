---
type: TutorialStep
date: 2021-24-09
title: Creating a Run Configuration
technologies: []
topics: []
author: hs
subtitle: Viewing what IntelliJ IDEA did when we ran the application
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/H_XxH66lm3U?start=610
---

## Creating a Dedicated Run Configuration
 
Now we've created our JAR file, let's run it to check that the behaviour is the same as running our main method in our HelloWorld.java file. To run a Java application as a JAR, we can create a new [run configuration](https://www.jetbrains.com/help/idea/run-debug-configuration.html). 

1) Press **Shift** twice to use [search everywhere](https://www.jetbrains.com/idea/guide/tips/search-everywhere/). If you don't know the shortcut in IntelliJ IDEA, search everywhere is a great way to search for what you need. In this instance, we want to create a new run configuration so you can type into the dialog _edit configurations_.

2) When the correct option appears we can use the arrow keys to select it and press **Enter**. 

 ![Searching for edit configurations in search everywhere](edit-config-search-everywhere.png)

4) In the run configuration dialogue, you can see the run configuration that IntelliJ IDEA created for running the main method in our HelloWorld.java class. 

![Run configuration for HelloWorld.java](class-run-configuration.png)

5) Let's create a new configuration for running our new JAR file. You can do that by pressing the **+** button and select _JAR Application from the list.

6) First, let's give this new run configuration a name such as `HelloWorld JAR`. 

7) Click on the browse button for the **Path to the JAR**. You need to navigate to your JAR file. Remember it's in the output for your project. 

![Path to JAR file](path-to-jar.png)

8) Scroll down to the **Before launch** section at the bottom of the dialog. Select the **+** button here and select _Build Artifacts_ from the drop-down list.

 ![Select artifacts](select-artifacts.png)

9) Select and choose your HelloWorld.jar artifact and press **OK**. This means IntelliJ IDEA will rebuild the HelloWorld.jar file before we run this configuration. 

10) Press **OK** again to save the new run configuration. Our new run configuration is now displayed in the navigation bar by default.

![New JAR run configuration in the navigation bar](new-run-config-nav-bar.png)

If you press the black drop-down arrow adjacent to the _HelloWorld JAR_ run configuration, you can see both your HelloWorld original run configuration and the new one we just created. Let's run the new _HelloWorld JAR_ configuration to see if it works. Press the green arrow to the right of the run configuration with _HelloWorld JAR_ selected in the drop-down. 

You should get same "Hello World" output as you did from running the class file.

![Run window from the JAR file](run-output-with-jar.png)

Which proves that it works the way we expected. However, how do we know this is running the JAR file and not simply the class file? If you look in the Run window, you can see that IntelliJ IDEA is using the -jar argument to run the jar file. It also shows the full path to a hello world dot jar file.

`../IdeaProjects/HelloWorld/out/artifacts/HelloWorld_jar/HelloWorld.jar`

Whereas, before it showed the fully qualified class name, including the package. We can be confident that our new run configuration did run the HelloWorld.jar that we created. Let's finally check that our JAR file is being rebuilt each time we use the run configuration that we created. We will do this in the next step. 


