==========
Transcript
==========

    * PyCharm Community Edition
    * Set the IDE with an out-of-the-box Darcula look
    * Big font
    * Presentation assistant
    * Tabs on top

Python has projects.
So does PyCharm.

Let's create a project from the welcome screen.

PyCharm has good support for virtual environments.
Accept the defaults, click ``Create``, and you now have an empty Python project.

    * Create New Project
    * `/Users/pauleveritt/PyCharmProjects/laxleague`
    * Indicate venv
    * Click Create

Making a proper Python package means creating a ``setup.py`` at the project root.
Call the ``setup`` function, which we import from ``setuptools``, with arguments for:

- The name of the project
- Any extras that might be installed, for example for tests
- Then two arguments that let us follow good pytest practices by storing the source
code in a directory named *differently* than our package.

    * Type setup then use Alt-Enter to generate import
    * Type the extras_require
    * Type packages then use Alt-Enter to generate find_packages
    * Type the last part

These last two arguments are obscure but, as the docs indicate, it is STRONGLY suggested.

    - Show pytest Good Integration Practice page

Make the directory and a first file for our source, naming it ``src/laxleague/player.py``.
The file will, for now, just have an empty class:

    * 激活导航栏
    * Make a directory

Open the terminal and run Python's ``pip``, with ``-e .`` used to make a Python "editable install".
The brackets with ``tests`` tell pip to install the dependencies in the extras__require:

    * Open a terminal with Alt-F12
    * Type pip install, pause, ``-e .``, pause, ``[tests]``
    * Enter
    * Emphasize the extras_require and then its ``tests`` key
    * Close the terminal window Alt-F12

The editable install works, as the ``egg-info`` directory proves:

    * Emphasize src/*.egg-info

We have a project, with a virtual environment, with pytest installed, and source files in an editable install.
Now go to the settings, under Python Integrated Tools,  and tell PyCharm to use pytest as the default test runner.

    * Settings | Tools | Python Integrated Tools
    * Default test runner
    * Save and close

You can also visit ``New Project Settings`` to make this the default for all new projects.

    * File | New Projects Settings | Settings/Preferences for New Projects

pytest recommends a tests directory outside of our sources.
Make a new directory named ``tests`` at the project root:

    * Right-click in project root
    * New directory
    * ``tests``


