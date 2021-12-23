---
type: TutorialStep
date: 2020-06-05
title: Basics of Dapper
technologies:
  - .net
products:
  - rider
  - resharper
topics:
  - data
author: khalidabuhakmeh
subtitle: Working with databases using Open Source
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster.png
  url: https://youtu.be/vdd3l_cPsA4
---

Somewhere between an Object Relational Mapper (ORM) and ADO.NET sits a niche many developers have begun to embrace. MicroORMs provide some of the best features of ORMs but without the drawbacks associated with object tracking. Some of these features include connection management, object mapping, and the use of SQL. In the .NET space, Dapper is the most popular of these MicroORM offerings.

To use Dapper, we first need a `DbConnection` implementation. In this example, we'll be using `System.Data.SqlClient` and `SqlConnection`, but Dapper supports other databases that use the `DbConnection` abstraction. We also need a projection class representing the results of our SQL query. In this case, we have a `Person` class. The advantage our using a MicroORM like Dapper, is we can have many different read models,  without being constrained by our database schema.

Executing commands is as simple as finding the extensions on our `DbConnection`. In this video, we use `QueryAsync` and `ExecuteAsync` to return results and manage our data.

In general, a MicroORM provides a straightforward approach to data access. It's essential to have an understanding of SQL and how to write performant queries. One of the drawbacks to MicroORMs is their coupling to the database. Written SQL queries are in a particular database's dialect, making switching databases more work. In addition to database coupling, accurate tests require standing up a database instance, which may be difficult. These are minor drawbacks, and ultimately, users benefit from the performance increases and predictable execution times.

### Code Snippets

#### Program.cs

```c#
using System;
using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;
using Dapper;

public class Person
{
    public int Id { get; set; }
    public string Name { get; set; }
}

class Program
{
    static async Task Main(string[] args)
    {
        using IDbConnection connection =
            new SqlConnection("Server=localhost,11433;User=sa;Password=Pass123!;Database=basics;");

        var people = 
            await connection.QueryAsync<Person>("select * from People");

        foreach (var person in people)
        {
            Console.WriteLine($"Hello from {person.Name}");
        }

        var name = "Steve Rogers";
        var count = 
            await connection
                .ExecuteAsync(
                    @"insert People(Name) values (@name)",
                    new { name });


        Console.WriteLine($"Inserted {count} rows.");

        var removed =
            await connection.ExecuteAsync(
                "delete from People where Name = @name",
                new {name}
            );

        Console.WriteLine($"Removed {removed} rows.");
    }
}
```

#### Project CSPROJ

```xml
<Project Sdk="Microsoft.NET.Sdk">

    <PropertyGroup>
        <OutputType>Exe</OutputType>
        <TargetFramework>netcoreapp3.1</TargetFramework>
    </PropertyGroup>

    <ItemGroup>
        <PackageReference Include="System.Data.SqlClient" Version="4.8.1"/>
        <PackageReference Include="Dapper" Version="2.0.35"/>
    </ItemGroup>

</Project>
```

### See Also

- [Dapper](https://github.com/StackExchange/Dapper)
- [System.Data.SqlClient](https://www.nuget.org/packages/System.Data.SqlClient/)
- [.NET](https://dot.net/)