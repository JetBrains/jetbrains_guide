---
date: 2023-04-10
title: Connect to a Running Docker Container Shell
technologies: [containers,.net]
topics: [ide]
products: [rider]
author: maartenba
subtitle: Explore the file system and processes in the container, tail a log file, and more.
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
screenshot: ./screenshot.png
leadin: |
    When using Docker in your development workflow, it is sometimes necessary to connect to a running Docker container to perform critical tasks or troubleshoot issues.
    For example, you may want to explore the file system, look at processes running in the container, tail a log file in the container, and more.

    You can connect to a running Docker container in many ways: using the `docker attach` command, using `docker exec`, or (surprise!) with the click of a button in the IDE!

    After [connecting to Docker](https://www.jetbrains.com/help/rider/docker.html#connect_to_docker), the **Services** tool window gives you access to all functionality around Docker.
    You can start/stop containers, explore images, networks, and volumes, inspect a container's environment variables, expose ports, [and much more](https://blog.jetbrains.com/dotnet/2019/05/21/containers-images-introduction-docker-rider/).

    After selecting your container in the tree on the left-hand side, clicking the **Terminal** button will open a terminal inside the container and lets you work with it interactively.
    You can now run any command in the Docker container and look at the results.

---
