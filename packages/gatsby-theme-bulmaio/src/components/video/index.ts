import {VideoDetailsProps, VideoPlayerOptions} from "./models";

export { videoFragment } from './videoFragment';
export { LongVideo } from './LongVideo';
export { ShortVideo } from './ShortVideo';
const ASSETS_URL = 'https://d623sj2jfplw2.cloudfront.net/assets';

// export {VideoPlayerProps, Video} from './models';
export function extractVideoDetails({
                                        slug,
                                        authorLabel,
                                        videoURL,
                                        posterURL,
                                        posterNumber
                                    }: VideoDetailsProps): VideoPlayerOptions {

    if (videoURL && (videoURL.startsWith("https://youtu.be/") || videoURL.startsWith("https://www.youtube"))) {
        return {
            controls: 1,
            poster: posterURL ? posterURL : '',
            sources: [
                {
                    src: videoURL,
                    type: 'video/youtube',
                },
            ],
        };
    }

    // If it isn't a YouTube URL, it's an AWS video. First, figure out the URL.
    const slugParts = slug.split('/').slice(2, -1);
    const finalPart = slugParts[slugParts.length - 1];
    if (!videoURL) {
        // We use the Guide algorithm to construct AWS URL from slug such as:
        //    /tips/refactor-rename/
        const slugPath = slugParts.join("/");

        const thisURL = `${authorLabel}/${slugPath}/HLS/${finalPart}.m3u8`
        videoURL = `${ASSETS_URL}/${thisURL}`;
    }

    // If no posterURL, then construct one from posterNumber.
    let poster: string;
    if (posterURL) {
        poster = posterURL;
    } else {
        // We construct from poster number.
        poster = `${ASSETS_URL}/${authorLabel}/${finalPart}/Thumbnails/${finalPart}.000000${posterNumber}.jpg`;
    }
    return {
        controls: 1,
        poster,
        sources: [
            {
                src: videoURL,
            },
        ],
    };
}