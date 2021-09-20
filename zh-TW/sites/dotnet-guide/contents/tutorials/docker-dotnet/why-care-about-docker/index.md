---
type: TutorialStep
date: 2021-04-26
title: Why Should .NET Developers Care About Docker?
technologies:
  - .net
  - containers
products:
  - tRANSLATED Rider
  - resharper
topics:
  - data
author: khalidabuhakmeh
subtitle: We'll see why containerization is an important topic for .NET Developers.
thumbnail: ./thumbnail.png
---

Long time .NET developers will remember the early release of the framework in 2001, with Microsoft releasing the first beta versions to the community. A lot has happened to the .NET ecosystem in those 20+ years, most notably the rise of the cloud and distributed programming. The cloud has brought with it a diversity of technology stacks never before seen by .NET developers, moving .NET development from a Windows-centric development platform to a polyglot powerhouse.

Our development environments have become more powerful, and our production environments have a seemingly unlimited scale, with the only limiting factors being our budget and time. As developers, we want our development experience to be smooth and productive, with the confidence that once our application deploys to production, our users will have the best experience possible. The balancing act between development, budget, and time constraints can put developers in a difficult position to prioritize decisions.

Luckily for developers, the rise of DevOps has brought the cloud, at least some variation of it, to our local development environments, with a core tenet being:

> If we can run a production-like environment throughout our development, testing, and staging process, then our application's chances for successful operation will increase.

Before we get into the details, let us define what a **distributed system** means. Conversations around distributed systems generally revolve around buzzwords like **microservices**, **service-oriented architecture**, **message buses**. The truth is, many .NET applications today have to make at least one network call outside of the application domain, whether it be to a database, a web service, a network share, or other network-bound dependencies.

**In an inclusive definition, most developers work on distributed systems, whether we've chosen a monolith-style architecture or broken up our business logic into microservices.** The question shouldn't be whether or not we work on a distributed application, but how distributed is our application?

Regardless of our development approach, we can use Docker and containerization to enhance our development experience. We'll get into what these terms mean in the next section.

From a high-level, developers want the following attributes from their technology choices:

- **Performant:** Little to no performance compromises when running our production workloads or working locally within our development environments.
- **Reproducibility:** The application we build has predictable and consistent configuration and topology, ideally through a descriptive medium that we can manage in source control.
- **Flexibility:** The ability to modify our application topology to meet the current and future needs of our problem domain, whether during development, testing, or production workloads.
- **Observability:** Knowing critical information about our distributed application and its dependencies helps diagnose and solve programming issues.

As we go through this tutorial, we'll address each of these factors and how containerization and Docker can help .NET developers achieve their desired goals.

In conclusion to this section, most developers work with distributed systems and can benefit from containerization. Docker is a versatile tool that .NET developers can use to enhance their development time experience, provide more consistent testing environments for quality assurance, and deliver with confidence a production environment that will make users happy. The containerization of applications is a tool, and like all tools, developers will need to decide where to apply their knowledge.

By the end of this tutorial, we can decide whether we want anything to do with containerization, jump all in, or selectively apply it to our development process.

### See Also

- [Docker Docs](https://docs.docker.com/)
- [.NET](https://dot.net)
- [JetBrains Rider](https://jetbrains.com/rider)
- [JetBrains ReSharper](https://jetbrains.com/resharper)