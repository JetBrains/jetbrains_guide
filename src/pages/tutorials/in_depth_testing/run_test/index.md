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

**How you can run the test**
- Shortcuts
- The **Run** icon in the left gutter of the **Editor**
- Context menu in the test code
- Context menu in the test tree of the **Test runner** tab 

# Run the test

The easiest way to execute the test is to press `Shift-10` (Win/Linux) or `Ctrl-R` (macOS).
The **Run** tool window opens and shows the test execution status:

![Failed test](screenshots/test_run_test_fail.png)

Although the very first test is quite simple, you can obtain the detailed information about the 
test execution in the **Test Runner** tab. One of two tests fails. The assertion error is reported for 
`car.speed == 15`.

Examine the **Test Runner** tab of the **Run** window.
It has two toolbars to perform various actions with tests:
 - The <a href="https://www.jetbrains.com/help/pycharm/test-runner-tab.html#runToolbar" target="_blank">Run toolbar</a> 
 the left (vertical) toolbar that enables
 - The <a href="https://www.jetbrains.com/help/pycharm/test-runner-tab.html#testingToolbar" target="_blank">Testing toolbar</a>
  the top (horizontal) toolbar that  

Now modify the `test_brake` function to pass the test:

```python
def test_brake(self):    
    car.speed = 10
    car.brake()
    assert car.speed == 5
```
This change should make the test successful. There is no need to rerun all tests in the `TestCar` class.
To run each test function separately, you can opt to an alternative way for executing tests and
scripts in PyCharm - clicking the corresponding **Run** icon in the left gutter of the **Editor**

 ![Run test using the icon in the left gutter](screenshots/test_run_menu.png)

The **Test runner** tab shows that the test passed without any assertion errors. 

![Run test](screenshots/test_run_test.png)

# Rerun tests automatically
TODO