---
type: TutorialStep
date: 2020-06-10
title: Background on Testing
technologies:
  - pytest
topics:
  - testing
author: pwe
subtitle: Introduce testing, pytest, and how it all fits into PyCharm, along with a scenario to work on.
thumbnail: ../thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/dAbpPklX7wo
---

"Visual Testing with `pytest`" means three things: the field of testing and test-driven development (TDD), `pytest` as a testing tool, and PyCharm as a visual frontend. But what do *those* three things mean, and what are we going to work on?

Let's do some background on these points.

# Testing and TDD

Writing code is fun. But writing good code is hard. Over the years, Python and the community have embraced the concept of [unit testing](https://jeffknupp.com/blog/2013/12/09/improve-your-python-understanding-unit-testing/) as a way to ensure that the code you write works correctly, now and in the future.

But that's the "eat your vegetables" version. "Bleh, test writing." This leads to projects where tests are a chore done at the end to satisfy some mandate.

There's another philosophy called "test-driven-development" (TDD) where you write your tests *as you write your code*. In fact, you write *failing* tests *before* you write your code, giving you time to think about what the code should do. Then, as you gradually implement your feature in code, your tests start to pass, and you have a feeling of success. I confess, I'm a big believer in this mode of development. In my experience, it's quite a (dare I say) joyful way to code.

Not only do tests let you know your code works, now and in the future, they also let you experiment with confidence. Have a crazy itch you want to scratch? Tests let you know which promises that "next big thing" broke, thus giving you freedom to break things.

# The `pytest` testing framework

What are tests and how do you run them? In programming languages, you adopt a testing framework, in which you write code with certain instructions in them which then gets run by the framework. For Python, the current favorite is [pytest](../../../technologies/pytest).

As a mature ecosystem, `pytest` has lots of resources to help you get started. RealPython has [a primer on testing in general](https://realpython.com/python-testing/) as well as (paid) [course on pytest](https://realpython.com/courses/test-driven-development-pytest/). Brian Okken leads the pack with a [Python Testing with pytest](https://pragprog.com/book/bopytest/python-testing-with-pytest) book and a [Test&Code podcast]() on all things testing.

The pace of progress in the `pytest` community can be overwhelming at times. Fortunately the maintainers take compatibility and bug-fixing seriously.

# PyCharm and "Visual Testing"

And on to the last part: PyCharm as a visual frontend to test writing and running. PyCharm has had [rich support for testing](https://www.jetbrains.com/help/pycharm/testing.html) for many, many years (lots of it shared with all of our IDEs) and [`pytest` support](https://www.jetbrains.com/help/pycharm/pytest.html) in particular for at least four years.

The combination can be very helpful for beginners and productive for veterans. For beginners, testing can be daunting and cryptic. Having a visual UI to guide the way can be a lifesaver.

For experienced TDD folks, getting into the zen of "visual testing" in PyCharm is a heck of an experience. Everything you need -- your code, your tests, your test runner output, your test coverage, and your VCS -- is in one, consistent, integrated experience. Speaking from experience, this is invaluable when getting into the "flow".

# The Scenario

We are going to simulate writing a small project, encountering code and testing issues along the way, and show how to work on them. This scenario uses a youth sports league -- girls lacrosse, fastest sport on two feet -- to give features and requirements that we can implement as part of TDD.

Enough preparation, let's get setup and get started.