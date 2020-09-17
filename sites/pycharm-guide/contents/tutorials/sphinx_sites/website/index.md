---
type: TutorialStep
date: 20202-09-10
title: More Website Features
technologies: []
topics: []
author: pwe
subtitle: TODO
thumbnail: ../python-logo.png
---

More than just a docs site, show some other things you do when building a full site.

- How to add very customized html page
    - _templates/about.jinja2
    - With `href="{{pathto('about')}}"`
    - Add to luv_sphinx `<p><a href="{{ pathto('about')}}">About</a></p>`
- ablog for blog integration
    - Add to requirements.txt
    - Add to extensions
    - post and postlist
    - Show some of the other features on the page
