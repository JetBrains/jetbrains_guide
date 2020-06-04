from laxleague.player import Player


def test_import():
    assert Player


# highlight-start
def test_construction():
    p = Player('Tatiana', 'Jones')
    assert 'Tatiana' == p.first_name
    assert 'Jones' == p.last_name
