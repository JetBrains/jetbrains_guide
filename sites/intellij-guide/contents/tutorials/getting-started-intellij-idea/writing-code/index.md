---
type: TutorialStep
date: 2023-02-03
title: Writing code
technologies: []
topics: []
author: hs
subtitle: IntelliJ IDEA can help you to write code quickly and efficiently while minimising compilation errors.
thumbnail: ./thumbnail.png
---

Writing code is an integral part of our jobs and it's worth knowing what IntelliJ IDEA can do here to help you write great code but also give you 

## Completion

<iframe width="560" height="315" src="https://www.youtube.com/embed/K51K5Jc_MGc" >
</iframe>

There are lots of different types of code completion in IntelliJ IDEA including [basic](https://www.jetbrains.com/help/idea/auto-completing-code.html#basic_completion), [smart or type-based](https://www.jetbrains.com/help/idea/auto-completing-code.html#smart_type_matching_completion), [statement](https://www.jetbrains.com/help/idea/auto-completing-code.html#statements_completion), [postfix](https://www.jetbrains.com/help/idea/auto-completing-code.html#postfix_completion) and [more](https://www.jetbrains.com/help/idea/auto-completing-code.html).

Basic completion should be available out-of-the-box, but if not you can use (**⌃␣** | **Ctrl+Space**) to invoke it. For smart or type-based matching completion use (**⌃⇧␣** | **Ctrl+Shift+Space**). It's worth getting use to using type-based matching completion in your code base as IntelliJ IDEA will offer you the type applicable to your current context.

Statement completion (**⌘⇧⏎** | **Ctrl+Shift+Return**) is a great way to keep your code green and compiling. When you use this shortcut, IntelliJ IDEA will do the minimum needed to make your code compile. 

Postfix completion allows you to keep typing forward. It's a more linguistically natural way of thinking and arguably more efficient to _type forward_ all the time.

## Code Generation

<iframe width="560" height="315" src="https://www.youtube.com/embed/4jAXV67MRyA" >
</iframe>

IntelliJ IDEA is excellent at generating code constructs for you. It's always worth using (**⌘N** | **Alt+Ins**) to see what the IDE can do for you in this respect. When it comes to Java code, here are just some of the common code constructs that IntelliJ IDEA can generate for you:

- getters and setters
- constructors
- equals and hashCode methods
- override methods

... and more. You can also use the same shortcut to generate new files in your Project tool window. 

## Run Anything

<iframe width="560" height="315" src="https://www.youtube.com/embed/VFV-iaJCI1c" >
</iframe>

Similarly to Search Everywhere, Run Anything (**⌃⌃** | **Ctrl+Ctrl**) allows you to run any of your Run Configurations as well as scripts and commands such as `mvn clean` or `gradle --status`. You can also use Run Anything to open your recent projects such as `open intellij-samples`.

## Manage Dependencies Tool Window

<iframe width="560" height="315" src="https://www.youtube.com/embed/4-TO8pNIuks" >
</iframe>

Managing dependencies is something that we're all likely to need to do sooner or later and IntelliJ IDEA supports multiple ways of achieving it. Many of you will be used to using IntelliJ IDEA's completion capabilities in the `pom.xml` or `build.gradle` file. 

IntelliJ IDEA has also introduced a Dependencies window which you can access with Search Everywhere (**⇧⇧** + **Shift+Shift**) and then by typing in "dependencies" and pressing Enter. In this window you can add, remove and update you dependencies. You can also take a look at [Package Search](https://package-search.jetbrains.com/) if you don't have the IDE open.