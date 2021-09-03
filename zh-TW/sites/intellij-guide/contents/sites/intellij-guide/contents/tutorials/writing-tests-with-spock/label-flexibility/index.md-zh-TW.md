---
type: TutorialStep
date: 2021-05-20
title: Label Flexibility
technologies: [ ]
topics: [ ]
author: tg
subtitle: Spock supports a range of different test labels to help you write the most readable tests
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/i5Qu3qYOfsM?start=573
---

We've seen `expect` and we've seen `given, when and then`, but Spock provides a lot of flexibility around which labels to use and when. It's all about creating descriptive tests.

In our last test, it did look like the labels might add a lot of noise for such a short test. The setup, for example, is very simple, and we could inline this into the actual test itself. If you inline the setup code into the `when` block, you can remove the `given` label and just use [when and then](http://spockframework.org/spock/docs/2.0/all_in_one.html#_when_and_then_blocks).

```groovy
def "should demonstrate given-when-then"() {
    when:
    int sides = new Polygon(4).numberOfSides

    then:
    sides == 4
}
```

The test should run successfully like before. We have the flexibility we need to label blocks of code in whichever way we think is most readable, so the tests are documenting the expected behaviour of the code.

Now we've covered some tips on how to use labels to clearly define what's happening in the test. Next, we'll look at how the Spock IntelliJ IDEA Plugin can help.

