import React from 'react';
import { VideoPlayerProps } from './models';
import VideoPlayer from './VideoPlayer';

export const ShortVideo: React.FC<VideoPlayerProps> = (
  { video }
) => {

  if (video) {
    const options = {
      controls: true,
      poster: video.posterURL,
      sources: [
        {
          src: video.youtubeURL,
          type: 'video/youtube'
        }
      ]
    };
    return (
      <div className="column is-three-fifths">
        <VideoPlayer {...options} />
      </div>
    );
  }
  return (
    <>
    </>
  );
};

