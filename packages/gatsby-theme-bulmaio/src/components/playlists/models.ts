export interface InPlaylist {
  fields: {
    slug: string
  }
  frontmatter: {
    label: string;
    title: string;
    thumbnail: {
      publicURL: string
    }
    playlistItems?: any[]
  }
}

export type InPlaylists = InPlaylist[];
