"""Write tests for the lambda function that works with Media Convert."""
import os

import pytest

from .vod_lambda import get_s3_source_key_path


@pytest.fixture
def fake_event():
    return dict(
        Records=[
            dict(
                s3=dict(
                    bucket=dict(
                        name="some_name",
                    ),
                    object=dict(
                        key="some_video.mp4",
                    ),
                )
            )
        ]
    )


def test_get_s3_source_key_path(fake_event):
    s3_key, s3_source_path = get_s3_source_key_path(fake_event)
    assert s3_key == "some_video.mp4"
    assert s3_source_path.name == "some_video.mp4"
    assert s3_source_path.parent.name == "some_name"

    # assert os.path.splitext(os.path.basename(s3_source_path))[0] == 9
