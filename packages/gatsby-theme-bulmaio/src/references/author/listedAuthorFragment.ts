import { graphql } from 'gatsby';

export const query = graphql`
  fragment ListedAuthorFragment on Author {
    label
    slug
    title
    subtitle
    body
    thumbnail {
      ...ThumbnailFragment
    }
  }
`;
