export interface VideoPlayerProps {
  video?: {
    posterURL: string;
    youtubeURL: string;
    likeGIF: boolean;
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
  likeGIF: boolean;
}
