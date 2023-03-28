---
date: 2023-02-27
title: C# 11 - Raw strings
technologies: [.net,csharp]
topics: [ide,editing,refactoring,inspections]
products: [resharper,rider]
author: matkoch
subtitle: There is no escape!
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
animatedGif:
  file: './screenshot.gif'
  width: 600
leadin: |
    Raw strings are delimited by 3 double-quotes and let you freely use up to 2 consecutive double-quotes without any escaping.
    They can also be combined with [string interpolation](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/tokens/interpolated).
  
    ```csharp
    var json = """
    {
      "name": "Lucy",
      "age": 32
    }
    """;
    ```

    ReSharper and Rider both support raw strings in various forms. For example, there's a *To Raw String* context action which allows you to convert all verbatim strings in your solution [in one go](https://www.jetbrains.com/help/rider/Coding_Assistance__Context_Actions.html#scope).

    With raw strings, you rarely have to worry about escaping again, and your code will look pretty even in the multiline form.!
  
    ### See Also
    - [Raw Strings, UTF-8 Strings, and Multiline Interpolations (blog post)](https://blog.jetbrains.com/dotnet/2023/02/27/raw-strings-utf-8-strings-multiline-interpolations-using-csharp-11-in-rider-and-resharper/)

---
