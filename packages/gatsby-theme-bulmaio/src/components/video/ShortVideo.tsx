import * as React from 'react';
import {VideoPlayerProps} from './models';
import VideoPlayer from './VideoPlayer';

export type VideoPlayerOptions = {
    controls: number;
    poster: string;
    sources: { src: string, type?: string }[];
    modestbranding?: number;
    playsinline?: number;
    disablekb?: number;
    autoplay?: number;
    rel?: number;
    fs?: number;
    fill?: boolean;
}

export const ShortVideo: React.FC<VideoPlayerProps> = ({video}) => {
    if (video) {
        let options: VideoPlayerOptions = {
            controls: 1,
            poster: video.posterURL,
            sources: [
                {
                    src: video.youtubeURL,
                    type: 'video/youtube',
                },
            ],
        };
        if (video.posterNumber) {
            // This is an AWS Video. The URL can be specified but most likely
            // it will be inferred.
            options.sources = [
                {
                    src: "https://d2b7umwc7tvlq5.cloudfront.net/assets/fields/HLS/fields.m3u8",
                },
            ];
            options.poster = `https://d2b7umwc7tvlq5.cloudfront.net/assets/fields/Thumbnails/fields.000000${video.posterNumber}.jpg`;
        }
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
