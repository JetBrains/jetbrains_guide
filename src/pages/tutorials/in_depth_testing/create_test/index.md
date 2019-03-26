---
type: 'tutorialstep'
date: 2019-03-01
title: 'Create a test'
technologies: ['pytest']
topics: ['testing', 'python', 'ide']
author: 'allaredko'
subtitle: 'Create a test, navigate between the test and its subject, and execute your tests.'
thumbnail: './thumbnail.png'
---

In this step, you can create and run your first test.

**Powerful Shortcuts**: 
-  `Shift-Ctrl-T` (Win/Linux) or `Shift-Command-T` (macOS) to navigate to the test and its subject

```python
from unittest import TestCase


class TestCar(TestCase):
    def test_accelerate(self):
        self.fail()
```




