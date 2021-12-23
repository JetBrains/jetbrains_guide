---
type: TutorialStep
date: 2021-06-02
title: 创建 Repository 接口
technologies: [ ]
topics: [ ]
author: da
subtitle: 为 CRUD 操作创建Spring Data repository。
thumbnail: ./thumbnail.png
---

现在，我们已经创建了我们的员工实体，我们需要一种方法来执行我们的 CRUD（创建、读取、更新、删除）操作。 幸运的是，Spring Data JPA 可以通过 Repositories 提供所有基本操作。 让我们看看它是如何工作的。

在 **项目** 窗口中，我们将选择 ` com.jetbrains.springdatajpaapp ` 包，并按 **Alt** + **Insert**（Windows/Linux）或**⌘N**（macOS）。 选择 ** Java类 **。 我们将之命名为 ` EmployeeRepository ` ，这次我们将选择 **接口** 然后按 **回车键**。 为了使我们的接口类能成为repository，我们需要它来继承 `CrudRespository<T, ID>` 接口，具有我们的实体类和实体的 ID 类型的参数。 因此，对于我们的应用程序，我们的repository接口定义将是：`public interface EmployeeRepository extends CrudRepository<Employee, Long>`。

我们将使用这个 ` EmployeeRepository ` 接口在我们的应用程序代码中执行 CRUD 操作。 由于我们继承了 ` CrudRepository `，因此默认情况下，我们可以访问基本的 CRUD 方法。 例如，我们可以调用` save `方法将员工对象插入我们的数据库。 我们还可以调用` findAll `方法，将列出所有您员工表中的员工。 当我们编写应用程序的逻辑时，我们将看到如何做到这一点。

在大多数应用程序中，您发现自己想要做的比` CrudRepository `接口默认为您提供的更多。  例如，我们希望找到所有姓氏里带有一个空格员工。 您当然可以编写 SQL 查询来做到这一点。 但是，一种更简单的方法是利用 Spring Data JPA，它允许您在repository中创建基于方法名称的查询的方法。

假设我们要添加查找所有姓氏中具有特定字符串的员工的方法。 我们将访问我们的` EmployeeRepository `接口，并开始声明我们的方法。 我的方法将返回员工列表，因此我们将使用 `List<Employee>` 作为我们的返回类型。 然后，我们需要指定一个方法名称，它有两个部分：introducer 和 criteria。 我们可以使用 **Ctrl** + **空格键** 在 IntelliJ IDEA 中查看 introducer 部分的方法建议列表：

![Repository 方法提示 Introducer](./RepositoryMethodSuggestion.png)

我们将选择` findEmployeesBy `为 introducer。 然后，我们将再次按下 **Ctrl** + **空格键** ，查看要选择的 criteria 列表。

![Repository 方法提示 Criteria](./RepositoryMethodSuggestion-Criteria.png)

我们选择` LastNameContaining `。 最后，我们将声明一个字符串类型的参数，表示要查询的字符串。 我们现在有了一个方法，可以找到所有姓氏中包含提供的字符串的员工。

你可能会想：如果我定义了这个接口，难道我不用去实现它吗？ 答案是不用。 Spring Data JPA 为您处理！ 所有需要做的就是，定义你的 Repository 接口，并按照 Spring Data 的惯例声明您的方法。 当您添加更多方法时，如果您在方法名称中出现错误，IntelliJ IDEA 会指出这一点。 例如我们尝试创建一个方法，用错误的 `Lname` 属性来查询员工，IntelliJ IDEA给我们一个错误说， `无法解决 Lname 属性`。

![方法签名验证](./MethodSignatureValidation.png)

## 最终结果

您的` EmployeeRepository `接口应是这样的：
```java
package com.jetbrains.springdatajpaapp;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface EmployeeRepository extends CrudRepository<Employee, Long> {
    List<Employee> findEmployeesByLastNameContaining(String str);
}
```

