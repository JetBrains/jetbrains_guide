---
type: TutorialStep
date: 2020-07-15
title: Inspections and Quick-Fixes in Rider
technologies:
  - .net
  - csharp
topics:
  - completion
  - inspections
products:
  - rider
author: matkoch
subtitle: Dive into inspections and quick-fixes, nullability inspections, the Heap Allocations Viewer plugin, and more!
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster.png
  url: https://youtu.be/Cqvxrj9aq_E
---

### Inspections, Quick-Fixes and Context Actions

One of the strengths of Rider is code analysis. Rider comes with over 2400 code inspections that analyze your code at design time, so you can instantly see any errors, problems or potential improvements – whether in the current file or in our entire solution.

Code Analysis continuously looks at what we are doing and tries to determine what we want to achieve. Rider looks at individual statements and at your overall solution architecture. If it detects a potential issue, it will show a warning. It may show suggestions too, helping you improve code.

Inspections can help you with many things:

* [Spot errors before our application runs](https://blog.jetbrains.com/dotnet/2018/05/22/using-rider-spot-errors-application-runs/)
* [Consistent code bases using Rider code analysis](https://blog.jetbrains.com/dotnet/2018/05/24/consistent-code-bases-using-rider-code-analysis/)
* [Solution-wide analysis in Rider](https://blog.jetbrains.com/dotnet/2018/05/21/solution-wide-analysis-rider/)
* [Learn best practices and language features using Rider code inspections](https://blog.jetbrains.com/dotnet/2018/05/23/learning-best-practices-language-features-using-rider-code-inspections/)

### Learn Language Features - C#8 and Nullability

How do you stay up-to-date and learn about new language features (such as those in C# 8 and C# 9)?

Rider comes with several Language Usage Opportunities inspections that teach new syntax and language updates. For C# 8, Rider helps you migrate a code base to C# 8 and [adopt nullable reference types](https://blog.jetbrains.com/dotnet/2020/04/20/nullable-reference-types-migration/).

### Plugins to Extend Rider Inspections

The [Heap Allocations Viewer plugin](https://plugins.jetbrains.com/plugin/9223-heap-allocations-viewer) helps highlight local object allocations, boxing, delegates and closure creations points. This will make our code perform better in terms of memory usage and throughput.

After installing the [Cognitive Complexity plugin](https://plugins.jetbrains.com/plugin/12024-cognitivecomplexity), Rider will calculate how complex a method is, using the Cognitive Complexity metric, which was proposed by G. Ann Campbell in [Cognitive Complexity - A new way of measuring understandability](https://www.sonarsource.com/docs/CognitiveComplexity.pdf) (c) SonarSource S.A. 2016-2018, Switzerland.

### Share Inspection Settings with the Team

Code inspections have their own default severity level, which is set according to potential impact of code issues that it detects. Most of the inspections have a [configurable severity level](https://www.jetbrains.com/help/rider/Code_Analysis__Configuring_Warnings.html#change_severity), which you can change.

Severities and several other settings can be [shared with your team using settings layers](https://www.jetbrains.com/help/rider/Sharing_Configuration_Options.html).

### See Also

- [Code analysis, inspections and quick-fixes](https://blog.jetbrains.com/dotnet/2018/05/17/introduction-code-analysis-rider/)
- [Rider and nullable reference types](https://blog.jetbrains.com/dotnet/2020/04/20/nullable-reference-types-migration/)
- [Heap Allocations Viewer plugin](https://plugins.jetbrains.com/plugin/9223-heap-allocations-viewer)
- [Cognitive Complexity plugin](https://plugins.jetbrains.com/plugin/12024-cognitivecomplexity)