---
date: 2021-05-24
title: 'Run Target support via WSL'
technologies: [go]
topics: [running, debugging, debugging]
author: dlsniper
subtitle: 'Run your application or tests in Windows Subsystem for Linux (WSL) with ease'
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
  poster: ./thumbnail.png
  url: https://www.youtube.com/watch?v=bjukeT3p0Mc&list=PLQ176FUIyIUZrbrlz4AY1V8VzBJKZyVlW&index=108
leadin: |
  Run Targets are a new IDE feature that allows you to run code
  in environments where GoLand is not installed.

  **How to use:**
  If a target already exists, select it from the *Run on* field
  in a *Run Configuration*, then run that configuration.

  If not targets exist, then click on the *Manage Targets*, next
  to the *Run on* field.
  
  Then, click on the _+_ button and select in which environment
  you want to run the application or test.

  After the IDE introspects that environment, click on *Next*,
  confirm the environment settings, and click on *OK*.

  Then select the newly created target in the *Run on* field.

  Configure any additional options, and, finally, run the
  configuration as with any other. 

  **Pro tip:** If you want to compile your sources in a remote
  environment, then select the *Build on remote environment* option
  from the *Run Configuration* settings.

  **Pro tip:** You choose to compile on the local machine. This
  means you don't have to worry about the dependencies being
  available in that environment.

  <span class="tag is-rounded">New in 2021.1</span>
---
