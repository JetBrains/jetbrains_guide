---
type: TutorialStep
date: 2021-06-02
title: 创建员工实体
technologies: [ ]
topics: [ ]
author: da
subtitle: 创建代表员工的 JPA 实体。
thumbnail: ./thumbnail.png
---

实体是要插入到数据库的数据 Java 类。 对于我们的应用程序，我们将创建一个员工实体，我们将使用该实体将员工数据插入到我们数据库中的员工表中。

在 **项目** 窗口中，找到到我们的 `src/main/java` 目录，选择 ` com.jetbrains.springdatajpaapp` 包，然后按 **Alt** + **Insert**（Windows/Linux），或 **⌘N**（macOS）。 选择 **Java 类** ，然后键入我们的实体名称 - `Employee`。 然后，按 **回车键**。

在员工类中，我们将通过在班级定义中添加 `@Entity` 注释并导入 `javax.persistence.Entity` 包，使其成为一个实体。 这样之后，你会注意到你的类里有错误。

![Employee 实体报错](./EmployeeEntity.png)

正如错误消息所示，实体类里必须具有主键。主键通过由 `@Id` 注解的字段来指定。 我们将使用 **Alt**+**Shift**+**回车键** 快捷方式，以便 IntelliJ IDEA 可以为我们添加 ID，从而提示输入 ID 字段的信息。 我们将采取默认的 *名称* 和 *类型*。 您也可以选择 *字段访问* 选项（我更喜欢字段上的注解，而不是setter方法，因为我觉得它更具有可读性）。 您还可以选择*生成* 选项，这样您就不必自己分配员工 ID。

![添加员工 ID](./AddIdAttribute.png)

然后，我们点击 **OK**。 你会注意到， Intellij IDEA 创建了一个 `id` 字段与它的setter和getter方法。

接下来，让我们添加几个字符串字段： `firstName` 和 `lastName`。

然后，我们将通过 *生成* 菜单（**Alt**+**Insert** （Windows/Linux）或 **⌘N**（macOS）来生成构造函数，选择 **构造函数**。 我们不需要构造器去管 `ID` 因为我们的 ID 将被自动生成，因此我们将单击 ** firstName **，然后按住 **Ctrl**（Windows）或 **⌘**（macOS）再选择 **lastName**。

![生成构造函数](./GenerateConstructor.png)

然后，我们点击 **OK**。

现在，您会发现您的 `Employee` 类中出现错误，因为您没有无参数的构造器。 如果您按 **Alt + Enter** （Windows/Linux），或 **⌥⏎** （macOS），IntelliJ IDEA 会为您创建它。好的，让我们继续。

接下来，我们来生成字段的setter和getter方法。 我们将通过 *生成* 菜单（**Alt** + **Insert**（Windows/Linux）或 **⌘N**（macOS）），并选择 **Getter和Setter**。 按住 **Ctrl** （Windows）或 **⌘** （macOS）并选择两个变量。 然后，我们点击 **OK**。 IntelliJ IDEA 将为两个变量生成getter和setter方法。

最后，让我们生成一个 `toString` 方法，再次打开 *生成* 菜单（**Alt** + **Insert**（Windows/Linux）或 **⌘N**（macOS）），并选择 **toString**。 选取所有字段，并单击 **OK**。

## 最终结果

您的` Employee `实体类应看起来如下（格式可能有所不同）：
```java
package com.jetbrains.springdatajpaapp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Employee {
    @Id
    @GeneratedValue
    private Long id;
    private String firstName;
    private String lastName;

    public Employee() {
    }

    public Employee(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                '}';
    }
}
```