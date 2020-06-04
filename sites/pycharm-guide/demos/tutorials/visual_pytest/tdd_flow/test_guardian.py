from laxleague.guardian import Guardian


def test_import():
    assert Guardian


def test_construction():
    g = Guardian('Mary', 'Jones')
    # highlight-start
    assert 'Mary' == g.first_name
    assert 'Jones' == g.last_name
