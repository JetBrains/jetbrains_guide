---
type: TutorialStep
date: 2021-05-14
title: Syncing and reloading
technologies: [java, gradle]
topics: [build]
author: tg
subtitle: Sometimes you may need to encourage IntelliJ IDEA to reload any changes from the Gradle configuration.
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/6V6G3RyxEMk?start=917
---

## Syncing and reloading
Now let's look at some tips for working with Gradle in IntelliJ IDEA

We saw that IntelliJ IDEA usually shows us that the Gradle build file or settings have changed, and that we need to trigger a reload of the gradle settings so IntelliJ IDEA can use them. We can configure the settings for how IntelliJI DEA syncs with gradle by pressing on the settings icon in the gradle tool window, and selecting Auto-Reload Settings.

We can set IintelliJ IDEA to automatically reload the project after any changes in the build script files, so changes are automatically reloaded, or we can have the project automatically reload only after those changes are made by an external system, for example getting updated files from version control. By default, the External Changes setting is selected, this prevents the project being reloaded after every small change, and puts us, the developer, in charge of when we want to reload our changes.

We could choose not to reload after any changes, to give us total control, but since we may not always know if a reload is required, selecting External Changes makes sure that at least those changes are automatically applied by IntelliJ IDEA.

As we saw earlier, when we do make changes to a build file, we can reload those changes, when we're ready, by using Cmd Shift I or Ctrl Shift O on Windows.

Sometimes we want to force a reload of the whole project, so that IntelliJ IDEA uses the Gradle settings to set up and build the project. This can be particularly useful after a large batch of external changes, or if the project is not behaving the way we expect. I sometimes do a reload followed by a full rebuild to make sure the whole project is fully synced and building correctly.

Let's look at some more useful Gradle settings in IntelliJ IDEA

We can get to the settings from the Gradle Tool Window, or from the usual settings dialog and navigating to Build, Execution and Deployment, Build Tools, Gradle. Generally these settings are fine for most projects, and don't need changing.

Notice that IntelliJ IDEA has selected a specific JVM to use to run Gradle, this allows us to use a different JVM to the project JVM if we want. I will sometimes set this to be the same as the project JVM, so I can assume exactly the same version of Java for running things both from Gradle and from inside the IDE.

This "use Gradle from" dropdown is how we can configure using the Gradle wrapper to run Gradle, by default IntelliJ IDEA uses the gradle-wrapper.properties

We can say whether we want IntelliJ IDEA to run applications and tests via Gradle or use IntelliJ IDEA to run them - by default, if the project is a Gradle project, IntelliJ IDEA will use Gradle to run the applications and tests in that project. This is a good way to make sure we get the same results whether we run things from the IDE or via the build tool. I sometimes select IntelliJ IDEA to run tests, as this can be faster for running Unit tests than using Gradle. But since Gradle and the Gradle wrapper also have some optimisations for running your applciations, this is not always the case.

A final note on the Gradle Wrapper.

We saw how to tell IntelliJ IDEA where to get the settings of rthe Gradle weapper from. Projects generated using IntelliJ IDEA's Gradle wizard will usually have a gradle-wrapper.properties file which contains the details of the version of Gradle to use for this project. Ideally we want this to contain the latest versions of Gradle, where possible, so that we get the most up to date support and features. The current version of Gradle at the time of recording is 6.8.1, so let's go ahead and update this file to have that version number.

Once again, intellij idea has detected the changes and asks us to reload these changes. You can see the IDE downloads this new version of Gradle, and then rebuilds the project using it.

You may notice that the .gradle folder in your project has folders for all the versions of Gradle that you've used. We can safely delete the versions we're not using any more here.

In this screencast we saw an overview of the support for Gradle project in IntelliJ IDEA, and some tips for working effectively with them.

Thanks for watching!