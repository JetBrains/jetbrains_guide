# Welcome to sphinx_sites

```{toctree}
:maxdepth: 2
:caption: "Contents:"

page1
page2
```

Here is a link to the [Page 1](page1) page and to {ref}`A Heading` in it.

Link to docs: [Hello](hello.Hello) and {py:class}`hello.Hello` .

## Blog

```{eval-rst}
.. postlist::
   :list-style: circle
   :category: Manual
   :format: {title}
   :sort:
```

## Indices and tables

* {ref}`genindex`
* {ref}`modindex`
* {ref}`search`
