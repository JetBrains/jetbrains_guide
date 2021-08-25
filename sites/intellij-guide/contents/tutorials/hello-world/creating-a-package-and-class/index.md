---
type: TutorialStep
date: 2021-24-09
title: Creating the package and class
technologies: []
topics: []
author: hs
subtitle: Use IntelliJ IDEA to create a new package and class 
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/H_XxH66lm3U?start=116
---

## Creating Your Hello World Class

We recommend putting IntelliJ IDEA into full screen to give you the maximum amount of space for your new Hello World project. 

### The Project Window

The project window shows all the directories and the files that make up our projects. 

![Project Window](project-window.png)

Of course, you can use the mouse to navigate this window, but you can also use the arrow keys. You can also toggle this tool window with **Cmd**+**1** on macOS, or **Alt**+**1** on Windows/Linux. 

### Creating Your Package and Class

Next, let's create the package and the class. Application packages are used to group together classes that belong to the same category or provide similar functionality. They are useful for organising large applications that might have hundreds of classes.

1) To create a new class, select the blue src folder and press **Cmd**+**N** on macOS, or **Alt**+**Insert** on Windows/Linux. Select Java Class from the popup.

![New Java class](new-java-class.png)

You can type a simple class name in here, but if you want to create a new class in a particular package, you can type the whole package path separated by dots, followed by the class name. For example `com.example.helloworld.HelloWorld`.

![New package and class](new-package-and-class.png)

Here, `example` might be your preferred domain and `HelloWorld` is the name of your Java class. 

IntelliJ IDEA has created the package we wanted, and under the covers, it's also created the correct directory structure for this package. It's also created a new `HelloWorld.java` file and generated the basic contents of this class file. For example, the package statement and class declaration, the class has the same name as the fall.

![New project and class created in IntelliJ IDEA](new-project-and-class-idea.png)


### Coding Your HelloWorld Class

1) You can move on to the next line in a class file by pressing **Shift**+**Enter**. This moves the caret to the next line in the correct position and won't break the previous line. 

2) To create the standard Java main method you can type `main`. IntelliJ IDEA displays a [live template](https://www.jetbrains.com/help/idea/using-live-templates.html) that we can use to generate the full code construct and save a lot of time. You can also use **Cmd**+**J** on macOS, or **Ctrl**+**J** on Windows/Linux to see all the Live Templates in IntelliJ IDEA that are valid for the current context. 

**Note**: Pressing **Escape** will always close a drop-down or dialogue without making any changes.  

![Main method live template](main-live-template.png)

3) Press **Enter** to select it. IntelliJ IDEA will generate the rest of the code for you. 

![Main method created](main-method-created.png)

4) Now, we need to call a method that prints some text to the standard system output. 
    
IntelliJ IDEA offers you [code completion](https://www.jetbrains.com/help/idea/auto-completing-code.html). If you type `Sy` you will see a drop-down of likely classes you might want to call. We want `system` so you can press **Control**+**dot** on the highlighted option. 
   
![System using code completion](system-code-completion.png)

**Note**: It's case-sensitive, typing in `sy` rather than `Sy` will give you different results!

5) Now type `o` IntelliJ IDEA will suggest you want to use `out` as the next function. This displays the list of accessible fields and methods on the `System` class. Those that start with the letter `o` are listed first, followed by other methods and fields that contain the letter `o`.
   

6) press **Control**+**dot** and this time IntelliJ IDEA will suggest `println`. Press **Enter** to select it. 


7) IntelliJ IDEA will also place the caret in the brackets, so you can provide the argument to the method. Type in a quote mark `"` and IntelliJ IDEA will close the quote mark for you. You can now type your text, `Hello World` in between the quotes. 

![Hello World statement](hello-world-statement.png)

**Note**: You can also type `sout` to see a [live template](https://www.jetbrains.com/help/idea/using-live-templates.html) that will create the code construct for you that we covered in this step.

Congratulations, you've just created your first Java application! Java files like this one can be compiled into bytecode and run in IntelliJ IDEA. Let's take a look at that in the next step. 