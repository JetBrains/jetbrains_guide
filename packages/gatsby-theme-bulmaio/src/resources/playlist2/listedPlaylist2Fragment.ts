import { graphql } from 'gatsby';

export const query = graphql`
  fragment ListedPlaylist2Fragment on Playlist2 {
    label
    slug
    title
    subtitle
    slug
    date(formatString: "MMMM Do, YYYY")
    thumbnail {
      ...ThumbnailFragment
    }
    cardThumbnail {
      ...ThumbnailFragment
    }
    playlistItems {
        ...ListedResourceFragment2
    }
    author {
      ...ListedAuthorFragment
    }
    technologies2 {
      ...ListedTechnology2Fragment
    }
    topics2 {
      ...ListedTopic2Fragment
    }    
  }
`;
