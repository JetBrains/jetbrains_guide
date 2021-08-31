import { graphql } from 'gatsby';

export const query = graphql`
  fragment ListedTutorialFragment on Tutorial {
    slug
    title
    subtitle
    slug
    date(formatString: "YYYY-MM-DD")
    resourceType
    videoBottom
    thumbnail {
      ...ThumbnailFragment
    }
    cardThumbnail {
      ...ThumbnailFragment
    }
    tutorialItems {
        ...ListedResourceFragment
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
