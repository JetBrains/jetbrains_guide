---
type: TutorialStep
date: 2021-01-01
title: Manual migration for more complex cases
technologies: [java]
topics: [testing]
author: hs
subtitle: Migrating more complex uses cases from JUnit 4 to JUnit 5
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/F8UTTTDtbH0?t=566
---

## Manual Migration for More Complex Cases
[Video snippet](https://youtu.be/F8UTTTDtbH0?t=566)
- Removing the [dependency on the JUnit Vintage Engine](https://github.com/JetBrains/intellij-samples/blob/901b5f824e5ee2bbeb3f4b6eb213a237a70b4399/standard-java/pom.xml) from the Maven POM file to see JUnit 4 tests
- Recompiling the project to see which tests relied on the JUnit Vintage Engine and need to be migrated manually
- Updating imports for Hamcrest by statically importing it and then optimizing the imports
- Managing migrations from JUnit 3 tests
- Removing any outstanding references to JUnit 4