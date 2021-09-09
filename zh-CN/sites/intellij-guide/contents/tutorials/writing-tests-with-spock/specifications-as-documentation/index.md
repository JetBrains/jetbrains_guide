---
type: TutorialStep
date: 2021-05-20
title: Specifications as Documentation
technologies: [ ]
topics: [ ]
author: tg
subtitle: Spock tests don't just tell the computer how to test the application, they can help developers understand what the application is supposed to do.
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/i5Qu3qYOfsM?start=2057
---

Let's take a look at [one last feature](http://spockframework.org/spock/docs/2.0/all_in_one.html#specifications_as_documentation) to help document the requirements via tests.

We've seen that Spock has a focus on readability and tests as documentation. The [@Subject](http://spockframework.org/spock/docs/2.0/all_in_one.html#_subject) annotation, the [labelled blocks](http://spockframework.org/spock/docs/2.0/all_in_one.html#_blocks), [Strings as test method names](http://spockframework.org/spock/docs/2.0/all_in_one.html#_feature_methods) plus all you can do to [customise these String values](https://spockframework.org/spock/docs/2.0/all_in_one.html#_unrolled_iteration_names) all contribute to being able to use the automated tests as a documentation for what the system should do.

We can also [add more information](http://spockframework.org/spock/docs/2.0/all_in_one.html#specifications_as_documentation), again for readability or documentation purposes, to the blocks in our tests.

```groovy
def "should be able to create a stub"() {
    given: "a palette with red as the primary colour"
    Palette palette = Stub()
    palette.getPrimaryColour() >> Colour.Red

    and: "a renderer initialised with the red palette"
    def renderer = new Renderer(palette)

    expect: "the renderer to use the palette's primary colour as foreground"
    renderer.getForegroundColour() == Colour.Red
}
```

We can add a String next to the label to give a more detailed description of the block. If we want to split a block into further blocks, for readability or to add documentation, we can use the [and:](http://spockframework.org/spock/docs/2.0/all_in_one.html#specifications_as_documentation) label, this is just to let us break things up further.

The text is available to the Spock runtime, so these messages can be used in messages and reports.

Spock tests, with the help of the Groovy language, can be very descriptive. These automated tests also tell us, the developer, what we should expect to see from our application.

Finally, let's summarise what we've seen, and the shortcuts we've used.