---
date: 2021-03-23
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
  IntelliJ IDEA can identify classes that are data holders and can be converted to records. The fields will be become record components, and the constructor and accessors will be removed. We can use the default implementations of equals, hashCode and toString on record by removing these methods.



---