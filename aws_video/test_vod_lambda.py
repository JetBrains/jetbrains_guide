"""Write tests for the lambda function that works with Media Convert."""
import os
from pathlib import PurePath

import pytest

from .vod_lambda import get_s3_source_key_path, pathlib_parents


@pytest.fixture
def fake_event():
    return dict(
        Records=[
            dict(
                s3=dict(
                    bucket=dict(
                        name="jetvideo_source",
                    ),
                    object=dict(
                        key="pwe/some_video.mp4",
                    ),
                )
            )
        ]
    )


@pytest.mark.parametrize(
    "path_str, expected",
    [
        ("pwe/video1.mp4", "pwe/video1"),
        ("/pwe/video1.mp4", "pwe/video1"),
        ("pwe/folder1/video1.mp4", "pwe/folder1/video1"),
        ("/pwe/folder1/video1.mp4", "pwe/folder1/video1"),
    ],
)
def test_pathlib_parents(path_str: str, expected: str):
    some_path = PurePath(path_str)
    actual = pathlib_parents(some_path)
    assert actual == expected


def test_get_s3_source_key_path(fake_event):
    s3_key, s3_source_path = get_s3_source_key_path(fake_event)
    assert s3_key == "pwe/some_video.mp4"
    assert s3_source_path.name == "some_video.mp4"
    assert s3_source_path.parent.name == "some_name"

    # assert os.path.splitext(os.path.basename(s3_source_path))[0] == 9
