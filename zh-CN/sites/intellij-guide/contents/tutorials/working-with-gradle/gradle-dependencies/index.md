---
type: TutorialStep
date: 2021-05-14
title: Gradle dependencies
technologies:
  - gradle
topics: [ ]
author: tg
subtitle: Add or update dependencies in your build.gradle file.
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/6V6G3RyxEMk?start=348
---

Let's look at Gradle dependencies in a bit more detail. We can add a new dependency upon an external library using **⌘N** (macOS) or **Alt+Insert** (Windows/Linux), and selecting "Add Maven Artifact Dependency".

![Add a new dependency](./add-dependencies.png)

This will bring up the artifact search. We can type the name, or full path, of the artifact we're trying to add, and IntelliJ IDEA will give a list of possible matches.

![Artifact search](./artifact-search.png)

We can tab into the list of results and move down to the one we want. We can see all the versions by pressing right arrow on the artifact, although generally we're going to want to select the most recent version.

IntelliJ IDEA will insert the new dependency, usually with the `implementation` configuration:

```groovy
dependencies {
    testImplementation 'org.junit.jupiter:junit-jupiter-api:5.7.0'
    testRuntimeOnly 'org.junit.jupiter:junit-jupiter-engine:1.7.0'
    implementation 'org.apache.logging.log4j:log4j-core:2.14.0'
}
```

We should change this if we need to, for example if this needs to be `testImplementation`. IntelliJ IDEA tells us the build file has been changed, and that we need to reload these changes if we want the project to use them.

![Build file changed](./build-file-changed.png)

We can do this by:
 - Selecting one of the suggestions in the message;
 - Pressing on the Refresh Gradle icon in the top right,
 - Using the keyboard shortcut **⇧⌘I** (macOS), or **Ctrl+Shift+O** (Windows/Linux).

Once IntelliJ IDEA has reloaded our updated build file with the new dependency, this new dependency will appear in our external libraries in the [project window](https://www.jetbrains.com/help/idea/project-tool-window.html).

Alternatively, we may want to use IntelliJ IDEA's code completion for adding a new dependency. We get code completion in the `build.gradle` file the way we would in all supported file types.

So we could add a new `testImplementation` dependency by starting to type the details. IntelliJ IDEA will even complete the group and artifact name. Try this out, by adding a new dependency on the `junit-jupiter-params` library. Once again you'll need to load these changes, e.g. with **⇧⌘I** (macOS), or **Ctrl+Shift+O** (Windows/Linux).

### Top Tip
If you find you're not getting code completion for your libraries, or the results you expect in your Maven artifact search, there's a trick to help with that. Open the [Settings/Preferences dialog](https://www.jetbrains.com/help/idea/settings-preferences-dialog.html), go to [Build, Execution, Deployment | Build Tools | Maven | Repositories](https://www.jetbrains.com/help/idea/maven-repositories.html).

![已编制索引的 Maven 仓库](./repositories.png)

You'll see IntelliJ IDEA has a list of indexed repositories, and the date it was last indexed. Selecting one, or all, of these and pressing "Update" usually helps IntelliJ IDEA to give good suggestions for artifacts.

Next, we'll see how IntelliJ IDEA knows about Gradle source set directories, and how that helps us.
