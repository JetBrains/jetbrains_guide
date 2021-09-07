---
type: TutorialStep
date: 2021-05-20
title: Setup and Teardown
technologies: [ ]
topics:
  - testing
author: tg
subtitle: See how to set up, or clean up, test classes and methods in Spock.
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/i5Qu3qYOfsM?start=1947
---

If you've used other testing frameworks, the concept of test or specification class [setup and tear down will be familiar](http://spockframework.org/spock/docs/2.0/all_in_one.html#_comparison_to_junit).

Spock provides a `setup` method (we can use IntelliJ IDEA's [code generation](https://www.jetbrains.com/help/idea/generating-code.html) to create this), which will be [run before every individual test method](http://spockframework.org/spock/docs/2.0/all_in_one.html#_fixture_methods) in this class. This can be used to set up a clean state at the start of each test.

To clean up data or state at the end of every test method, you need a `cleanup` method. This is run after every individual test method.

Use the `setupSpec` method to set up state once at the start of the specification, this is for things that should not change between individual test methods.

Create a `cleanupSpec` method for final teardown code, this method will be called once at the very end of running all the tests.

One final piece of useful information. The tests in this tutorial created the "objects under test" in the test methods themselves. However, you might also want to create your test instance as a field in the test. You can use the [@Subject](http://spockframework.org/spock/docs/2.0/all_in_one.html#_subject) annotation on the field to show that this is the object under test (you can use this annotation on local variables in the methods too). You can then reference this field in the test methods just as you'd expect in any Java or Groovy class.

```groovy
@Subject
private Polygon polygon = new Polygon(5)
```

Now we know how to set up, and clean up, our test classes and methods. Let's look at how Spock tests can function not only as tests, but as living documentation of the expected functionality of the application.
