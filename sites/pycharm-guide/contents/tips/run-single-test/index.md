---
type: tip
date: 2018-12-05
title: 'Run Single Test'
technologies: [pytest]
topics: [testing]
author: pwe
subtitle: 'Speed up testing by focusing on one test.'
seealso:
  - title: 'Performing Tests'
    href: 'https://www.jetbrains.com/help/pycharm/performing-tests.html'
  - title: 'Test Runner Tab'
    href: 'https://www.jetbrains.com/help/pycharm/test-runner-tab.html'
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
  poster: ./poster_short.png
  url: https://www.youtube.com/watch?v=BWY9mNdX5R8
longVideo:
  poster: ./poster_long.png
  url: https://www.youtube.com/watch?v=DXtL_GDiqzs
leadin: |
  *Get into TDD flow by focusing on one test.*
  
  Want to focus your testing on just one test? PyCharm has 
  many ways to tell the test runner and UI: "Just this."
---

You're doing test-driven development (TDD) and you're in "the flow".
Everything is clicking. Perhaps you want to focus on just one test:

- Your tests take a while to run and you don't want the slowdown of
  running them all

- Some of your other tests are broken, or your current code breaks
  them

PyCharm makes it easy to select just one test to run. In fact, there
are several ways to do it:

- With the cursor anywhere in the test you want to focus on, right-click
  and choose to run that in the test runner

- Right-click on the test in the test tool listing and choose to
  run it

The definition of "one test" is also flexible: one test function/method,
an entire test class, an entire test file, or a directory. All can be
right-clicked to focus on those tests.

What happens when you run one test? PyCharm creates a _temporary_ run
configuration, focused on just that test. This run configuration is
based off the template run configurations, so if you want to put an
environment variable on all your pytest single-tests configs, edit the
pytest run configuration template.
