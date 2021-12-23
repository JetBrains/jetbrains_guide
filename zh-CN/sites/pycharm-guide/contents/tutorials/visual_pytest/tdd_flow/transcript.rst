==========
Transcript
==========

    * Start with ``players.py`` open
    * No test window
    * Tabs on top

We'll use test-driven development, or TDD, to add a feature.

Players have guardians, so add a ``guardians.py`` file containing another placeholder class.

    * 激活导航栏
    * Create file ``guardians.py``
    * ``class Guardian: pass``

We'll again let PyCharm generate our test file and test for us:

    * Cmd-Shift-T
    * Enter

As before, we make a construction test as a sanity check, letting PyCharm generate the import for us:

    * Change to ``test_construction``
    * Change True to ``Gua`` and Ctrl-Space | Ctrl-Space

This time we will run all the tests in the ``tests`` folder:

    * Right-click in ``tests``
    * Run it

Our new test passes, as well as the previous one.
That's a good place to start implementation.
But first, let's get PyCharm into a good TDD flow.
We will:

- Turn off some of the toolbars and tool windows
- And even turn off tabs
- Then, split vertically
- With our code on the left...
- ...our tests for that code on the right
- ...and the test output at the bottom

One last step for a good TDD flow...change our tests to always run after a configurable delay.
Adding a failed tests causes a re-run, no save required. Same for removing it:

    * Click re-run
    * Click play
    * Add a broken test
    * Remove it

Let's implement a Guardian first and last name, starting with a new, failing test.

    * Add test_guardian02

Even before the test runs, we "fail faster", so to speak, with an IDE warning:

    * Indicate the missing arguments

The test fails. We need to add a missing constructor that takes and stores ``first_name``
and ``last_name`` on the Guardian instance:

    * Alt-Tab to ``Guardian``
    * Use PyCharm to make __init__ and store field names
    * Fix the order

The test passes, but we didn't test anything. Let's get back to TDD, adding an assertion for first_name:

    * Cmd-{ to go back
    * Add first_name actual == expected

Some folks like the ``assert`` order to be "expected" then "actual". Let's store a setting
by creating a ``pytest.ini`` file containing a ``swapdiff`` value:

    * Create ``pytest.ini``
    * [pytest] swapdiff=1

Now we tell PyCharm to flip the arguments:

    * Click on ``==``
    * Alt-Enter, flip

Finish with a test for last_name:

    * assert 'Jones' == g.last_name
    * Wait, let test pass