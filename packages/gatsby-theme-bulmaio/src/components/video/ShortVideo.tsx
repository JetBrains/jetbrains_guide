import * as React from 'react';
import {VideoPlayerProps} from './models';
import VideoPlayer from './VideoPlayer';
import {extractVideoDetails} from "./index";

export const ShortVideo: React.FC<VideoPlayerProps> = (
    {videoURL, authorLabel, slug, posterURL, posterNumber}
) => {
    const options = extractVideoDetails({
            slug, authorLabel, videoURL, posterURL, posterNumber
        }
    )
    if (!videoURL && !options.sources) {
        // Bailout if there's no video
        return <></>;
    }

    return (
        <div className="column is-three-fifths">
            <VideoPlayer {...options} />
        </div>
    );

};
