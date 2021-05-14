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

Next, let's look at some more useful Gradle settings in IntelliJ IDEA.
