---
type: TutorialStep
date: 2021-08-09
title: Manual migration for more complex cases
technologies: [ ]
topics: [ ]
author: hs
subtitle: Migrating more complex uses cases from JUnit 4 to JUnit 5
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/F8UTTTDtbH0?start=566
---

If the tests in the project are fairly straightforward ones, this automatic migration should take care of most of the tasks that need to happen.  However, not all cases can be managed automatically.

Migration from JUnit 4 to JUnit 5 could be a slow and steady process.

At this point in our project, we have some tests fully migrated to JUnit 5, some partially migrated but using some JUnit 4 features, and potentially there may be some classic JUnit 4 (or even JUnit 3) tests running as they are. We're running them all using JUnit 5, so we can write new tests using the new JUnit 5 features but keep existing stable tests as they are, if we choose.

However, we might want to remove the dependency on the vintage engine to prevent ourselves from accidentally writing tests in the old style.  If we remove this dependency, refresh the maven changes and rebuild the project, we will be able to see which classes require the vintage engine, and therefore which tests need more help migrating to JUnit 5.

One example of a change that we might do manually is to use the correct import for `assertThat` from [Hamcrest](http://hamcrest.org/JavaHamcrest/).  We could do this by removing the reference to the JUnit `Assert` class, and getting IntelliJ IDEA to static import the Hamcrest `MatcherAssert.assertThat`. We can use optimise imports to remove the unnecessary JUnit 4 `Assert` import.

We may discover that some of our tests are even JUnit 3 style tests - these tests extend a `TestCase` instead of using annotations.  Pressing **⌥⏎** (macOS), or **Alt+Enter** (Windows/Linux) on the class suggests that we can migrate this to JUnit 4, which seems like a good first step. Now the test will use annotations, and won't import anything from the old `junit.framework` package.  Now we can take the next step and migrate this test to JUnit 5.  We might also want to do optimise imports to remove any old imports that aren't needed.

