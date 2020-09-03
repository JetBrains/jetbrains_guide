# Static Sites With Sphinx and Markdown

Everybody knows Sphinx for documenting project, Python and otherwise.
But not everybody thinks of Sphinx for the rest of a site.
With the arrival of full Markdown support via MyST, and with static site generators having a renaissance, it's time to give Sphinx a second look.

This tutorial shows authoring Sphinx sites using Markdown and what it has to offer versus other approaches.

## Audience

- Existing Sphinx users that aren't yet using Markdown via MyST

- Sphinx documentation writers interesting in site building beyond just docs

- Static site users who aren't using Sphinx and don't know what they're missing

## Goals

- Quickly get oriented with Sphinx for static sites

- Show how easy it is to switch to Markdown, and what kind of power you then get

- Cover Sphinx's "special sauce": the data model of doctrees and references that change "pile of pages" into an interconnected site

## Outline

Here's a proposed outline.
Each maps to a tutorial section with a video, a writeup, and working code.

### Intro

- Five minute overview video showing everything in the tutorial
- Get people oriented with the who/what/why
- You can use .md and .rst


## Setup

- A simple directory with requirements.txt containing Sphinx, MyST, livereload
- Run sphinx-quickstart from command line
    - Explain generated files and dirs, including empty    
- `make html` and right-click to open `_build\html\index.html` in browser
- Edit `conf.py` to mystify (ha, that's funny)
    - `extensions = ["myst_parser"]`
- Make `page1.md` and link into toctree
- A simple `livereload` runner for easier authoring
- Clean up and simplify
    - conf.py
    - index.md

## Simple Page

- Basic markdown rules
    - Implements [CommonMark](https://commonmark.org)
    - Bold, Italics, pre, quoted text
    - Lists
    - Links
    - Headings (and what that means)
- Add an image and show image support
    - Show that it got copied to the _build/html/_images
    - Mention the expanded, non-CommonMark support

## More Pages

- Introduce some of the rst/sphinx integration
- [Image](https://myst-parser.readthedocs.io/en/latest/using/syntax-optional.html#syntax-images)
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
- code-block and literalinclude

## Linking

- How linking works
    - Warning when missing
- Get the title from the target
- Link to a heading
- Other kinds of links
    - ref
- Previous/Next


## Sidebar: How MyST Works

## Extended MyST Syntax

- We saw some examples in "More Pages"
- Let's give a canonical tour
- Frontmatter YAML becomes docinfo
- Directive
    - These are extension points
    - Use [caption example](https://myst-parser.readthedocs.io/en/latest/using/syntax.html#parameterizing-directives)
- Math
- Line comment
- Code fence
- Role
    - These are [extension points](https://myst-parser.readthedocs.io/en/latest/using/syntax.html#roles-an-in-line-extension-point)
    - Example from there
- Target
- Link
- eval-rst
- Admonition special syntax


## Use for Documentation

- Make a module at root
- Autodoc
- Impact of markdown

## Intersphinx

- One of those amazing, Sphinx-only things

## Customizing

- Simple customizing: config values, switch themes, sidebars

## Homepage and Blog

More than just a docs site, show some other things you do when building a full site.

- How to use very customized html page for root
- ablog for blog integration

## Non-HTML

- Generate PDF

## Deploy to RTD

## Why Sphinx?

Now that we've introduced some features, let's revisit this.

- For jekyll, Hugo, etc.

## What's Next

- Customizing
- Themes
- Extensions
- Internals

# Notes

- Emphasize at the top that we are building a site, not documenting a project

    - Don't make docs dir
    
