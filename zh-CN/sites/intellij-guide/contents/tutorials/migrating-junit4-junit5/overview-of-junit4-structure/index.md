---
type: TutorialStep
date: 2021-08-09
title: Overview of JUnit 4 Structure
technologies: [ ]
topics: [ ]
author: hs
subtitle: An overview of what a typical JUnit 4 test suite might contain
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/F8UTTTDtbH0?start=23
---

Here's the test class we're going to migrate from JUnit 4 to JUnit 5 ([original code on GitHub](https://github.com/JetBrains/intellij-samples/blob/9afc1e77d269e0d4a0cbcf57f9862e9b321f2e68/standard-java/src/test/com/jetbrains/testing/JUnit4To5.java)):

```java
import org.junit.*;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.MatcherAssert.assertThat;

public class JUnit4To5 {
   @BeforeClass
   public static void beforeClass() throws Exception {
       System.out.println("JUnit4To5.beforeClass");
   }

   @Before
   public void before() throws Exception {
       System.out.println("JUnit4To5.before");
   }

   @Test
   public void shouldMigrateASimpleTest() {
       Assert.assertEquals("expected", "expected");
   }

   @Test
   @Ignore
   public void shouldMigrateIgnoreTestToDisabledTest() {
   }

   @Test
   public void shouldStillSupportHamcrestMatchers() {
       assertThat(1, equalTo(1));
   }

   @Test
   public void shouldStillSupportAssume() {
       Assume.assumeTrue(javaVersion() > 8);
       // then go ahead and run the rest of the test
   }

   @After
   public void after() throws Exception {
       System.out.println("JUnit4To5.after");
   }

   @AfterClass
   public static void afterClass() throws Exception {
       System.out.println("JUnit4To5.afterClass");
   }

   private int javaVersion() {
       // stub method. just used for the example
       return 14;
   }

}

```

A typical JUnit 4 test can be broken into sections.

### Code to run once at the start

We can state the steps that need to be run once at the beginning of the test class, before any tests are run. This could be something like setting up core data that all the tests use. In JUnit 4, we annotate the method with [`@BeforeClass`](https://junit.org/junit4/javadoc/4.13/org/junit/BeforeClass.html) to tell JUnit to run this method once at the start of the test suite.

```
@BeforeClass
public static void beforeClass() {}
```
### Code to run before each individual test

Often, we may want each test method to start with the same set of criteria, but not allow other tests to modify this. We can set up a clean state that every test will need with a method annotated with [`@Before`](https://junit.org/junit4/javadoc/4.13/org/junit/Before.html).

```
@Before
public void before() throws Exception { }
```

### The tests themselves

JUnit 4 tests are annotated with [`@org.junit.Test`](https://junit.org/junit4/javadoc/4.13/org/junit/Test.html). Any method annotated with this will be counted as a separate test. Sometimes, especially if the test isn't complete yet, we might want to tell JUnit not to run them. We do that with [`@Ignore`](https://junit.org/junit4/javadoc/4.13/org/junit/Ignore.html).

```
@Test
public void simpleTest() { }

@Test
@Ignore
public void ignoredTest() { }
```
### Code to run to clean up after each test
In the same way we might want to set up clean data at the start of every test, we should also clean up after ourselves after every test. We can do this by annotating a method with [`@After`](https://junit.org/junit4/javadoc/4.13/org/junit/After.html).

```
@After
public void after() throws Exception { }
```

### Code to run once to clean up after all tests

We may want to do a final cleanup after all tests have finished, for example removing seed data or closing connections. We can annotate a method with [`@AfterClass`](https://junit.org/junit4/javadoc/4.13/org/junit/AfterClass.html) to have it run once when everything is finished.

```
@AfterClass
public static void afterClass() { }
```
