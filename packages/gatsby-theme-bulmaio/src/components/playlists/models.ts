export interface InPlaylist {
  slug: string
  label: string;
  title: string;
  thumbnail: {
    publicURL: string
  }
  playlistItems?: any[]
}

export type InPlaylists = InPlaylist[];
