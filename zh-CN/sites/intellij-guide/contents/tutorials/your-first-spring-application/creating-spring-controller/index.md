---
type: TutorialStep
date: 2021-05-20
title: Creating your Spring Controller
technologies: [ ]
topics: [ ]
author: hs
subtitle: Using the IntelliJ IDEA New Project Wizard to create your Spring  Controller and select dependencies.
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/wC6NiR8eKHE
---

## Create your Spring Controller
Now we have our functioning Spring project we need to [create a Spring Controller](https://spring.io/guides/gs/serving-web-content/#initial) to handle the web requests.

### Create our Controller
One important thing to note here is that you don't need to tell your Spring Application class about your (new) Spring Controller class. That is handled by the `@SpringBootApplication` annotation in the Application class which also consists of other annotations, including `@ComponentScan`. This means that the current package, and sub packages will be scanned for Spring components. It's a little unnerving when you first start using Spring but in time you'll get used to it once you have an appreciation of what Spring is doing behind the scenes for you.

1) Create a new Java class in the same place as your `HelloWorldApplication.java` class called `HelloWorldController.java`.

2) The first thing we need to do is tell Spring that this is a REST Controller, so you need to add a class level annotation of `@RestController`. This annotation means this class will be picked up by the component scan, because it's in the same package as our Application class. Our REST Controller, `HelloWorldController`, will therefore be available from the application context.

3) The next step is to create a method that will tell Spring that if we go the root of our webserver, we would like to see the string _Hello World from Spring Boot_. To do that we need to add a method with a `@RequestMapping` annotation like our `helloWorld` one here:

```java
package com.example.helloworld;

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

5) When you go to the browser, enter the following URL `localhost:8080`. You should see your text being returned:

![Hello World being displayed in the browser](hello-world-text.png)

6) Assuming that's working correctly, you can start to get more adventurous. Try adding this new code below your first method:

```java
@RequestMapping("/goodbye")
public String helloWorld(){
  return "Goodbye from Spring Boot";
}
```

7) Now run your application again. At the root you should still see _Hello World from Spring Boot_ because the `@RequestMapping` is _/_ indicating root. However, if you now type in `localhost:8080/goodbye`, you should see _Goodbye from Spring Boot_.

就是这样！ You're done, congratulations on creating your first Spring Application and serving some text in the browser! In the next section we'll create a test for our application. 