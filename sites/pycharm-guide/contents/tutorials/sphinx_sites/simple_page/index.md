---
type: TutorialStep
date: 20202-09-10
title: Simple Markdown in Sphinx
technologies: [sphinx]
topics: []
author: pwe
subtitle: Markdown is a simple formatting language. Let's see it in use in Sphinx.
thumbnail: ./thumbnail.png
---

Unlike Sphinx's original reStructuredText, Markdown is pretty simple.
But even that simplicity has some cool impact when used in Sphinx.
Let's look at basic formatting and images.

## Background

"Markdown" is a [troubled word](https://arstechnica.com/information-technology/2014/10/markdown-throwdown-what-happens-when-foss-software-gets-corporate-backing/).
It needed a spec, so the [CommonMark](https://commonmark.org) project arose.
Sphinx, via the [MyST parser](https://myst-parser.readthedocs.io/en/latest/), implements the CommmonMark verion of Markdown -- with extensions atop that we'll discuss in the next section.

## Formatting

Let's visit our `http://127.0.0.1:5500/page1.html` URL in the browser and edit our `page1.md` file to make some formatting changes.

As you'd expect, bold and italics works fine. Add the following line:

```markdown
I am *italics* and I am **bold**.
``` 

In your browser you should see this new paragraph with `<em>` and `<strong>` formatting.

Preformatted text -- aka inline `<code>` and block `<pre>` -- also work as expected:

```
Some `valid code` inline but also in a block:

```markdown
Preformatted text
in here.
```
```

Indentation also works as as "quoted" text:

```markdown
> This text
> is indented.
>> And this is indented more.
```

Both bulleted and numbered lists:

```markdown
- A
- Bulleted
- List

1. A
2. Numbered
3. List
```

Want to link to the Python home page?
Links follow the regular Markdown syntax:

```markdown
The [Python homepage](https://www.python.org/).
```

You can also link to other pages in your site:

```markdown
This site's [homepage](./index)
```

Want a sneak-peak at the awesomeness in the next section?
Give this a try, and if you're a non-Sphinx Markdown person, ask yourself how `Welcome to Sphinx Sites` got in there:

```markdown
This site's [](./index)
```

tl;dr Sphinx has some rich interlinking facilities.

One last CommonMark syntax to cover...headings:

```markdown
## Subheading

Subheading text.

### Sub-subheading

More subheading text.
```

## Images

Let's get the Python logo from `https://www.python.org/static/img/python-logo.png` loaded into our page.
We'll use the standard Markdown image support to point to a URL:

```markdown
![Python Logo](https://wiki.python.org/wiki/europython/img/python-logo.gif)
```

While this works well, perhaps we want it served locally.
Download that URL to a file named `python-logo.gif`, in the same directory as `page1.md`, and add the following:

Hmm, interesting!
As part of the standard Markdown syntax, Sphinx copied that image to the build directory and inserted a `src` pointing to its build URL.
That URL, in this case, is `http://127.0.0.1:5500/_images/python-logo.gif`.

Sphinx -- meaning RST -- has a more powerful image directive with options beyond just "alt".
This is available in the [Optional MyST Syntax](https://myst-parser.readthedocs.io/en/latest/using/syntax-optional.html), specifically the [expanded image support](https://myst-parser.readthedocs.io/en/latest/using/syntax-optional.html#syntax-images).
Specificall, you can control the image height, width, alignment, and more.

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
