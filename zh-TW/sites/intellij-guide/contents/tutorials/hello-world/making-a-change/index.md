---
type: TutorialStep
date: 2021-24-08
title: Making a Change
technologies: [ ]
topics: [ ]
author: hs
subtitle: Editing the output of our Hello World application to check it's working as we expect.
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/H_XxH66lm3U?start=747
---

Let's go ahead and make a change to the Java file and see if you get a new message printed out when you run your _HelloWorld JAR_ configuration again.

1) In your `HelloWorld.java` class, change the string from "Hello World" to something of your choice.

![Changed Hello World string](changed-hello-world.png)

2) Instead of clicking on the arrow next to the _HelloWorld JAR_ run configuration, you can press **Control** twice to display the [Run Anything](https://www.jetbrains.com/help/idea/running-anything.html) dialog. Start typing in _HelloWorld and you will see both your run configurations. Select _HelloWorld JAR_ and press **Enter**.

![Run anything dialog box with Hello World](run-anything.png)

3) Select your _HelloWorld JAR_ file and press **Enter**. In your [Run window](https://www.jetbrains.com/help/idea/run-tool-window.html) you should see that IntelliJ IDEA has run your application and printed out your new string. This means it rebuilt the JAR file prior to running the application.

![Run window showing new output](new-output-string.png)

You can also scroll to the right of your run window to check which run configuration IntelliJ IDEA used if you want to. Let's summarise what we've learned in the final step of this tutorial.


---