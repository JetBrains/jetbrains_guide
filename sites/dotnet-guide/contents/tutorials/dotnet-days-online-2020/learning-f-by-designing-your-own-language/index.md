---
type: TutorialStep
date: 2020-05-14
title: Learning F# by Designing Your Own Language
technologies: [.net,fsharp]
products: [rider,resharper]
topics: [web, ide]
author: maartenba
subtitle: Oleksii Holub
thumbnail: ./thumbnail.png
longVideo: 
    poster: ./thumbnail.png
    url: https://youtu.be/34C_7halqGw
---

F# or any functional language can be daunting to learn. In most cases, the hardest part is to get started. Most people who are unfamiliar with F# often ask, "What kind of project would it make sense to write in it?" Well, the answer is "anything really", but it's better to start with something where functional paradigms really shine. 

I personally got into F# when I needed to write a parser for a custom language for a project I was working on. Building parsers in the traditional way is tedious and complicated, but once I discovered how functional languages can help express complex grammar rules using composable functions, I was sold. This whole exercise introduced me to union types, functional composition, monads, computational expressions, which I learned to later apply in other projects as well. 

Writing your own parser in F# is a perfect way to get started and learn the different aspects of the language. It is no surprise that building a parser combinator library is treated as somewhat of a "hello world" in Haskell. In this talk, I walk you through the basics of the functional combinatorics and then do a live coding session where I will show you how we can harness the power of F#, FParsec, and Rider to build a custom data-querying DSL. 

Demo code available at: https://github.com/Tyrrrz/JetBrainsDotnetDay2020

### About the Presenter

I'm a software developer at Svitla Systems; most of my experience is with cloud and web technologies. During my free time I do a lot of open source work, either by contributing to other projects or by maintaining my own. Sometimes I speak at conferences and write articles for my blog. I really like covering obscure or niche topics that I think are really cool and deserve more attention.

Twitter: https://twitter.com/Tyrrrz