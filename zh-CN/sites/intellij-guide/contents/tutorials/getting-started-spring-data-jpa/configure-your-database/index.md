---
type: TutorialStep
date: 2021-06-02
title: 配置数据库
technologies: [ ]
topics: [ ]
author: da
subtitle: 配置应用程序来连接我们的数据库。
thumbnail: ./thumbnail.png
---

这时候，我们可以使用 Spring Boot 来为我们创建默认的内存数据库。 但是默认的数据库功能有限，不允许数据在应用程序终止后保留数据，所以让我们来继续配置一个数据库。

我们将调出搜索菜单（**Shift**+**Shift**），并搜索我们的 `application.properties` 文件。 在我们的 `application.properties` 文件中，我们可以利用 IntelliJ IDEA 的建议来指定我们需要连接到我们的 [H2](https://www.h2database.com/html/main.html) 数据库的属性。 我们将开始输入 `url` ，并从建议的列表中选择 `spring.datasource.url` 属性。

![Application Properties URL](./ApplicationProperties.png)

如果您没有使用 H2 作为数据库，您可以在此处指定自己的数据库 URL。 在我们的例子中，我们将指定 `jdbc:h2:file:./data/myDB` 作为我们的 URL，这将创建一个名为 `myDB` 的 H2 数据库。

然后我们需要指定我们的 driver 的类的名称。 我们同样可以从建议列表中寻找 `driver` 并选择 `spring.datasource.driver-class-name` 。 一旦我们选择了它，IntelliJ IDEA 将根据我们之前指定的 URL 来建议 H2 driver 的值，以便我们可以选择。

![Application Properties Driver Class](./ApplicationPropertiesDriverClass.png)

接下来，我们将同样寻找 `username` 和 `password` 属性，并分别将其值设置为 `sa` 和 `password` 。

最后，我们不想手动地创建任何表，因此我们将添加 `spring.jpa.hibernate.ddl-auto` 属性，并使用代码补全来查看可能的值的列表。

![Application Properties ddl-auto](./ApplicationPropertiesDDLAuto.png)

对于我的应用程序，我将设置属性值为 `update` 。这将在我的表不存在的时候，在数据库中创建它们，如果我对我的实体进行了更改，更新它们。

## 最终结果

您的 `application.properties` 文件应该看起来像这样：

```
spring.datasource.url=jdbc:h2:file:./data/myDB
spring.datasource.driver-class-name=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=password
spring.jpa.hibernate.ddl-auto=update
```