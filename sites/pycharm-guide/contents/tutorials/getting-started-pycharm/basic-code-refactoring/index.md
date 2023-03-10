---
type: TutorialStep
date: 2023-03-30
title: Basic Code Refactoring
technologies: []
topics: []
author: hs
subtitle: TO BE ADDED
thumbnail: thumbnail.png
longVideo:
  poster: poster_long.png
  url: https://youtu.be/4kzEbqaT2DY
---

In the previous video, we saw how PyCharm can run your Python code.

In this video, we are going to talk about refactoring. Ever wish your IDE could…do your work for you?

Well...let’s take a look.

## Change Signature
How many times does your work involve changing the signature of a given method? As easy as it can sound, changing a method signature can have a deep impact in your code and break your program in multiple places.

The Change Signature refactoring helps you safely change a method signature, including changing its name; adding, removing, and reordering parameters; and assigning default values to the parameters.

Let’s see how to use it.

I have here an empty Django project that I just created from the welcome screen. If you want to know how to do it make sure to watch the video number 2 in this series.

Here I have a sample project with a couple of modules that import each other.

Let’s start by changing its signature of <method name>. We will add a new parameter here.

The easiest approach is to do it inline.

As you see, PyCharm already throws a yellow light bulb and a refactoring indication in the gutter. 

To access it let’s just use Alt (Option) + Enter.

The first option reads ‘Update usages to reflect signature change…’

By clicking it, PyCharm will show us the previous and current method signature, and require a default value so we won’t break our program.

At this point PyCharm is using its knowledge of your project acquired during indexing to add the default value to all your current method calls.

Let’s take a look? In this example, as you can see, PyCharm already updated our call with the default value.

If we run the program… It still runs with no errors.

That’s already quite valuable and convenient…a safe refactoring with PyCharm prompting me. What are some other refactorings?

## Rename
Renaming is another common type of refactoring. You first write your code, get everything working, and then start making names more meaningful. This is when refactoring rename comes in handy.

As with signature changes, ‘Rename’ can also be done in place.

Let’s just go ahead and change this method name.

We can also use Option(alt) + Enter to invoke the context menu.

The first option is ‘Update usages to reflect signature change…’. Let’s hit that.

We now see the change is reflected in the code that calls this function.

PyCharm will also find usages in other code in your project. For example, we have another file that imports this function and calls it.

As you can see, the import and the call were renamed.

The rename refactoring is a godsend. It works on filenames too. And if you change your mind, undo applies to all the changes that were triggered.

## Extract Method
Inplace refactorings are great, but PyCharm can also help you with much more robust refactoring techniques.

Today we are going to see how to use the ‘Extract Method’ refactoring, but you can find more details about everything that is available in our documentation. The link is in the description.

The Extract Method refactoring basically let you take a code fragment, group it into a method, and replace the old code with a method call.

The ‘Extract Method’ refactoring isn’t done in place. There is a direct shortcut for it, but we will use the ‘Refactor This’ menu.

Let’s take this code fragment as an example.

I will select it, and invoke the ‘Refactor this’ menu.

In this menu you see many refactoring options.

Let’s choose ‘Extract Method’ for now, but make sure to experiment the other refactoring techniques as you use PyCharm.

We will now give the new method a name. And click OK.

As you can see, PyCharm created a function up here with the name we gave and called it from the previous place.

Now let’s run the code.

As you see, it just works as before.

## Conclusion
And…that’s it.

We saw three common refactoring techniques that will automate your workflow and minimize your chances of bugs.

PyCharm has many more robust refactoring capabilities, so, after experimenting with these basic ones make sure to try the others.

You can find more information and a tutorial in our documentation.

I hope this video was useful for you, but if you still have any questions make sure to ask them in the comments.

In the next video we will see how to perform basic testing in PyCharm. See you there!

