---
type: TutorialStep
date: 2021-24-09
title: Running Our JAR File
technologies: []
topics: []
author: hs
subtitle: Let's run the JAR file we just created
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/H_XxH66lm3U?start=602
---

## Compiling and Running the application 

- shoudl be the same output
- create a dedicated run configuration, press shift twice if we don't know shortcut
- Edit configuration in search everywhere, and press enter
- In teh run config dialog we can see the one we have for the main method
- want to create a new one, press button and select JAR application
- call it helloworldjar, click in browse and select the JAR file (find it, could copy the path which isn't in teh video but anyhow)
- Leave rest as defaults until you get to Before launch
- Select + button here, select build artifacts and select HelloWorld.jar artifact this will rebuild it before it gets run
- Select okay and okay to save it all
- Now we have a new HelloWorldJar run congiguration in the nav bar, show both run configurations
- Run the jar file and see if it works, same output, proves it works
- But how do we know that it's running the JAR file and not the Java class
- If we look in the run window we can see IDEA is using the -jar argumnt to run the JAR file and shows the full path to our JAR file whereas before it shows the FQ path to our class file including the package name
