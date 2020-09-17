---
type: TutorialStep
date: 20202-09-10
title: Linking Between Sites with Intersphinx
technologies: []
topics: []
author: pwe
subtitle: TODO
thumbnail: ../python-logo.png
---

- One of those amazing, Sphinx-only things
- Consume, publish, partition
- Show some of the configuration options
- Where does it write its "inventory"

- Enable the extension
    - `'sphinx.ext.intersphinx'`
    - ```
    intersphinx_mapping = {
        'sphinx': ('https://www.sphinx-doc.org/en/master/', None),
    }
    myst_url_schemes = ["http", "https", ]
    ```
- `[Sphinx Roles](sphinx:ref-role)`
- `[myst ref](myst:howto/autosectionlabel)`
- {ref}`Myst Reference <myst:howto/autosectionlabel>`
- Getting title from target instead of supplying explicitly
- Look at the logs for missing targets
- Roles vs. paths
    - Both can use extracted titles