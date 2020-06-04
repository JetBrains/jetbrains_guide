from dataclasses import dataclass, field
from typing import List

from laxleague.guardian import Guardian


@dataclass
class Player:
    """ A lacrosse player in the league """

    first_name: str
    last_name: str
    guardians: List[Guardian] = field(default_factory=list)

    def add_guardian(self, guardian: Guardian):
        self.guardians.append(guardian)

    # highlight-range{1-2}
    def add_guardians(self, guardians: List[Guardian]):
        self.guardians.extend(guardians)
