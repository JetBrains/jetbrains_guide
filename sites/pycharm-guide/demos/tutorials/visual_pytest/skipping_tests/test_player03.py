import pytest

from laxleague.guardian import Guardian
from laxleague.player import Player


def test_import():
    assert Player


def test_construction():
    p = Player('Tatiana', 'Jones')
    assert 'Tatiana' == p.first_name
    assert 'Jones' == p.last_name
    assert [] == p.guardians


def test_add_guardian():
    g = Guardian('Mary', 'Jones')
    p = Player('Tatiana', 'Jones')
    p.add_guardian(g)
    assert [g] == p.guardians


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


# highlight-start
@pytest.mark.skip
def test_primary_guardian():
    p = Player('Tatiana', 'Jones')

    # Add one guardian
    g1 = Guardian('Mary', 'Jones')
    p.add_guardian(g1)

    # Later, add some more
    g2 = Guardian('Joanie', 'Johnson')
    g3 = Guardian('Jerry', 'Johnson')
    p.add_guardians([g2, g3])

    assert g1 == p.primary_guardian
