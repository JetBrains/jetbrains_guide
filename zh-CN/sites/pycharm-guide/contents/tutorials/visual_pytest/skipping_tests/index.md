---
type: TutorialStep
date: 2020-06-10
title: Skipping Tests
technologies:
  - pytest
topics:
  - testing
author: pwe
subtitle: During refactoring, use pytest's markers to ignore certain breaking tests.
thumbnail: ./thumbnail.png
longVideo:
  poster: ./poster_long.png
  url: https://youtu.be/rEYQrMY8Ux4
---

Sometimes you want to overhaul a chunk of code and don't want to stare at a broken test. You could comment it out. But `pytest` provides an easier (and more feature-ful) alternative for skipping tests.

We'll show this in action while implementing:

- The ability to add multiple guardians at once

- A concept of the "primary guardian" of a player

# Bulk Guardians

Players usually have more than one Guardian. When you have a list of Guardians, you might prefer a different method that lets you add them all at once.

Let's implement this in TDD fashion, by first writing a `test_add_guardians` test in `test_player.py` that fails:

```python
def test_add_guardians():
    p = Player('Tatiana', 'Jones')
    # Add one guardian
    g1 = Guardian('Mary', 'Jones')
    p.add_guardian(g1)
    # Later, add some more
    g2 = Guardian('Joanie', 'Johnson')
    g3 = Guardian('Jerry', 'Johnson')
    p.add_guardians([g2, g3])
    assert [g1, g2, g3] == p.guardians
```

We don't have a method `add_guardians` and so the test fails. Perhaps we are busy on something else and we'd like `pytest` to not yell at us, but we don't want to comment out or (worse) delete the test.

Instead, let's import `pytest` and put a decorator for the `skip` marker on that test:

`embed:tutorials/visual_pytest/skipping_tests/test_player02.py`

Remember, we don't have to manually type the import...just start typing `@pyt` and let PyCharm autocomplete using `Ctrl-Space Ctrl-Space`.

Now when the tests run (automatically, thanks to `Toggle auto-test`), they don't fail, but they do indicate a test was ignored:

![Ignored Tests](./ignored_tests.png)

With our failing test in place, let's implement the missing method. In `player.py`, clone the existing `add_guardian` method, then change its arguments and implementation:

`embed:tutorials/visual_pytest/skipping_tests/player01.py`

We can now remove the `skip` marker and the test passes. Remember to remove the now-unused `pytest` import in `test_player.py` using `Optimize Imports`.

# Some Typing Cleanup

Eager readers might have spotted a type hinting flaw: our code breaks the [Be liberal in what you accept, and conservative in what you return](https://m.oursky.com/type-hints-better-type-at-python-28de692c3a4b) rule.

That is, our new method wants a `List`. When really, it will take a Python "iterable".

For example, our test passes in a *list* of guardians. It's immutable. Might as well change it to be a tuple:

```
    p.add_guardians((g2, g3))
```

Doing so breaks Python type checking:

![Type Checking](./type_checking.png)

Let's change our `add_guardians` to accept any kind of `Iterable`:

`embed:tutorials/visual_pytest/skipping_tests/player02.py`

Tests still pass and type checking now passes.

# Primary Guardian

For the second feature, let's use the same process: write a failing test, temporarily mark it with `skip`, then implement it and remove the mark.

Our feature will work like this: whichever guardian is added first is the primary guardian. In `test_player.py` we add `test_primary_guardian`, with the mark already in place:

```python
@pytest.mark.skip
def test_primary_guardian():
    p = Player('Tatiana', 'Jones')
    # Add one guardian
    g1 = Guardian('Mary', 'Jones')
    p.add_guardian(g1)
    # Later, add some more
    g2 = Guardian('Joanie', 'Johnson')
    g3 = Guardian('Jerry', 'Johnson')
    p.add_guardians((g2, g3))
    assert g1 == p.primary_guardian
```

Now time for the implementation. We're doing this as a Python "property", so add the following in `player.py`:

`embed:tutorials/visual_pytest/skipping_tests/player.py`

*Tip: Use the `property` LiveTemplate in PyCharm to speed up the generation of a property.*

Remove the `@pytest.mark.skip` mark from `test_primary_guardian` and the test now passes.

# Conclusion

The `pytest.mark.skip` facility, with related `skipIf` and `xFail`, have a broad set of uses. As you mature in test writing, start to include other people, and have tests that execute in different environments, you'll put them to good use.
