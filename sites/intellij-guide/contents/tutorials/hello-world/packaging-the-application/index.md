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

- JAR files are often used to deploy an application to a prod
- A built JAR file is an artifact
- File > Proj Structure or Cmd ; or S+C+A+S for Proj Structure
- Select Artifacts
- Add a new artifact to our project
- select the + button and select JAR
- We need to choose from empty or from modules with dependencies
- Don't change anything in the module, we just needs to say which class has our main method
- See a list of classes, so we only have one, pick it. Leave the default sand hit OK
- Project Structure dialog shows the artifact and press OK
- We've defined how to build it but not actually built it yet
- We need to go to Build > Build Artifacts and we only have one so we can select that
- Press enter to build the only one we have. 
- Status bar shows that it's been completed
- IntelliJ IDEA puts it in out>artifacts> HelloWorld_jar folder
- Make sure it's been created correctly so let's run it
- 