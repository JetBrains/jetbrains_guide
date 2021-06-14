import { graphql } from 'gatsby';

export const query = graphql`
  fragment ListedTipFragment on Tip {
    label
    slug
    title
    subtitle
    slug
    date(formatString: "YYYY-MM-DD")
    resourceType
    hasBody
    thumbnail {
      ...ThumbnailFragment
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
