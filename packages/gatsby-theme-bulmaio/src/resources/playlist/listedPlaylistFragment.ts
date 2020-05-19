import { graphql } from 'gatsby';

export const query = graphql`
  fragment ListedPlaylistFragment on Playlist {
    label
    slug
    title
    subtitle
    date(formatString: "YYYY-MM-DD")
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
    products {
      ...ListedProductFragment
    }
    technologies {
      ...ListedTechnologyFragment
    }
    topics {
      ...ListedTopicFragment
    }    
  }
`;
