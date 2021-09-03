==========
Transcript
==========

    * Start with no splitting, no code visible, no test window

Skipping tests during a code overhaul is good practice. Let's show this.

We'll use TDD to implement a new feature: adding multiple Guardians to a
Player at once. We get into "TDD mode", with code on the left, tests on
the right. We change the existing test to mean "singular":

    * Open ``players.py``
    * Split vertically
    * Change 'test_guardians' to singular

Before starting, as a sanity check, run your tests:

    * Run all tests

Add a new test for adding multiple guardians. The new test adds one Guardian,
then adds a sequence of two more guardians, using a new API. The assertion
checks that all 3 guardians are there.

As expected the test fails. We're busy on something else and want to
skip running this test. Import pytest and add the ``skip`` marker [pause],
providing some text as an optional reason:

    * ``@pyte`` Ctrl-Space | Ctrl-Space
    * ``.ma`` tab
    * ``.sk`` tab
    * ``(reason='Have not yet implemented method')``

The test runner now indicates 1 test was ignored:

    * Indicate the ignored notification

We return to working on this. Add a new method ``add_guardians`` by cloning
the existing method. It takes a List of Guardians as the first argument. The
method combines the new list into the instance's existing list:

    * Alt-Tab to go to class Player
    * ``guardians: ``
    * ``Lis`` tab
    * ``Gua`` tab
    * ``self.guardians.extend(guardians)``

Now remove the skip marker and clean up the unused imports. The test
passes and our feature is implemented.

    * Alt-Tab
    * Remove marker
    * Optimize Imports

We noticed that we're passing in a *list* of Guardians. It would be
slightly better as a tuple [pause]. The tests still pass [pause],
but the IDE warns us we violated the contract, which calls
specifically for a List:

    * Alt-Enter back to test to change ``add_guardians`` args to tuple
    * Indicate the tests pass
    * Mouseover the warning

Change the parameter's type hint to an ``Iterable`` of Guardians, to allow
different kinds of sequences. The warning disappears:

    * Click in add_guardians at end of ``List``
    * Alt-Delete
    * ``Itera`` Ctrl-Space | Ctrl-Space
    * Accept first selection (from typing)

Now a second feature: denoting a *primary* guardian, meaning, the first
assigned. Same pattern: write a failing test, mark it with skip, implement,
remove skip.

We will clone the previous test [pause], change its name to denote testing
a primary guardian [pause], and add the mark to skip from the start.
Change the assert to see if the "primary guardian" matches the first-assigned
guardian:

    * Click in ``test_add_guardians`` first line
    * Expand selection
    * Duplicate
    * Change the test name to ``test_primary_guardian``

In the Player class, we will add a Python property that holds this logic. The
``primary_guardian`` returns the first guardian in the list:

    * Click in other window
    * Use the ``property`` live template
    * ``@property``
    * ``def primary_guardian(self):``
    * ``    return self.guardians[0]``

When we go to the test and remove the ``skip``, the tests run, and the
implementation works. Even with a flaw that we will detect and correct
in a future tutorial step.