---
type: TutorialStep
date: 2021-06-02
title: 创建 Spring Boot 项目
technologies: [ ]
topics: [ ]
author: da
subtitle: 使用 Spring Initializr 创建新的 Spring Boot 项目。
thumbnail: ./thumbnail.png
---

首先，我们通过点击欢迎窗口中的** 新建项目 ** 按钮，在 IntelliJ IDEA Ultimate 中创建一个新项目。 从左侧菜单中选择 **Spring Initializr** 。 然后，指定定我们项目的名称 - 你可以称之为 `SpringDataJPA`。 我们还可以将 **组** 的输入内容更改为公司名称。 其他内容，您可以采用默认值。 请随时使用最新的 Java 版本来做您的项目。

![新建项目窗口](./NewProject.png)

然后，我们将点击 **下一步**。

在下一个窗口中，我们将选择最新的 Spring Boot 版本。 然后，在 *依赖项* 里，我们搜索 `data`。 在 *SQL* 的下面，我们将从列表中选择 **Spring Data JPA** 和 **H2 Database**。 在此教程，我们将使用 H2 作为我们的数据库，因为它易于设置。 如果您想要使用不同的数据库，如 MySQL 或 HyperSQL，请随时选择这些依赖项，而不是稍后将其添加到 pom.xml 文件中。

![新建项目窗口依赖项](./NewProject-Deps.png)

一旦我们点击 **完成**，IntelliJ IDEA就会创建一个新的带有 Spring Data JPA 和数据库依赖项的 Spring Boot 项目。
