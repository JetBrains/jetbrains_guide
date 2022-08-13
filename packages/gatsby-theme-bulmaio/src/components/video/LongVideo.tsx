import * as React from 'react';
import { Element } from 'react-scroll';

import {VideoPlayerOptions, VideoPlayerProps} from './models';
import VideoPlayer from './VideoPlayer';

export const LongVideo: React.FC<VideoPlayerProps> = (
    {videoURL, authorLabel, slug, posterURL, posterNumber}
) => {

  if (videoURL) {
    const options: VideoPlayerOptions = {
      controls: 1,
      poster: posterURL,
      fill: true,
      sources: [
        {
          src: videoURL,
          type: 'video/youtube',
        },
      ],
    };

    return (
      <Element
        name="full-video"
        className="element"
        style={{ marginTop: '1rem' }}
      >
        <header style={{ marginBottom: '1rem' }} className="is-size-3 is-bold">
          Full Video
        </header>
        <VideoPlayer {...options} />
      </Element>
    );
  }
  return <></>;
};
