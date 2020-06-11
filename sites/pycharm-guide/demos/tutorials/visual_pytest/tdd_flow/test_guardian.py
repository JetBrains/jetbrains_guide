from laxleague.guardian import Guardian


def test_construction():
    g = Guardian('Mary', 'Jones')
    assert 'Mary' == g.first_name
    assert 'Jones' == g.last_name
