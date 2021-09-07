---
type: TutorialStep
date: 2021-05-20
title: Testing Your Spring Boot Application
technologies: [ ]
topics: [ ]
author: hs
subtitle: Let's add a test to check the content being served locally
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/hRZ34CMvQi0
---

## Creating a Test for your Spring Boot Application
Let's write a test to check that in the event of an HTTP request, we get the response that we are expecting, in this case the string _Hello World from Spring Boot_.

Tests for Spring Boot are written using the standard [JUnit5 Testing Library](https://junit.org/junit5/docs/current/user-guide/). If a test is going to need access to Spring's application context, it needs to be annotated with `@SpringBootTest`. These are effectively integration tests, as they rely on bootstrapping the Spring context before you can run the test.

1) We need to create a new Test class in the same place as our `HelloWorldApplicationTest.java`, we will call ours `CheckHTTPResponse.java`.

2) Paste the following code into your test class:
```java
@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
public class CheckHTTPResponse {
    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    public void shouldPassIfStringMatches() throws Exception {
        assertThat(restTemplate.getForObject("http://localhost:" + port + "/",
                String.class)).contains("Hello World from Spring Boot");
    }
}
```
Passing `WebEnvironment.RANDOM_PORT` into the `@SpringBootTest` annotation starts the web server with a random port number. We can find out what that port number is by annotating an `int` field (in our case, `int port;`) with `@LocalServerPort`, the testing framework will inject this field with the random port number.

We get a `TestRestTemplate` for free with tests annotated with `@SpringBootTest`. The `@Autowired` annotation tells Spring that we want to get it from the context.

Our test itself is annotated with `@Test`. It will pass when our expected value is the same as the actual value from the webserver - our assert statement is comparing the string we are serving from localhost at this random port, with the string in the second half of the assert statement - _Hello world from Spring Boot_.

3) Let's run the test to check it works. You can run it again with **Ctrl**+**R** (macOS), or **Shift**+**F10** (Windows/Linux). We should see that our test is green.

![Passing HTTP test](passing-http-test.png)

It's always worth checking our assumptions, so try changing the text to something other than _Hello World from Spring Boot_ and check that the test fails. It should do!

In the next step we will summarise what we've done up to this point and list the resources we've used. 