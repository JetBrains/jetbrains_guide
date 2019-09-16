---
type: tip
date: 2019-04-17
title: Create SQLite Database Connection By Drag-and-Drop
technologies: []
topics: [database,]
author: pwe
subtitle: Drag-and-drop a .sqlite database file onto the Database tool to create a connection.
seealso:
  - title: Connecting to a database
    href: 'https://www.jetbrains.com/help/pycharm/connecting-to-a-database.html#connect-to-sqlite'
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
  poster: ./poster_short.png
  url: https://www.youtube.com/watch?v=-xBE-Dm3HWE
longVideo:
  poster: ./poster_long.png
  url: https://www.youtube.com/watch?v=XsD4eP_iiRk
leadin: |
    *Working with a local SQLite database, the easy way.*    

    Using the integrated Database tool means configuring a connection. 
    For SQLite it's simple: use drag-and-drop and let the IDE figure out 
    the details.

---

PyCharm Professional's Database tool, courtesy of 
[DataGrip](https://www.jetbrains.com/datagrip/), is wonderful. It gives 
you a professional-level, visual way to work with SQL development in a 
project.

The Database tool needs to create database connection for the project, 
which not only lets you browse tables, edit rows, and perform queries, 
but it also injects superpowers into your Python code. Strings in 
Python that look like SQL get autocomplete, not only on SQL, but on 
the tables and columns in your project. Even refactoring those names.

But creating a database connection means filling in some details. For 
a SQLite database, it's a lot easier. Just drag and drop your 
`.sqlite` db file onto the Database tool window. *Note: You might have 
to download the SQLite drivers.*

Once done, your project has a database, you can browse the tables, and 
use the schema in your Python code's SQL strings.

