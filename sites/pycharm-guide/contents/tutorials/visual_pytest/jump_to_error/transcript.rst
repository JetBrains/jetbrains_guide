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
I pass a byte-string by accident, my tooling warns me, even though the tests pass:

    * Change last_name in test to b'Jones'
    * Show the warning

The verdict: TDD + IDE + type hints equals "fail faster"

To implement players-with-guardians using TDD, we start with a new, failing test.
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

When the test runs, it fails. We can navigate to the failing line in the
test, re-opening the file if needed. We can also navigate to the line with
the exception:

    * Click on failing test
    * Click in the left window
    * Click on the exception line

Fix the problem and the tests pass again.

TDD helped us "fail faster" but we can use type hints for even earlier
detection. What if we accidentally added a Player as a Guardian?

    * Change the test to add the player

Let's make it clear that only guardians can be added. Change the field's
type hint to be a List [pause] of Guardian instances [pause]. Then,
change our method to say it must receive a Guardian:

    * Alt-Tab
    * Change to guardians: List[Guardian]
    * Change method argument to guardian: Guardian

This type hinting now shows an IDE error, even before the asserts are written,
much less run. We can fix our error:

    * Alt-Tab
    * Mouse-over the error
    * Change to guardian

