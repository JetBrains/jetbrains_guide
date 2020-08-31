---
type: TutorialStep
date: 2020-09-10
title: Advanced Usage
technologies: []
topics: []
author: pwe
subtitle: TODO
thumbnail: ../python-logo.png
---


If you've been around Sphinx for a while, you know: it has some powerful machinery.
MyST adds some power of its own.
Let's look at a few more advanced features in each that can help on larger websites.

## Substitutions

Sometimes you have the same fragment of content appearing across your site: snippets of text and/or markup.
[reST has subsitutions](https://www.sphinx-doc.org/en/master/usage/restructuredtext/basics.html#substitutions) with various ways to get them into documents.
There's a [Sphinx add-on](https://pypi.org/project/sphinx-ext-substitution/) which provides more power.

MyST [also allows substitutions](https://myst-parser.readthedocs.io/en/latest/using/syntax-optional.html#substitutions-with-jinja2).
First, enable them in `myst_enable_extensions` in the `conf.py` file:

```python
myst_enable_extensions = ['substitution']
```

Next, edit `page1.md` to add some frontmatter -- a `title` but also a substitution named `snippet`:

```markdown
---
title: Welcome to the Site
substitutions:
    snippet: "I'm a **substitution**"
---

Let's see the `snippet`: {{ snippet }}
```

When the file is saved and Sphinx rebuilds, we see the snippet, rendered from Markdown to HTML:

TODO screenshot

Of course, this snippet is only re-usable in this file.
If we want to re-use the snippet across the whole site, move it to `conf.py`:

```python
myst_substitutions = {
    "snippet": "I'm a **substitution**"
}
```

As the MyST docs show, there's a lot more that can be done with snippets:

- Re-use roles and directives as well as Markdown
- Insert values using Jinja2 expressions
- Combine with filters to transform

## Comments

It seems simple, but it's frequently important: you can hide blocks of Markdown content [using comments](https://myst-parser.readthedocs.io/en/latest/using/syntax.html#comments).
The Markdown that is commented out will then be omitted from being parsed into the document. 

As an example, imagine you have an admonition directive, using the optional colon syntax.
You'd like to temporarily hide it from getting generated.
You can comment it out with leading `%` symbols:

```
% :::{note}
% This text is **standard** _Markdown_
% :::
```

## PDF

Multi-format output has long been one of Sphinx's killer features.
Want to produce HTML *and* PDF?
No problem.

However, that meant going through [LaTeX](https://en.wikipedia.org/wiki/LaTeX).
More recently, [rhinotype](https://github.com/brechtm/rinohtype) is being used to produce structured PDF documents.
As [this Medium tutorial](https://medium.com/@richdayandnight/a-simple-tutorial-on-how-to-document-your-python-project-using-sphinx-and-rinohtype-177c22a15b5b) explains, "Rinohtype, paired with Sphinx, offers a modern alternative to LaTeX."

Let's start by adding `rinohtype` to our `requirements.txt` file:

```
sphinx
livereload
myst-parser
rinohtype
```

Then, install the requirements:

```bash
$ .venv/bin/pip install -r requirements.txt
```

We need to add `rinohtype` as a Sphinx extension:

```python
extensions = [
  'rinoh.frontend.sphinx',
  ...,
]  
```

That's it...we can now use `rinoh` as a Sphinx build target:

```bash
$ cd docs
$ make rinoh
$ open _build/rinoh/myamazingsite.pdf
```

As you can see, the PDF has text, images, links, and a table of contents:

TODO screenshot

PDF is great, but it isn't the only target.
Sphinx has [other builders](https://www.sphinx-doc.org/en/3.x/usage/builders/index.html) as well.
You can even [make your own builder](https://www.sphinx-doc.org/en/3.x/extdev/builderapi.html#sphinx.builders.Builder).

## Conclusion

That wraps up our tutorial series on static websites with Sphinx and Markdown.
There are many other topics to cover -- for example, [blogging with ablog](https://ablog.readthedocs.io) and hosting at (Read the Docs)[https://readthedocs.org], both valuable parts of the ecosystem.
For now, we've covered the basics, and shown that you can indeed use Sphinx for regular sites and Markdown as the authoring language.
