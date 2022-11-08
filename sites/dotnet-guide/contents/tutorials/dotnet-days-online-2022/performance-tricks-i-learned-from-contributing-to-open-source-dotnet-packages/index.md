---
type: TutorialStep
date: 2022-10-25
title: Performance tricks I learned from contributing to open source .NET packages
technologies: [.net,csharp]
products: [rider,resharper,dotmemory,dottrace]
topics: [profiling,editing]
author: maartenba
subtitle: Daniel Marbach
thumbnail: ./thumbnail.png
longVideo:
    poster: ./thumbnail.png
    url: https://youtu.be/NELaITuylDg
---

As a practical learner, I've found that performance optimizations are my biggest challenge and that I've learned the most helpful tricks from them, mostly by trial and error. It turns out the Azure .NET SDK is a perfect “playground” for learning those tricks – it's maintained by people who care and give feedback.

Over the past few years, I've contributed over fifty pull requests to the Azure .NET SDK. In this session, I'll walk you through the performance improvements I made and help you develop your own “superpowers” – spotting and avoiding closure allocations, finding opportunities for memory pooling, and more.

### About the Presenter

**Daniel Marbach** Engineer & Solutions Architect at Particular Software

Daniel is a Software Engineer at Particular Software, the makers of NServiceBus, and a Microsoft MVP for Integration. He can bend minds and spoons with asynchronous programming and has contributed to many open-source projects.

In his free time, Daniel enjoys weightlifting, dark-roasted coffee, playing with his son, and writing more code. At least until midnight, when his self-imposed router hack kicks in.

* Twitter: https://twitter.com/danielmarbach