---
type: TutorialStep
date: 2021-05-20
title: Stubs
technologies: [ ]
topics:
  - testing
author: tg
subtitle: Stub objects allow us to state from a test what values get injected into our application code. They can provide simple interfaces, so we don't have to initialise the whole application to test a section.
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/i5Qu3qYOfsM?start=1544
---

Mocks are useful for checking calls out of our code, [Stubs](http://spockframework.org/spock/docs/2.0/all_in_one.html#_stubbing) are useful for providing data or values into the code we're testing.

Let's see an example of a stub in a new test method.

```groovy
def "should be able to create a stub"() {
    given:
    Palette palette = Stub()
    palette.getPrimaryColour() >> Colour.Red
    def renderer = new Renderer(palette)

    expect:
    renderer.getForegroundColour() == Colour.Red
}
```

The `given` block sets up the preconditions for the test. This time, we're going to use the `Stub()` method to [create a Stub](http://spockframework.org/spock/docs/2.0/all_in_one.html#Stubs) of the concrete [Palette](https://github.com/trishagee/spock-testing-demo/blob/main/src/main/java/com/mechanitis/demo/spock/Palette.java) class. Like with `Mock()`, you can define it this way, or use `def` and pass the type into the `Stub()` method.

Next the test sets up the `palette` stub with the values it will produce when called by our code. We use right-shift (`>>`) to state that when the method `getPrimaryColour` is called, the Enum value `Red` will be returned.

The last step of setup is to create the [Renderer](https://github.com/trishagee/spock-testing-demo/blob/c86e83d18ae62a0bf6d36e001b4648bb1259a2c8/src/main/java/com/mechanitis/demo/spock/Renderer.java) with this stub `palette`. If you're following along with this code in the IDE, make sure your Renderer looks something like:

```java
public class Renderer {
    private Palette palette;

    public Renderer(Palette palette) {
        this.palette = palette;
    }

    public void drawLine() {
    }
}
```

The test uses an `expect` label because the test and the assertion are combined - we expect that when we call `getForegroundColour`, this will return `Colour.Red`. This test states that we expect `getForegroundColour` to return the same colour as the palette's primary colour.

Once again, we can use test-driven development here - we can use the test to drive out what we expect the methods to look like even if they don't exist yet. Use **⌥⏎** (macOS), or **Alt+Enter** (Windows/Linux), on any red method names to get IntelliJ IDEA to create the most basic methods that makes the code compile, then run the test.

It should fail if we haven't implemented the details for `getForegroundColour`. It's good to see the test fail first, it often indicates the test is checking the right thing, even if that right thing hasn't been implemented yet.

Change the `getForegroundColour` method to return the palette's primary colour.

```java
public Colour getForegroundColour() {
    return palette.getPrimaryColour();
}
```

Re-run the test, it should pass. The test injects a Stub `palette` into the `renderer`, we tell the stub `palette` what to return when the `getPrimaryColour` method is called, so we can check that the `renderer` does what it's supposed to do when we call `getForegroundColour`.

If we had set this up as a Mock instead of a Stub, this would have worked as well. Mock objects [support the mocking behaviour we saw in the previous test and the stubbing behaviour](http://spockframework.org/spock/docs/2.0/all_in_one.html#_combining_mocking_and_stubbing) we saw here, whereas [Stub objects _only_ support stubbing](http://spockframework.org/spock/docs/2.0/all_in_one.html#Stubs), and not mocking. My preference is to keep stub and mock behaviour separate where possible, so it's usually best to use Stubs just for stubbing and Mocks only for mocking.

Now you know how to create a stub to provide an expected value, so a test can verify that expected value is used. Next, we're going to look at how to create helper methods in Spock tests.
