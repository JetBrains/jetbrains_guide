import * as React from 'react';
import { Element } from 'react-scroll';

import { VideoPlayerProps } from './models';
import VideoPlayer from './VideoPlayer';

export const LongVideo: React.FC<VideoPlayerProps> = ({ video }) => {
  // TODO(florin): Improve this code if it makes it to production
  interface videoPlayerOptions {}

  if (video) {
    let options: videoPlayerOptions = {
      controls: 1,
      poster: video.posterURL,
      fill: true,
      sources: [
        {
          src: video.youtubeURL,
          type: 'video/youtube',
        },
      ],
    };

    if (video.likeGIF) {
      options = {
        ...options,
        controls: 0,
        modestbranding: 0,
        playsinline: 1,
        disablekb: 1,
        autoplay: 1,
        rel: 0,
        fs: 0,
      };
    }

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
