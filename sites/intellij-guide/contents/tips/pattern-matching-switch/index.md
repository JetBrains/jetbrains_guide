---
hasBody: true
date: 2022-05-18
title: Pattern Matching for Switch
technologies: [java]
topics: [editing, refactoring]
author: hs
subtitle: Pattern Matching for Switch
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
  poster: ./tip.png
  url: https://youtu.be/-1DXJvgUTkA
seealso:
  - title: (blog) Java 17 and IntelliJ IDEA
    href: https://blog.jetbrains.com/idea/2021/09/java-17-and-intellij-idea/
leadin: |
    Ensure your SDK and Language Level are at least Java 17 (Preview) in your Project Structure with **⌘;** (macOS), or **Ctrl+Alt+Shift+S** (Windows/Linux). IntelliJ IDEA will tell you that support for this feature might be discontinued in future releases - this is because it's a preview feature and is subject to change.

    In switch statements or IntelliJ IDEA highlights these with a warning and suggests replacing this with pattern matching for instanceof.

    Press ⌥⏎ (macOS) or Alt+Enter (Windows/Linux) and choose "Replace with pattern variable".

---

```java
public class PatternMatchingSwitch {
	
	void outputValueInUpperCase(Object obj) {
		if (obj instanceof String) {
			String s = (String) obj;
			System.out.println(s);
		}
	}
}
```

You can press ⌥⏎ (macOS) or Alt+Enter (Windows/Linux) and choose "Replace 's' with pattern variable".

```java
public class PatternMatchingSwitch {

    void outputValueInUpperCase(Object obj) {
        if (obj instanceof String s) {
            System.out.println(s);
        }
    }
}
```