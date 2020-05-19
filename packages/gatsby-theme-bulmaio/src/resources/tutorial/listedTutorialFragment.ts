import { graphql } from 'gatsby';

export const query = graphql`
  fragment ListedTutorialFragment on Tutorial {
    slug
    title
    subtitle
    slug
    date(formatString: "YYYY-MM-DD")
    thumbnail {
      ...ThumbnailFragment
    }
    cardThumbnail {
      ...ThumbnailFragment
    }
    tutorialItems {
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
