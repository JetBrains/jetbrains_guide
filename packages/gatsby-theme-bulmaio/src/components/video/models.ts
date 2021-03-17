export interface VideoPlayerProps {
  video?: {
    posterURL: string;
    youtubeURL: string;
    likeGIF: boolean;
  }
}

export interface Video {
  url: string;
  poster: {
    publicURL: string;
    childImageSharp: any;
  };
  likeGIF: boolean;
}
