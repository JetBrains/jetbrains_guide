---
type: TutorialStep
date: 20202-09-10
title: Simple Markdown in Sphinx
technologies: [sphinx]
topics: []
author: pwe
subtitle: Markdown is a simple formatting language. Let's see it in use in Sphinx.
thumbnail: ../python-logo.png
---

Unlike Python's original [reStructuredText](https://docutils.sourceforge.io/rst.html), Markdown is pretty simple.
But even that simplicity has some cool benefits when used in Sphinx.
Let's look at basic formatting and images in Markdown, and how it connects to Sphinx.

## Background

"Markdown" is a [troubled word](https://arstechnica.com/information-technology/2014/10/markdown-throwdown-what-happens-when-foss-software-gets-corporate-backing/).
It needed a spec, so the [CommonMark](https://commonmark.org) project arose.
Sphinx, via the [MyST parser](https://myst-parser.readthedocs.io/en/latest/), implements the CommmonMark verion of Markdown -- with extensions atop that we'll discuss in the next section.

## Formatting

Let's visit our `http://127.0.0.1:5500/page1.html` URL in the browser and edit our `page1.md` file to make some formatting changes.

As you'd expect, bold and italics works fine. Add the following line:

```
I am *italics* and I am **bold**.
``` 

In your browser you should see this new paragraph with `<em>` and `<strong>` formatting:

TODO Screenshot

Preformatted text -- aka inline `<code>` and block `<pre>` -- also work as expected:

`embed:tutorials/sphinx_sites/_snippets/snippet1.txt`

Indentation also works as "quoted" text:

```
> This text
> is indented.
>> And this is indented more.
```

Both bulleted and numbered lists are supported:

```
- A
- Bulleted
- List

1. A
2. Numbered
3. List
```

Want to link to the Python home page?
Links follow the regular Markdown syntax:

```
The [Python homepage](https://www.python.org/).
```

You can also link to other pages in your site:

```
This site's [homepage](./index)
```

Want a sneak-peak at the awesomeness in the next tutorial step?
Give this a try, and if you're a non-Sphinx Markdown person, ask yourself how `Welcome to Sphinx Sites` got in the built page:

```
This site's [](./index)
```

Answer: Sphinx has some rich interlinking facilities.

One last CommonMark syntax to cover...headings:

```
## Subheading

Subheading text.

### Sub-subheading

More subheading text.
```

Let's see a screenshot with all of this Markdown content:

TODO Screenshot

## Images

Let's use the Python logo from `https://www.python.org/static/community_logos/python-logo.png` loaded into our page.
We'll use the standard Markdown image support to point to a URL:

```
![Python Logo](https://www.python.org/static/community_logos/python-logo.png)
```

While this works well, perhaps we want it served locally.
Download that URL to a file named `python-logo.png`, in the same directory as `page1.md`, and add the following:

```markdown
![Python Logo](python-logo.png)
```

Hmm, interesting!
As part of the standard Markdown syntax, Sphinx copied that image to the build directory and inserted a `src` pointing to its build URL.
That URL, in this case, is `http://127.0.0.1:5500/_images/python-logo.png`.

Sphinx -- meaning RST -- has a more powerful image directive with options beyond just "alt".
This is available in the [Optional MyST Syntax](https://myst-parser.readthedocs.io/en/latest/using/syntax-optional.html), specifically the [expanded image support](https://myst-parser.readthedocs.io/en/latest/using/syntax-optional.html#syntax-images).
Specifically, you can control the image height, width, alignment, and more.

What, then, are [directives](https://www.sphinx-doc.org/en/master/usage/restructuredtext/directives.html)?
These are reStructuredText extensions that take optional parameters and return some content -- HTML for the HTML builder, etc.
They also have semantic meaning in the document.

Directives are blocks.
For inline extensions, RST provides [roles](https://www.sphinx-doc.org/en/master/usage/restructuredtext/roles.html) which do some of the same things.

## What's The Meaning Of It All?

Ok, big deal, a static site generator that can use Markdown syntax.
There are hundreds if not thousands of these.

We'll show in the coming sections the rich engine underneath this syntax.
But even for these simple "formatting" cases, there's more going on than you'd think:

- *It's not just HTML*. Saying `I am *italic*.` generates `<em>`, right?
No, it actually generates an intermediate, semantic node which can, with other builders, do italics in PDF.

- *Rich linking*. With Sphinx+MyST, when Markdown links to something, it isn't just generating an `<a href>`. 
At a minimum, you can get warned at when you link to a target that doesn't exist.
Much more than that, each end knows about the other, as we saw when Sphinx inserted the destination document's title.

- *Rich headings*. A heading makes something big and bold, right?
Actually, it indicates substructure in a page, which can be put to use in many ways.
The `toctree`, for example, can show not just child documents but headings in those documents, as clickable links.
And further down, to sub-subheadings and beyond.

There's a big engine underneath Sphinx+MyST, even for italics, links, and headings.
This engine can be used for rich, organized websites.
Let's see more of this in the next tutorial step.
