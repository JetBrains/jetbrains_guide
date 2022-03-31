==========
Transcript
==========

    * player/test_player/auto-run tests

Sometimes we expect to have an exception and want to test it. pytest supports this.

We begin by cleaning up from debugging and re-running our tests, to ensure we
are in a good state.

Let's start with a new test for the flaw we hinted at earlier: accessing primary
guardian when no guardians have been assigned. pytest has a ``raises`` context
manager. Tell it to expect an IndexError and assign the exception to a variable
named ``exc``. We can then write an assertion, testing if that exception
value matches what we expect.

    * def test_no_primary_guardian(player_one):
        with pytest.raises(IndexError) as exc:
            player_one.primary_guardian
        assert 'list index out of range' == str(exc.value)

Our tests pass, meaning, our code "fails" as we expect.

Let's refactor to detect this case and return None instead. First, change the test:

    * assert None is player_one.primary_guardian

The test fails, which means we're doing TDD.

In the implementation, add type hinting for the return type, saying it can be
either a Guardian or None, using Python's `Optional` generic type. Then change
the property to detect an empty list and return None instead.

    * return self.guardians[0] if self.guardians else None
    * -> Optional[Guardian]
    * Import Optional
    * Optimize Imports, Refactor Code

Our tests now pass which means we refactored safely.