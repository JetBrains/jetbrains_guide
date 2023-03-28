---
date: 2023-03-05
title: C# 11 - Required Keyword
technologies: [.net,csharp]
topics: [ide,editing,refactoring,inspections]
products: [resharper,rider]
author: matkoch
subtitle: Introducing the required keyword for fields and properties.
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
animatedGif:
  file: './screenshot.gif'
  width: 600
leadin: |
    In C# 11, when a member is declared as `required`, the compiler will issue an error when the member is not set at creation:
    
    ```csharp
    var person = new Person { FirstName = "Tom", LastName = "Kazansky" };
    // error: FirstName and LastName are not set
    // var p = new Person();
  
    class Person
    {
      public required string FirstName;
      public required string LastName { get; init; }
    }
    ```

    ReSharper and Rider fully support the `required` keyword: it is recognized in your code and listed in code completion.
    They also provide code analysis and quick-fixes to initialize the required fields and properties.
  
    ### See Also
    - [Required Keyword, Checked Operators, nameof Operator Scope (blog post)](https://blog.jetbrains.com/dotnet/2023/03/06/required-keyword-checked-operators-nameof-operator-scope-using-csharp-11-in-rider-and-resharper/)

---
