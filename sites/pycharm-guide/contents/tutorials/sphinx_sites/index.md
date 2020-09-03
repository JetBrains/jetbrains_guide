---
date: 2020-09-10
title: Static Sites With Sphinx and Markdown
technologies: [sphinx]
topics: []
author: pwe
subtitle: Sphinx is great for docs. But it's also great for information-rich websites. With MyST, you can use Markdown with Sphinx.
thumbnail: ./python-logo.png
tutorialItems:
  - /tutorials/sphinx_sites/setup/
  - /tutorials/sphinx_sites/basic_formatting/
  - /tutorials/sphinx_sites/more_authoring/
  - /tutorials/sphinx_sites/linking/
  - /tutorials/sphinx_sites/documentation/
  - /tutorials/sphinx_sites/intersphinx/
  - /tutorials/sphinx_sites/customizing/
  - /tutorials/sphinx_sites/design/
  - /tutorials/sphinx_sites/advanced/
---


Everybody knows [Sphinx](https://www.sphinx-doc.org/en/master/) for documenting projects, Python and otherwise.
But few think of Sphinx for the *rest* of a website.
Why?
Because Sphinx traditionally means authoring with [reStructuredText (RST)](https://docutils.sourceforge.io/rst.html) instead of Markdown.
While RST is very powerful, it's a bit quirky, and nowhere near the popularity of Markdown.

But with the arrival of full Markdown support via [MyST](https://myst-parser.readthedocs.io/en/latest/), and with static site generators having a renaissance, it's time to give Sphinx a second look.
Sphinx is an "information-rich" static site generator, with rich linking and many other features for authoring.

This tutorial shows authoring Sphinx sites using Markdown and what it has to offer versus other approaches.

## Audience

- Existing Sphinx users that aren't yet using Markdown via MyST

- Sphinx documentation writers interesting in site building beyond just docs

- Static site users who aren't using Sphinx and don't know what they're missing

## Goals

- Quickly get oriented with Sphinx for static sites, beyond just documentation

- Show how easy it is to switch to Markdown, and what kind of power you then get

- Cover Sphinx's "special sauce": the data model of doctrees and references that change "pile of pages" into an interconnected site

## Outline

Here's a proposed outline.
Each maps to a tutorial section with a video, a writeup, and working code.

### Intro

- Five minute overview video showing everything in the tutorial
- Get people oriented with the who/what/why

## Setup

- A simple directory with requirements.txt containing Sphinx, MyST, livereload
- Run sphinx-quickstart
- Edit `conf.py` to mystify (ha, that's funny)
- A simple `livereload` runner for easier authoring

## Simple Page

- Basic markdown rules
- Add an image and show image support

## More Pages

- Introduce some of the rst/sphinx integration
- How linking works
    - Warning when missing
    - Get the title from the target
- toctree
- code-block and literalinclude

## Documentation

- Make a module at root
- Autodoc

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

