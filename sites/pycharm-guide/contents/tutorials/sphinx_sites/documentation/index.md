---
type: TutorialStep
date: 20202-09-10
title: Using Sphinx for Documentation
technologies: []
topics: []
author: pwe
subtitle: TODO
thumbnail: ../python-logo.png
---

This tutorial is about using Sphinx for more than documentation.
But sometimes you want code, inside your website.
You can still do that when using Sphinx and Markdown, and the combination has both some treats and pitfalls.
Let's take a look.

## Code In A Document

## Including Code From a File


## Configuring `autodoc`

## Documenting a Module

## Referencing Symbols in Docs


- code-block
    - Some Python code
    - Some JS
    - function hello(msg) {return `Hello ${msg}`}
- literalinclude
    - A Python file, so language isn't needed
    - A JS file, where language is needed
- Make a module at root
- Add to conf.py:
```python
import os
import sys
sys.path.insert(0, os.path.abspath('.'))
```
- Autodoc
```{eval-rst}
.. autoclass:: hello.Hello
```
- Autodoc https://myst-parser.readthedocs.io/en/latest/using/howto.html#use-sphinx-ext-autodoc-in-markdown-files
- Then, reference a symbol in the docs, from any page:
    - Extended Markdown ` [Hello](hello.Hello) `
    - Role {py:class}`hello.Hello`
    - The latter has more meaning/styling in Sphinx