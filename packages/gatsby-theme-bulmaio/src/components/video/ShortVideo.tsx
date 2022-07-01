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
        const options: VideoPlayerOptions = {
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

        return (
            <div className="column is-three-fifths">
                <VideoPlayer {...options} />
            </div>
        );
    }
    return <></>;
};
