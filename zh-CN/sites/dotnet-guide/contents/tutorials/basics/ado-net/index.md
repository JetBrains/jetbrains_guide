---
type: TutorialStep
date: 2020-06-05
title: Basics of ADO.NET
technologies:
  - .net
products:
  - rider
  - resharper
topics:
  - data
author: khalidabuhakmeh
subtitle: Working with databases using DbConnection, DbCommand, and DbDataReader
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster.png
  url: https://youtu.be/BxCrzUIm5kU
---

ADO.NET is a data service for .NET developers. In the older version of the .NET framework, Microsoft packaged it along with other libraries. More recently, the ADO.NET libraries ship in NuGet packages, with `System.Data.SqlClient` being specifically for SQL Server access. ADO.NET is a low-level interface to our data storage of choice, and its use depends heavily on our understanding of SQL.

There are three commonly used objects in ADO.NET that developers will deal with: `DbConnection`, `DbCommand`, and `DbDataReader`. The SQL Server implementations of these classes are `SqlConnection`, `SqlCommand`, and `SqlDataReader`.

Data access code with ADO.NET always starts with an open database connection. The class allows us to pass commands and read results from a database. We can perform operations through the `DbCommand` implementation. With `SqlCommand`, we can run text, stored procedures, and table direct queries. When executing a SQL query, we can read any results via a `DbDataReader`. Mapping the results to our C# models is our responsibility, and can be tedious.

ADO.NET assumes very little for us, and it is the lowest level approach to data access available to .NET developers. For straightforward scenarios, ADO.NET is a capable and enjoyable method for data access. We may want to consider other approaches when our use cases become more involved or find reusable patterns emerging in our code base.

### Code Snippets

#### Program.cs

```c#
 using System;
  using System.Data;
  using System.Data.SqlClient;
  using System.Threading.Tasks;

  static class Program
  {
    static async Task Main(string[] args)
    {
      // We have a People table
      // with an Id and a Name
      await using var connection =
        new SqlConnection("Server=localhost,11433;User=sa;Password=Pass123!;Database=basics;");

      await connection.OpenAsync();

      // insert into database
      var insert = connection.CreateCommand();
      insert.CommandType = CommandType.Text;
      insert.CommandText = "insert into People (Name) values (@Name)";
      insert.Parameters.AddWithValue("@Name", "Khalid");

      var result = await insert.ExecuteNonQueryAsync();
      Console.WriteLine($"We executed an insert with a result of {result}");

      // read from the database
      var query = connection.CreateCommand();
      query.CommandText = "select Id, Name from People";
      query.CommandType = CommandType.Text;

      await using (var reader = await query.ExecuteReaderAsync())
      {
        while (await reader.ReadAsync())
        {
          Console.WriteLine($"My name is {reader["Name"]}");
        }
      }

      // clean up
      var truncate = connection.CreateCommand();
      truncate.CommandType = CommandType.Text;
      truncate.CommandText = "Truncate Table People";
      result = await truncate.ExecuteNonQueryAsync();

      Console.WriteLine($"We executed an insert with a result of {result}");

      // shut it down, shut it all down            
      await connection.CloseAsync();

      Console.WriteLine("Connection terminated 🤖");
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
      <PackageReference Include="System.Data.SqlClient" Version="4.8.1" />
    </ItemGroup>

</Project>
```

### See Also

- [Microsoft Docs ADO.NET Overview](https://docs.microsoft.com/en-us/dotnet/framework/data/adonet/ado-net-overview)
- [System.Data.SqlClient](https://www.nuget.org/packages/System.Data.SqlClient/)
- [.NET](https://dot.net/)