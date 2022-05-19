# Hello Page 1

```{eval-rst}
.. post:: 
    :tags: draft, earth, love, peace
```

[Drafts](./blog/drafts)

I can make some *italics*, some **bold**, and some `code`.

I can do lists:
- Item one
- Item two

I can [link to the Sphinx page](https://www.sphinx-docs.org/).

## A Heading

Goes here.terminal

```javascript
function hello(msg) {
  return `Hello ${msg}`
}
```

And literal include.

```{literalinclude} hello.js
:language: javascript
```
## Images

![Logo](logo.png)

```{image} logo.png
:alt: Fishy
:width: 500px
```


## Autodoc

The docs.

```{eval-rst}
.. autoclass:: hello.Hello
```

## Intersphinx Stuff

- [Sphinx Roles](sphinx:ref-role)
- [sphinx.ext.autodoc](sphinx:sphinx.ext.autodoc)
- [](markdown_it:md/plugins)
- {ref}`my text <sphinx:ref-role>`
- [my text](sphinx:ref-role)
- [myst ref](myst:howto/autosectionlabel)
- {ref}`Myst Reference <myst:howto/autosectionlabel>`

zz