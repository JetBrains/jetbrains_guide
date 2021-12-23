---
type: TutorialStep
date: 2021-03-29
title: Working With Databases
technologies:
  - .net
  - csharp
products:
  - rider
  - resharper
topics:
  - ide
  - data
author: khalidabuhakmeh
subtitle: Effectively working with databases in Rider from a Visual Studio + ReSharper user's perspective.
thumbnail: ./thumbnail.png
---

Databases are an essential part of modern application stacks, and regardless of the choice of the database engine, Rider can dramatically improve the development time experience for users. As developers, we have options that range from traditional relational engines, straightforward key-value storage, and a variety of NoSQL implementations.

This quick overview will explore how developers can work with the most common database in the .NET ecosystem, **Microsoft SQL Server**. We'll connect to a server, manage the database's schema, and work with existing data.

## Connecting To A Database

Visual Studio users typically have two choices when working with an external database: Utilize the **Server Explorer** found in Visual Studio, or use external tools like SQL Server Management Studio and [DataGrip](https://jetbrains.com/datagrip). We'll focus on the **Server Explorer**, as we'll see how familiar the experience can be for developers transitioning to JetBrains Rider.

When starting Visual Studio, developers will notice the **Server Explorer** tab. Here we can add a new **Data Connection** to an existing database server. Connection types include predominantly relational database engines like Microsoft Access, SQL Server, and Oracle.

![Visual Studio Server Explorer Database Connections](./1-visual-studio-server-explorer-connection.png)

Within Rider, developers will find a **Database** tool window.

![JetBrains Rider database tool window](./2-jetbrains-rider-database-tool-window.png)

In this window, we can add connections to all types of engines:

- [Amazon Redshift](https://aws.amazon.com/redshift/)
- [Apache Cassandra](https://cassandra.apache.org/)
- [Clickhouse](https://clickhouse.tech/)
- [Azure SQL](https://azure.microsoft.com/en-us/services/azure-sql/)
- [MySQL](https://www.mysql.com/)
- [MongoDB](https://www.mongodb.com/)
- [Oracle](https://www.oracle.com/index.html)
- [PostgreSQL](https://www.postgresql.org/)
- [SQLite](https://sqlite.org/index.html)
- [Microsoft SQL Server](https://www.microsoft.com/sql-server)
- and more!

Developers may notice that these databases vary in storage philosophies. The database tools in JetBrains Rider are powered by [DataGrip](https://jetbrains.com/datagrip), giving us access to a wide array of database products.

Let's head back to Visual Studio and choose **Microsoft SQL Server** from the data sources list. Once selected, we can enter information like **server name**, **authentication**, and **database name.** We can also test our connection.

![Visual Studio database connection screen](./3-visual-studio-database-connection.png)

Within Rider's **Database** tool window, let's add the same connection. We can enter the same values for **host (server name)**,  **authentication**, and **database name**. In a containerized world, developers will also appreciate the simplicity of setting the **port** value.

![JetBrains Rider database connection dialog](./4-jetbrains-rider-database-connection.png)

## Managing Database Schema

Visual Studio users will recognize the database schema elements in the **Server Explorer**: tables, views, stored procedures, functions, and more. Within Visual Studio, once connected to the database, we can enable our schema's design view, along with a **T-SQL** console window.

![Visual Studio Schema Management](./5-visual-studio-managing-schema-management.png)

The experience should feel natural coming to Rider, as the **Database** tool window will display the server instance, along with all the database schema types logically displayed. Additionally, we can enable a SQL console that will allow us to write and execute any SQL against our database instance.

![JetBrains Rider Database Management](./6-jetbrains-rider-database-management.png)

The **DataGrip** engine also provides contextual tools for modifying schema elements. For instance, right-clicking on a table will allow us to add new details such as indexes, columns, foreign keys, or drop the table entirely. Each context will be different based on the kind of engine currently being managed.

## Editing Data Within A Table

While developers are free to write SQL `insert` and `update` statements in the `Console` window, nothing can compete with the convenience of editing data in a spreadsheet-style format. In Visual Studio, we can enable an editable grid view by selecting a table from the **Server Explorer** and choosing **Show Table Data** from the context menu. From this new editor, we can add, edit, and delete any existing data.

![Visual Studio editing data with data grid](./7-visual-studio-editing-data-grid.png)

Rider users can right-click a table in the **Database** tool window and select **Edit Data** from the context menu. Here they'll see a grid view of all the data present in the table. Developers can double-click on cells to alter data. They may also right-click on a row and choose to delete it entirely.

![JetBrains Rider editing data with data grid](./8-jetbrains-rider-editing-data-in-grid.png)

In addition to editing data in Rider, we many more features at our fingertips. Developers will love the import/export functionality. Here, we can export existing data into a set of different formats: JSON, XML, Excel spreadsheet, Markdown tables, SQL insert statements, and much more.

## SQL Console

The SQL console in Rider is a powerful tool for developers who prefer to write their statements. Rider performs schema introspection, which allows it to suggest potential SQL constructs for inner and outer joins. Not only that, the same syntax highlighting, error highlighting, and code completion features found in .NET code are available in SQL, allowing developers to be as productive whether they are in .NET code or the SQL console.

![JetBrains Rider SQL Console code completion](./9-jetbrains-rider-sql-console.png)

## Conclusion

While developers coming to Rider from Visual Studio may want to use an external tool for database management tasks, we hope they give the built-in database tools in Rider a try first. We believe they'll be surprised by the powerful features, supported database engines, and overall pleasurable experience.

We've only begun to scratch the surface of what Rider database tools can do for developers. To learn more, we suggest diving deeper into our official documentation.

### See Also

- [JetBrains Rider Database tools and SQL](https://jetbrains.com/help/rider/Relational_Databases.html)
- [DataGrip Introduction](https://www.jetbrains.com/help/datagrip/meet-the-product.html)
