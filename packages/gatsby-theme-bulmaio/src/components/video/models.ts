export interface VideoPlayerProps {
  video?: {
    posterURL: string;
    youtubeURL: string;
  }
}

export interface Video {
  url: string;
  poster: {
    publicURL: string;
    childImageSharp: any;
  };
}
