---
type: TutorialStep
date: 2021-08-09
title: Final Steps
technologies: [ ]
topics: [ ]
author: hs
subtitle: Wrapping the migration up
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/F8UTTTDtbH0?start=808
---

Now we've removed all references to JUnit 4 classes and functionality, we can remove the vintage engine and use just the modern JUnit 5 test engine. Load the maven changes with **⇧⌘I** (macOS), or **Ctrl+Shift+O** (Windows/Linux) and rebuild the project **⌘F9** (macOS), or **Ctrl+F9** (Windows/Linux), to see it all compiles.

Check the tests still work and pass, for example by pressing **Ctrl** twice to bring up the Run Anything window. If you type _All_ you should see the "All Tests" run configuration and run all our project's tests.

![run_anything.png](run_anything.png)

If everything passes, you can be comfortable checking in these changes.

We have successfully migrated all the tests in this project to JUnit 5.  The first step was to migrate the project to run our JUnit 4 tests on the JUnit 5 platform. For many projects it may be enough to do this, and there may be no need to go all the way to removing the vintage engine. The most important thing is to be able to write and run tests in the new JUnit 5 style. We've covered the advantages of using JUnit 5 in [another tutorial](../../writing-junit5-tests).
