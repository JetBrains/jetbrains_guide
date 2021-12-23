==========
Transcript
==========

    * guardian.py on left, test_guardian.py on right

Let's add another feature while practicing test-driven development.

First a refactor. Instead of a constructor, we change to:

- A Python dataclass with its import [pause]
- Replacing the lines in the constructor [pause]
- ...with dataclass fields:

    * Alt-Cmd-O ``Guardian`` to go to the Guardian symbol
    * Add ``@datac`` Ctrl-Space | Ctrl-Space
    * Delete constructor with Alt-Up
    * Add fields

The tests are on auto-run. They pass, which helps us refactor with confidence.

    * Indicate auto-run
    * Indicate they pass

Open the ``test_player.py`` file and the ``player.py`` file, then do the same:

- Add the dataclass decorator and its import
- Replace the constructor...
- ...with dataclass fields

    * Click in right, Cmd-E, ``t_g``
    * Click in left, Cmd-E, ``pl``
    * Add ``@datac`` Ctrl-Space | Ctrl-Space
    * Delete constructor with Alt-Up
    * Add fields

We spoke previously about failing faster. The switch to dataclasses gives this: if
I pass a byte-string by accident, my tooling warns me, even before the tests run:

    * Change last_name in test to b'Jones'
    * Show the warning

The verdict: TDD + IDE + type hints equals "fail faster"

To implement players-with-guardians using TDD, we start with failing tests.

First, in our construction test, we assert that a newly-created player has an empty list of guardians.

Next, we make a new test, adding guardians to this list of a player's guardians.
This test makes a Guardian [pause], then makes a Player [pause], then tries to
add the Guardian to the Player [pause], finishing with an assertion:

    * Add test_player.py last test
    * Create guardian
    * Create player
    * Add guardian
    * Assertion

This obviously fails: we having implemented the method. Switch to the Player class and
do so. First, a dataclass field ``guardians`` to store the list, using a field constructor
for a default value. Then we add a new method which stores a guardian argument in this list:

    * Goto Symbol Player
    * Add the player02.py field
    * Add the method

Our test now passes, but imagine we made a mistake. We have a typo in our method but
we're already off to another file and test:

    * ``self.guardiansXXX.append``
    * Cmd-E, ``guar``
    * Alt-Tab
    * Cmd-E ``test_guar``

When the test runs, it fails. We can navigate to the line with the exception:

    * Click on failing test
    * Click in the left window
    * Click on the exception line

Fix the problem and the tests pass again.

TDD helped us "fail faster" but we can use type hints for even earlier
检测. What if we accidentally added a Player as a Guardian? We can
prevent that by first changing the field's type hint to be a List [pause]
of Guardian instances [pause]. Then, change our method to say it must
receive a Guardian:

    * Change field
    * Change argument

Now in our test, if we try to add a Player instead of a Guardian, our IDE
"fails faster" with a warning, before running or even writing our test.

    * Change to pass in p
    * Mouse over
    * Let the tests run

We fix the error. The IDE is happy and the tests then pass.

    * Change to g
    * Let the tests run

