==========
Transcript
==========

    * Have ``player.py`` open

Let's write and run our first test.

Open ``player.py`` and click in the ``Player`` class.
Let PyCharm write our test for us by using ``Navigate | Go To Test``.
Accept the defaults and we now have a file, added to VCS, with a test, in the ``tests`` directory.

    * Shift-Cmd-T
    * Enter
    * Click ``Add``
    * Emphasize first test

PyCharm also created a Python ``__init__.py`` file in ``tests``, matching another pytest best practice.

    * Emphasize ``tests/__init__.py``

Let's run all the tests in this file. Right-click in the middle and select ``Run pytest``.
If you don't see the pytest menu entry, make sure you setup pytest as the test runner, described in the previous video.

    * Right click
    * Mouse over ``Run pytest`` but pause a long time
    * 选择

PyCharm runs pytest with results in the test runner tool window tests on the left and output of the selected test on the right:

    * Illustrate window: left, right

One test failed. Let's make it pass. Change ``False`` to ``True`` and re-run the test using a keyboard shortcut:

    * Change ``False`` to ``True``
    * Ctrl-R

Let's write a test that uses the class. Change the test name to indicate constructing an instance.
Then in the body, assert that doing so returns something truthy, just as a simple sanity check.

    * Change the test name to ``test_construction``
    * Delete "True"
    * Type ``Pla`` and Ctrl-Space | Ctrl-Space
    * 添加 ``()``

When we re-run the tests, our single test passes.

    * Ctrl-R
