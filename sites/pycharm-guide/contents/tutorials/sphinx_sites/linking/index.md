---
type: TutorialStep
date: 20202-09-10
title: Linking
technologies: []
topics: []
author: pwe
subtitle: TODO
thumbnail: ./thumbnail.png
---
- How linking works
    - Warning when missing
- Normal Markdown external linking
    - Empty `[]` means get the title from the target
- Get the title from the target
    - Use `{doc}`
    - Also show providing own title
    - Warning on a bad target
    - Or, use the Markdown syntax `[my text](header_target)`
- Link to a heading
    - Notice that Sphinx puts little on-hover icons
    - Put in `(a_heading)=` above the heading
    - Use `{ref}`
    - Again, overriding title
    - Show the warning on a bad reference
    - [Autosection extension](https://myst-parser.readthedocs.io/en/latest/using/howto.html#automatically-create-targets-for-section-headers)
        * Can prefix to make unique      
    - Generate some typos on both sides to show warnings  
- Other kinds of links
    - `:download:`
- [Includes](https://myst-parser.readthedocs.io/en/latest/using/howto.html#include-rst-files-into-a-markdown-file)
- Previous/Next
    - Just mention it is a concept in the linking model
- `make linkcheck`