---
type: tip
date: 2018-11-06
title: One Import Per Line Preference
technologies: []
topics: [editing]
author: pwe
subtitle: Tell PyCharm to put each import on a separate line when it cleans up your imports.
seealso:
  - title: Code Style Preferences for Python Imports
    href: 'https://www.jetbrains.com/help/pycharm/2018.3/code-style-python.html#imports'
  - title: Optimize Imports
    href: 'https://www.jetbrains.com/help/pycharm/2018.3/creating-and-optimizing-imports.html#optimize-imports-in-project'
  - title: YouTrack Feature Ticket for One-Per-Line
    href: 'https://youtrack.jetbrains.com/issue/PY-20100'
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
  poster: ./poster_short.png
  url: https://www.youtube.com/watch?v=EvKXVp4BXGk
longVideo:
  poster: ./poster_long.png
  url: https://www.youtube.com/watch?v=X43p3MBx9i8
leadin: |
  *Don't waste time manually putting imports one-per-line. Let your tool do it.*

  Switching between files...we all do this, all the time. Use the ``Recent Files`` 
  action to quickly jump between the files you are working on. Moral of the story? 
  Let PyCharm be your janitor.
---

Writing Python code means importing stuff. Lots of code can mean lots
of imports. Python is pretty picky about style, and so are you, which
can mean lots of tedious manual gardening of your imports.

PyCharm's `Optimize Imports` acts as your import janitor and it
has settings which let you specify some options on style import. PyCharm
2018.3 adds a preference: "One Import Per Line". With this setting in
place, PyCharms `Optimize Imports` action will rewrite lines like this:

```python
from project.models import Item, User, Account
```

...into lines like this:

```python
from project.models import Account
from project.models import Item
from project.models import User
```

Don't forget, PyCharm can also run the `Optimize Imports` action, with
options such as `Only VCS changed files`, across all the files in your
project. Also, check out the other ways to customize import styles.
