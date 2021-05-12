---
type: TutorialStep
date: 2021-05-07
title: Creating your Spring Controller
technologies: [java, spring]
topics: [gettingstarted]
author: hs
subtitle: Using the IntelliJ IDEA New Project Wizard to create your Spring project and select dependencies.
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/we3zJE3hlWE?start=685
---

## Create your Spring Controller
Now we have our functioning Spring project we need to give it something to serve, such as the string _Hello World_.

### Create our Controller
The Spring Controller will allow us to have a class that handles web requests. 

One important thing to note here is that you don't need to tell your Spring Application class about your (new) Spring Controller class. That is handled by the Spring annotations we used in the Application class meaning all the classes here will be scanned by Spring, and it will link your classes together without any explicit calls. It's a little unnerving when you first start using Spring but in time you'll get used to it once you have an appreciation of what Spring is doing behind the scenes for you.

1) Create a new Java class in the same place as you ```SpringHelloWorldDemoApplication.java``` class called ```SpringHelloWorldController.java```. 
2) The first thing we need to do is tell Spring that this is a Rest Controller so you need to add the ```@RestController``` annotation after the import statement, and before the class declaration.
3) The next step is to create a method that will tell Spring that if we go to our webserver, we would like to see the string _Hello World_. To do that we need to add a method like our `helloWorld` one here:

```java
package com.example.springhelloworlddemo;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {

  @RequestMapping("/")
  public String helloWorld(){
    return "Hello World from Spring Boot";
  }
}
```
4) Now we need to re-run our Spring application. You might need to stop it first if it's still running from the previous step. You can run it again with **Ctrl**+**R** (macOS), or **Shift**+**F10** (Windows/Linux). 
5) When you go to the browser, enter the following URL ```localhost:8080```. You should see your text being returned:

![Hello World being displayed in the browser](hello-world-text.png)

That's it! You're done, congratulations on creating your first Spring Application and serving some text in the browser! In the next section we will summarise everything we've gone through today and look at some next steps you can try yourself. 

If you want to play around a bit more, try adding a new method to your Controller to serve some different text if the URL is ```localhost:8080/mynameis```, for example. Hint - change the parameter for the ```RequestMapping``` annotation.