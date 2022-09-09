import videojs from "video.js";

export type VideoPlayerProps = {
    authorLabel: string;
    slug: string;
    posterURL: string;
    videoURL: string;
    posterNumber?: number;
}

export type VideoDetailsProps = {
    // Used in the small function that takes the inputs from GraphQL
    // data and applies policy decisions to extract VideoPlayerProps.
    slug: string;
    authorLabel: string;
    videoURL?: string;
    posterNumber?: number;
    posterURL?: string;
}

export type Video = {
    url: string;
    posterNumber: number;
    poster: {
        publicURL: string;
        childImageSharp: any;
    };
}


export interface VideoPlayerPropsInferface {
    videoJsOptions: videojs.PlayerOptions;
}

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