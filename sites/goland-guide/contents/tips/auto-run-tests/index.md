---
type: tip
date: 2019-04-15
title: Auto-Run Tests
technologies: []
topics: [testing]
author: pwe
subtitle: Get into testing mode by telling PyCharm to automatically re-run tests as you type.
seealso:
  - title: Running tests automatically
    href: 'https://www.jetbrains.com/help/pycharm/testing-your-first-python-application.html#run-test-automatically'
  - title: Test Runner Tab
    href: 'https://www.jetbrains.com/help/pycharm/test-runner-tab.html#Test_Runner_Tab.xml'
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
  poster: ./poster_short.png
  url: https://www.youtube.com/watch?v=VNNEXUl_FWM
longVideo:
  poster: ./poster_long.png
  url: https://www.youtube.com/watch?v=OVwfIaCYZm4
leadin: |
    *Hands-free TDD mode.*    

    Test-driven development (TDD) means always run your tests. PyCharm 
    makes that easy

---

TDD, or test-driven development, means "always be testing." In fact, the 
best way to do this is to put your tests on autopilot.

Some test frameworks have a mode to "watch" your tests and code, detect 
changes, and re-run tests. But PyCharm makes this even easier, with a button 
and action.

Simply click the `Toggle auto-run` in the test tool window, then run your tests 
once. From that point, any time "things change", PyCharm will re-run whatever 
tests are currently in that test tool window tab.

It's a very convenient workflow. In fact, since the IDE automatically saves 
files, you don't even have to perform a save to trigger your test re-runs.

Sometimes you find yourself racing against the IDE: "Keep typing fast before 
the IDE re-runs the tests!" The test tool window has options where you can 
adjust the delay, which defaults to 2 seconds. If your tests run fast and 
you want more immediate feedback, decrease the delay.

This auto-run tests feature combines nicely with other "visual testing" 
features to help you focus and work productively. Run just one test, or just 
one file of tests, and turn on the auto-run. Hide passing tests or re-run 
failing tests, etc.

One last point: this button toggle affects the current test tool window tab 
only. You might have pinned a run configuration tool window to be "sticky". 
When you run some other subset of tests, you'll get a tab, but the first 
is still there and still in auto-run. If tests fail, you will get a notification.
