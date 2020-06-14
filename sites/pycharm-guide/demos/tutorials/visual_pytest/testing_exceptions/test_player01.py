import pytest


def test_construction(player_one):
    assert 'Tatiana' == player_one.first_name
    assert 'Jones' == player_one.last_name
    assert [] == player_one.guardians


def test_add_guardian(player_one, guardians):
    player_one.add_guardian(guardians[0])
    assert [guardians[0]] == player_one.guardians


def test_add_guardians(player_one, guardians):
    player_one.add_guardian(guardians[0])
    player_one.add_guardians((guardians[1], guardians[2]))
    assert list(guardians) == player_one.guardians


def test_primary_guardian(player_one, guardians):
    player_one.add_guardian(guardians[0])
    player_one.add_guardians((guardians[1], guardians[2]))
    assert guardians[0] == player_one.primary_guardian


def test_no_primary_guardian(player_one):
    with pytest.raises(IndexError) as exc:
        player_one.primary_guardian
    assert 'list index out of range' == str(exc.value)
