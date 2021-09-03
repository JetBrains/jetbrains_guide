==========
Transcript
==========

    * Start w/ player.py left, test_player.py right, auto-test ``tests`` at bottom

We are creating the same data in each test. Let's move that to ``pytest`` fixtures.

We start in TDD mode: code on left, test on right, test runner in auto-run at bottom.
Let's run all our tests just to ensure things are clean:

    * Click tool window run button

Fixtures are decorators from pytest, which needs an import. This decorator
registers the function name as a fixture. For us, player_one will construct
and return a Player instance, providing type hinting along the way.

    * Generate pytest.fixture
    * def player_one() -> Player:
    * Copy Player()
    * Paste it as the return value
    * Reformat code

To use the fixture, add it as an argument to a test. pytest will find
the fixture with that name and inject the result as the argument. The
IDE shows some fixture information. Then, change the name used in the
test and delete the earlier definition. The tests all pass.

    * Change first test to use fixture as argument via autocomplete
    * Mouseover to show the type
    * Refactor | Rename ``p`` -> ``player_one``
    * Run test, still passes

We can then go to each of the other tests and do the same routine, replacing
an inline definition of the sample Player instance with the injected fixture.
[pause] Once done, all of our tests pass.

Let's now make a fixture for the guardians. Since we use several, we'll make
a fixture which creates 3 guardians the 3 guardians we used previously,
then returns a tuple of them. We also supply type hinting:

    * Decorator
    * def guardians() -> Tuple[Guardian, ...]:
    * Paste the other 3
    * return g1, g2, g3

Wave the magic wand, the others are converted to use the fixtures,
all of our tests still pass, and are easier to reason about.

Now we apply this to ``test_guardian``. Same routine: use a decorator
to declare a fixture, then a function with the name, by default, used as
the fixture name.

We then use this fixture in our tests, as an injected argument, which replaces
the local definition of a guardian.

    * Cmd-E, t_p
    * def guardians() -> Tuple[Guardian, ...]:
    * Paste the rest

Something looks wrong. Fixtures eliminate repetition, but we just
cut-and-pasted this from the other test file. To share fixtures, copy
this into a ``conftest.py`` file:

    * Alt-Up to select function and decorator
    * Cmd-X to cut
    * Cmd-Up, Cmd-N to create a new file conftest.py
    * Paste
    * Fix up the imports
    * Reformat Code

This file can be in the current directory or any directory up to ``tests``.
Once copied over, we'll have some missing imports, which we can ask the IDE
to help us clean up. We now have our test data -- that is, our fixtures --
separate from our tests.

Back in our Guardian tests, the file is a lot simpler and the tests run fine:

    * Cmd-E
    * Reformat Code

In the player tests, we remove the two fixtures and their imports. Fixtures
in conftest made a big difference in readability here and the tests still pass:

    * Cmd-E, t_p
    * Remove fixtures
    * Ctrl-Alt-O to optimize imports
    * Tests still pass

Since fixtures are an indirection, PyCharm helps sort out the magic. As you saw,
we can autocomplete (in fact, it's a context-aware autocompletion.)

We can hover to see type information, F1 to see inline docs, and navigate to the
fixture definition. You can even Refactor-Rename from a usage and it will change
the declaration and all the usages, with Undo putting everything back.

    * Hover on ``guardians``
    * F1 on ``guardians``
    * Ctrl-Click on ``guardians`` then Cmd-} to return
    * Ctrl-T | Rename | "all_guardians"
    * Accept refactor
    * Go to conftest.py, then test_guardian, then back to test_player
    * Cmd-Z to undo

