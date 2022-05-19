"""
A Hello World factory.
"""
from dataclasses import dataclass


@dataclass
class Hello:
    name: str

    def __call__(self) -> str:
        return f'Hello {self.name}'
