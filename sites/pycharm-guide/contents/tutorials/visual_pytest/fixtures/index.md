---
type: TutorialStep
date: 2020-06-10
title: Test Fixtures
technologies: [pytest]
topics: [testing]
author: pwe
subtitle: Make your tests more focused by moving sample data to pytest fixtures.
thumbnail: ../thumbnail.png
longVideo:
  poster: ../poster_long.png
  url: https://www.youtube.com/watch?v=bFheD5JBjBI
---

Each test recreates player and guardian instances. 
[pytest fixtures](https://docs.pytest.org/en/latest/fixture.html) give a rich infrastructure for your test data. 
In this tutorial step we convert our tests to use fixtures, which we then share between files using ``conftest.py``

# Make a `Player` Once

We have a `Player` instance that we currently make in four of our tests.
It's the same instance with the same arguments.
It would be nice to avoid repetition and let our tests focus on the logic instead of setting up a baseline of tests data.

Let's make a fixture ``player_one`` which constructs and returns a ``Player``:

`embed:tutorials/visual_pytest/fixtures/test_player01.py`


# Re-usable Data with Fixtures

- First in the file

- Then in conftest.py

- Autocomplete of fixture name

    - Including context-sensitive in arguments, no 'dir'

- Navigation

- Type awareness of the fixture, onhover

- Quick info on fixture argument, don't have to interrupt flow
