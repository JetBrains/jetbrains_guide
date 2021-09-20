---
type: TutorialStep
date: 2021-03-01
title: Inspections and Quick-Fixes in ReSharper
technologies:
  - .net
  - csharp
topics:
  - 补全
  - inspections
products:
  - resharper
author: matkoch
subtitle: Helping you write better code, faster, and automatically fixes code issues.
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster.png
  url: https://youtu.be/RgDGJ9H63n4
---

### What are Inspections and Quick-Fixes?

ReSharper warns you when there's a problem in your code at design time, so you see any errors, problems or possible improvements directly in the editor. Many of these inspections come with associated quick-fixes - an automated way of solving the issue by pressing <kbd>Alt+Enter</kbd>.

Inspections are shown in the editor, using different types of underlines. The type of underline depends on the severity of an inspection. They can be hints, suggestions, warnings, or errors. Certain inspections can also be plain informational and will use individual highlighting.

### Applying Quick-Fixes

When hovering an inspection, ReSharper will show you that a quick-fix is available by showing a red (for errors) or yellow (for warnings, suggestions and hints) light bulb that appears to the left of a highlighted code line. You can see the list of available quick-fixes for a given error by clicking the light bulb, or by pressing <kbd>Alt+Enter</kbd>. Then, select an appropriate quick-fix from the list, and the issue will be resolved by ReSharper.

### Inspections for Code Style

While ReSharper comes with a wide range of code inspections to notify us about redundancies in code, potential code quality issues or common practices, there are also a number of inspections that help with readability.

* [Maintaining consistent code style with formatting inspections](https://blog.jetbrains.com/dotnet/2018/04/04/maintaining-consistent-code-style-formatting-inspections-resharper-2018-1/)
* [使用EditorConfig配置检查严重性](https://blog.jetbrains.com/dotnet/2018/04/05/configuring-inspection-severities-editorconfig/)
* [EditorConfig中来自Roslyn惯例的代码样式设置](https://blog.jetbrains.com/dotnet/2018/04/06/code-style-settings-roslyn-conventions-editorconfig/)
* [StyleCop code style settings and inspections](https://blog.jetbrains.com/dotnet/2018/04/09/stylecop-code-style-settings-inspections/)

### Share Inspection Settings with the Team

ReSharper comes with severities pre-configured, but it's easy to change the severity of an inspection to your own or your team's preference. For example, some teams may want to enforce using `var` in code by showing that inspection as an error, while others will opt for this being a suggestion. Some teams will prefer `string.Format()`, while others prefer string interpolation. Changing the severity will help you and your team write more consistent code, and ReSharper will nudge you when something is off.

Most of the inspections have a [configurable severity level](https://www.jetbrains.com/help/resharper/Code_Analysis__Configuring_Warnings.html#change_severity).

Severities and several other settings can be [shared with your team using settings layers](https://www.jetbrains.com/help/resharper/Sharing_Configuration_Options.html).

### Usage in Continuous Integration (CI)

ReSharper's code analysis can also be used while practicing continuous integration. For that, the [ReSharper Command-Line Tools](https://www.jetbrains.com/help/resharper/ReSharper_Command_Line_Tools.html) can be used. Specifically the `inspectcode` command, will create a report with all the discovered code issues as a simple XML report. Such a report can either be manually examined with XML APIs, or reported to [TeamCity](https://jetbrains.com/teamcity) to show as an additional report tab.

### 另请参阅

- [代码分析](https://www.jetbrains.com/help/resharper/Code_Analysis__Index.html)
- [Quick-fixes for issues in code](https://www.jetbrains.com/help/resharper/Code_Analysis__Quick-Fixes.html)
- [ReSharper Command-Line Tools – Cross-Platform and Global Tools](https://blog.jetbrains.com/dotnet/2020/07/16/resharper-command-line-tools-cross-platform-and-global-tools/)
- [Establishing a zero-warning policy with ReSharper’s solution-wide analysis](https://blog.jetbrains.com/dotnet/2016/10/04/establishing-a-zero-warning-policy-with-resharpers-solution-wide-analysis/)