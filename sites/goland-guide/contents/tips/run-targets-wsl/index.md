---
date: 2021-05-24
title: 'Run Target support via WSL'
technologies: [go]
topics: []
author: dlsniper
subtitle: 'Run your application or tests in Windows Subsystem for Linux (WSL) with ease'
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
  poster: ./poster_short.png
  url: https://www.youtube.com/watch?v=qjmNPEs0OoU&list=PLM-t1Z4tbFflGjn5Qzjjku5J7SX3p-nhY&index=1&t=0s
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
---
