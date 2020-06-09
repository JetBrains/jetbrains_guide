from laxleague.guardian import Guardian


def test_construction():
    g = Guardian('Mary', 'Jones')
    assert g.first_name == 'Mary'
    assert g.last_name == 'Jones'
