import { graphql } from 'gatsby';

export const query = graphql`
  fragment ListedPlaylistFragment on Playlist {
    label
    slug
    title
    subtitle
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
    technologies {
      ...ListedTechnologyFragment
    }
    topics {
      ...ListedTopicFragment
    }    
  }
`;
