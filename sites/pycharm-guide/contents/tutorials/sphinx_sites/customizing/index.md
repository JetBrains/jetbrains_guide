---
type: TutorialStep
date: 20202-09-10
title: Customizing Your Site
technologies: []
topics: []
author: pwe
subtitle: TODO
thumbnail: ../python-logo.png
---

- Simple customizing
    - Already saw with extensions and intersphinx mapping
    
## Configuration Values
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
  
## Switch Themes
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

## Custom CSS    
- Add `_static/custom.css`
- Add `html_css_files = ['custom.css']`
- Templated CSS via `.css_t`
    - Use an Alabaster color

## Custom Templates
- Add a `luv_sphinx.jinja2` sidebar via _templates
- Register in sidebars
- Make a change in a page's md, see reload

## HTML Landing Page

Very customized, manual HTML.
- _templates/about.jinja2
- With `href="{{pathto('about')}}"`
- Add to luv_sphinx `<p><a href="{{ pathto('about')}}">About</a></p>`

## Blogging with `ablog`
- Add to requirements.txt
- Add to extensions
- post and postlist
- Show some of the other features on the page

