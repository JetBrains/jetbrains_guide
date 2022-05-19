from typing import Tuple

import pytest
from laxleague.guardian import Guardian


@pytest.fixture
def guardians() -> Tuple[Guardian, ...]:
    g1 = Guardian('Mary', 'Jones')
    g2 = Guardian('Joanie', 'Johnson')
    g3 = Guardian('Jerry', 'Johnson')
    return g1, g2, g3


def test_construction(guardians):
    assert 'Mary' == guardians[0].first_name
    assert 'Jones' == guardians[0].last_name
