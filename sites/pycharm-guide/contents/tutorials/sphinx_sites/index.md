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

