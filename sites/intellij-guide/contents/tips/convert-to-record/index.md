---
date: 2021-05-05
title: Convert class to record
technologies: [java]
topics: [latest, editing]
author: tg
subtitle: Use inspections to convert classes to Java 16 records
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
  poster: ./tip.png
  url: http://
leadin: |
  IntelliJ IDEA can identify classes that are data holders and can be converted to records. The class will be highlighted with a warning (yellow underline) - press **⌥⏎** (macOS), or **Alt+Enter** (Windows/Linux) and IntelliJ IDEA will suggest converting the class to a record.

  The fields will be become record components, the constructor and accessors will be removed. If we had equals, hashCode and toString methods on our class, we could remove these and rely on the default ones provided for records.



---