---
date: 2020-09-22
title: Create your first Automation job
topics:
  - automation
  - projects
  - work
  - code
author: maartenba
subtitle: Want to use Space Automation, but not sure how to start?
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
  poster: ./preview.png
  url: https://youtu.be/F15DsyOckCc
leadin: |
  **A "hello world" automation script is just a click away!**

  To work with Space Automation, a `.script.kts` file has to be added to your repository.

  This file describes the automation jobs for your project, and the steps that are run as part of your CI/CD process.

  From a project's jobs, click **Create .space.kts** file and get a "hello world" job created!

  ```
  job("Hello world") {
  container("hello-world")
  }
  ```

  The editor sidebar shows many examples that help with common automation scenarios, such as running Gradle builds, .NET builds, Docker image creation, and more.

  Pick what works for your application, and commit the file from your browser. Space Automation will validate the script, and run your first automation job.

  [More about getting started with Space Automation...](https://www.jetbrains.com/help/space/automation-getting-started.html)
---

