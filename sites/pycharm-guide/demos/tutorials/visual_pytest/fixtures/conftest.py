from typing import Tuple

import pytest
from laxleague.guardian import Guardian
from laxleague.player import Player


@pytest.fixture
def player_one() -> Player:
    return Player('Tatiana', 'Jones')


@pytest.fixture
def guardians() -> Tuple[Guardian, ...]:
    g1 = Guardian('Mary', 'Jones')
    g2 = Guardian('Joanie', 'Johnson')
    g3 = Guardian('Jerry', 'Johnson')
    return g1, g2, g3
