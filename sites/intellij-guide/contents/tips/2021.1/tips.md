Create a new record from the "New Java Class" dialog: type the name of the record and select the Record type. 

#JDK16 #2021.1 #GettingToKnowIntelliJ

IntelliJ IDEA can identify classes that are data holders and can be converted to records. The fields will be become record components, and the constructor and accessors will be removed. We can use the default implementations of equals, hashCode and toString on record by removing these methods.

#JDK16 #2021.1 #GettingToKnowIntelliJ

If we decide that maybe a record should be a full Java class after all, we can get IntelliJ IDEA to automatically convert a record into a Java class.

#JDK16 #2021.1 #GettingToKnowIntelliJ

IntelliJ IDEA can find places in our code that can use pattern matching for instance. There were some changes to this feature in #JDK16 which are fully catered for in IntelliJ IDEA 2021.1.

#JDK16 #2021.1 #GettingToKnowIntelliJ

IntelliJ IDEA shows deprecated methods that are marked for removal with a red strikethrough. #JDK16 has marked the wrapper class constructors for removal, so you'll see these with a red strikethrough in IntelliJ IDEA. IntelliJ IDEA can automatically replace these with a better approach.

#JDK16 #GettingToKnowIntelliJ

#JDK16 introduced some new methods on the Streams API. IntelliJ IDEA shows us places that can use the new methods and can automatically convert the code.

#JDK16 #2021.1 #NewInIntelliJIDEA

If you want to use preview features in the latest versions of #Java in IntelliJ IDEA, you need to set the language level to "Preview"

#JDK16 #2021.1 #GettingToKnowIntelliJ

Sealed classes (a preview feature in #JDK16) are a way to take control of the inheritance hierarchy of our classes. If we have a sealed class like this one, IntelliJ IDEA will tell us we need to "permit" the child class so it can extend this parent. It will also automatically make changes if it can.

#JDK16 #2021.1 #GettingToKnowIntelliJ

IntelliJ IDEA can let us know about problems in the classes that extend sealed classes (a preview feature in #JDK16), and suggest solutions.

#JDK16 #2021.1 #GettingToKnowIntelliJ

We can now select an inspection profile for running analysis before we commit. Using an inspection profile with a much smaller number of checks, for example only Java errors and warnings, can run much faster than our full inspection profile and prevent us from committing breaking changes.

#2021.1 #NewInIntelliJIDEA

IntelliJ IDEA's data flow analysis can locate even more places where we could have errors in our code. For example, if we use a negative number for initialising an array, or checking for negative values where the value couldn't be negative.

#2021.1 #NewInIntelliJIDEA

IntelliJ IDEA 2021.1 comes with a built-in preview for HTML, so we can get a good idea of what our changes will look like as we're making them.

#2021.1 #NewInIntelliJIDEA

IntelliJ IDEA 2021.1 comes with support for JSONPath expressions. We can open up a window to evaluate JSONPath expressions, and if we have a JSON file open, it will use this file to evaluate the expression.

#2021.1 #NewInIntelliJIDEA

If we have JSONPath expressions as Strings in our Java code, we can use "inject language" and say this is a JSONPath expression. We'll get code formatting and completion inside this string. 

#2021.1 #NewInIntelliJIDEA

We can evaluate a JSONPath expression. This will open up a tool window, enter a snippet of JSON into the input and try out if an expression finds the expected path.

#2021.1 #NewInIntelliJIDEA

#Kotlin developers can configure an inspection to define illegal package dependencies, which can prevent code from accidentally depending upon the wrong packages, for example the database layer depending upon the UI layer.

#2021.1 #NewInIntelliJIDEA

JVM developers working with #Kotlin code can also now benefit from UML diagrams for their Kotlin classes, just like they could with Java classes.

#2021.1 #NewInIntelliJIDEA

IntelliJ IDEA 2021.1 has improved language injection in #Kotlin files. Previously this worked for a single String value, now if the String is broken up and uses concatenation, you get code suggestions for each section of the String.

#2021.1 #NewInIntelliJIDEA

If you're writing #Kotlin in IntelliJ IDEA 2021.1, you should also notice that the syntax and error highlighting is faster in this version, and that code completion is also faster.

#2021.1 #NewInIntelliJIDEA

There's a new way of running applications. Now you can set a Run Target, e.g you can run Spring Boot applications with a Docker target. 

We can configure a Run Target of Docker, SSH or WSL for Java unit tests, Maven and Gradle projects, and for Spring Boot, Micronaut and Quarkus applications. 

#2021.1 #NewInIntelliJIDEA

IntelliJ IDEA has improved support for Windows Subsystem for Linux, IntelliJ IDEA 2021.1 has support for Java projects in WSL 2, and for Maven and Gradle. To find out more, visit the blog:
 - https://jb.gg/WSL2-2
 - https://jb.gg/WSL2-1

#2021.1 #NewInIntelliJIDEA

The profiler in IntelliJ IDEA 2021.1 has had a facelift, and is easier to use. We can access the profiler window using Find Action, or via the quick access buttons, and it shows a list of running processes

#2021.1 #NewInIntelliJIDEA

The profiler window shows a list of running processes. Click on one to attach a profiler to the process, for example a CPU profiler. The IDE will show the results, for example as a Flame Graph.

#2021.1 #NewInIntelliJIDEA

Click on a process in the profiler window to edit the configurations of the profilers.

#2021.1 #NewInIntelliJIDEA

Right click on a process in the profiler window to capture a memory snapshot at this moment in time. Open this to see which objects are taking up the most space on the heap.

#2021.1 #NewInIntelliJIDEA

Right click on a process in the profiler window to see the CPU and Memory use in real time. This is really helpful for getting a current view on what's happening in the application right now.

#2021.1 #NewInIntelliJIDEA

You can change the font weights for your code. In settings or preferences, Editor -> Font, choose a different weight for the main code, and for the bolder sections.

#2021.1 #NewInIntelliJIDEA

The plugin for @jetbrains_space, a new team collaboration tool, is now bundled in IntelliJ IDEA 2021.1. Log in to the team instance to access your projects.

#2021.1 #NewInIntelliJIDEA

If you're logged in to @jetbrains_space, you can clone a repo via "Get from VCS", and you can configure where the code is cloned to.

#2021.1 #NewInIntelliJIDEA

If you're working with a @jetbrains_space project, you can right click on a commit in the Git log to open it in Space.

#2021.1 #NewInIntelliJIDEA

The bundled plugin for @jetbrains_space is really helpful for code reviews. You can perform the whole review, as an author or reviewer, inside the IDE.

#2021.1 #NewInIntelliJIDEA




#IntelliJTopShortcut #GettingToKnowIntelliJ #NewInIntelliJIDEA