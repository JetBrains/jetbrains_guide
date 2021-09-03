---
date: 2020-12-03
title: 'Open Shell in Kubernetes'
technologies:
  - kubernetes
topics: [ ]
author: dlsniper
subtitle: 'Run an interactive shell for the container in the selected pod.'
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
  poster: ./thumbnail.png
  url: https://www.youtube.com/watch?v=WF1BdDtZsjY&list=PLM-t1Z4tbFfl-umlMg_ND7gW9rGjTDzKt&index=24
leadin: |
  **How to use:**

  Select the pod you want from the _Kubernetes_ view in the _Services_ tool window, then click on the _Run Shell_ button. A new tab will open and a terminal will be attached to the running pod.

  By default, the IDE runs _/bin/bash_ as a shell. To run a different one, click the _Show Settings_ button or open _Settings/Preferences | Build, Execution, Deployment | Kubernetes_ and specify the shell that your pods use.

  **Note:** You must have the [Kubernetes plugin](https://plugins.jetbrains.com/plugin/10485-kubernetes) provided by JetBrains installed for this action to work.

  <span class="tag is-rounded">New in 2020.3</span>
---

