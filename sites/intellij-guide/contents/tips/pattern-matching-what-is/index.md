---
hasBody: true
date: 2021-10-09
title: What is Pattern Matching
technologies: [java]
topics: [latest, inspections]
author: hs
subtitle: 
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
  poster: ./tip.png
  url: https://youtu.be/qCfuQkddCEM
leadin: |

  A new Java release every six months can be exciting, overwhelming, or both. Given that Java 17 is also an LTS release, it’s not just the developers but enterprises also noticing it. If you have been waiting to move on from Java 8 or 11, now is the time to weigh its advantages.

  In this blog post, I will limit the coverage of Java 17 to its language features – Sealed Classes and Pattern Matching for switch. I’ll cover what these features are, why you might need them, and how you can start using them in IntelliJ IDEA. I will also highlight how these features can reduce the cognitive complexity for developers. You can use this link for a comprehensive list of all the new Java 17 features.

  Added as a standard Java language feature in Java 17, sealed classes enable you to control the hierarchies to model your business domain. Sealed classes decouple accessibility from extensibility. Now a visible class or interface doesn’t need to be implicitly extensible.

  Pattern matching for switch is introduced as a preview feature. As the name suggests, it adds patterns to the case labels in the switch statements and switch expressions. The type of the selector expression that can be used with a switch is expanded to any reference value. Also, case labels are no longer limited to constant values. It also helps replace if-else statement chains with switch, improving code readability.

  Let’s start with pattern matching.

---

# Pattern Matching Background
  Pattern matching is a big topic and it is being rolled out in batches in the Java language. It started with pattern matching for instanceof (previewed in Java 14, and becoming a standard feature in Java 16). Pattern matching for switch is included in Java 17, and we are already looking at deconstructing records and arrays with record patterns and array patterns in Java 18.


## What is Pattern Matching?
[Wikipedia](https://en.wikipedia.org/wiki/Pattern_matching) states pattern matching is “the act of checking a given sequence of tokens for the presence of the constituents of some pattern”.

Let’s make it more specific to our examples. You can compare pattern matching to a test – a test that should be passed by a value (primitive or object) against a condition. For example, the following are valid pattern matching examples:

1) Is the value an instance of class `String`?
2) Is the value a subclass of class `AirPollution`, and the value returned by one of its methods, say, `getAQI()` is > 200?

There are different types of patterns. In this blog post, I’ll cover type patterns, guarded patterns, and parenthesised patterns – since they are relevant to pattern matching for switch.

Pattern matching for instanceof uses type pattern. Let’s look at how it works.

