---
type: TutorialStep
date: 2021-08-09
title: Automatically migrating tests
technologies: [ ]
topics: [ ]
author: hs
subtitle: Let IntelliJ IDEA migrate as many tests as possible automatically
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/F8UTTTDtbH0?start=452
---

Now we understand the individual steps to migrate a test, we can be a bit more ambitious with our migration. Let's try to automatically migrate all our tests. Use Find Action with **⌘⇧A** (macOS), or **Ctrl+Shift+A** (Windows/Linux),  and type Migrate, to see migration options for the code. IntelliJ IDEA offers the option to migrate the code from JUnit 4 to 5.

![migrate.png](migrate.png)

This migration is similar to what we did with the individual test class, but for all test classes. Press **Run** to see the refactoring preview. You can exclude specific classes or methods here using if you want to using **⌫**, or **Delete**. Press Do Refactor to do the refactoring.

![refactoring_preview.png](refactoring_preview.png)

We want to check all our tests still work as before, so run them using **⌃⇧R** (macOS), or **Ctrl+Shift+F10** (Windows/Linux) as before. You can also right-click on the 'tests' folder and select Run 'All Tests'.  The Test Results window shows us the outcome of running the tests.

![run_tests.png](run_tests.png)

There are no failed tests here and no indicator that anything went wrong so, can assume this migration worked as expected. You can now commit your changes if you want to.

After the migration, you can see that the test classes have been changed.  We can go through each of the files to check the changes before we commit them. Use **⇧⌘]** (macOS), or **Ctrl+Right Arrow** (Windows/Linux), to move to the next file to compare so you can quickly check all the files. As these are mostly simple JUnit tests, most of the changes are a change to the imports to use the new JUnit Jupiter test annotation instead of the old JUnit test annotation.

