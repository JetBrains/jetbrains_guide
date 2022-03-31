---
type: TutorialStep
date: 2021-05-20
title: Verify All
technologies: [ ]
topics:
  - testing
author: tg
subtitle: Test frameworks often stop the test at the first failure. Find out how to run all conditions to see which pass and which fail.
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/i5Qu3qYOfsM?start=1893
---

Let's look at how to make sure all our assertions are run, regardless of whether one of them fails. Try this test (note that with string method names we can easily add quotes and other special characters).

```groovy
def "should demonstrate 'verifyAll'"() {
    given:
    Renderer mockRenderer = Mock()
    def shapeFactory = new ShapeFactory(mockRenderer)

    when:
    def polygon = shapeFactory.createDefaultPolygon()

    then:
    verifyAll(polygon) {
        numberOfSides == 5
        renderer == null
    }
}
```

We can replace our `with()` call with [verifyAll()](https://spockframework.org/spock/docs/2.0/all_in_one.html#_using_verifyall_to_assert_multiple_expectations_together) instead. Run this (the code above should fail) and see what happens - not only does the number of sides assertion fail, but the check on the renderer also fails.

``` 
org.opentest4j.MultipleFailuresError: Multiple Failures (2 failures)
    org.spockframework.runtime.SpockComparisonFailure: Condition not satisfied:

numberOfSides == 5
|             |
4             false

    org.spockframework.runtime.SpockComparisonFailure: Condition not satisfied:

renderer == null
|        |
|        false
Mock for type 'Renderer' named 'mockRenderer'
```

With `verifyAll`, all assertions are run and we can see which fail and which pass. This can help us when we're iterating quickly between writing and fixing tests.

Go back and fix this test:

```groovy
then:
verifyAll(polygon) {
    numberOfSides == 4
    renderer == mockRenderer
}
```

(Note that this code differs slightly from the video, since using two variables called `renderer` made it really hard to see what was being tested)

Now we know how to check the output from all conditions. Next, let's look at how to set up or tear down our tests.