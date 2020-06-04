from dataclasses import dataclass, field


@dataclass
class Player:
    """ A lacrosse player in the league """

    first_name: str
    last_name: str
    guardians: list = field(default_factory=list)  # highlight-line

    # highlight-range{1-2}
    def add_guardian(self, guardian):
        self.guardians.append(guardian)
