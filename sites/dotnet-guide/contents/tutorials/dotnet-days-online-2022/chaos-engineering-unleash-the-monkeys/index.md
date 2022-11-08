---
type: TutorialStep
date: 2022-10-26
title: "Chaos Engineering: unleash the monkeys"
technologies: [.net]
products: [rider,resharper]
topics: [editing,debugging]
author: maartenba
subtitle: Jacob Duijzer
thumbnail: ./thumbnail.png
longVideo:
    poster: ./thumbnail.png
    url: https://youtu.be/3ycHJwx0Itg
---

Large online organizations like Netflix, Amazon, and LinkedIn have already been doing it for years: Chaos Engineering, i.e. injecting chaos into their production environments. And while it might sound scary (and it will be in the beginning), even you can apply some chaos to your applications. In this talk, I will demonstrate how to create chaos and how to apply resilience to work around it and create a more stable platform.

In this session we will look at the Chaos Monkey pizza shop, an event-driven, microservice oriented web application where you can order pizzas. The application will be running on Kubernetes, have a frontend, a GraphQL API, RabbitMQ, and a few .NET microservices. When everything is running smoothly, we will apply chaos on different components and try to resolve this chaos in different scenarios.

While trying to manage the application, it will become apparent that it is not only logging that is important but also traceability and metrics.

### About the Presenter

**Jacob Duijzer** Team Lead / Software Architect / Principal Software Developer at Team Rockstars IT

Jacob is a Software Engineer with a passion for quality, testing, and sharing knowledge. He likes organizing Coding Dojos or even Code Retreats to help teams grow and learn to develop qualitative software.

* Twitter: https://www.twitter.com/jacobduijzer
* Blog: https://blog.duijzer.com