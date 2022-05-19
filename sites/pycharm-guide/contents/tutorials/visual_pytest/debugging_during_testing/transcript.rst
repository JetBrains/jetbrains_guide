==========
Transcript
==========

    * Start with player on left, test_player on right, auto-run ``tests`` at bottom

TDD means exploring. The debugger is good at helping poke around. Let's
use the debugger during testing.

Imagine we added a line in our primary guardian test:

    * ``assert player_one.primary_guardian``

The tests now *fail*. Imagine you're confused about the error. You'd like to explore.

You could add a print statement:

    * ``print(player_one.guardians)``

The test runs but the print doesn't display because pytest captures the output.
You could then fix *that*, but still, you might accidentally commit such
poking-around.

Let's use the debugger. Set a breakpoint and run the tests, but this time,
under the debugger:

    * Remove the print
    * Set a breakpoint on the assertion line
    * Run test under the debugger

Execution has stopped on the questionable line. ``player_one`` has an empty
list of guardians. Perhaps we *still* don't quite grok it and want to
interactively poke. Select some code and evaluate it to see the result.
You can type new expressions, even assign new values to variables or create
new ones.

    * Highlight ``p.primary_guardian``
    * Right-click, evaluate expression

We are stopped on our test code, not our real code. Let's step into that
and poke around some more. We'll quickly spot the problem:

    * Smart Step Into
    * Highlight the line getting 0
    * Evaluate expression


