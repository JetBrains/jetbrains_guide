---
type: TutorialStep
date: 2023-02-03
title: Finding code 
technologies: []
topics: []
author: hs
subtitle: We often need to find something in our project and there are several ways to achieve that depending on the use case.
thumbnail: ./thumbnail.png

---

Searching and finding files and code can be achieved in IntelliJ IDEA through various mechanisms. They all have their own strengths and knowing when to use which one will save you time when you need to find a *needle in a haystack*!

## Search Everywhere & Find Action

<iframe width="560" height="315" src="https://www.youtube.com/embed/Z8qKvNdY51g" >
</iframe>

Search Everywhere (**⇧⇧** | **Shift+Shift**) should be your go-to-shortcut if you know you want to find something, even if that *something* is an action. You can filter the criteria in this dialog as required.

Find Action (**⌘⇧A** | **Ctrl+Shift+A**) also opens the Search Everywhere dialog but filters it to the *Actions* tab so if you know you're looking for an action, this way is likely to be faster for you.

## Find in Files

<iframe width="560" height="315" src="https://www.youtube.com/embed/SQg_urpKGkg" >
</iframe>

Find in Files (**⌘⇧F** | **Ctrl+Shift+F**) is another shortcut that you will probably find yourself using when you need to find something in your project. Again there are filters available which help to narrow it down and you can also use regular expressions here to get closer to your goal.

## Structural Search

<iframe width="560" height="315" src="https://www.youtube.com/embed/vX05utYQXXQ" >
</iframe>

Lastly, you can access Structural Search from the Search Everywhere Dialog and then typing in "structural" and select **Search Structurally**. This method of searching your project gis a very powerful way of going straight to your goal. You can use variables to narrow down your search criteria and search across your codebase for a very specific set of characters.

You can try out structural search by cloning [the IntelliJ IDEA samples repository from GitHub](https://github.com/JetBrains/intellij-samples) and then creating a structural search with this code:

```
logger.log($level$, $message$, $args$);
```

This will find this one snippet of code in the whole project:

```
logger.log(Level.WARNING, "Another log message", new RuntimeException("Something went wrong"));
```