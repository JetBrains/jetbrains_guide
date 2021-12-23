---
type: TutorialStep
date: 2021-06-02
title: 从您的应用程序中对数据库进行写入
technologies: [ ]
topics: [ ]
author: da
subtitle: 将四名员工插入到数据库中
thumbnail: ./thumbnail.png
---

现在我们有了我们的员工的实体、仓库和数据库配置，我们准备开始编写我们的应用程序的逻辑。 比如说我们想要插入四名员工到我们的数据库。 我们导航到之前我们的 Spring Boot 应用程序创建的 `SpringDataJpaApplication` 类（**Shift**+**Shift** 来搜索类）。

**练习**：花几分钟时间来看看是否您可以创建 `insertFourEmployees(EmployeeRepository repository)` 方法来使用 `save()` 方法插入员工纪录。

完成? 以下是您的代码的大概的样子：
```java
private void insertFourEmployees(EmployeeRepository repository) {
    repository.save(new Employee("Dalia", "Abo Sheasha"));
    repository.save(new Employee("Trisha", "Gee"));
    repository.save(new Employee("Helen", "Scott"));
    repository.save(new Employee("Mala", "Gupta"));
}
```

现在，让我们继续在我们的应用程序中调用该方法。 在一个典型的 Spring Boot 应用程序中，我们将会有一个服务类来包含服务所提供的功能。 但是，因为我们在做一些一次性的操作，所以让我们保持简单，并使用一个 bean 来调用我们的 `insertFourEmployees` 方法。 然后，让我们调用 `repository.findAll()` 来检索之前插入的实体。 如下所示：

```java
@Bean
public CommandLineRunner run(EmployeeRepository repository) {
    return (args) -> {
        insertFourEmployees(repository);
        System.out.println(repository.findAll());
    };
}
```

让我们运行我们的应用程序，来看看它的运行情况。 我们可以在 Windows/Linux 上按 **Shift**+**F10** ，在 macOS 上按**⇧R** 来运行。

## 最终结果
一旦我们的应用程序启动了，我们可以看到控制台日志在显示我们的 Spring Boot 应用程序已经在启动了。 然后，我们可以看到我们的 `findAll` 调用的结果，它从数据库里输出我们的员工。

![应用程序运行成功](./ApplicationRunSuccess.png)