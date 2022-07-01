export interface VideoPlayerProps {
  video?: {
    posterURL: string;
    youtubeURL: string;
    posterNumber?: number;
  }
}

export interface Video {
  url: string;
  posterNumber: number;
  poster: {
    publicURL: string;
    childImageSharp: any;
  };
}
