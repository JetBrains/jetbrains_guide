---
type: TutorialStep
date: 20202-09-10
title: Sphinx Setup
technologies: []
topics: []
author: pwe
subtitle: TODO
thumbnail: ./thumbnail.png
---

- A simple directory with requirements.txt containing Sphinx, MyST, livereload
- Run sphinx-quickstart from command line
    - Explain generated files and dirs, including empty    
- `make html` and right-click to open `_build\html\index.html` in browser
- `make clean`
- Edit `conf.py` to mystify (ha, that's funny)
    - `extensions = ["myst_parser"]`
    - And `'sphinx.ext.autosectionlabel'`
    - And `'sphinx.ext.autodoc'`
- Make `page1.md` and link into toctree
    - Note that you can glob
    - But you'll lose ordering
- A simple `livereload` runner for easier authoring
- Clean up and simplify
    - conf.py
    - index.md
- Add relbar for use in later step
```
html_theme_options = {
'show_relbar_bottom': True,
}
```
