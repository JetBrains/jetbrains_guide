---
type: TutorialStep
date: 2021-05-14
title: Gradle dependencies
technologies: [java, gradle]
topics: [build]
author: tg
subtitle: Add or update dependencies in your build.gradle file.
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/6V6G3RyxEMk?start=347
---

## Gradle dependencies
Let's look at Gradle dependencies in a bit more detail. We can add a new dependency upon an exernal library using Cmd and N, or Alt and Insert, and selecting Add Maven Artifact Dependency. This will bring up the artifact search. We can type the name, or full path, of the artifcat we're trying to add, and IntelliJ IDEA will give a list of possible matches. We can tab into the list of results and move down to the one we want. We can see all the versions by pressing right arrow on the artifact, although generally we're going to want to select the most recent version. IntelliJ IDEA will insert the new dependency, usually with the implementation configuration. We should change this if we need to. IntelliJ IDEA tells us the build file has been changed, and that we need to reload these changes if we want the project to use them. We can do this by: selecting one of the suggestions in the message; pressing on the Refresh Gradle icon in the top right, or by using the keyboard shortcuts cmd shift I on the mac, or Ctrl Shift O on windows. Once IntelliJ IDEA has reloaded our updated build file with the new dependency, this new dependency will appear in our external libraries.

Alternatively, we may want to use IntelliJ IDEA's code completion for adding a new dependency. We get code completion in the build.gradle file the way we would in all supported file types. So we could add a new testImplementation dependency. IntelliJ IDEA will even complete the group and artifact name, we can use this to add a new dependency on the junit-jupiter-params library, for example. Once again we'll need to load these changes, which I'll do by using Cmd Shift and i.

If you find you're not getting code completion for your libraries, or the results you expect in your maven artifact search, there's a trick to help with that. Open the settings, go Build, Execution, Deployment -> Maven -> repositories. You'll see IntelliJ IDEA has a list of indexed repositories, and the date it was last indexed. Doing an Update on one or more of these repositories usually helps IntelliJ IDEA to give good suggestions for artifacts.

