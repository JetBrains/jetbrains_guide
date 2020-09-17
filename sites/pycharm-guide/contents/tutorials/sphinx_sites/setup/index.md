---
type: TutorialStep
date: 2020-09-10
title: Sphinx Setup
technologies: [sphinx]
topics: []
author: pwe
subtitle: Make a project and virtual environment with dependencies, then make a simple Sphinx site.
thumbnail: ../python-logo.png
---

Sphinx can be added to an existing Python application or library to provide documentation.
But it can also be used as the project itself -- for example, a website.
In this tutorial step we start a new *website* as a new Python project, using Sphinx.

# New Project

Let's start from...well, the beginning: an empty directory, into which we will slowly build a website.

First, let's make a new directory and change into it:

```bash
$ mkdir sphinx_site
$ cd sphinx_site
```

*Note: We're using macOS/Linux/WSL command shell syntax in this tutorial.*

Projects should work with a [virtual environment](https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/) for isolation.
Real Python has a [nice primer on virtual environments](https://realpython.com/python-virtual-environments-a-primer/) with the why, what, and how.
Let's make a new virtual environment, stored inside our project in the `.venv` directory.
We'll then "activate" it, which changes our command path to first look in this virtual environment's `bin`:

```bash
$ python3 -m venv .venv
$ source .venv/bin/activate
```

`pip` is Python's package installer. 
It's always good to update your `pip`.
Note that in the following, thanks to the `source` line above, our shell is using `python3` from the virtual environment directory:

```bash
$ pip install --upgrade pip
```

Our blank, new project is now ready for a Sphinx installation.

## Installing Sphinx

Open this project directory in your favorite editor.
We'll install our packages by editing a new `requirements.txt` file, to store our dependency listing.
For now, put the following line in it:

```
sphinx
```
 
We can now, using our activated shell, use `pip` to install our dependencies:

```bash
$ pip install -r requirements.txt
```

Sphinx has a number of dependenices itself, so this might take a while to get all the packages.
When done, let's confirm that Sphinx is installed:

```bash
$ ls .venv/bin/sphinx-quickstart
```

Sphinx has a number of commands (implemented in Python.)
These are added to your virtual environments `bin` directory.
If you see `sphinx-quickstart`, your in good shape.

# Make a Sphinx Site

We're all set up...time to make a site.
Sphinx ships with [a site generator command](https://www.sphinx-doc.org/en/master/usage/quickstart.html) called `sphinx-quickstart` which is now in the `bin` directory of your virtual environment.

Let's run it and answer some questions, accepting most of the defaults:

```bash
$ sphinx-quickstart 
Welcome to the Sphinx 3.2.1 quickstart utility.

Please enter values for the following settings (just press Enter to
accept a default value, if one is given in brackets).

Selected root path: .

You have two options for placing the build directory for Sphinx output.
Either, you use a directory "_build" within the root path, or you separate
"source" and "build" directories within the root path.
> Separate source and build directories (y/n) [n]: 

The project name will occur in several places in the built documentation.
> Project name: My Site
> Author name(s): Paul Everitt <pauleveritt@me.com>
> Project release []: 

If the documents are to be written in a language other than English,
you can select a language here by its language code. Sphinx will then
translate text that it generates into that language.

For a list of supported codes, see
https://www.sphinx-doc.org/en/master/usage/configuration.html#confval-language.
> Project language [en]: 

Creating file /Users/pauleveritt/projects/scratchpad/sphinx_sites/conf.py.
Creating file /Users/pauleveritt/projects/scratchpad/sphinx_sites/index.rst.
Creating file /Users/pauleveritt/projects/scratchpad/sphinx_sites/Makefile.
Creating file /Users/pauleveritt/projects/scratchpad/sphinx_sites/make.bat.

Finished: An initial directory structure has been created.

You should now populate your master file /Users/pauleveritt/projects/scratchpad/sphinx_sites/index.rst and create other documentation
source files. Use the Makefile to build the docs, like so:
   make builder
where "builder" is one of the supported builders, e.g. html, latex or linkcheck.
```

Our directory now has a number of items:

- `conf.py` as the Sphinx configuration file

- `index.rst` as the "home page" or document at the top of our site

- `Makefile` (and `make.bat` for Windows) as a simple command runner

- Empty directories for `_build` (generated files), `_static` (custom site assets), and `_templates` (custom templates).

*Note: If you are using an IDE such as PyCharm, mark the `_build` directory as ignored.*

## Building (and Rebuilding)

We are ready to build our site.
On macOS or Linux, run `make html` to generate the `html` "builder".
(As `sphinx-quickstart` noted at the end, Sphinx supports different builders for different kinds of output.)

Uh oh, our `.venv` was picked up as part of our site!
Easy fix, and one that introduces the [Sphinx configuration file](https://www.sphinx-doc.org/en/master/usage/configuration.html).
Open `conf.py` and make a change to `exclude_patterns`, adding `.venv` at the end:

```python
exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store', '.venv']
```

Before running `make html`, let's introduce the command `make clean` to remove the previous build.
We'll then run `make html`:

```bash
$ make clean
$ make html
```

Hmm, interesting, the output says:

```
building [html]: targets for 0 source files that are out of date
```

That's because Sphinx keeps intermediate representations between runs to support incremental builds.
`make clean` only removes the "build" artifacts -- in this case, `html` as it was the builder we used with `make html`.

Let's see how to actually clean things up.
`make html` is a thin layer over `sphinx-build`, just choosing some normal defaults.
Let's run the equivalent `sphinx-build` command:

```bash
$ sphinx-build -b html . _build/html
```

The `-b html` option chooses the `html` builder.
The `.` says the current directory is has the Sphinx sources and the `conf.py`.
Finally, the last argument says to write the `html` output to the `_build/html` build directory.

We can pass another option, saying to do a *full* build instead of incremental:

```bash
$ sphinx-build -b html -E . _build/html
```

The addition of the `-E` argument for `sphinx-build` now generates an output message:

```
updating environment: [new config] 1 added, 0 changed, 0 removed
```

# `livereload` Server

Other static site generators (SSGs) have nice authoring servers: you type in some stuff, a build happens, and the browser reloads automatically.
That helps during a tutorial, so let's do something similar for Python with the [livereload package](https://pypi.org/project/livereload/).

First, install `livereload` into your virtual environment.
We'll do so by adding it to `requirements.txt`.
Then run:

```bash
$ .venv/bin/pip install -r requirements.txt
```

With the package now installed, create a file such as `run_livereload.py`, in the same directory as `conf.py`:

`embed:tutorials/sphinx_sites/setup/run_livereload.py`

When you execute this Python script, it starts a local web server at a URL:

```bash
$ .venv/bin/python ./run_livereload.py 
[I 200910 13:47:15 server:335] Serving on http://127.0.0.1:5500
[I 200910 13:47:15 handlers:62] Start watching changes
[I 200910 13:47:15 handlers:64] Start detecting changes
```

If you go to that URL, you should see the site:

TODO Screenshot

Very good, we have a running (local) site!
Let's show the benefit of `livereload`.
Edit `index.rst` and put a `Hello World` paragraph above the `toctree`:

```
Welcome to My Site's documentation!
===================================

Hello World.

.. toctree::
   :maxdepth: 2
   :caption: Contents:
```

When you save, Sphinx rebuilds and the browser reloads, showing your new paragraph.

# Add Markdown

"Ah, but that's, not Markdown, it's some alien Python "rst" thingy.
I want to write in Markdown!"

Thanks to the wonderful work by [The Executable Book Project](https://executablebooks.org/en/latest/), Markdown a first-class citizen in Sphinx.
What does that mean?
You can do the normal lightweight Markdown things, but you can also tap into the power that Sphinx gives.
Let's switch this site to use Markdown for writing documents.

First, install the [MyST Parser package](https://myst-parser.readthedocs.io/en/latest/).
We'll do so by editing the `requirements.txt`, which should now contain:

```
sphinx
livereload
myst-parser
```

With that in place, install it:

```bash
$ .venv/bin/pip install -r requirements.txt
```

Since `MyST` is a Sphinx extension, we need to "mystify" (enable) it in `conf.py`, our Sphinx configuration file.
Change the value of `extensions` to include `myst-parser`:

```python
extensions = [
    'myst_parser',
]
```

Our site can now speak both RST and Markdown!
Let's add a `page1.md` file alongside `index.rst`:

```
# Page 1

Hello, Page 1.
```

When you save this file, our "livereload" script runs Sphinx.
But Sphinx is mad: it knows there is a file on disk which isn't included in the site:

```
[E 200910 14:03:24 server:94] b"/Users/pauleveritt/projects/scratchpad/sphinx_sites/README.md: WARNING: document isn't included in any toctree"
```

Sphinx works by linking files into the "toctree", so edit the `toctree` directive in `index.rst` to include it in the table of contents for the root folder:

```
.. toctree::
   :maxdepth: 2
   :caption: Contents:

   page1
```

*Note: Don't want to always make such manual entries? You can use globbing in the `toctree` directive, but this will result in an unordered content listing.*

Our browser now shows a link to `Page 1`:

TODO screenshot

When we click on that link, we get a nicely formatted page, driven by Markdown.

# Clean Up

Let's do two cleanups as closeout: `conf.py` and `index.rst`.

The configuration file has lots of comments and stuff not needed for the tutorial.
The configuration file has lots of comments and stuff not needed for the tutorial.
Let's strip that baby down!

`embed:tutorials/sphinx_sites/setup/run_livereload.py`

Next, let's convert the `index.rst` page away from RST (reStructuredText) to Markdown.
Start by renaming the file to `index.md`.
Then replace its contents with the following:

`embed:tutorials/sphinx_sites/setup/index.md`

Two specific notes: `Contents` needs to be in quotes and the `toctree` options need to be de-dented.
Also, you might need to restart your `livereload` script.

If all goes well, you won't notice anything different in your browser, and you are now running a Sphinx site using Markdown.
