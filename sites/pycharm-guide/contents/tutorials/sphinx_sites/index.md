---
date: 2020-09-10
title: Static Sites With Sphinx and Markdown
technologies: [sphinx]
topics: []
author: pwe
subtitle: Sphinx is great for docs. But it's also great for richly information-rich websites. With MyST, you can use Markdown with Sphinx.
thumbnail: ./python-logo.png
tutorialItems:
  - /tutorials/sphinx_sites/setup/
  - /tutorials/sphinx_sites/simple_page/
  - /tutorials/sphinx_sites/more_pages/
  - /tutorials/sphinx_sites/linking/
  - /tutorials/sphinx_sites/documentation/
  - /tutorials/sphinx_sites/intersphinx/
  - /tutorials/sphinx_sites/customizing/
  - /tutorials/sphinx_sites/website/
  - /tutorials/sphinx_sites/non_html/
  - /tutorials/sphinx_sites/deploy/
---

Everybody knows [Sphinx](https://www.sphinx-doc.org/en/master/) for documenting projects, Python and otherwise.
But few think of Sphinx for the *rest* of a website.
Why?
Because Sphinx traditionally means authoring with [reStructuredText (RST)](https://docutils.sourceforge.io/rst.html) instead of Markdown.
While RST is very powerful, it's a bit quirky, and nowhere near the popularity of Markdown.

But with the arrival of full Markdown support via [MyST](https://myst-parser.readthedocs.io/en/latest/), and with static site generators having a renaissance, it's time to give Sphinx a second look.
Sphinx is an "information-rich" static site generator, with rich linking and many other features to author.

This tutorial shows authoring Sphinx sites using Markdown and what it has to offer versus other approaches.

## Audience

- Existing Sphinx users that aren't yet using Markdown via MyST

- Sphinx documentation writers interesting in site building beyond just docs

- Static site users who aren't using Sphinx and don't know what they're missing

## Goals

- Quickly get oriented with Sphinx for static sites, beyond just documentation

- Show how easy it is to switch to Markdown, and what kind of power you then get

- Cover Sphinx's "special sauce": the data model of doctrees and references that change "pile of pages" into an interconnected site


## Intro Video

- Five minute overview video showing everything in the tutorial
- Get people oriented with the who/what/why
- If you've never used Sphinx
    - Omitted page
    - Broken link
    - Getting title from target
    - Linking to spot in a page
        - and thus, not filename when you rename or re-arrange
    - Linking into code
    - Linking between sites
    - Other formats
    - Other "knowledge base" kinds of features
- You can use .md and .rst

## TODO

- Add (somewhere) something about internal heading contents in a document