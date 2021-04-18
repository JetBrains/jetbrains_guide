---
type: TutorialStep
date: 2021-04-16
title: Custom Site Design
technologies: []
topics: []
author: pwe
subtitle: Let's change the look on the website with new templates.
thumbnail: ../python-logo.png
---

- Not complete (figures might be wrong), not perfect (no SCSS customizing)
- Make a `page.html` that is static
  - h1
- What other "pages"
  - about, donate, layoute, navigation, relations, support
- We're not making a layout, not making a re-usable theme
- bulma starter
  - https://bulma.io/documentation/overview/start/#starter-template
- Getting some data in
  - https://www.sphinx-doc.org/en/master/templating.html#global-variables
  - Logo: <img src="{{ pathto('_static/python-logo-generic.svg', 1)}}"
  - {{ title }} | {{ project }}
  -         <h1 class="title">{{ title }}</h1>
  - {{ copyright }}
  - {{ body }} and class="content"
- Blocks
  - https://www.sphinx-doc.org/en/master/templating.html#blocks
  - Link to basic template
  - We though don't want any of them yet
- The headings have the paragraph symbol showing
  - Needs hiding via some CSS
  - For now, just include the alabaster.css
  - <link rel="stylesheet" href="{{ pathto('_static/alabaster.css', 1) }}">
- Fix code snippets with pygments
  - <link rel="stylesheet" href="{{ pathto('_static/pygments.css', 1) }}">

- Fix search with the js
  - First a searchbox
  - Where is it?
  - Not in Alabaster
  - In basic/layout.html which includes a macro searchbox.html
  - Also in basic.css_t (but we can ignore it all)
  - Also in doctools.js but we will ignore that
  - Now convert to Bulma, navbar-end
  - But the search results page doesn't have Bulma theme
  
- page.html -> layout.html

- Other parts missing
    - meta and canonical stuff
    - favicon
    - Just read through basic/layout.html
  