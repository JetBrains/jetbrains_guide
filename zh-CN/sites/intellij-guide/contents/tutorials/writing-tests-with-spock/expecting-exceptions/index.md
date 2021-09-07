---
type: TutorialStep
date: 2021-05-20
title: Expecting Exceptions
technologies: [ ]
topics:
  - testing
author: tg
subtitle: Tests don't check just the happy paths, sometimes we want to say we're expecting a specific Exception.
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/i5Qu3qYOfsM?start=657
---

Testing isn't just about testing the happy paths. We should also check the exceptional cases.

Often, we want to check that the right sort of Exception gets thrown. If you create a new polygon with zero sides, this sounds like something that should cause an error. Let's write a test:

```groovy
def "should expect Exceptions"() {
    when:
    new Polygon(0)

    then:
    thrown(TooFewSidesException)
}
```

The `then` block checks that the correct Exception has been thrown. We do this by calling `thrown()` with the class of the Exception that we expect to be thrown. In our case, we expect a [TooFewSidesException](https://github.com/trishagee/spock-testing-demo/blob/main/src/main/java/com/mechanitis/demo/spock/TooFewSidesException.java) to have been thrown by the call to the constructor  (create this Exception in your project if you want this test to run correctly).

Note that in Java, we'd normally have to add .class to the end of `TooFewSidesException` to define this is the type of exception. In Groovy we don't need this, but you can add it if you think it makes the code clearer:

```groovy
then:
thrown(TooFewSidesException.class)
```

Run this test to see if the behaviour of the code is correct. The test should fail because the Polygon class doesn't throw this Exception yet.

![](./14.png)

Change the constructor of [Polygon](https://github.com/trishagee/spock-testing-demo/blob/main/src/main/java/com/mechanitis/demo/spock/Polygon.java) so that it checks for the number of sides and throws the Exception if there are fewer than three sides:

```java
public Polygon(int numberOfSides) {
    if (numberOfSides <= 2) {
        throw new TooFewSidesException("You can't have fewer than 3 sides for a polygon", numberOfSides);
    }
    this.numberOfSides = numberOfSides;
}
```

Re-run the test, it should pass.

We can even assign the thrown Exception to a variable so that we can perform some more checks on it. Let's check the number of sides stored on the TooFewSidesException to see if it matches the number of sides the Polygon was created with.

```groovy
then:
def exception = thrown(TooFewSidesException)
exception.numberOfSides == 0
```

Rerun the test: try using Find Action **⌘⇧A** (macOS), or **Ctrl+Shift+A** (Windows/Linux) and typing "Rerun", to rerun the test. The test should pass.

Now you know how to write tests that expect exceptional cases. Next, we'll look at how to run a test with multiple inputs.
