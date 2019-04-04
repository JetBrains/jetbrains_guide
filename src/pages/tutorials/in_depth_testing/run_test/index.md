---
type: 'tutorialstep'
date: 2019-03-01
title: 'Run tests'
technologies: ['pytest']
topics: ['testing', 'python', 'ide']
author: 'allaredko'
subtitle: 'Run tests and evaluate test results in the test runner tool window'
thumbnail: './thumbnail.png'
---

In this step, you learn how to run tests and evaluate the execution results.

**Powerful Shortcuts**: 
-  `Shift-10` (Win/Linux) or `Ctrl-R` (macOS) to execute a test.

# Run the test

1. The easiest way to execute the test is to press `Shift-10` (Win/Linux) or `Ctrl-R` (macOS).
The **Run** tool window opens and shows the test execution status:
![Run test](screenshots/test_run_test.png) 

Although the very first test is quite simple, you can obtain the detailed information about the 
test execution in the **Test Runner** tab.
The first visual testing feature that tells you that your test is successful is the test status icon:
![test passed](screenshots/test_passed_icon.png) 

2. Let us modify the `TestCar` class and add the `test_accelerate_fail` function:

```python
from unittest import TestCase
from Car import Car
car = Car(50)
 
 
class TestCar(TestCase):
    def test_accelerate(self):
        car.accelerate()
        assert car.speed == 55

    def test_accelerate_fail(self):
        car.accelerate()
        assert car.speed == 59
``` 

Now press `Shift-Ctrl-T` (Win/Linux) or `Shift-Command-T` (macOS) again and the test will fail
as expected.

![Failed test](screenshots/test_run_test_fail.png)

Examine the **Test Runner** tab of the **Run** window.
It has two toolbars to perform various actions with tests:
 - The <a href="https://www.jetbrains.com/help/pycharm/test-runner-tab.html#runToolbar" target="_blank">Run toolbar</a> 
 the left (vertical) toolbar that enables
 - The <a href="https://www.jetbrains.com/help/pycharm/test-runner-tab.html#testingToolbar" target="_blank">Testing toolbar</a>
  the top (horizontal) toolbar that  

To run each test function separately, you can opt to an alternative way for executing tests and
scripts in PyCharm - clicking the corresponding **Run** icon in the left gutter of the **Editor**

 ![Run test using the icon in the left gutter](screenshots/test_run_menu.png)
