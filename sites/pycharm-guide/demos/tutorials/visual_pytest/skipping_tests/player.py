from dataclasses import dataclass, field
from typing import List, Iterable

from laxleague.guardian import Guardian


@dataclass
class Player:
    """ A lacrosse player in the league """

    first_name: str
    last_name: str
    guardians: List[Guardian] = field(default_factory=list)

    def add_guardian(self, guardian: Guardian):
        self.guardians.append(guardian)

    def add_guardians(self, guardians: Iterable[Guardian]):
        self.guardians.extend(guardians)

    # highlight-range{1-3}
    @property
    def primary_guardian(self):
        return self.guardians[0]
