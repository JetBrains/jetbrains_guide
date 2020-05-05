import { graphql } from 'gatsby';

export const query = graphql`
  fragment ListedTip2Fragment on Tip2 {
    label
    slug
    title
    subtitle
    slug
    date(formatString: "MMMM Do, YYYY")
    hasBody
    thumbnail {
      ...ThumbnailFragment
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
