---
type: TutorialStep
date: 2021-05-13
title: Linking Between Sites with Intersphinx
technologies: [sphinx]
topics: []
author: pwe
subtitle: Rich structure and linking, between sites.
thumbnail: thumbnail.png
---

Perhaps you've gotten the point by now: Sphinx extracts a lot of *structure* in your site.
But what about *other* sites?

Wouldn't it be great if linking to structure in another site was almost as easy as linking in your own site?
If the path changed, or disappeared, then you'd know?
And you could just use the target's current title as the link text?

Enter...[Intersphinx](https://docs.readthedocs.io/en/stable/guides/intersphinx.html) -- one of those amazing, Sphinx-only things that kind of blows your mind, is really useful, and you don't expect it when coming from other systems.

## How It Works

When you run Sphinx, it reads your source material, makes a tree of rich structure, then generates artifacts in a build directory.
It also, though, generates an `objects.inv` file.
What's that?
It is a serialized "inventory" of the structure of your site, written to the build directory, and available at a URL in your published site.

Other sites can use your "structure" by enabling the Intersphinx extension and registering your site's URL with a prefix.
When they link to structure -- documents, roles, classes -- in their site, they just use that prefix in the link.

As Sphinx is building, it fetches the remote inventory and adds it to the list of structure during building.
If you link to a page in the remote site that doesn't exist, you'll get a warning, just like you do in local links.

## Setting Up

Intersphinx isn't on by default.
We need to do two things in our `conf.py` file to enable it.
First, enable the extention:

```python
extensions = [
    "sphinx.ext.intersphinx",
    # And any other extension
]    
```

Next, we need to register the remote Sphinx sites that we'd like to include inventories from.
For example, let's use the documentation from Sphinx itself:

```python
intersphinx_mapping = {
    "sphinx": ("https://www.sphinx-doc.org/en/master/", None),
}
myst_url_schemes = ["http", "https", ]
```

The last line itself is needed to help [MyST distinguish between URL schemes and references with a colon](https://github.com/executablebooks/MyST-Parser/issues/246).

When you save this file and run a Sphinx (full) build, you'll see this in the console:

```bash
loading intersphinx inventory from https://www.sphinx-doc.org/en/master/objects.inv...
```

## Linking to a Role

We can now put this to use.
In our site, we are writing an article about -- of all things -- Sphinx!
We want to explain Sphinx roles and provide a link to more information.

In regular Markdown sites this is very simple. Just do a link:

```markdown
Let's talk about the power of [Sphinx roles](https://www.sphinx-doc.org/en/master/usage/restructuredtext/roles.html#ref-role).
```

But this has some drawbacks:

- That's a long URL [wink]
- What if we typed it wrong?
- What if the Sphinx docs get re-organized?
- It's no fun thinking of the link text, which might also get out-of-date with the page's meaning

The first three can be solved with a separate link-check step.
But that's not automatic and not as integrated.
It certainly won't help with the last bullet.
And as a whole, it puts remote links outside the cool realm of Sphinx roles machinery.

Instead, MyST gives us a syntax for doing a link when the other end is a Sphinx-powered site.
Once registered in `conf.py` as in the previous step, we can do our familiar linking.
First, we can link to a *document*, such as the Sphinx page explaining roles:

```markdown
Let's talk about the power of [Sphinx roles](sphinx:usage/restructuredtext/roles).
```

We can also link to *roles* -- that is, places *within* a document.
For example, that page has a "role" set using `.. _ref-role:` before the heading `Cross-referencing arbitrary locations`.
This means `ref-role` is a role *target* for a link:

```markdown
Let's talk about the power of [Sphinx roles](sphinx:ref-role).
```

Admit it...that's pretty cool.
We can make it even cooler by letting the remote title be used as link text:

```markdown
Let's talk about the power of [](sphinx:ref-role).
```

Insanely-shorter and lower maintenance.

## Linking to Domains

Sometimes the role we want to link to is part of a [Sphinx domain](https://www.sphinx-doc.org/en/master/usage/restructuredtext/domains.html).
For example, the [`code-block`](https://www.sphinx-doc.org/en/master/usage/restructuredtext/directives.html#directive-code-block) docs are in the `rst:dir` domain.
We can use the MyST "extended Markdown" syntax for this:

```markdown
Let's talk about the power of {rst:dir}`code-block`.
```

## Debugging

This Intersphinx magic is, well, magical.
It can misfire and cause frustration.

First and foremost, watch your Sphinx build output.
If it finds a problem, it will likely give you a very precise answer.

If you stumble trying to find what's available in an inventory, Sphinx provides a [handy utility](https://docs.readthedocs.io/en/stable/guides/intersphinx.html#using-intersphinx) for dumping the remote inventory:

```bash
$ python -msphinx.ext.intersphinx https://www.sphinx-doc.org/en/master/objects.inv
```

## Conclusion

If you're working on content that links to other Sphinx content -- for example, anything on `readthedocs.io` -- the richer link structure can be a big win.
Intersphinx takes a tiny bit of thinking to adjust to it.
Once it becomes habit, though, it really becomes a productive way to work.
