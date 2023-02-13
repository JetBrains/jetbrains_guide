---
type: TutorialStep
date: 2023-02-03
title: Understanding code
technologies: []
topics: []
author: hs
subtitle: Understanding code can be challenging, especially if you're new to the codebase.
thumbnail: ./thumbnail.png


---

Once we know how to navigate and get the IDE to help us read the code, the next step is to really understand that code. Again the IDE can help us here depending on our existing context and what we're looking to achieve. We will look at:

- How to ask IntelliJ IDEA to change or fix something
- Finding the Type
- Analysing your Data Flow

## Context Actions/Fix Anything

<iframe width="560" height="315" src="https://www.youtube.com/embed/PiT9MXa9gjI" >
</iframe>

Also known as *Fix anything* and *Alt+Enter* this is a shortcut that is well worth committing to memory. You can invoke Context Actions (**⌥⏎** | **Alt+Enter**) on any piece of code, irrespective of if it has any highlighting on. Often when IntelliJ IDEA has highlighted a piece of code it's because it has a suggestion for you. In this instance you can use Context Actions to see what IntelliJ IDEA is suggesting to improve or change the shape of your code. Often you can use Context Actions on code without any highlighting and IntelliJ IDEA will offer to reshape the code which can be a useful tool to help you understand it.

## Finding the Type

<iframe width="560" height="315" src="https://www.youtube.com/embed/OIJLa6rixdM" >
</iframe>

Sometimes it's helpful to know the type of a parameter in your code when it's not immediately apparent to you. You can do this with (**⌃⇧P** | **Ctrl+Shift+P**) to get the type information. This is another tool in your kit when it comes to understanding what some code does.

## Analysing Your Data Flow

<iframe width="560" height="315" src="https://www.youtube.com/embed/CyMIlg7g-Rc" >
</iframe>

Data Flow Analysis is a powerful tool that can show you how data is moving through your code. Using this method of analysis can help you to understand the data flow as an input (producer) and as an output (consumer) as well as if a workflow can evaluate to null which can be helpful to avoid those null pointer exceptions.

To analyse data flow upstream use **Code > Analyze Code > Data Flow to Here** and to analyse data flow downstream use **Code > Analyze Code > Data Flow from Here**.