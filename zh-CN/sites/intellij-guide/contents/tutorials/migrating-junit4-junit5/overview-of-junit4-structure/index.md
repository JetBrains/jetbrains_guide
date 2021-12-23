---
type: TutorialStep
date: 2021-08-09
title: JUnit 4 结构概述
technologies: [ ]
topics: [ ]
author: hs
subtitle: 典型的 JUnit 4 测试框架可能包含的内容的概述
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/F8UTTTDtbH0?start=23
---

以下是我们将要从 Junit 4 迁移到 Junit 5 的测试类（[GitHub上面的源代码](https://github.com/JetBrains/intellij-samples/blob/9afc1e77d269e0d4a0cbcf57f9862e9b321f2e68/standard-java/src/test/com/jetbrains/testing/JUnit4To5.java)）：

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

典型的 JUnit 4 测试可以分为几个部分。

### 开始前运行一次的代码

我们可以在测试开始时声明需要运行一次的步骤，然后再运行任何测试。 这可能有点像是设置所有测试使用的核心数据。 在 JUnit 4 中，我们用 [`@BeforeClass`](https://junit.org/junit4/javadoc/4.13/org/junit/BeforeClass.html) 注解该方法，告诉 JUnit 在测试开始时运行此方法一次。

```
@BeforeClass
public static void beforeClass() {}
```
### 在每个单独测试之前运行的代码

通常，我们可能希望每个测试方法从相同的标准设置开始，不允许其他测试修改。 我们可以建立一个干净的状态，每个测试需要一个 [`@Before`](https://junit.org/junit4/javadoc/4.13/org/junit/Before.html) 方法注解。

```
@Before
public void before() throws Exception { }
```

### 测试方法本身

Junit 4 测试带有 [`@org.junit.Test`](https://junit.org/junit4/javadoc/4.13/org/junit/Test.html) 注解。 任何附有此注解的方法都将计为单独的测试。 有时，特别是如果测试尚未完成，我们会想告诉 JUnit 不要运行它们。 我们用 [`@Ignore`](https://junit.org/junit4/javadoc/4.13/org/junit/Ignore.html) 来应对这种情况。

```
@Test
public void simpleTest() { }

@Test
@Ignore
public void ignoredTest() { }
```
### 每次测试后运行清理的代码
同样，我们可能希望在每次测试开始时设置干净的数据，我们也应该在每次测试后自行清理。 通过用 [`@After`](https://junit.org/junit4/javadoc/4.13/org/junit/After.html) 注解方法来做到这一点。

```
@After
public void after() throws Exception { }
```

### 所有测试后运行一次的清理代码

在完成所有测试后，我们可能需要进行最后的清理，例如删除测试用的种子数据或关闭各种连接。 可以用 [`@AfterClass`](https://junit.org/junit4/javadoc/4.13/org/junit/AfterClass.html) 注解一个方法，以便在一切完成后执行一次。

```
@AfterClass
public static void afterClass() { }
```
