import * as React from 'react';
import { VideoPlayerProps } from './models';
import VideoPlayer from './VideoPlayer';

export type VideoPlayerOptions = {
  controls: number;
  poster: string;
  sources: {src: string, type?: string}[];
  modestbranding?: number;
  playsinline?: number;
  disablekb?: number;
  autoplay?: number;
  rel?: number;
  fs?: number;
}
export const ShortVideo: React.FC<VideoPlayerProps> = ({ video }) => {
  if (video) {
    let options: VideoPlayerOptions = {
      controls: 1,
      poster: video.posterURL,
      sources: [
        {
          src: "https://d2b7umwc7tvlq5.cloudfront.net/assets/fields/HLS/fields.m3u8",
          // type: 'video/youtube',
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
