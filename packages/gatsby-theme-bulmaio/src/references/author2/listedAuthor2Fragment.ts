import { graphql } from 'gatsby';

export const query = graphql`
  fragment ListedAuthor2Fragment on Author2 {
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
