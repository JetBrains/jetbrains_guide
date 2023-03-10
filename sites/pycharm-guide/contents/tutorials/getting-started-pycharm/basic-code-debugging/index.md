---
type: TutorialStep
date: 2023-03-30
title: Basic Code Debugging
technologies: []
topics: []
author: hs
subtitle: TO BE ADDED
thumbnail: thumbnail.png
longVideo:
  poster: poster_long.png
  url: https://youtu.be/j0Wz_uBaDmo
---

In the previous video, we saw how PyCharm refactoring can save you time by doing work for you.

In this video, we’ll look at PyCharm’s debugger. Can I use it to walk through my running code, helping me find and fix bugs?

Well...let’s take a look.

## Breakpoints and Debug Session
Everything starts with a breakpoint. Breakpoints are markers that tell the debugger to suspend the execution of a program.

To add and remove breakpoints you can just click the gutter in the line where you want to add them. You can also do it from the keyboard by leaving the caret at the end of the line and pressing, in macOS’ case, CMD+F8.

In this example we are adding a breakpoint to this ‘IF’ statement inside a loop, so the program will suspend the execution on each iteration.

Now how do we run this?

One way is by clicking the little ‘bug’ button on the top of PyCharm. This runs the currently-selected configuration, but under the debugger.

This project was made from the Flask project template so it had a Flask run configuration made from the start.

Another way, easier for beginners, is just right-click inside the editor and select ‘Debug <name>’ and PyCharm will create a temporary run configuration and run it for you.

If you don’t know what is a Run Configuration, jump to the video showing in the link where I explain run configurations in more detail.

Ok, so, as you can see here, PyCharm started running our project, under the debugger, and opened the Debug tool window.

Now let’s click the URL to see what happens.

The execution is now suspended, as the breakpoint was hit, and we can examine the program in its current state, controlling its execution, and testing several scenarios at runtime.

Let’s see how to do it in the Debug tool window.

## Debug Tool Window
The Debug Tool Window has a few sections that are worth mentioning.

On the left side we have a few commands:
The first is where you will click to re-run your application.

Also important here is the ‘Resume Program’ button, that you will use when you just want the program to move forward with its execution.

And, finally, the Stop button should be used when you are done with debugging and want the program to terminate.

On the top there are two main areas.
First, there are the Debugger [pause] and the Console tabs.
And second, we also have the buttons to help us control the execution.

Let’s talk about the Debugger and Console tabs first.

## Debugger and Console Tab
The debugger has a LOT of power available. Let’s look at the debugger and console tabs.

On the Debugger tab you can see the stack frames that represent the current state of the program on the left side, and the variables panel with local values at that execution point on the right.

The stack frame acts like a history of your program’s current state. New frames are added to the top of the stack each time a method is called, and removed when its execution is complete.

By examining it you can go back in time and understand when and why specific parameters were passed to a method, as well as the current state of the caller at the time of the call.

Stack frames from code outside of my project like libraries, for instance, are in gray.

Let’s say I select the most recent frame.

You can use the variable panel to see the current value assigned to any variables in your program.
In this case, we can see that the value XX is assigned to our ‘R’ variable.

Don’t want the distraction of looking away from your code?
You can also see the values in the editor, as code comments.

While in the current context, you can also play around with your variables to obtain additional details about the program state or test different scenarios at runtime.
For example, let’s see the value of ‘R+30’.

Finally, we can also get the full Python console in the context of this point of the execution.
Click the ‘Console tab’.

Here you can start using the interactive prompt in the context of the current breakpoint and line.

For example, let’s see what’s R+40.

Sometimes, though, you need to walk through the execution of your code.
Let’s see how to do it next.

## Step Through
We’re stopped at a point in the execution of our program. But what if we want to keep going and poking around? Let’s step through our code.

This time, instead of having our breakpoint in the if statement, we will move it to the outer function, where we call ‘highest_random’.
Once the breakpoint is hit and the execution stops, we can walk into the inner function by using ‘Step Into’.

If I click ‘Step Over’, we are going to walk through the execution line by line.

On this line, though, ‘Step Into’ will take me into Python’s Random randint function.

In some cases this can be useful, but most of the time you are trying to solve problems in your own code.
Let’s stop this debug session and run it again. Now, instead of ‘Step Into’, I will use PyCharm’s ‘Step Into My Code’.

As you see now, even if I keep clicking, PyCharm won’t head into any library code, only code in my own project.

## Conclusion
And…that’s it.
We saw PyCharm’s star attraction, the debugger. We covered what you need to be productive: breakpoints, the tool window layout, evaluating variables and expressions, and stepping through code.

We take productive debugging seriously, and this is just an introduction so you can get started.

Check the official documentation for an in-depth understanding of debugging capabilities in PyCharm.

The link is in the description.
