---
type: TutorialStep
date: 2022-10-25
title: Let's Build an incremental source generator with Roslyn
technologies: [.net,csharp]
products: [rider,resharper]
topics: [editing,ide]
author: maartenba
subtitle: Stefan Pölz
thumbnail: ./thumbnail.png
longVideo:
    poster: ./thumbnail.png
    url: https://youtu.be/azJm_Y2nbAI
---

(Incremental) source generators allow us to trade in a bit of compile time for better performance during runtime: instead of resorting to general-purpose types and methods, we may utilize auto-generated variants optimized specifically for our user code. With these at our fingertips, we can facilitate high-performance scenarios by, for example, using a Reflection-free source. If nothing else, this Roslyn-based metaprogramming relieves authors of writing repetitive patterns over and over again.

While source generators (compatible with the .NET 5 SDK) potentially cause a sluggish developer experience in huge projects and solutions, the programming model of incremental generators (added to the .NET 6 SDK) mitigates that risk. Come join me in a live coding session and witness the (test-driven) implementation of a fully operational incremental source generator. We will unveil (most of) the intricacies and benefits of incremental source generation along the way.

### About the Presenter

**Stefan Pölz** Clean C# Coder – Test-driven .NET Developer

Stefan’s passion is to practice clean code and test-driven development in order to build maintainable software in an ever-evolving team, supported by tools from the .NET ecosystem. Stefan loves to attend and speak at public developer events and author open source projects, complementing his expertise in professional software development.

* Twitter: https://twitter.com/0x_F0