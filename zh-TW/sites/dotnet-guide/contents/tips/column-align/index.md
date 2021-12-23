---
date: 2020-01-29
title: Formatting code in columns
technologies:
  - .net
products:
  - rider
  - resharper
topics:
  - editing
author: matkoch
subtitle: Easily read common code in column-style layout!
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
animatedGif:
  file: './guide.gif'
  width: 500
leadin: |
  **Ad-hoc formatting or everywhere?** 📐

  Aligning properties in columns can greatly improve readability for DTOs or vector data types. We can also align binary expressions, invocations and many more constructs. However, often we don't want to apply such formatting across our whole code base, but in very particular cases. Using **formatter comments**, we can format our code just for a specific scope:

  ```
  public class PersonDto
  {
  // @formatter:<setting_name> <value>
  public Guid     PersonGuid  { get; set; }
  public int      PersonId    { get; set; }
  public DateTime UtcCreated  { get; set; }
  public DateTime UtcModified { get; set; }
  public string   Name        { get; set; }
  public string   Email       { get; set; }
  public string   City        { get; set; }
  public string   State       { get; set; }
  public int      ZipCode     { get; set; }
  // @formatter:<setting_name> restore
  }
  ```

  In order to determine the `setting_name` and `value`, we recommend to first change the formatting through the settings dialog, save it to the solution layer, and then to identify the added line in `your-solution.sln.dotsettings`.

  May the formatting be with you! 🧙🏻

  ### See Also
  - ["Formatting" on the JetBrains .NET blog](https://blog.jetbrains.com/dotnet/?s=formatting)
  - [Format and Reformat Code](https://www.jetbrains.com/help/rider/Code_Formatting_Style.html)
---

