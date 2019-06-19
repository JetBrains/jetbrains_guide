import React from 'react';
import { Element } from 'react-scroll';

import { VideoPlayerProps } from './models';
import VideoPlayer from './VideoPlayer';

export const LongVideo: React.FC<VideoPlayerProps> = (
  { video }
) => {

  if (video) {
    const options = {
      controls: true,
      poster: video.posterURL,
      fill: true,
      sources: [
        {
          src: video.youtubeURL,
          type: 'video/youtube'
        }
      ]
    };
    return (
      <Element name="full-video" className="element" style={{ marginTop: '1rem' }}>
        <header style={{marginBottom: '1rem'}} className="is-size-3 is-bold">Full Video</header>
        <VideoPlayer {...options} />
      </Element>
    );
  }
  return (
    <>
    </>
  );
};
