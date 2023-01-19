---
type: TutorialStep
date: 2023-02-06
title: Maven projects
technologies: [maven]
topics: [build,packagesearch,security,ultimate]
author: md
subtitle: View vulnerable dependencies in Maven projects
thumbnail: ./thumbnail.png

---

There are several ways to view known vulnerabilities for the dependencies to your project.

In a Maven project, all of your project's dependencies are declared in the pom.xml. When we open the pom.xml file for a project which contains vulnerable dependencies, we see that several dependencies are highlighted. 

![Maven pom.xml with vulnerable dependencies highlighted](pomxml-highlight.png)

The Package Checker plugin highlights vulnerable dependencies and when we hover over the highlighted dependency, IntelliJ IDEA Ultimate shows all the vulnerabilities that were identified in this particular dependency. When we click on link for the CVE for a particular vulnerability, we're redirected to the Checkmarx Advisory to learn more about this specific vulnerability.

![Maven pom.xml with hover](hover.png)

Another way to see all the vulnerable packages is by right-clicking on the pom.xml file and selecting **Analyze** > **Show Vulnerable Dependencies**. This will open the Vulnerable Dependencies tool window.

![Open Vulnerable Dependencies tool window from pom.xml](open-from-pomxml.png)

![Vulnerable Dependencies tool window](vulnerable-dependencies-tool-window.png)

