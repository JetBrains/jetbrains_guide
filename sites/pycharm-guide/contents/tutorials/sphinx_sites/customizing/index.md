---
type: TutorialStep
date: 20202-09-10
title: Customizing Your Site
technologies: []
topics: []
author: pwe
subtitle: TODO
thumbnail: ./thumbnail.png
---

- Simple customizing
    - Already saw with extensions and intersphinx mapping
- Config values
    - Change the project title to Sphinx Sites
    - Show the [docs page with config values](https://www.sphinx-doc.org/en/master/usage/configuration.html)
    - ```python 
        html_sidebars = {
    '**': [
        'about.html',
        'navigation.html',
        'relations.html',
        'searchbox.html',
        'donate.html',
    ]
} 
      ```
- Switch themes
    - Make requirements.txt
    - Install [sphinx-book](https://sphinx-book-theme.readthedocs.io/en/latest/)
    - Change `html_theme` to `sphinx_book_theme`
    - Show sphinx-book theme's configuration page
    - Note the warning that `show_relbar_bottom` is not supported in this theme
        - So switch back to Alabaster
    - Other [themes](https://sphinx-themes.org)
- Images
    - Python logo from https://www.python.org/static/community_logos/python-logo-generic.svg
    - wget into sources root above _static
    - In conf `html_logo = 'python-logo-generic.svg'`
- CSS
    - Add `_static/custom.css`
    - Add `html_css_files = ['custom.css']`
    - Templated CSS via `.css_t`
        - Use an Alabaster color
- Templates
    - Add a `luv_sphinx.jinja2` sidebar via _templates
    - Register in sidebars
    - Make a change in a page's md, see reload