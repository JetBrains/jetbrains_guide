---
type: TutorialStep
date: 2021-05-12
title: Null & Void – Everything About Nothing in .NET
technologies:
  - .net
  - csharp
products:
  - rider
  - resharper
topics:
  - editing
  - ide
author: maartenba
subtitle: Stefan Pölz
thumbnail: ./thumbnail.png
longVideo:
  poster: ./thumbnail.png
  url: https://youtu.be/h7uVMKPHGtM
---

System.NullReferenceException: 'Object reference not set to an instance of an object.' I used to read this message almost every day.

Null references, also referred to as the "billion-dollar mistake" in that context, are also a great mechanism to express optionality and the unavailability of a certain resource. There are great tools to help us deal with ... utilize null pointers. IDEs and Analyzers have introduced diagnostics that warn us at compile time about potential trouble at runtime.

And recently the magnificent C# 8.0 has brought us nullable reference types: a language feature that lets us annotate our API to clearly communicate the design intent of nullability. So let's explore this (including the accompanying nullable attributes of the BCL) and other keywords and operators based on null.

As a side effect, we will learn about the fundamental difference between nullable reference types and nullable value types in .NET.

Additionally, we will discover an alternative to null while still retaining the semantics of "nothing" - Spoiler: the null object pattern

### 资源

* [Slides and Try.NET notebook](https://github.com/Flash0ver/F0-Talks-NullVoid)

### About the Presenter

**Stefan Pölz, Clean C# Coder – Test-driven .NET Developer**

My passion is to practice Clean Code and test-driven development in order to build maintainable software in an ever-evolving team, supported by tools from the .NET Ecosystem. I love to attend and speak at public developer events and author open-source projects, complementing my expertise in professional software development.

* Twitter: https://twitter.com/0x_F0