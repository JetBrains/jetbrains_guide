---
type: TutorialStep
date: 2021-08-09
title: 使用代码检查
technologies: [ ]
topics: [ ]
author: hs
subtitle: 使用代码检查来检查 Junit 5 的迁移
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/F8UTTTDtbH0?start=247
---

使用 **⌘,**（macOS），或 **Ctrl+Alt+S**（Windows/Linux）来打开 IntelliJ IDEA 偏好设置并输入“检查”。 [IntelliJ IDEA 的 检查功能](https://www.jetbrains.com/help/idea/code-inspection.html#access-inspections-and-settings) 对迁移代码非常有帮助。 特别是对 JUnit 测试有多个检查选项。

为了帮助做迁移，打开“JUnit 4 测试可以是 Junit 5”的检查选项。  只有在使用 Java 8 以上的版本，并设置 JUnit 5 依赖项时，才能打开此选项。

![turn_on_inspection.png](turn_on_inspection.png)

让我们打开测试类，查看此操作：

```java
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
       return 14;
   }
}
```

打开此检查后，当前使用 JUnit 5 旧测试引擎运行的 JUnit 4 测试会标记为显示它们可以迁移。 按  **⌥⏎**（macOS），或 **Alt+Enter**（Windows/Linux），IntelliJ IDEA 提示将测试类迁移到 JUnit 5。

![alt_enter_migrate.png](alt_enter_migrate.png)

[重构预览](https://www.jetbrains.com/help/idea/refactoring-source-code.html#refactoring_preview)  窗口会显示将进行更改的位置，在这种情况下，一些注解将更改为新的 JUnit 5 注解。

![refactoring_preview.png](refactoring_preview.png)

如果您想将任何测试排除在重构范围之外，您可以按下 **⌫**，或 ** Delete **。 要再次包括它们，请按下 **⇧⌫**，或 **Shift+Delete**。   按 **执行重构**，让我们看看新代码是什么样子。

```java
public class JUnit4To5 {
  @BeforeAll
  public static void beforeClass() throws Exception {
    System.out.println("JUnit4To5.beforeClass");
  }

  @BeforeEach
  public void before() throws Exception {
    System.out.println("JUnit4To5.before");
  }

  @Test
  public void shouldMigrateASimpleTest() {
    Assertions.assertEquals("expected", "expected");
  }

  @Test
  @Disabled
  public void shouldMigrateIgnoreTestToDisabledTest() {
  }

  @Test
  public void shouldStillSupportHamcrestMatchers() {
    assertThat(1, equalTo(1));
  }

  @Test
  public void shouldStillSupportAssume() {
    Assumptions.assumeTrue(javaVersion() > 8);
    // then go ahead and run the rest of the test
  }

  @AfterEach
  public void after() throws Exception {
    System.out.println("JUnit4To5.after");
  }

  @AfterAll
  public static void afterClass() throws Exception {
    System.out.println("JUnit4To5.afterClass");
  }

  private int javaVersion() {
    // stub method. just used for the example
    return 14;
  }

}
```

如果你使用像Git这样的VCS，用 [本地历史](https://www.jetbrains.com/help/idea/local-history.html#view-local-history)，或 [显示差异](https://www.jetbrains.com/help/idea/differences-viewer.html) 可以并排的查看到代码变化。 左侧的部分向您显示旧的 JUnit 4 文件。 重构器的变化显示在右侧。 主要的变化是，将原本导入的 JUnit 4 的包 `org.junit`，换成 JUnit 5 的 `org.junit.jupiter`。

![diff.png](diff.png)

我们将看到注解之前之后的名称已更改为新的、更具描述性的名称：`BeforeClass` 变成了 `BeforeAll`, `Before` 变成了 `BeforeEach`。

测试注解不会改变，因为仍然相同。 更改了导入的包意味着这将使用新的 `@Test` 注解。 断言声明现在使用的方法是 `Assertions` 类，替代了旧的 `Assert`。

Junit 4 `@Ignore` 注解已被 Junit 5 的 `@Disabled` 所取代。

使用 Hamcrest 匹配器的任何测试仍应像以前一样工作。

JUnit 4.4 引入了假设的概念，如果满足这些假设，则测试将运行。 JUnit 5 提供了一个 `Assumptions` 类，取代了 `Assume`。

和 `Before` 一样，`After` 被 `AfterEach` 所取代，`AfterClass` 被 `AfterAll` 所取代。

IntelliJ IDEA 会自动进行所有这些更改。 完成重构后，与任何其他 IntelliJ IDEA 重构一样，您可以用  **⌘F9**（macOS），或 **Ctrl+F9**（Windows/Linux）查看该类仍可以被正常编译。 让我们用 **⌃⇧R**（macOS），或 **Ctrl+Shift+F10**（Windows/Linux）来运行测试，以确保一切都按照我们预期的方式进行。

`beforeClass` 的方法运行一次，每一个 before 和 after 的方法每次测试之前运行一次， `afterClass` 的方法在结束时运行一次，因此整体设置工作就像在 JUnit 4 下一样。 disabled 的测试仍不会被运行，并且有三个通过测试，与以前相同。

现在，我们做了这些个小的改变，并检查代码的运行如预期的那样，那么我们可以检入这些变化了。

![run_tests.png](run_tests.png)