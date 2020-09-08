---
type: TutorialStep
date: 20202-09-10
title: More on Pages
technologies: []
topics: []
author: pwe
subtitle: TODO
thumbnail: ./thumbnail.png
---


- Introduce some of the rst/sphinx integration
- Images
    - Markdown syntax for image and alt
    - Directive syntax to tap into the Sphinx image options 
    - https://myst-parser.readthedocs.io/en/latest/using/syntax-optional.html#syntax-images
- toctree
    - Convert index.rst -> index.md
        ```
      .. toctree::
       :maxdepth: 2
       :caption: Contents:
    
      # Indices and tables
    
    * :ref:`genindex`
    * :ref:`modindex`
    * :ref:`search`
      ```
      
    - `Contents:` doesn't work unless you put in a string remove the colon
    - Change to YAML
    - Convert 
- code-block and literalinclude
- Admonition
    - Extended syntax behind the [conf flag](https://myst-parser.readthedocs.io/en/latest/using/syntax-optional.html#syntax-admonitions)
- Client-side search
- Use of YAML for options

