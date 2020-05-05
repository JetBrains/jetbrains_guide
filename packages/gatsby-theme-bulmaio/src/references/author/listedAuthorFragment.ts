import { graphql } from 'gatsby';

export const query = graphql`
  fragment ListedAuthorFragment on Author {
    label
    slug
    title
    subtitle
    slug
    thumbnail {
      ...ThumbnailFragment
    }
  }
`;
