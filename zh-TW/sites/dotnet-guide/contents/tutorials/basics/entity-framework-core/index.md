---
type: TutorialStep
date: 2020-06-05
title: Basics of Entity Framework Core
technologies:
  - .net
products:
  - tRANSLATED Rider
topics:
  - data
author: khalidabuhakmeh
subtitle: Working with databases using an object relational mapper
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster.png
  url: https://youtu.be/F699iNw5Wao
---

Entity Framework Core is what's known as an **Object Relational Mapper** (ORM). Created by Microsoft, the library allows developers to work abstractly with their database. The library comes with two distinct parts: the ORM and the CLI tools. Entity Framework Core supports an array of database options, with the most popular being SQL Server.

To get started, we need to reference three NuGet packages:

- `Microsoft.EntityFrameworkCore`
- `Microsoft.EntityFrameworkCore.SqlServer`
- `Microsoft.EntityFrameworkCore.Tools`

The tools package allows us to execute commands that help us structure our solution and alter our database. Some of the commands we'll be running in this video include `dbcontext scaffold`, `migration add`, and `database update`. These commands will allow us to create and execute a database migration that adds a `People` table, which will be accessible with our `Person` class.

All data access in Entity Framework Core happens through a class that inherits from `DbContext`. In our project, we'll implement a `AcmeDataContext` which exposes a `DbSet<Person>` property of `People`. Entity Framework Core maps this C# class to our `People` table via conventions. With our context created, we can execute database commands like queries, inserts, and deletions.

Entity Framework Core has trade-offs of performance overhead and increased memory usage compared to more tedious approaches like ADO.NET. Most developers are willing to make those trade-offs for increased developer productivity, a high-level database access abstraction, and unit testing options.

### Code Snippets

#### Commands

These commands need to be executed from a command line terminal, like the one found in Rider.

##### Scaffolding

```console
> dotnet ef dbcontext scaffold [connection string] [data provider] [dbcontext name]
```

##### Add Migration

```console
dotnet ef migration add [migration name]
```

##### Update Database

```console
dotnet ef database update
```

#### Program.cs

```c#
class Program
{
    static void Main(string[] args)
    {
      var db = new AcmeDataContext();

      db.People.Add(new Person {Name = "Khalid"});
      db.SaveChanges();

      // initial count
      Console.WriteLine($"# of people in the db: {db.People.Count()}");

      var first = db.People.First();

      Console.WriteLine($"first person: {first.Name}");

      var startsWith = db
        .People
        .First(p => p.Name.StartsWith("kh"));

      Console.WriteLine($"starts with kh: {startsWith.Name}");

      // we can delete the person
      db.People.Remove(first);
      db.SaveChanges();

      // final count
      Console.WriteLine($"# of people in the db: {db.People.Count()}");
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
        <PackageReference Include="Microsoft.EntityFrameworkCore" Version="3.1.4" />
        <PackageReference Include="Microsoft.EntityFrameworkCore.SqlServer" Version="3.1.4" />
        <PackageReference Include="Microsoft.EntityFrameworkCore.Tools" Version="3.1.4">
            <PrivateAssets>all</PrivateAssets>
            <IncludeAssets>runtime; build; native; contentfiles; analyzers</IncludeAssets>
        </PackageReference>
    </ItemGroup>
</Project>
```

#### AcmeDataContext

```c#
using System;
using System.Diagnostics;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace BasicsOfEntityFrameworkCore
{
    [DebuggerDisplay("{Name}")]
    public class Person
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public partial class AcmeDataContext : DbContext
    {
        public DbSet<Person> People { get; set; }


        public AcmeDataContext()
        {
        }

        public AcmeDataContext(DbContextOptions<AcmeDataContext> options)
            : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("<Connection String>");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
```

### See Also

- [Microsoft Docs EF Core Overview](https://docs.microsoft.com/en-us/ef/core/)
- [System.Data.SqlClient](https://www.nuget.org/packages/System.Data.SqlClient/)
- [Entity Framework Core NuGet](https://www.nuget.org/packages/Microsoft.EntityFrameworkCore)
- [.NET](https://dot.net/)