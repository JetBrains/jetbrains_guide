---
type: 'tip'
date: 2019-03-09
title: 'Adding Fields In a Constructor'
technologies: []
topics: ['editing']
author: 'pauleveritt'
subtitle: 'Let your IDE add constructor arguments to your instance.'
thumbnail: './thumbnail.png'
cardThumbnail: "./card.png"
shortVideo:
  poster: './poster_short.png'
  url: 'https://www.youtube.com/watch?v=2cQiP34Xqro'
longVideo:
  poster: './poster_long.png'
  url: 'https://www.youtube.com/watch?v=2Sl0P_4qmkw'
leadin: |
    *Use a Quick Fix to generate instance attribute assignment*    

    Put your cursor on a constructor argument, hit `Alt-Enter`, 
    and let the IDE generate the line for assigning to `self`.

---

It's one of those chores...your class has an `__init__` with some arguments 
and you need to assign them to `self`. What a lot of typing.

Let the IDE do it for you. As you type the argument name, hit `Alt-Enter` 
and choose `Add 'field' to constructor`, then type the next argument. Or 
later, put the cursor on each argument and invoke it. PyCharm will create 
the assignment for you.
