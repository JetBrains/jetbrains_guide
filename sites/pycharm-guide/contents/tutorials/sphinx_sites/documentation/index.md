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

It is quite common in Markdown to just embed a code snippet in a page.
Markdown calls these "fenced code blocks" (or code fences, or code blocks) as they use a triple backtick enclosing symbol.

Sphinx has a concept of [code-blocks](https://www.sphinx-doc.org/en/master/usage/restructuredtext/directives.html#directive-code-block).
We can use Markdown code fences to generate Sphinx code blocks:

~~~
```
def hello(name):
   return f'Hello {name}'
```
~~~

Of course you might want to tell Sphinx what language is the code block, to get the correct syntax highlighting.
`python3` is the default, but perhaps you want to show a JavaScript snippet.
Just put the language after the first triple-backtick, from the [list of languages supported by Pygments](https://pygments.org/docs/lexers/):

~~~
```javascript
 function hello(msg) {return `Hello ${msg}`}
```
~~~

Sphinx has a number of [options for code blocks](https://www.sphinx-doc.org/en/master/usage/restructuredtext/directives.html#directive-code-block), including:

- Showing line numbers
- Emphasizing certain lines with highlighting
- Providing a caption


## Including Code From a File

Inlining code snippets seems to be the dominant usage in Markdown.
In Sphinx, though, it is more common to point your document at a file containing the code, then including it.
Sphinx uses the [literalinclude](https://www.sphinx-doc.org/en/master/usage/restructuredtext/directives.html#directive-literalinclude) directive for this.

Thanks to MyST, we also have a Markdown-friendly syntax for this.
Imagine we have a Python module `my_demo.py` in the same directory as a Markdown file.
We can directly include it, with syntax highlighting, using:

~~~
```{literalinclude} demo1.py
```
~~~

Sphinx's `literalinclude` has a number of options, similar to `code-block`. 
Want to highlight two lines?
Use MyST's [Markdown-oriented directive options](https://myst-parser.readthedocs.io/en/latest/api/directive.html?highlight=yaml#module-myst_parser.parse_directives) instead of the RST-style of key-value pairs:

~~~
```{literalinclude} demo1.py
---
emphasize-lines: 19-20
---
```
~~~

The `literalinclude` options in Sphinx are quite powerful and productive to use.
For example, you can use `start-after` and `end-before` to only include parts in between some matching text.

## Configuring `autodoc`

Sure, this tutorial is about using Sphinx for websites, instead of docs.
But the line between the two is thin.
Perhaps you want a full-featured "knowledge base" website oriented around code.
(Yep, me too.)

This brings up the centerpiece of the Sphinx ecosystem: [autodoc](https://www.sphinx-doc.org/en/master/usage/extensions/autodoc.html).
With Autodoc, you point a Sphinx doc at your code and it generates a structured, highlighted, interlinked collection of sections.
Even better, the symbols in your code become "roles" in Sphinx which you can directly to.

Let's setup `autodoc` for use in a MyST-powered website.
First, in our `conf.py`, include the `autodoc` extension.
Also, add the current directory to the front of our `PYTHONPATH`, so our module can be imported.

```python
import os
import sys
sys.path.insert(0, os.path.abspath('.'))

extensions = [
    'sphinx.ext.autodoc',
    # And any other extension
]    
```

With this in place, you can use `autodoc` directives in your Sphinx pages.

## Documenting a Module

Let's do that now.
We have a page at `page1.md` which we'd like to include some module documentation into.
The [Sphinx docs on `autodoc`](https://www.sphinx-doc.org/en/master/usage/extensions/autodoc.html#directives) show that it is straightforward.
Then, the [MyST How To](https://myst-parser.readthedocs.io/en/latest/using/howto.html?highlight=autodoc#use-sphinx-ext-autodoc-in-markdown-files) shows how to do this in Markdown:

~~~
## About `MyDemo`

Let's take a look at this Python class.

```{eval-rst}
.. autoclass:: my_demo.MyDemo
---
members: parse
---
```
~~~
We're using the YAML flavor of directive arguments.
In this example, documentation for the `MyDemo` class will be inserted into the page.
Here's what the rendered output looks like:

TODO Screenshot

It's very rich output, with lots of links generated to imports, symbols, etc.
But we can actually do a little bit better, with formatted docstrings and type hints.

## Docstrings and Type Hints

Our `my_demo.MyClass` doesn't yet have a docstring, nor does it use type hints for parameters and return values.
Let's change it to be a better-documented class:

TODO Updated MyDemo

Python docstrings are reStructuredText, but don't have any conventions about the structure.
[NumPy](https://numpydoc.readthedocs.io/en/latest/format.html#docstring-standard) and [Google](https://google.github.io/styleguide/pyguide.html#Comments) have popular style guides for Python docstrings, and the Napolean extension can support either.
The updated `MyClass` uses Google docstring style.

It also uses Python 3.6+ type hints.
We now need to teach Sphinx to "interpret" the new structure.
First, install `autodoc` extension packages for Napoleon and type hints:

```bash
$ pip install sphinxcontrib-napoleon
$ pip install sphinx-autodoc-typehints
```

Then edit your `conf.py` file to add two more Sphinx extensions:

```
extensions = [
    'sphinx.ext.autodoc',
    'sphinxcontrib.napoleon',
    'sphinx_autodoc_typehints',
    # And any other extension
]
```

Now when Sphinx renders the next time, our page with the `autodoc` directive looks like this:

# TODO Screenshot

It's visually attractive.
More than that, though...it's semantically rich: links to navigate around, styling for the structure, and more.

More?

## Referencing Symbols in Docs

As with other things in Sphinx, `autodoc` isn't just about getting pretty pixels on the page.
It's really about getting *structure* into Sphinx's "doctree".
With `autodoc`, the symbols in your code become roles that we can link to.

To see it in action, open XXX for editing.
In this page, we want to talk about `MyClass` and link to it, using Markdown-friendly syntax.

For example, we can use MyST "extended Markdown" syntax:

```markdown
As we can see in [our Python class](my_demo.MyDemo), Python is fun!
```

Of course, same rules apply: you can let Sphinx generate the link text, using the title of the target:

```markdown
As we can see in [](my_demo.MyDemo), Python is fun!
```

We can also use role-based syntax, with the [Python domain](https://www.sphinx-doc.org/en/master/usage/restructuredtext/domains.html) as a prefix:

```markdown
As we can see in {py:class}`my_demo.MyDemo`, Python is fun!
```

## Conclusion

There lots, *lots* more regarding Sphinx and including source code.
Many plugins, many central concepts, and a lot of structure.