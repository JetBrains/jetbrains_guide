import * as React from 'react';
import { VideoPlayerProps } from './models';
import VideoPlayer from './VideoPlayer';

export const ShortVideo: React.FC<VideoPlayerProps> = ({ video }) => {
  // TODO(florin): Improve this code if it makes it to production
  interface videoPlayerOptions {}

  if (video) {
    let options: videoPlayerOptions = {
      controls: 1,
      poster: video.posterURL,
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
      <div className="column is-three-fifths">
        <VideoPlayer {...options} />
      </div>
    );
  }
  return <></>;
};
