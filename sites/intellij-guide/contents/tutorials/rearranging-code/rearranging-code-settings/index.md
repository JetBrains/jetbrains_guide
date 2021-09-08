---
type: TutorialStep
date: 2021-09-06
title: Rearranging Code Settings
technologies: []
topics: []
author: hs
subtitle: Rearranging Code Settings
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/L_h8NJdYyj4
---

## Where and How to Change Settings for Rearrange Code 
IntelliJ IDEA can define the arrangement of your classes in the code style settings. Let's take a look at the settings first, before we look at how we can invoke rearrange code in the next step. 

### Arrangement Settings/Preferences
To change your code arrangement settings, use **⌘,** (macOS), **Ctrl+Shift+S** (Windows/Linux), to bring up the Preferences/Settings dialog. This dialog is searchable, so you can type in _arrangement_. This filters the dialog to **Code Style**. You can then select the language you're working with. In this tutorial we will use **Java**. Alternatively, you can navigate to **Editor > Code Style > Java**.

![Arrangement Code Style](arrangement_code_style.png)

The arrangement of your classes is defined at the IDE and project level by changing the Scheme. We recommend working at the Project level for now. You can copy this to the IDE level if you need to with the little cog to the right of the **Scheme** drop-down.

The Arrangement tab is grouped into two areas:
- [Grouping Rules](#grouping-rules)
- [Matching Rules](#matching-rules)

As a side note, if you do make some changes here, and you want to reset them without resetting all the settings, you can click the blue Reset command on the top-right of this dialog. It will only be shown when you've made a change to your settings.


#### Grouping Rules
IntelliJ IDEA allows you to group these three code elements:

**Getters and Setters** is fairly self-explanatory. When this check box is selected, and you invoke rearrange code, your getters and setters will be grouped together in your class. 

**Override methods** is similar to Getters and Setters in that it will group your Override methods together in your class. You also have the option to order them by the order they are defined in the super class or interface, or to order them by name.  

**Dependent methods** has a drop-down that allows you to select breadth-first or depth-first for method coupling. You may have a user-case for this option, but for most Java code bases that have evolved over time, trying to keep _related_ methods together is not usually what you want to do. If you do choose to use this option then it will take priority over Matching Rules. We suggest you use this option or Matching Rules, not both. In our example we're going to use Matching Rules defined in the next section as this is a more common real-world scenario.

#### Matching Rules
This is where you can define how you'd like your classes to be ordered when you invoke rearrange code. You can select any line and move it up or down as required with the arrows in the top-right. You can also click the pencil icon to the right of each row to alter the rule and select a finer level of granularity.

## Invoking Rearrange Code
Now you've defined what your grouping rules and matching rules are, you need to consider how and when to invoke them. We'll take a look at this in the next step of this tutorial.