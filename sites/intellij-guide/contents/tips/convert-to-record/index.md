---
date: 2021-05-05
title: Convert class to record
technologies: [java]
topics: [latest, editing, inspections]
author: tg
subtitle: Use inspections to convert classes to Java 16 records
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
  poster: ./tip.png
  url: https://youtu.be/Csv5TKu0TeY
seealso:
  - title: (video) Using Java 15 with IntelliJ IDEA
    href: https://www.youtube.com/watch?v=IvytsoAUEZA
  - title: (documentation) IntelliJ IDEA Blog - Java 16 and IntelliJ IDEA
    href: https://blog.jetbrains.com/idea/2021/03/java-16-and-intellij-idea/
leadin: |
  IntelliJ IDEA can identify classes that are data holders and can be converted to records. The class will be highlighted with a warning (yellow underline) - press **⌥⏎** (macOS), or **Alt+Enter** (Windows/Linux) and IntelliJ IDEA will suggest converting the class to a record.

  The fields will be become record components, the constructor and accessors will be removed. If we had equals, hashCode and toString methods on our class, we can optionally remove these and rely on the default record implementation.



---