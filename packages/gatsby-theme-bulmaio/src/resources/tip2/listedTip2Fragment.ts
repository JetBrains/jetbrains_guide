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
    author2 {
      ...ListedAuthor2Fragment
    }
    technologies2 {
      ...ListedTechnology2Fragment
    }
    topics2 {
      ...ListedTopic2Fragment
    }    
  }
`;
