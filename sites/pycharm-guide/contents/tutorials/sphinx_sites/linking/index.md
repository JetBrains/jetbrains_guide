---
type: TutorialStep
date: 2020-09-10
title: Linking
technologies: []
topics: []
author: pwe
subtitle: Sphinx turns links into structure, which turns out to be very valuable.
thumbnail: ../python-logo.png
---

Websites have links, of course, and static site generators can generate those links for you.
It turns out to be very helpful.
For example, a correctly-relative link will be generated to the target, from the source -- which isn't as easy as it sounds.

Sphinx, though, takes this to a much, much different level.
It takes all the resources in your site and makes, essentially, a big tree.
This tree goes beyond the document itself, letting sections be link targets.
With this, linking becomes trivial, convenient, and less error-prone.
And more feature-ful.

Let's take a look at how this works, then show it in Markdown.

## How Sphinx Linking Works

Imagine a Sphinx site, in RST, with two documents in it: `first.rst` and `second.rst`.
You want to link from one to the other, right in the middle of your text.
In Sphinx with RST, you would type in the *first* document:

```
More information is available in :doc:`second`.
```

Sphinx then generates the link:

TODO Screenshot

"Wait!" you say. 
"There's no link text?"

Indeed, that's true, and it's part of the power of Sphinx: it keeps a "database" of everything in your site.
When you made the link above, Sphinx:

- Found the document at the path `second` (*without* the `.rst` suffix)
- If it didn't exist, Sphinx *would complain*
- It fetched the target's title and used that as the link text.

In comparison to other "blogging" static site generators, this is a big deal.
Of course, Sphinx has variations on this:

- You can use relative paths in your separator
- If you want to supply your own link text, that's ok too.

Beyond these simple variations, Sphinx brings more big tools to the game.
First, you include documents into the "tree" using a "table of contents" directive.
For example, a folder at `/some/folder/index.rst` might have the following:

```
.. toctree::
   :maxdepth: 2

   intro
   strings
   datatypes
```

These list the items in that "folder", providing an order, with links to each item.
The table of contents is then rendered into a nicely-styled list, right there in the doc.
Not only that, the ToC will look *into* each file (hence the `maxdepth`) and provide links to the substructure.

This is an immensely powerful and customizable facility.
And like all other things in Sphinx, it generates links for HTML, PDF, and the other targets.
  
## Markdown Linking

If that's how linking works with RST, how about Markdown?
In short: wonderfully.
MyST has, through several iterations, arrived at several Markdown-friendly ways to express Sphinx linking.

In the *simplest*, most-normal Markdown, the example above changes to:

```markdown
More information is available in [another document](second).
```

Looks just like Markdown.
It has the benefit, from Sphinx, that you will get yelled at if `second` doesn't exist.
And of course, the link will work in PDF output.

But we lost that other cool benefit: getting the title from the target document.
How do we get that back?

```markdown
More information is available in [](second).
```

Leave the link text out of the `[]` and you're telling Sphinx to supply it for you.
  
## Headings and Roles

Some might not want to think in terms of filenames and relative paths to directories.
In fact, some might not want to think of "files", and instead, consider places *within* a document to be targets for links.
Sphinx has the concept of [roles](https://www.sphinx-doc.org/en/master/usage/restructuredtext/roles.html) to describe link targets.
With this, you put site-unique labels somewhere in a document, than anything can link to it.

In the above example, imagine the document `second.md` had the following:

```
A paragraph.

(about_site)=
## About This Site

Some text.
```

You don't really want to link to the document: you want to link to that *part* of the document.
This is a job for [Sphinx roles](https://www.sphinx-doc.org/en/master/usage/restructuredtext/roles.html#cross-referencing-syntax) and you can use these with Markdown syntax:

```markdown
Read more about this site in {ref}`about_site`.
```

Sphinx will do the following:

- Find the role definition
- Warn if it doesn't exist  
- Get link text from the heading after the role
- Generate a link to that document, but with...
- ...an internal anchor to scroll down to that heading.

With regular -- that is, "non-role" -- links, you could override the link text instead of using the target's title.
That's supported in role-based linking as well.

## Automatically Create Section Targets

It's nice to link to documents and get the automation that goes with it.
Same for linking to manually-provided roles atop section headings.

Want to skip manually preceding headings with role definitions?
There's [a MyST setting](https://myst-parser.readthedocs.io/en/latest/using/syntax-optional.html#syntax-header-anchors) for that.

TODO First

- `[myst ref](myst:howto/autosectionlabel)`
- {ref}`Myst Reference <myst:howto/autosectionlabel>`

## Other Links

This is already a powerful set of features.
But really, `:download:` (from the previous tutorial step) and `:ref:` are just examples of the role machinery.
Much more can be done with linking.

Have some content that is repeated across files, and you'd like to include it?
MyST supports [including Markdown from another file](https://myst-parser.readthedocs.io/en/latest/using/howto.html#include-rst-files-into-a-markdown-file).

Sphinx is most known for documentation via `autodoc`, which [generates roles that can then be linked to](https://www.sphinx-doc.org/en/master/usage/quickstart.html#autodoc) with special syntax.

We mentioned `toctree` above.
It makes "files" into "documents" in a "doctree".
Which means, Sphinx has links available to go to previous and next targets.

Finally, want to see if all your links are good?
Run `make linkcheck`.

TODO First