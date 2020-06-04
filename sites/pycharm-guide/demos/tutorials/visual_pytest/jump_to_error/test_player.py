from laxleague.guardian import Guardian
from laxleague.player import Player


def test_import():
    assert Player


def test_construction():
    p = Player('Tatiana', 'Jones')
    assert 'Tatiana' == p.first_name
    assert 'Jones' == p.last_name
    assert [] == p.guardians  # highlight-line


# highlight-start
def test_add_guardian():
    g = Guardian('Mary', 'Jones')
    p = Player('Tatiana', 'Jones')
    p.add_guardian(g)
    assert [g] == p.guardians
