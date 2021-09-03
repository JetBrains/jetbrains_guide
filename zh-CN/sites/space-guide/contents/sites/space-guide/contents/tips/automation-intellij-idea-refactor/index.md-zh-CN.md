---
date: 2020-09-22
title: Use IntelliJ IDEA to write Space Automation scripts
topics:
  - automation
  - projects
  - work
  - code
author: maartenba
subtitle: Automation scripts are Kotlin-based. Use an IDE to create and refactor your builds!
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
  poster: ./preview.png
  url: https://youtu.be/jfVQduaZP6U
leadin: |
  **Space Automation scripts are Kotlin!**

  That `.space.kts` file in your repository describes automation jobs... and it's Kotlin! Install the [Space plugin](https://plugins.jetbrains.com/plugin/13362-space) into your JetBrains IDE, and enjoy the power of code completion, syntax highlighting, and more!

  As an example, you can move common logic into functions. Need to send a chat message after build completes? Write a function for it, or use the [*Extract method*](https://www.jetbrains.com/help/idea/extract-method.html) refactoring to move existing script code into a separate function.

  Here's a bonus tip! Have a look at this example of [using `@file:DependsOn()` to reference an external library](https://www.jetbrains.com/help/space/slack.html) and get even more power in your automation!

  [More about the Space plugin...](https://www.jetbrains.com/help/space/space-plugin-for-ide.html)
---

### Example automation script used in video

For reference, here's the example automation script used in the video. It runs a Gradle build, and then sends a message to a chat channel named *Deployments*.

```
import circlet.pipelines.script.*

job("Build and run tests (api)") {
    container("openjdk:11") {
        resources {
            memory = 2048
        }

        kotlinScript { api ->
            println("Running in branch: " + api.gitBranch())

            api.gradlew("build", "test", "deploy")

            notifyNewDeployment(api)
        }
    }
}

suspend fun notifyNewDeployment(api: ScriptApi) {
    val recipient = MessageRecipient.Channel(
        ChatChannel.FromName("Deployments")
    )

    val content = ChatMessage.Text(
        "New release available for project: ${api.projectKey()}"
    )
    api.space().chats.messages.sendMessage(recipient, content)
}
```