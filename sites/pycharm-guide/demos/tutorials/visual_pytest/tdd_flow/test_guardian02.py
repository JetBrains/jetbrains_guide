from laxleague.guardian import Guardian


def test_import():
    assert Guardian


# highlight-start
def test_construction():
    g = Guardian('Mary', 'Jones')
